"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, MessageCircleQuestion, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { faqs } from "@/lib/site";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section
      id="faq"
      className="relative scroll-mt-24 overflow-hidden bg-slate-50/70 py-20 sm:py-24"
    >
      {/* Soft decorative accents */}
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-fort-green/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-15%] left-[-10%] h-72 w-72 rounded-full bg-fort-navy/[0.06] blur-3xl" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions? We've got answers"
            description="Everything you need to know before booking your first treatment. Still not sure? We're only a call away."
          />
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 70}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-white transition-all duration-300",
                    isOpen
                      ? "border-fort-green-200 shadow-card"
                      : "border-slate-200/70 hover:border-fort-green-200/70",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="flex-1 text-base font-bold text-fort-navy sm:text-lg">
                      {f.q}
                    </span>
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-out",
                        isOpen
                          ? "rotate-45 bg-fort-green text-white"
                          : "bg-fort-green-50 text-fort-green-600",
                      )}
                    >
                      <Plus className="h-5 w-5" />
                    </span>
                  </button>

                  <div
                    id={`faq-panel-${i}`}
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6 sm:text-[15px]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Still have questions */}
        <Reveal delay={120} className="mx-auto mt-10 max-w-3xl">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-fort-green-100 bg-fort-green-50/50 px-6 py-5 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-fort-green-600 shadow-card">
                <MessageCircleQuestion className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold text-fort-navy">
                Still have a question? Our team is always happy to help.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-bold text-fort-green-700 transition-colors hover:text-fort-green-800"
            >
              Contact us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Container>

      {/* FAQ structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </section>
  );
}
