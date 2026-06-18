import type { Metadata } from "next";
import ProductsClient from "./productClient";
import { buildMetadata } from "@/lib/seo";
import FaqSection from "@/sections/Accordian";

const productCategoryItems = [
  {
    name: "Pressure Vessels & Storage",
    url: "https://nationalengrs.com/products/pressure-vessels-and-storage",
  },
  {
    name: "Material Handling & Storage",
    url: "https://nationalengrs.com/products/material-handling-and-storage",
  },
  {
    name: "Process Equipment & Heat Transfer",
    url: "https://nationalengrs.com/products/process-equipment-and-heat-transfer",
  },
  {
    name: "Pollution Control & Gas Handling",
    url: "https://nationalengrs.com/products/pollution-control-and-gas-handling",
  },
  {
    name: "Piping & Pipeline Systems",
    url: "https://nationalengrs.com/products/piping-and-pipeline-systems",
  },
  {
    name: "Fabrication Components & Structural",
    url: "https://nationalengrs.com/products/fabrication-components-and-structural",
  },
  {
    name: "HVAC & Industrial Ducting",
    url: "https://nationalengrs.com/products/hvac-and-industrial-ducting",
  },
  {
    name: "Custom Manufacturing",
    url: "https://nationalengrs.com/products/custom-manufacturing",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Process Equipment Manufacturer India | National Engineers",
  description:
    "Explore pressure vessels, storage tanks, process equipment, pipeline systems, HVAC ducting, pollution control equipment, and custom fabricated industrial products by National Engineers.",
  path: "/products",
  image: "/product/7.jpg",
  keywords: [
    "industrial process equipment manufacturer",
    "pressure vessel fabrication gujarat",
    "storage tank fabrication surat",
    "air receiver tank manufacturer",
    "heat exchanger fabrication",
    "chemical plant equipment fabrication",
    "custom fabricated equipment",
    "industrial tank manufacturer india",
  ],
});

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://nationalengrs.com/products#collectionpage",
  url: "https://nationalengrs.com/products",
  name: "Industrial Process Equipment Manufacturer in India | National Engineers",
  headline: "Industrial Process Equipment Manufacturer in India",
  description:
    "Explore industrial product categories manufactured by National Engineers & Steel Fabricators including pressure vessels, storage tanks, process equipment, pipeline systems, HVAC ducting, pollution control equipment, structural fabrication, and custom manufacturing.",
  isPartOf: {
    "@id": "https://nationalengrs.com/#website",
  },
  about: {
    "@id": "https://nationalengrs.com/#organization",
  },
  publisher: {
    "@id": "https://nationalengrs.com/#organization",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://nationalengrs.com/products#itemlist",
  url: "https://nationalengrs.com/products",
  name: "Industrial Product Categories by National Engineers & Steel Fabricators",
  numberOfItems: productCategoryItems.length,
  itemListElement: productCategoryItems.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    url: item.url,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://nationalengrs.com/products#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://nationalengrs.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Products",
      item: "https://nationalengrs.com/products",
    },
  ],
};

const productFaqs = [
  {
    question: "What products does National Engineers manufacture?",
    answer:
      "National Engineers manufactures pressure vessels, storage tanks, air receiver tanks, nitrogen buffer tanks, blowdown tanks, filter vessels, pig launchers, AHU ducts, ducting systems, process equipment, and custom fabricated equipment.",
  },
  {
    question: "Are your products custom-made as per client requirements?",
    answer:
      "Yes, most industrial products are custom-made as per client drawings, specifications, MOC, thickness, pressure rating, dimensions, and application requirements.",
  },
  {
    question: "Do you manufacture pressure vessels and storage tanks?",
    answer:
      "Yes, National Engineers & Steel Fabricators manufactures pressure vessels, storage tanks, air receiver tanks, nitrogen buffer tanks, water holding vessels, and other industrial tanks for different applications.",
  },
  {
    question: "What materials are used in your products?",
    answer:
      "We work with stainless steel, mild steel, carbon steel, alloy steel, SA 516, IS 2062, SS 304, SS 304L, and other industrial-grade materials based on project requirements.",
  },
  {
    question: "Do you provide industrial process equipment in India?",
    answer:
      "Yes, National Engineers works as an industrial process equipment manufacturer in India, offering fabricated equipment for pressure, storage, pipeline, HVAC, material handling, and process applications.",
  },
  {
    question: "Can you manufacture products from technical drawings?",
    answer:
      "Yes, we manufacture custom fabricated equipment as per client drawings, approved specifications, site requirements, capacity, pressure rating, and operational use.",
  },
  {
    question: "Do you manufacture pipeline and piping equipment?",
    answer:
      "Yes, we manufacture pig launchers, pig receivers, pipeline spools, headers, manifolds, compressor suction pipes, discharge ducting, and piping supports.",
  },
  {
    question: "Do you provide HVAC and industrial ducting products?",
    answer:
      "Yes, we provide AHU ducts, industrial ducting systems, transitions, reducers, elbows, insulated duct casing, and custom duct fabrication for ventilation and industrial airflow systems.",
  },
  {
    question: "Which industries use your fabricated products?",
    answer:
      "Our products are used in chemical plants, steel plants, manufacturing units, power plants, processing industries, HVAC systems, pipeline projects, and industrial infrastructure.",
  },
  {
    question: "How can I enquire about a product?",
    answer:
      "You can share your product requirement, drawing, dimensions, material grade, pressure rating, quantity, and application details. Our team will review the requirement and guide you with the suitable fabrication solution.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: productFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const schemas = [collectionPageSchema, itemListSchema, breadcrumbSchema, faqSchema];

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas),
        }}
      />
      <ProductsClient />
      <FaqSection faqs={productFaqs} />
    </>
  );
}
