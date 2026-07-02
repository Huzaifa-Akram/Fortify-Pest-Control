import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ServiceCard";
import { featuredServices, services } from "@/lib/site";

/* Small illustrated icons for the back of each featured flip card */
const featuredIcons: Record<string, string> = {
  "bed-bug-control": "/services-icons/bed-bug.png",
  "cockroach-control": "/services-icons/cockroach.png",
  "rodent-control": "/services-icons/rat.png",
  "carpenter-ant-control": "/services-icons/ant.png",
  "spider-control": "/services-icons/spider.png",
  "wasp-control": "/services-icons/wasp.png",
};

export default function ServicesPreview() {
  return (
    <section id="services" className="bg-slate-50/70 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Complete pest control, tailored to your property"
          description="From a single nest to a full preventative program, our certified technicians handle it all with safe, proven methods."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 80} className="h-full">
              <ServiceCard
                service={{
                  slug: service.slug,
                  title: service.title,
                  short: service.short,
                  description: service.description,
                  image: service.image,
                }}
                icon={featuredIcons[service.slug]}
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/services" variant="navy" size="lg">
            View All {services.length} Services
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
