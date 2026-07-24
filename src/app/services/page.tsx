import { Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/sections/CTASection";
import ServiceSearch from "@/components/ServiceSearch";
import JsonLd from "@/components/JsonLd";
import { services, site } from "@/lib/site";
import { pageMetadata, breadcrumbJsonLd, servicesJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pest Control Services",
  description:
    "Explore Fortify Pest Control's full range of services — bed bug, cockroach, rodent, ant, spider, wasp, hornet, pigeon, maple bug, bat and squirrel control across Manitoba.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        crumb="Services"
        title="Pest control services for every situation"
        subtitle="From bed bugs to bats — safe, effective, and eco-friendly solutions for homes and businesses across Manitoba, all backed by our 100% satisfaction guarantee."
        image="/Services-hero.png"
        imagePosition="object-center"
      />

      <section className="bg-slate-50/70 py-16 sm:py-20">
        <Container>
          <ServiceSearch />

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
