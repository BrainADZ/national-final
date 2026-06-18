import type { Metadata } from "next";
import CareersClient from "./careersClient";
import { buildMetadata } from "@/lib/seo";
import FaqSection from "@/sections/Accordian";

export const metadata: Metadata = buildMetadata({
  title: "Careers at National Engineers | Fabrication Jobs",
  description:
    "Join National Engineers for careers in industrial fabrication, welding, engineering and manufacturing with opportunities in Surat and Gujarat.",
  path: "/careers",
  image: "/careerBanner.jpg",
  keywords: [
    "engineering jobs in fabrication industry",
    "industrial fabrication careers",
    "manufacturing company jobs india",
    "welding fabrication jobs",
    "mechanical engineering vacancies",
  ],
});
const careersPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://nationalengrs.com/careers#webpage",
  "url": "https://nationalengrs.com/careers",
  "name": "Careers | National Engineers & Steel Fabricators",
  "headline": "Careers at National Engineers & Steel Fabricators",
  "description":
    "Explore career opportunities at National Engineers & Steel Fabricators across mechanical engineering, fabrication, welding, quality control, production, and project coordination.",
  "inLanguage": "en",
  "dateModified": "2026-03-23",
  "isPartOf": {
    "@id": "https://nationalengrs.com/#website",
  },
  "about": {
    "@id": "https://nationalengrs.com/#organization",
  },
  "publisher": {
    "@id": "https://nationalengrs.com/#organization",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://nationalengrs.com/careers#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://nationalengrs.com/",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Careers",
      "item": "https://nationalengrs.com/careers",
    },
  ],
};

const careerAreasSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://nationalengrs.com/careers#itemlist",
  "url": "https://nationalengrs.com/careers",
  "name": "Career Areas at National Engineers & Steel Fabricators",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Mechanical Engineering",
      "url": "https://nationalengrs.com/careers",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Fabrication and Welding",
      "url": "https://nationalengrs.com/careers",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Quality Control",
      "url": "https://nationalengrs.com/careers",
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Production Supervision",
      "url": "https://nationalengrs.com/careers",
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Project Coordination",
      "url": "https://nationalengrs.com/careers",
    },
  ],
};

const careerFaqs = [
  {
    question: "What career opportunities are available at National Engineers?",
    answer:
      "National Engineers offers career opportunities in mechanical engineering, fabrication, welding, production supervision, quality control, project coordination, and shop-floor operations.",
  },
  {
    question: "Do you offer engineering jobs in the fabrication industry?",
    answer:
      "Yes, we offer engineering jobs in the fabrication industry for candidates interested in industrial manufacturing, pressure vessels, storage tanks, ducting systems, and custom fabrication work.",
  },
  {
    question: "Can freshers apply for fabrication careers?",
    answer:
      "Yes, freshers can apply for suitable entry-level roles based on their technical knowledge, learning attitude, and interest in industrial fabrication and manufacturing.",
  },
  {
    question: "Do you hire for welding and shop-floor jobs?",
    answer:
      "Yes, we hire for welding fabrication jobs, shop-floor technician roles, production support, fabrication fitting, and manufacturing-related positions.",
  },
  {
    question: "What documents are required to apply?",
    answer:
      "Candidates should submit an updated resume with contact details, current location, total experience, notice period, and preferred job role.",
  },
  {
    question: "Do you provide manufacturing company jobs in India?",
    answer:
      "Yes, National Engineers provides manufacturing company jobs in India for skilled professionals, engineers, technicians, welders, supervisors, and quality inspection staff.",
  },
  {
    question: "What skills are preferred for fabrication jobs?",
    answer:
      "Preferred skills include drawing understanding, welding knowledge, fabrication experience, measurement accuracy, safety awareness, teamwork, and practical shop-floor execution.",
  },
  {
    question: "How can I apply for a job at National Engineers?",
    answer:
      "You can apply through the Careers page by selecting a role or submitting a general application with your resume and basic professional details.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: careerFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function CareersPage() {
  const schemas = [careersPageSchema, breadcrumbSchema, careerAreasSchema, faqSchema];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <CareersClient />
      <FaqSection faqs={careerFaqs} />
    </>
  )
}
