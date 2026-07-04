import { ShieldCheck, Leaf, Award, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const pillars = [
  {
    icon: Award,
    title: "Decade+ Experience",
    text: "Seasoned, certified technicians on every job.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    text: "Methods that protect your family, pets & the planet.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Work",
    text: "Backed by our 100% satisfaction guarantee.",
  },
  {
    icon: Users,
    title: "Locally Owned",
    text: "Proudly operated right here in Manitoba.",
  },
];

export default function AboutPreview() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-fort-green-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-fort-green-700">
            <span className="h-1.5 w-1.5 rounded-full bg-fort-green" />
            About Fortify
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight text-fort-navy sm:text-4xl">
            Professional protection, built on integrity
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            At Fortify Pest Control Inc., we bring over a decade of industry
            experience to every job. Our professionally trained and certified
            technicians are committed to reliable, effective, and
            environmentally responsible pest control.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We use eco-friendly methods whenever possible to protect your
            family, pets, employees, and the environment — while delivering
            long-lasting results. Our mission is simple: build a{" "}
            <span className="font-semibold text-fort-navy">&ldquo;fort&rdquo;</span>{" "}
            around your property with professionalism and exceptional service.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="navy" size="lg">
              Contact Us
            </Button>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 90}
              className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4 sm:p-6 transition-colors hover:border-fort-green-200 hover:bg-fort-green-50/40"
            >
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-white text-fort-green-600 shadow-card">
                <p.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
              <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-bold text-fort-navy leading-tight sm:leading-normal">
                {p.title}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                {p.text}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
