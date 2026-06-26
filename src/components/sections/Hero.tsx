import { Phone, ShieldCheck, Leaf, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HeroQuoteForm from "@/components/sections/HeroQuoteForm";
import HeroWave from "@/components/sections/HeroWave";
import HeroBackground from "@/components/sections/HeroBackground";
import { site } from "@/lib/site";

const chips = [
  { icon: ShieldCheck, label: "Licensed & Certified" },
  { icon: Leaf, label: "Eco-Friendly Methods" },
  { icon: Star, label: "100% Satisfaction" },
];

export default function Hero() {
  return (
    <section className="relative z-20 bg-fort-navy text-white">
      {/* Background layers — clipped to the hero so only the form overflows below */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Photo slideshow */}
        <HeroBackground />
        {/* Mobile: text spans the full width — darken near the top copy and
            let the photo breathe lower down, rather than a flat heavy tint. */}
        <div className="absolute inset-0 bg-linear-to-b from-fort-navy-900/75 via-fort-navy-900/45 to-fort-navy-900/20 lg:hidden" />
        {/* Desktop: dark on the left where the copy sits, fading toward the photo on the right */}
        <div className="absolute inset-0 hidden bg-linear-to-r from-fort-navy-900/95 via-fort-navy-900/55 to-fort-navy-900/10 lg:block" />
        {/* Seat the foot of the hero in solid navy for a clean divider line */}
        <div className="absolute inset-0 bg-linear-to-t from-fort-navy via-fort-navy/15 to-transparent" />
        {/* Brand depth */}
        <div className="absolute inset-0 bg-grid opacity-[0.08]" />
        <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-fort-green/20 blur-3xl" />
        {/* Animated wave divider into the Stats section */}
        <HeroWave />
      </div>

      <Container className="relative grid gap-10 py-12 sm:py-14 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-16">
        {/* Copy */}
        <div className="animate-fade-up">
          <h1 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            We build a{" "}
            <span className="relative whitespace-nowrap text-fort-green-300">
              fort
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                className="absolute -bottom-2 left-0 w-full text-fort-green/60"
              >
                <path
                  className="hero-underline"
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
            certified local technicians. Over a decade protecting families and
            businesses across Manitoba.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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

        {/* Quote form — dropped so it sits centered on the hero / stats divider.
            Mobile (1 col): negative margin spills it downward with no gap.
            Desktop (2 cols): translate-y drops it across the wave while the
            photo shows above; it lands beside the left-aligned stats below. */}
        <div className="relative z-30 animate-fade-up -mb-40 sm:-mb-48 lg:mb-0 lg:translate-y-90 lg:ml-auto lg:max-w-md lg:self-start [animation-delay:150ms]">
          <HeroQuoteForm />
        </div>
      </Container>
    </section>
  );
}
