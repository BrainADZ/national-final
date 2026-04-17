import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/header";
// import Footer from "@/components/footer";
import { fontBody, fontHeading } from "./fonts";
// import FloatingActions from "@/sections/FloatingActions";
import AOSProvider from "@/components/AOSProvider";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "National Engineers & Steel Fabricators",
  verification: {
    google: "loI6ULKy_ozsBbHmXjqp9qg5dELTF5YIUiZ0LmQoUjc",
  },
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: absoluteUrl(DEFAULT_OG_IMAGE),
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [absoluteUrl(DEFAULT_OG_IMAGE)],
  },
  other: {
    "p:domain_verify": "ea3affcc4a45f28d12a969547e95cef3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fontBody.variable} ${fontHeading.variable} antialiased`}
      >
        {/* <Navbar/> */}
        <AOSProvider />
        {/* <FloatingActions
          whatsappNumber="919999999999"
          linkedinUrl="https://www.linkedin.com/company/national-engineers/"
          // WhatsappIcon={...} LinkedinIcon={...} EnquiryIcon={...}
        /> */}
        {children}
        {/* <Footer/> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6N4VK6BJE3"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-6N4VK6BJE3');
  `}
        </Script>

      </body>
    </html>
  );
}
