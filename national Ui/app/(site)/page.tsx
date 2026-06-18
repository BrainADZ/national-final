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

const homeFaqs = [
  {
    question: "What kind of industrial equipment do you manufacture?",
    answer:
      "We manufacture industrial equipment such as pressure vessels, storage tanks, ducting systems, structural steel components, heavy fabrication parts, and custom industrial equipment for different industries.",
  },
  {
    question: "Are you an industrial equipment manufacturer in India?",
    answer:
      "Yes, National Engineers & Steel Fabricators is an industrial equipment manufacturer in India, providing fabricated equipment and custom engineering solutions for industrial applications.",
  },
  {
    question: "Do you provide custom industrial equipment manufacturing?",
    answer:
      "Yes, we provide custom industrial equipment manufacturing based on client drawings, technical specifications, material requirements, site conditions, and application needs.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve chemical, pharmaceutical, food processing, textile, power, infrastructure, engineering, manufacturing, and other industries that need reliable industrial fabrication and equipment manufacturing.",
  },
  {
    question: "Do you offer industrial fabrication services?",
    answer:
      "Yes, we offer industrial fabrication services including steel fabrication, heavy fabrication, structural fabrication, ducting fabrication, tank fabrication, and custom fabrication work.",
  },
  {
    question: "Do you manufacture pressure vessels and storage tanks?",
    answer:
      "Yes, we manufacture pressure vessels, storage tanks, air receiver tanks, and other fabricated industrial equipment as per required design, capacity, material grade, and application.",
  },
  {
    question: "What materials do you use for fabrication work?",
    answer:
      "We work with mild steel, stainless steel, carbon steel, structural steel, and other industrial-grade materials depending on strength, durability, corrosion resistance, and project requirements.",
  },
  {
    question: "Can you manufacture equipment as per client drawings?",
    answer:
      "Yes, we can manufacture industrial equipment and fabricated components as per client drawings, approved designs, technical specifications, and custom project requirements.",
  },
  {
    question: "How do you maintain quality in industrial equipment manufacturing?",
    answer:
      "We follow proper material selection, skilled welding, dimensional checks, fabrication inspection, finishing checks, and client-approved specifications to ensure quality and reliability.",
  },
  {
    question: "Do you provide heavy fabrication solutions?",
    answer:
      "Yes, we provide heavy fabrication solutions for industrial structures, machinery components, tanks, pressure vessels, platforms, ducting, and custom-engineered fabrication projects.",
  },
  {
    question: "What is the project delivery time for custom equipment?",
    answer:
      "Delivery time depends on project size, design complexity, material availability, fabrication scope, inspection requirements, and quantity. We share the timeline after reviewing the complete requirement.",
  },
  {
    question: "Why choose National Engineers & Steel Fabricators?",
    answer:
      "National Engineers & Steel Fabricators provides custom industrial equipment, steel fabrication, heavy fabrication, and reliable engineering solutions with a focus on quality, durability, and project-specific requirements.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": homeFaqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
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
        <FaqSection faqs={homeFaqs} />
      </main>
    </>
  );
}
