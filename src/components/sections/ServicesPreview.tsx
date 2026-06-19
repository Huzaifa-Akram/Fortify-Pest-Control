import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/site";

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
          {services.slice(0, 6).map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/services" variant="navy" size="lg">
            View All Services
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
