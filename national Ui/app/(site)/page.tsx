import type { Metadata } from "next";

import AboutSection from "@/sections/about";
import FaqSection from "@/sections/Accordian";
import BrandLogosCarousel from "@/sections/brands";
import CompetitiveAdvantageSection from "@/sections/CompetitiveAdvantageSection";
import StatsSection from "@/sections/counters";
import HeroVideoSection from "@/sections/heroVideoSlider";
import HowWeWorkSection from "@/sections/HowWeWorkSection";
import IndustriesSection from "@/sections/IndustriesSection";
import MdDeskSection from "@/sections/MdDeskSection";
import ProductsSection from "@/sections/ProductsSection";
import TestimonialsSection from "@/sections/Testimonial";

export const metadata: Metadata = {
  title: "National Engineering | Industrial Solutions & Manufacturing",
  description:
    "National Engineering provides high-quality industrial engineering solutions, manufacturing services, and customized products for multiple industries across India.",
  keywords: [
    "National Engineering",
    "industrial engineering company",
    "manufacturing company india",
    "engineering solutions",
    "industrial products supplier",
  ],
  alternates: {
    canonical: "https://www.nationalengrs.com/",
  },
  openGraph: {
    title: "National Engineering | Industrial Solutions",
    description:
      "Trusted industrial engineering & manufacturing partner for quality-driven solutions.",
    url: "https://www.nationalengrs.com/",
    siteName: "National Engineering",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <HeroVideoSection />
      <BrandLogosCarousel />
      <AboutSection />
      <StatsSection />
      <ProductsSection />
      <IndustriesSection />
      <MdDeskSection />
      <CompetitiveAdvantageSection />
      <HowWeWorkSection />
      <TestimonialsSection />
      <FaqSection />
    </main>
  );
}
