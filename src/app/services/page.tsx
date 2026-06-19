import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/sections/CTASection";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pest Control Services",
  description:
    "Explore Fortify Pest Control's full range of residential and commercial services — rodent, ant, cockroach, bed bug, wasp, spider control, inspections and preventative programs.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        title="Pest control services for every situation"
        subtitle="Safe, effective, and eco-friendly solutions for homes and businesses across Southern Manitoba — all backed by our 100% satisfaction guarantee."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal
                  key={service.slug}
                  id={service.slug}
                  delay={(i % 2) * 80}
                  className="group scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition-all duration-300 hover:border-fort-green-200 hover:shadow-soft"
                >
                  <div className="flex items-start gap-5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-fort-green-50 text-fort-green-600 transition-colors duration-300 group-hover:bg-fort-green group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </span>
                    <div>
                      <h2 className="text-xl font-bold text-fort-navy">
                        {service.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {service.description}
                      </p>
                      <Link
                        href="/contact"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-fort-green-700 hover:text-fort-green-600"
                      >
                        <CheckCircle2 className="h-4 w-4" />
                        Request this service
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl bg-slate-50/80 px-7 py-8 text-center">
            <p className="text-lg font-bold text-fort-navy">
              Not sure which service you need?
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Book a free inspection and we&apos;ll identify the problem and
              recommend the right plan.
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Book a Free Inspection
              </Button>
              <Button href={site.phoneHref} variant="outline" size="lg">
                <Phone className="h-5 w-5" />
                {site.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
