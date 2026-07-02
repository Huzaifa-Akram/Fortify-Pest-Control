import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/sections/CTASection";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pest Control Services",
  description:
    "Explore Fortify Pest Control's full range of services — bed bug, cockroach, rodent, ant, spider, wasp, hornet, pigeon, maple bug, bat and squirrel control across Southern Manitoba.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        title="Pest control services for every situation"
        subtitle="From bed bugs to bats — safe, effective, and eco-friendly solutions for homes and businesses across Southern Manitoba, all backed by our 100% satisfaction guarantee."
      />

      <section className="bg-slate-50/70 py-16 sm:py-20">
        <Container>
          {/* Quick-jump navigation */}
          <Reveal className="flex flex-wrap justify-center gap-2">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold text-fort-navy transition-colors duration-200 hover:border-fort-green hover:bg-fort-green-50 hover:text-fort-green-700"
              >
                {service.title.replace(" Control", "")}
              </a>
            ))}
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal
                  key={service.slug}
                  id={service.slug}
                  delay={(i % 2) * 80}
                  className="group flex scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card transition-all duration-300 hover:border-fort-green-200 hover:shadow-soft"
                >
                  <div className="relative aspect-16/9 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-fort-navy/75 via-fort-navy/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center gap-3.5 p-5 sm:p-6">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/95 text-fort-green-600 shadow-card backdrop-blur-sm">
                        <Icon className="h-5.5 w-5.5" />
                      </span>
                      <h2 className="text-xl font-bold text-white sm:text-2xl">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                      {service.description}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-fort-green-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-100 pt-5">
                      <Button href="/contact">
                        Request this service
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                      <a
                        href={site.phoneHref}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-fort-navy transition-colors hover:text-fort-green-700"
                      >
                        <Phone className="h-4 w-4" />
                        {site.phone}
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-14 rounded-3xl border border-slate-100 bg-white px-7 py-9 text-center shadow-card">
            <p className="text-xl font-bold text-fort-navy">
              Not sure which service you need?
            </p>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Book a free inspection and we&apos;ll identify the problem and
              recommend the right plan for your property.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
