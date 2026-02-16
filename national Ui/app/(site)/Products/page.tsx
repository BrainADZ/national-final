import type { Metadata } from "next";
import ProductsClient from "./productClient";

export const metadata: Metadata = {
  title: "Process Equipment Manufacturer India | National Engineers",
  description:
    "Explore pressure vessels, storage tanks, air receivers and custom fabricated industrial process equipment by National Engineers serving chemical and industrial sectors.",
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
  alternates: {
    canonical: "https://nationalengrs.com/products",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
