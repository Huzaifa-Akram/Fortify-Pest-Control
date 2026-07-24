import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Payload = {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
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

  const fields: Record<string, string> = {
    Name: fullName,
    Email: email,
    Phone: phone || "—",
    Message: message || "—",
  };

  const rows = Object.entries(fields)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#033562">${k}</td><td style="padding:6px 12px;color:#0f1d2e">${escapeHtml(
          v,
        )}</td></tr>`,
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto">
      <h2 style="color:#033562">New contact message — ${site.name}</h2>
      <table style="border-collapse:collapse;width:100%;background:#f8fafc;border-radius:8px">${rows}</table>
      <p style="color:#64748b;font-size:12px;margin-top:16px">Sent from the fortifypest.ca contact form.</p>
    </div>`;

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
          from: process.env.CONTACT_FROM_EMAIL || "Fortify Website <onboarding@resend.dev>",
          to: [site.email],
          reply_to: email,
          subject: `New contact message from ${fullName}`,
          html,
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
    console.log("[Fortify contact submission]", fields);
  }

  return NextResponse.json({ ok: true });
}
