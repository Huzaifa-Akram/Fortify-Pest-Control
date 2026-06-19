import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { whyChooseUs } from "@/lib/site";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-fort-navy py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-fort-green/15 blur-3xl" />
      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Why Choose Fortify"
          title="The dependable choice for Manitoba"
          description="We combine experience, certified expertise, and genuine care to keep your property protected."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-x-8 gap-y-4 sm:grid-cols-2">
          {whyChooseUs.map((item, i) => (
            <Reveal
              key={item}
              delay={(i % 2) * 70}
              className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.04] px-4 py-3.5 transition-colors hover:bg-white/[0.08]"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-fort-green-300" />
              <span className="text-sm font-medium text-white/90">{item}</span>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/contact" size="lg">
            Request a Free Inspection
          </Button>
        </div>
      </Container>
    </section>
  );
}
