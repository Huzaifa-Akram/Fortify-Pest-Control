import type { Metadata } from "next";
import { ShieldCheck, Leaf, HeartHandshake, Target, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/PageHero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTASection from "@/components/sections/CTASection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Fortify Pest Control Inc. — over 8 years of certified, eco-friendly pest control experience, locally owned and operated in Manitoba.",
};

const values = [
  {
    icon: Leaf,
    title: "Eco-Responsible",
    text: "We use eco-friendly methods whenever possible to protect your family, pets, employees, and the environment.",
  },
  {
    icon: ShieldCheck,
    title: "Protection First",
    text: "Our mission is to build a fort around your property — preventing and eliminating pest problems for good.",
  },
  {
    icon: HeartHandshake,
    title: "Integrity & Service",
    text: "We work with professionalism, honesty, and exceptional customer service on every single job.",
  },
  {
    icon: Target,
    title: "Lasting Results",
    text: "Certified technicians and proven methods deliver protection that's built to last, not just a quick fix.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        title="Building a fort around what matters most"
        subtitle="Professionally trained technicians, eco-friendly methods, and a genuine commitment to protecting your home and business."
      />

      {/* Story */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-fort-green-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-fort-green-700">
              <span className="h-1.5 w-1.5 rounded-full bg-fort-green" />
              Our Story
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-fort-navy sm:text-4xl">
              Over 8 years of dependable pest protection
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                At Fortify Pest Control Inc., we bring over 8 years of industry
                experience to every job. Our professionally trained and
                certified technicians are committed to providing reliable,
                effective, and environmentally responsible pest control
                solutions.
              </p>
              <p>
                We use eco-friendly methods whenever possible to protect your
                family, pets, employees, and the environment while delivering
                long-lasting results. Our mission is to build a &ldquo;fort&rdquo;
                around your home, business, or property by preventing and
                eliminating pest problems with professionalism, integrity, and
                exceptional customer service.
              </p>
              <p>
                We stand behind the quality of our work and proudly offer a{" "}
                <span className="font-semibold text-fort-navy">
                  100% satisfaction guarantee
                </span>{" "}
                on our services. If pests return during the warranty period of a
                covered service, we will work with you to address the issue and
                ensure your property remains protected.
              </p>
            </div>
          </Reveal>

          {/* Guarantee + mission card */}
          <Reveal delay={120} className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-8 shadow-card">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-fort-green text-white shadow-soft">
                <ShieldCheck className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-fort-navy">
                Our Mission
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To build a fort around your home and business — one pest-free
                property at a time — with professionalism, integrity, and care.
              </p>
              <ul className="mt-6 space-y-3 border-t border-slate-200 pt-6">
                {[
                  "Professionally trained & certified",
                  "Residential & commercial expertise",
                  "Locally owned & operated in Manitoba",
                  "100% satisfaction guarantee",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-fort-green-600" />
                    <span className="font-medium text-fort-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-slate-50/70 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-fort-green-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-fort-green-700">
              <span className="h-1.5 w-1.5 rounded-full bg-fort-green" />
              Our Values
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-fort-navy sm:text-4xl">
              What drives every job we do
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 80}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-fort-green-50 text-fort-green-600">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-bold text-fort-navy">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {v.text}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-fort-green-200 bg-fort-green-50/50 px-7 py-8 text-center">
            <p className="text-balance text-lg font-semibold text-fort-navy sm:text-xl">
              &ldquo;{site.slogan}&rdquo;
            </p>
          </div>
        </Container>
      </section>

      <WhyChooseUs />
      <CTASection />
    </>
  );
}
