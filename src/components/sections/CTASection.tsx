import { Phone, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

export default function CTASection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-fort-green px-7 py-14 text-center shadow-soft sm:px-12">
          <div className="absolute inset-0 bg-grid opacity-[0.12]" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-fort-navy/20 blur-2xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Ready to fortify your property against pests?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
              Get your free, no-obligation quote today. Fast, reliable, and
              backed by our 100% satisfaction guarantee.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" variant="white" size="lg">
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                href={site.phoneHref}
                variant="navy"
                size="lg"
                className="bg-fort-navy/90"
              >
                <Phone className="h-5 w-5" />
                {site.phone}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
