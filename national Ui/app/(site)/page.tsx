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
  title: "Best Steel Fabrication Company in India | National Engineers",
  description:
    "NESF provides industrial steel fabrication, pressure vessels, storage tanks and process equipment manufacturing services across Gujarat and PAN India.",
  keywords: [
    "industrial steel fabrication company in india",
    "process equipment manufacturer in india",
    "custom steel fabrication services",
    "pressure vessel manufacturer",
    "industrial storage tank manufacturer",
    "heavy fabrication company india",
    "engineering fabrication solutions",
    "industrial equipment manufacturer india",
    "heavy fabrication company gujarat",
  ],
  alternates: {
    canonical: "https://nationalengrs.com",
  },
  openGraph: {
    title: "Best Steel Fabrication Company in India | National Engineers",
    description:
      "NESF provides industrial steel fabrication, pressure vessels, storage tanks and process equipment manufacturing services across Gujarat and PAN India.",
    url: "https://nationalengrs.com",
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
