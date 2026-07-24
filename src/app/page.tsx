import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ServicesPreview from "@/components/sections/ServicesPreview";
import AboutPreview from "@/components/sections/AboutPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Testimonials from "@/components/sections/Testimonials";
import BlogMarquee from "@/components/sections/BlogMarquee";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <AboutPreview />
      <WhyChooseUs />
      <Process />
      <ServiceAreas />
      <Testimonials />
      <BlogMarquee />
      <FAQ />
      <CTASection />
    </>
  );
}
