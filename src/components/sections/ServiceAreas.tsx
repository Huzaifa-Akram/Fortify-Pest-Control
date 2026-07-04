import { MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { serviceAreas, site } from "@/lib/site";

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Service Areas"
            title="Proudly serving Manitoba"
            description="Locally owned and operated, we provide fast and reliable pest control across the region — and the surrounding communities too."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              Check Your Area
            </Button>
            <Button href={site.phoneHref} variant="outline" size="lg">
              <Phone className="h-5 w-5" />
              {site.phone}
            </Button>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {serviceAreas.map((area, i) => (
            <Reveal
              key={area}
              delay={i * 70}
              className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 px-5 py-4 transition-colors hover:border-fort-green-200 hover:bg-fort-green-50/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-fort-green-600 shadow-card transition-colors group-hover:bg-fort-green group-hover:text-white">
                <MapPin className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="font-bold text-fort-navy">{area}</p>
                <p className="text-xs text-slate-500">Manitoba</p>
              </div>
            </Reveal>
          ))}
          <div className="col-span-2 rounded-2xl border border-dashed border-fort-green-300 bg-fort-green-50/40 px-5 py-4 text-center text-sm font-medium text-fort-green-800">
            + Surrounding communities throughout Manitoba
          </div>
        </div>
      </Container>
    </section>
  );
}
