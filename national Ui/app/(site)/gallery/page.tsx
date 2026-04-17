/* eslint-disable @next/next/no-img-element */
import path from "path";
import fs from "fs/promises";
import GalleryClient from "@/components/gallery/GalleryClient";
import Link from "next/link";
import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

const ALLOWED = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
export const metadata: Metadata = buildMetadata({
    title: "Steel Fabrication Projects Gallery | National Engineers",
    description:
        "View real industrial fabrication projects, heavy engineering works and manufacturing setups by National Engineers across Gujarat and India.",
    path: "/gallery",
    image: "/gallery hero.jpeg",
    keywords: [
        "industrial fabrication projects",
        "steel fabrication work india",
        "process equipment fabrication gallery",
        "heavy fabrication project images",
        "manufacturing plant gallery",
    ],
});
const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://nationalengrs.com/gallery#collectionpage",
  url: "https://nationalengrs.com/gallery",
  name: "Industrial Fabrication Projects Gallery – Real Manufacturing Work by NESF",
  headline: "Industrial Fabrication Projects Gallery – Real Manufacturing Work by NESF",
  description:
    "Explore the industrial fabrication projects gallery of National Engineers & Steel Fabricators featuring structural steel fabrication, process equipment manufacturing, skid systems, industrial piping, HVAC ducting, storage tanks, pressure equipment, and custom industrial assemblies.",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://nationalengrs.com/gallery#breadcrumb",
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
      name: "Gallery",
      item: "https://nationalengrs.com/gallery",
    },
  ],
};
async function getGalleryImages() {
    const dir = path.join(process.cwd(), "public", "gallery");

    try {
        const files = await fs.readdir(dir);

        const images = files
            .filter((f) => ALLOWED.has(path.extname(f).toLowerCase()))
            // sort: newest first (optional). If you prefer A-Z, remove stat sorting.
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
            .map((f) => ({
                src: `/gallery/${f}`,
                alt: f.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
            }));

        return images;
    } catch {
        // If folder doesn't exist or empty
        return [];
    }
}

export default async function GalleryPage() {
    const images = await getGalleryImages();

    return (
        <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
        <main className="bg-white">
            {/* Hero */}
            {/* HERO (image + overlay) */}
            <section className="relative">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        src="/gallery hero.jpeg"
                        alt="Gallery"
                        className="h-full w-full object-cover"
                    />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/45 to-black/15" />
                    {/* Subtle orange accent overlay */}
                    <div className="absolute inset-0 bg-orange-500/10 mix-blend-multiply" />
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
                                <li className="text-orange-300">Gallery</li>
                            </ol>
                        </nav>

                        {/* Title block */}
                        <div className="mt-5 max-w-4xl">
                            <h1 className="text-3xl font-bold text-white md:text-4xl">
                                Industrial Fabrication Projects Gallery – Real Manufacturing Work by NESF

                            </h1>

                            <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
                                Welcome to our industrial fabrication projects gallery — a visual showcase of our engineering capabilities across India. Here you’ll find completed works covering structural steel fabrication, process equipment manufacturing, skid systems, and custom industrial assemblies.
                                This process equipment fabrication gallery highlights real shop-floor execution, on-site installations, and finished equipment supplied to manufacturing plants nationwide.
                                From heavy fabrication to precision-built systems, our steel fabrication work in India reflects our commitment to quality, safety, and engineering accuracy.

                            </p>

                        </div>
                    </div>
                </div>

                {/* Bottom separator for clean transition */}
                <div className="h-10 w-full bg-linear-to-b from-black/10 to-white" />
            </section>


            {/* Grid + Lightbox */}
            <GalleryClient images={images} />
            {/* SEO Content Section */}
            <section className="bg-[#f4f5f7] py-12">
                <div className="mx-auto max-w-425  px-8">

                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                        Manufacturing Plant Gallery – Fabrication That Performs in Real Conditions
                    </h2>

                    <p className="mt-4 text-gray-700">
                        Explore our manufacturing plant gallery featuring:
                    </p>

                    <ul className="mt-4 space-y-2 text-gray-700">
                        <li>Structural steel assemblies</li>
                        <li>Skid-mounted process systems</li>
                        <li>Industrial piping &amp; HVAC ducting</li>
                        <li>Storage tanks and pressure equipment</li>
                        <li>Custom-fabricated components</li>
                    </ul>

                    <p className="mt-4 text-gray-700">
                        Each project is executed with strict quality control, certified welding procedures, and dimensional inspections.
                    </p>

                    <h2 className="mt-10 text-xl md:text-2xl font-semibold text-gray-900">
                        Industrial Tank Fabrication Images &amp; Process Equipment Projects
                    </h2>

                    <p className="mt-4 text-gray-700">
                        Our gallery also includes verified industrial tank fabrication images, showcasing air receivers, storage vessels, and custom-built tanks used across chemical, dairy, and utility industries.
                    </p>

                    <p className="mt-4 text-gray-700">
                        Alongside tanks, you’ll see:
                    </p>

                    <div className="mt-3 space-y-2 text-gray-700">
                        <div>✔ Skid fabrication projects</div>
                        <div> ✔ Piping spool assemblies</div>
                        <div> ✔ Equipment frames</div>
                        <div> ✔ Plant installation highlights</div>
                    </div>

                    <p className="mt-4 text-gray-700">
                        Every image represents actual project delivery — not stock visuals.
                    </p>

                    <h2 className="mt-10 text-xl md:text-2xl font-semibold text-gray-900">
                        Why Our Industrial Fabrication Projects Stand Out
                    </h2>

                    <ul className="mt-4 space-y-2 text-gray-700">
                        <li>In-house manufacturing facility</li>
                        <li>Experienced fabrication engineers</li>
                        <li>Project-specific customization</li>
                        <li>On-time execution</li>
                        <li>Pan-India delivery support</li>
                    </ul>

                    <p className="mt-4 text-gray-700">
                        Browse through our gallery to understand how NESF transforms concepts into operational industrial systems.
                    </p>

                </div>
            </section>
            
      {/* BOTTOM CTA */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-300 px-4 py-10">
          <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-extrabold text-gray-900">
               Looking for similar fabrication solutions for your plant?
              </h3>
              <p className="mt-1 text-sm text-gray-600">
              Contact our team to discuss your project requirements.
              </p>
            </div>
            <a
              href="tel:919574011132"
              className="inline-flex items-center justify-center rounded-xl bg-[#ee9d54] px-6 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Share Your Specifications
            </a>
          </div>
        </div>
      </section>
        </main>
        </>
    );
}
