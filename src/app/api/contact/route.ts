import { NextResponse } from "next/server";
import { site } from "@/lib/site";
import { renderContactEmail } from "@/lib/email";

export const runtime = "nodejs";

type Payload = {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
  source?: string;
  /** Honeypot — hidden field real users never see. Bots fill it in. */
  company?: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX = { name: 100, email: 200, phone: 40, message: 4000 };

/**
 * Lightweight in-memory, per-IP rate limiter — no paid service required.
 * Note: state lives per server instance, so on heavily-scaled serverless hosts
 * limits are approximate. That's fine here: it stops a single abuser hammering
 * the form, which is the goal. Swap in a shared store (e.g. Upstash) if needed.
 */
const RATE = { windowMs: 10 * 60 * 1000, max: 5 };
const hits = new Map<string, { count: number; first: number }>();

function clientIp(request: Request): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "local";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  // Opportunistic cleanup so the map can't grow without bound.
  if (hits.size > 5000) {
    for (const [key, value] of hits) {
      if (now - value.first > RATE.windowMs) hits.delete(key);
    }
  }
  const hit = hits.get(ip);
  if (!hit || now - hit.first > RATE.windowMs) {
    hits.set(ip, { count: 1, first: now });
    return false;
  }
  hit.count += 1;
  return hit.count > RATE.max;
}

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: silently accept (so the bot moves on) but send nothing.
  if (data.company && data.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // Block repeat submissions from the same IP.
  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      {
        error: `You've sent several requests already. Please wait a few minutes, or call us at ${site.phone}.`,
      },
      { status: 429 },
    );
  }

  const fullName = data.fullName?.trim();
  const email = data.email?.trim();
  const phone = data.phone?.trim();
  const message = data.message?.trim();

  if (!fullName || !email) {
    return NextResponse.json(
      { error: "Please provide your name and email." },
      { status: 400 },
    );
  }
  if (!emailRe.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }
  if (
    fullName.length > MAX.name ||
    email.length > MAX.email ||
    (phone && phone.length > MAX.phone) ||
    (message && message.length > MAX.message)
  ) {
    return NextResponse.json(
      { error: "That submission looks too long. Please shorten it and try again." },
      { status: 400 },
    );
  }

  const sourceLabel =
    data.source === "quote" ? "Quote request" : "Contact message";

  const { html, text } = renderContactEmail({
    name: fullName,
    email,
    phone,
    message,
    sourceLabel,
  });

  const apiKey = process.env.RESEND_API_KEY;

  // If an email provider is configured, deliver the request. Otherwise log it
  // server-side so the form still works in development/preview environments.
  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from:
            process.env.CONTACT_FROM_EMAIL ||
            "Fortify Pest Control <noreply@fortifypest.ca>",
          to: [site.email],
          reply_to: email,
          subject: `${sourceLabel} from ${fullName}`,
          html,
          text,
        }),
      });
      if (!res.ok) {
        const body = await res.text();
        console.error("Resend error:", body);
        return NextResponse.json(
          { error: "We couldn't send your request. Please call us instead." },
          { status: 502 },
        );
      }
    } catch (err) {
      console.error("Email send failed:", err);
      return NextResponse.json(
        { error: "We couldn't send your request. Please call us instead." },
        { status: 502 },
      );
    }
  } else {
    console.log("[Fortify contact submission]", {
      fullName,
      email,
      phone,
      message,
    });
  }

  return NextResponse.json({ ok: true });
}
