import { Phone, ShieldCheck, Leaf, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HeroVisual from "@/components/sections/HeroVisual";
import { site } from "@/lib/site";

const chips = [
  { icon: ShieldCheck, label: "Licensed & Certified" },
  { icon: Leaf, label: "Eco-Friendly Methods" },
  { icon: Star, label: "100% Satisfaction" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-fort-navy text-white">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-[0.15]" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-fort-green/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-fort-navy-500/40 blur-3xl" />

      <Container className="relative grid gap-8 py-10 sm:py-12 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-16">
        {/* Copy */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-fort-green-200">
            <span className="h-1.5 w-1.5 rounded-full bg-fort-green" />
            Trusted Pest Control in Manitoba
          </span>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            We build a{" "}
            <span className="relative whitespace-nowrap text-fort-green-300">
              fort
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                className="absolute -bottom-2 left-0 w-full text-fort-green/60"
              >
                <path
                  d="M2 9C50 3 150 3 198 9"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            around your home & business.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fort-navy-100">
            Safe, effective, and environmentally responsible pest control from
            certified local technicians. Over 8 years protecting families and
            businesses across Southern Manitoba.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" size="lg">
              Get Your Free Quote
            </Button>
            <Button href={site.phoneHref} variant="white" size="lg">
              <Phone className="h-5 w-5" />
              {site.phone}
            </Button>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {chips.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-2 text-sm font-semibold text-fort-navy-100"
              >
                <c.icon className="h-5 w-5 text-fort-green-300" />
                {c.label}
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <HeroVisual />
      </Container>

      {/* Bottom wave */}
      <div className="relative">
        <svg
          viewBox="0 0 1440 80"
          className="block w-full text-white"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0 80h1440V32c-240 40-480 48-720 24S240 0 0 24z"
          />
        </svg>
      </div>
    </section>
  );
}
