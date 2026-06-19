import type { Metadata } from "next";
import GoogleAdsLandingClient from "./LandingClient";

export const metadata: Metadata = {
  title: "Industrial Fabrication Quote | National Engineers",
  description:
    "Request a quote for Dowtherm boilers, surge tanks, silos, storage tanks, jacketed vessels, and custom industrial fabrication by National Engineers.",
  alternates: {
    canonical: "https://nationalengrs.com/industrial-fabrication",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function GoogleAdsLandingPage() {
  return <GoogleAdsLandingClient />;
}
