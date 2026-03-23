import type { Metadata } from "next";
import CareersClient from "./careersClient";

export const metadata: Metadata = {
  title: "Careers at National Engineers | Fabrication Jobs",
  description:
    "Join National Engineers for careers in industrial fabrication, welding, engineering and manufacturing with opportunities in Surat and Gujarat.",
  keywords: [
    "engineering jobs in fabrication industry",
    "industrial fabrication careers",
    "manufacturing company jobs india",
    "welding fabrication jobs",
    "mechanical engineering vacancies",
  ],
  alternates: {
    canonical: "https://nationalengrs.com/careers",
  },
};
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

export default function CareersPage() {
  const schemas = [careersPageSchema, breadcrumbSchema, careerAreasSchema];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <CareersClient />
    </>
  )
}
