import type { Metadata } from "next";
import Script from "next/script";
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
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18228480390"
        strategy="afterInteractive"
      />
      <Script id="google-ads-industrial-fabrication" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18228480390');
        `}
      </Script>
      <GoogleAdsLandingClient />
    </>
  );
}
