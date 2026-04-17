/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";

import MissionVisionSection from "@/sections/about/MissionVisionSection";
import MdDeskSection from "@/sections/MdDeskSection";
import AboutPageMdDeskSection from "@/sections/about/AboutPageMdDesk";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About National Engineers | Fabrication Experts Surat",
  description:
    "National Engineers is a Surat based industrial fabrication company offering heavy steel fabrication, custom process equipment and engineered manufacturing solutions.",
  path: "/about",
  image: "/about hero.jpg",
  keywords: [
    "industrial fabrication company in surat",
    "engineering fabrication experts",
    "custom fabrication manufacturer gujarat",
    "steel fabrication specialists india",
    "process equipment fabrication company",
    "heavy engineering fabrication",
  ],
});
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://nationalengrs.com/about#aboutpage",
  url: "https://nationalengrs.com/about",
  name: "About National Engineers & Steel Fabricators",
  headline:
    "Industrial Fabrication Company in Surat | National Engineers & Steel Fabricators",
  description:
    "National Engineers & Steel Fabricators (NESF) is an industrial fabrication company in Surat, Gujarat, established in 1990, delivering pressure vessels, air receivers, heat exchangers, boilers, process piping skids, storage tanks, silos, structural steelwork, and HVAC ducts.",
  isPartOf: {
    "@id": "https://nationalengrs.com/#website",
  },
  about: {
    "@id": "https://nationalengrs.com/#organization",
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://nationalengrs.com/logo222.png",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://nationalengrs.com/about#breadcrumb",
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
      name: "About",
      item: "https://nationalengrs.com/about",
    },
  ],
};
const schemas = [aboutPageSchema, breadcrumbSchema];
export default function AboutPage() {
  const title = " Industrial Fabrication Company in Surat | National Engineers & Steel Fabricators";
  const breadcrumbCurrent = "About NESF";
  const imageUrl = "/about hero.jpg";

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas),
        }}
      />
      <section className="relative">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt="About National Engineers"
            className="h-full w-full object-cover object-bottom"
          />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/45 to-black/15" />
          {/* Subtle orange accent overlay */}
          <div className="absolute inset-0 bg-[#ee9d54]/10 mix-blend-multiply" />
        </div>

        {/* Content */}
        <div className="relative pt-16 md:pt-2">
          <div className="mx-auto max-w-425 px-2 py-1 lg:px-4 lg:py-24">
            {/* Breadcrumbs */}
            <nav className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li className="text-white/40">/</li>
                <li className="text-orange-300">{breadcrumbCurrent}</li>
              </ol>
            </nav>

            {/* Title block */}
            <div className="mt-5 max-w-2xl">
              <h1 className="text-3xl font-bold text-white md:text-4xl">
                {title}
              </h1>

              <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
                A reflection of over 35 years of engineering excellence, guided
                by leadership philosophy, core values, and disciplined execution.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom separator for clean transition */}
        <div className="h-10 w-full bg-linear-to-b from-black/10 to-white" />
      </section>

      <MissionVisionSection />
      <AboutPageMdDeskSection />
    </>
  );
}
