"use client";

import { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

export default function HeroQuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="hero-form-card rounded-2xl bg-white p-8 text-center sm:p-10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-fort-green/10">
          <CheckCircle2 className="h-7 w-7 text-fort-green" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-fort-navy">
          We&apos;ll be in touch!
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          Expect a response within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-fort-green hover:text-fort-green-700"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="hero-form-card overflow-hidden rounded-2xl bg-white">
      {/* Green top edge */}
      <div className="h-[3px] bg-gradient-to-r from-fort-green-400 via-fort-green to-fort-green-700" />

      <div className="px-6 pb-7 pt-6 sm:px-7">
        {/* Title */}
        <h3 className="text-[1.35rem] font-extrabold leading-tight text-fort-navy">
          Request a Free Quote
        </h3>
        <p className="mt-1 text-[13px] text-slate-400">
          No obligation — we&apos;ll respond within 24 hours
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-5 space-y-[14px]"
          noValidate
        >
          {/* Anti-spam honeypot — hidden from people, bots that fill it are dropped */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
          >
            <label htmlFor="company-hero">Company</label>
            <input
              id="company-hero"
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <input type="hidden" name="source" value="quote" />

          {/* Name + Phone row */}
          <div className="grid gap-[14px] sm:grid-cols-2">
            <div>
              <label
                htmlFor="heroName"
                className="mb-[5px] block text-[12.5px] font-semibold text-fort-navy/70"
              >
                Name <span className="text-fort-green">*</span>
              </label>
              <input
                id="heroName"
                name="fullName"
                required
                placeholder="Jane Doe"
                className={cn(
                  "hero-form-input w-full rounded-[10px] border-0 bg-slate-50 px-3.5 py-[11px]",
                  "text-sm text-fort-navy placeholder:text-slate-350",
                  "outline-none ring-1 ring-slate-200/80",
                  "transition-shadow duration-150",
                  "focus:bg-white focus:ring-2 focus:ring-fort-green/40"
                )}
              />
            </div>
            <div>
              <label
                htmlFor="heroPhone"
                className="mb-[5px] block text-[12.5px] font-semibold text-fort-navy/70"
              >
                Phone <span className="text-fort-green">*</span>
              </label>
              <input
                id="heroPhone"
                name="phone"
                type="tel"
                required
                placeholder="431-000-0000"
                className={cn(
                  "hero-form-input w-full rounded-[10px] border-0 bg-slate-50 px-3.5 py-[11px]",
                  "text-sm text-fort-navy placeholder:text-slate-350",
                  "outline-none ring-1 ring-slate-200/80",
                  "transition-shadow duration-150",
                  "focus:bg-white focus:ring-2 focus:ring-fort-green/40"
                )}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="heroEmail"
              className="mb-[5px] block text-[12.5px] font-semibold text-fort-navy/70"
            >
              Email <span className="text-fort-green">*</span>
            </label>
            <input
              id="heroEmail"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className={cn(
                "hero-form-input w-full rounded-[10px] border-0 bg-slate-50 px-3.5 py-[11px]",
                "text-sm text-fort-navy placeholder:text-slate-350",
                "outline-none ring-1 ring-slate-200/80",
                "transition-shadow duration-150",
                "focus:bg-white focus:ring-2 focus:ring-fort-green/40"
              )}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="heroMsg"
              className="mb-[5px] block text-[12.5px] font-semibold text-fort-navy/70"
            >
              Message{" "}
              <span className="font-normal text-slate-300">(optional)</span>
            </label>
            <textarea
              id="heroMsg"
              name="message"
              rows={2}
              placeholder="Describe your pest issue briefly..."
              className={cn(
                "hero-form-input w-full resize-none rounded-[10px] border-0 bg-slate-50 px-3.5 py-[11px]",
                "text-sm text-fort-navy placeholder:text-slate-350",
                "outline-none ring-1 ring-slate-200/80",
                "transition-shadow duration-150",
                "focus:bg-white focus:ring-2 focus:ring-fort-green/40"
              )}
            />
          </div>

          {status === "error" && (
            <div className="flex items-start gap-2 rounded-lg bg-red-50 px-3.5 py-2.5 text-[13px] text-red-600">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          {/* CTA */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className={cn(
              "group relative flex w-full items-center justify-center gap-2",
              "rounded-xl bg-fort-green px-6 py-3.5",
              "text-[15px] font-bold text-white",
              "shadow-[0_4px_16px_-2px_rgba(86,179,81,0.45)]",
              "transition-all duration-200",
              "hover:bg-fort-green-600 hover:shadow-[0_6px_24px_-2px_rgba(86,179,81,0.55)]",
              "active:scale-[0.98]",
              "disabled:pointer-events-none disabled:opacity-60"
            )}
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-[18px] w-[18px] animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Get My Free Quote
                <ArrowRight className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
