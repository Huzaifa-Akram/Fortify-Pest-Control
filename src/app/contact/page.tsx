import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";
import { serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description:
    "Request a free, no-obligation pest control quote from Fortify Pest Control Inc. Call 431-481-7786 or fill out our booking form. Serving Winnipeg and Manitoba.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title="Get your free, no-obligation quote"
        subtitle="Tell us about your pest problem and we'll get back to you quickly with a plan to fortify your property."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-2xl font-extrabold text-fort-navy">
                Request a quote
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Fields marked with <span className="text-fort-green-600">*</span>{" "}
                are required.
              </p>
              <div className="mt-7">
                <BookingForm />
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-5 lg:col-span-5">
            <div className="rounded-3xl bg-fort-navy p-7 text-white shadow-soft">
              <h3 className="text-lg font-bold">Talk to us directly</h3>
              <p className="mt-2 text-sm text-fort-navy-100">
                Prefer to call? We&apos;re happy to help over the phone.
              </p>
              <div className="mt-6 space-y-4">
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-4 rounded-2xl bg-white/[0.06] px-4 py-3.5 transition-colors hover:bg-white/[0.12]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-fort-green text-white">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-fort-green-200">
                      Phone
                    </span>
                    <span className="text-base font-bold">{site.phone}</span>
                  </span>
                </a>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-4 rounded-2xl bg-white/[0.06] px-4 py-3.5 transition-colors hover:bg-white/[0.12]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-fort-green text-white">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-fort-green-200">
                      Email
                    </span>
                    <span className="text-base font-bold">{site.email}</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-7">
              <h3 className="flex items-center gap-2 text-base font-bold text-fort-navy">
                <Clock className="h-5 w-5 text-fort-green-600" />
                Business hours
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {site.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between border-b border-slate-200/70 pb-2.5 last:border-0 last:pb-0"
                  >
                    <span className="font-semibold text-fort-navy">{h.day}</span>
                    <span className="text-slate-600">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-7">
              <h3 className="flex items-center gap-2 text-base font-bold text-fort-navy">
                <MapPin className="h-5 w-5 text-fort-green-600" />
                Service areas
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-fort-navy shadow-card"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-3xl border border-fort-green-200 bg-fort-green-50/50 p-5">
              <ShieldCheck className="h-8 w-8 shrink-0 text-fort-green-600" />
              <p className="text-sm font-semibold text-fort-navy">
                Every service is backed by our 100% satisfaction guarantee.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
