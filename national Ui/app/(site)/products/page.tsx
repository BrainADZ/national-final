import type { Metadata } from "next";
import ProductsClient from "./productClient";
import { buildMetadata } from "@/lib/seo";

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

const schemas = [collectionPageSchema, itemListSchema, breadcrumbSchema];

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
    </>
  );
}
