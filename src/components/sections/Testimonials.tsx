import { Star, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Winnipeg, MB",
    quote:
      "Fortify got rid of our mouse problem fast and sealed the entry points so they couldn't come back. Professional, friendly, and great value. Highly recommend!",
  },
  {
    name: "James T.",
    location: "Brandon, MB",
    quote:
      "We use Fortify for our restaurant's preventative program. They're reliable, discreet, and keep us fully compliant. Their team genuinely cares about doing it right.",
  },
  {
    name: "Linda K.",
    location: "Steinbach, MB",
    quote:
      "Booked a wasp nest removal and they came out the same week. Safe, quick, and the technician was so courteous. Worth every penny for the peace of mind.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50/70 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by homes & businesses across Manitoba"
          description="Don't just take our word for it — here's what our customers have to say."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 90}
              className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-card"
            >
              <Quote className="h-8 w-8 text-fort-green-200" />
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-fort-navy text-sm font-bold text-white">
                  {t.name.charAt(0)}
                </span>
                <div className="leading-tight">
                  <p className="font-bold text-fort-navy">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
