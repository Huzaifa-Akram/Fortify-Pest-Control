"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { services, serviceAreas } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-fort-navy placeholder:text-slate-400 transition-colors focus:border-fort-green focus:outline-none focus:ring-2 focus:ring-fort-green/20";

const labelClass = "mb-1.5 block text-sm font-semibold text-fort-navy";

export default function BookingForm() {
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
        throw new Error(body.error || "Something went wrong. Please try again.");
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
      <div className="flex flex-col items-center rounded-2xl border border-fort-green-200 bg-fort-green-50/60 px-6 py-12 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-fort-green text-white">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-5 text-2xl font-extrabold text-fort-navy">
          Request received!
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600">
          Thanks for reaching out to Fortify Pest Control. Our team will get back
          to you shortly to confirm your free quote.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-fort-green-700 hover:text-fort-green-600"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full name <span className="text-fort-green-600">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            required
            placeholder="Jane Doe"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-fort-green-600">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="431-000-0000"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span className="text-fort-green-600">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="propertyType" className={labelClass}>
            Property type
          </label>
          <select id="propertyType" name="propertyType" className={inputClass} defaultValue="Residential">
            <option>Residential</option>
            <option>Commercial</option>
          </select>
        </div>
        <div>
          <label htmlFor="city" className={labelClass}>
            City / area
          </label>
          <select id="city" name="city" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select your area
            </option>
            {serviceAreas.map((area) => (
              <option key={area}>{area}</option>
            ))}
            <option>Other (Southern Manitoba)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Service needed
        </label>
        <select id="service" name="service" className={inputClass} defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
          <option>Not sure — need an inspection</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your pest problem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Where are you seeing pests, how long has it been going on, etc."
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-fort-green px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-200 hover:bg-fort-green-600 disabled:pointer-events-none disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Request My Free Quote
          </>
        )}
      </button>

      <p className="text-xs text-slate-500">
        By submitting, you agree to be contacted about your request. We respect
        your privacy and never share your information.
      </p>
    </form>
  );
}
