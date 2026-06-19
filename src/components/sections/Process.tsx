import { PhoneCall, Search, SprayCan, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    icon: PhoneCall,
    title: "Get in Touch",
    text: "Call or request a free quote online. We'll discuss your pest concerns and book a visit.",
  },
  {
    icon: Search,
    title: "Inspection",
    text: "A certified technician inspects your property to identify pests, entry points, and risk factors.",
  },
  {
    icon: SprayCan,
    title: "Treatment",
    text: "We apply a safe, targeted treatment plan using eco-friendly methods wherever possible.",
  },
  {
    icon: ShieldCheck,
    title: "Prevention",
    text: "We exclude entry points and offer ongoing protection — all backed by our guarantee.",
  },
];

export default function Process() {
  return (
    <section className="bg-slate-50/70 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="A simple, proven path to a pest-free property"
          description="Four straightforward steps from your first call to lasting protection."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 90} className="relative">
              <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-fort-green-50 text-fort-green-600">
                    <step.icon className="h-6 w-6" />
                  </span>
                  <span className="text-4xl font-extrabold text-slate-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-fort-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
