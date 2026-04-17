import type { Metadata } from "next";
import ProductsClient from "./productClient";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Process Equipment Manufacturer India | National Engineers",
  description:
    "Explore pressure vessels, storage tanks, air receivers and custom fabricated industrial process equipment by National Engineers serving chemical and industrial sectors.",
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
    "Explore industrial process equipment manufactured by National Engineers & Steel Fabricators including air receivers, nitrogen buffer tanks, blowdown tanks, AHU ducts, pig launchers, storage tanks, and custom fabricated equipment.",
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
  name: "Industrial Products by National Engineers & Steel Fabricators",
  numberOfItems: 19,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Flakes Hopper",
      url: "https://nationalengrs.com/products",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Stand Tube",
      url: "https://nationalengrs.com/products",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Dow Storage Tank",
      url: "https://nationalengrs.com/products",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Air Receiver",
      url: "https://nationalengrs.com/products",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Nitrogen Buffer Tank",
      url: "https://nationalengrs.com/products",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Pig Launcher",
      url: "https://nationalengrs.com/products",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Blowdown Tank",
      url: "https://nationalengrs.com/products",
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "AHU Duct",
      url: "https://nationalengrs.com/products",
    },
    {
      "@type": "ListItem",
      position: 9,
      name: "Storage Tank",
      url: "https://nationalengrs.com/products",
    },
    {
      "@type": "ListItem",
      position: 10,
      name: "Pressure Vessel",
      url: "https://nationalengrs.com/products",
    },
    {
      "@type": "ListItem",
      position: 11,
      name: "Process Skid System",
      url: "https://nationalengrs.com/products",
    },
    {
      "@type": "ListItem",
      position: 12,
      name: "Industrial Piping Assembly",
      url: "https://nationalengrs.com/products",
    },
    {
      "@type": "ListItem",
      position: 13,
      name: "Custom Fabricated Equipment",
      url: "https://nationalengrs.com/products",
    },
    {
      "@type": "ListItem",
      position: 14,
      name: "Structural Fabrication",
      url: "https://nationalengrs.com/products",
    },
    {
      "@type": "ListItem",
      position: 15,
      name: "MS Fabricated Tank",
      url: "https://nationalengrs.com/products",
    },
    {
      "@type": "ListItem",
      position: 16,
      name: "SS Fabricated Tank",
      url: "https://nationalengrs.com/products",
    },
    {
      "@type": "ListItem",
      position: 17,
      name: "Industrial Hopper",
      url: "https://nationalengrs.com/products",
    },
    {
      "@type": "ListItem",
      position: 18,
      name: "Heavy Fabrication Assembly",
      url: "https://nationalengrs.com/products",
    },
    {
      "@type": "ListItem",
      position: 19,
      name: "Pipeline Pigging Equipment",
      url: "https://nationalengrs.com/products",
    },
  ],
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
      <ProductsClient />;
    </>
  )
}
