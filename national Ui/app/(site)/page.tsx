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
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Best Steel Fabrication Company in India | National Engineers",
  description:
    "NESF provides industrial steel fabrication, pressure vessels, storage tanks and process equipment manufacturing services across Gujarat and PAN India.",
  path: "/",
  image: "/logo222.png",
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
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://nationalengrs.com/#organization",
  "name": "National Engineers & Steel Fabricators",
  "alternateName": "NESF",
  "url": "https://nationalengrs.com/",
  "logo": "https://nationalengrs.com/logo222.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+919574611152",
    "contactType": "sales",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Surat",
    "addressRegion": "Gujarat",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://x.com/engineers44891",
    "https://www.instagram.com/nationalengrs",
    "https://www.youtube.com/@National_Engineers",
    "https://www.linkedin.com/company/national-engineers-steel-fabricators/",
    "https://in.pinterest.com/nationalengineers/",
    "https://www.tumblr.com/nationalengineersandsteelfabrica"
  ]
};

export default function Home() {
  return (
    <>
      {/* ✅ JSON-LD Schema (Homepage Only) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <main>
        <HeroVideoSection />
        <AboutSection />
        <StatsSection />
        <BrandLogosCarousel />
        <ProductsSection />
        <IndustriesSection />
        <MdDeskSection />
        <CompetitiveAdvantageSection />
        <HowWeWorkSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
    </>
  );
}
