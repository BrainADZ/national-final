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

export default function CareersPage() {
  return <CareersClient />;
}
