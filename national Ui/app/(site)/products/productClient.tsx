/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

type ProductCategory = {
  title: string;
  description: string;
  image: string;
  href: string;
  highlights: string[];
};

const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    title: "Pressure Vessels & Storage",
    description:
      "Air receivers, nitrogen buffer tanks, storage tanks, blowdown vessels, filter vessels, and custom pressure vessels for industrial plants.",
    image: "/product/7.jpg",
    href: "/products/pressure-vessels-and-storage",
    highlights: ["Air Receiver Vessels", "Storage Tanks", "Filter Vessels"],
  },
  {
    title: "Material Handling & Storage",
    description:
      "Hoppers, flakes hoppers, silos, storage bins, tow cans, chutes, transitions, and bulk handling fabrication.",
    image: "/product/00.jpg",
    href: "/products/material-handling-and-storage",
    highlights: ["Hoppers & Flakes Hoppers", "Silos & Storage Bins", "Tow Bin / Tow Can"],
  },
  {
    title: "Process Equipment & Heat Transfer",
    description:
      "Condensers, process skids, heat exchanger shells, columns, and special-purpose vessels built around process requirements.",
    image: "/product/25.png",
    href: "/products/process-equipment-and-heat-transfer",
    highlights: ["Condensers", "Process Skids", "Special Purpose Vessels"],
  },
  {
    title: "Pollution Control & Gas Handling",
    description:
      "Venturi scrubbers, wet scrubber systems, ducting, flue gas lines, scrubber internals, liners, and gas handling fabrication.",
    image: "/product/3.jpg",
    href: "/products/pollution-control-and-gas-handling",
    highlights: ["Venturi Scrubbers", "Wet Scrubber Systems", "Flue Gas Lines"],
  },
  {
    title: "Piping & Pipeline Systems",
    description:
      "Pig launcher and receiver systems, pipeline spools, headers, manifolds, compressor ducting, and piping supports.",
    image: "/product/26.jpeg",
    href: "/products/piping-and-pipeline-systems",
    highlights: ["Pig Launcher / Receiver", "Pipeline Spools", "Piping Supports"],
  },
  {
    title: "Fabrication Components & Structural",
    description:
      "Base plates, pipe saddles, jack stools, wear plate liners, and heavy structural fabrication for industrial assemblies.",
    image: "/product/18.jpg",
    href: "/products/fabrication-components-and-structural",
    highlights: ["Base Plates", "Pipe Saddles", "Jack Stools"],
  },
  {
    title: "HVAC & Industrial Ducting",
    description:
      "AHU ducts, GI and SS ducting, insulated ducts, industrial ducting systems, transitions, reducers, and elbows.",
    image: "/product/13.jpg",
    href: "/products/hvac-and-industrial-ducting",
    highlights: ["AHU Ducts", "Industrial Ducting", "Transitions & Elbows"],
  },
  {
    title: "Custom Manufacturing",
    description:
      "Build-to-drawing heavy plate fabrication, SS / CS / alloy steel fabrication, on-site erection support, and repair jobs.",
    image: "/product/16.jpg",
    href: "/products/custom-manufacturing",
    highlights: ["Heavy Plate Fabrication", "SS / CS / Alloy Fabrication", "Repair / Modification"],
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src="/DSCN2685.jpg" alt="Gallery" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/45 to-black/15" />
          <div className="absolute inset-0 bg-orange-500/10 mix-blend-multiply" />
        </div>

        <div className="relative pt-16 md:pt-2">
          <div className="mx-auto max-w-425 px-2 py-1 lg:px-4 lg:py-24">
            <nav className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li className="text-white/40">/</li>
                <li className="text-orange-300">Products</li>
              </ol>
            </nav>

            <div className="mt-5 max-w-2xl">
              <h1 className="text-3xl font-bold text-white md:text-4xl">
                Industrial Process Equipment Manufacturer in India
              </h1>

              <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
                Application-driven fabrication and engineered process equipment, backed by over 35 years of manufacturing excellence across pressure vessels, tanks, ducting systems, and custom industrial fabrication.
              </p>
            </div>
          </div>
        </div>

        <div className="h-10 w-full bg-linear-to-b from-black/10 to-white" />
      </section>

      {/* SHORT DESCRIPTION */}
      <section className="mx-auto max-w-300 px-4 py-10 md:py-12">
        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-8">
          <h2 className="text-xl font-extrabold text-gray-900 md:text-2xl">
            Built to Endure - Precision Fabrication & Engineered Performance.
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-600 md:text-base">
            From pressure vessels and storage tanks to pig launchers, AHU ducting, and custom fabricated equipment, every product is manufactured through disciplined quality processes to deliver consistent performance and long service life in demanding industrial environments.
          </p>
        </div>
      </section>

      {/* IMAGE LEFT + CONTENT RIGHT */}
      <section className="mx-auto max-w-425 px-4 pb-12 md:pb-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <img
              src="/Pho 0042.jpg"
              alt="Industrial fabrication"
              className="h-65 w-full object-cover md:h-90"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ee9d54]">
              Proven Processes
            </p>
            <h3 className="mt-2 pr-20 text-2xl font-extrabold text-gray-900 md:text-3xl">
              Precision Engineering. <span className="text-[#ee9d54]">Consistent Output.</span>
            </h3>
            <p className="mt-3 pr-10 text-sm leading-6 text-gray-600 md:text-base">
              Every product is executed through application-specific engineering, certified materials, and strict quality control. As an industrial process equipment manufacturer, we support custom designs and industry standards to ensure reliable performance from fabrication through operational life.
            </p>

            <ul className="mt-6 grid gap-3 pr-10 text-sm text-gray-700 sm:grid-cols-2">
              <li className="rounded-xl border border-gray-100 bg-white px-4 py-3">
                <span className="font-semibold">Disciplined quality</span> processes
              </li>
              <li className="rounded-xl border border-gray-100 bg-white px-4 py-3">
                <span className="font-semibold">Application-specific</span> fabrication
              </li>
              <li className="rounded-xl border border-gray-100 bg-white px-4 py-3">
                <span className="font-semibold">Certified industrial</span> materials
              </li>
              <li className="rounded-xl border border-gray-100 bg-white px-4 py-3">
                <span className="font-semibold">Schedule-driven</span> project delivery
              </li>
            </ul>

            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#ee9d54] px-6 py-3 text-sm font-semibold text-white hover:opacity-95"
              >
                Discuss Your Requirement
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY HEADING */}
      <section className="mx-auto max-w-425 px-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ee9d54]">
            Product Range
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
            Explore Product Categories
          </h2>
          <p className="text-sm text-gray-600 md:text-base">
            Select a category to view detailed product pages and request specifications.
          </p>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section id="product-grid" className="mx-auto max-w-425 px-4 py-10 md:py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCT_CATEGORIES.map((category) => (
            <article
              key={category.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <Link href={category.href} className="block">
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-70" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#ee9d54]">
                    Category
                  </span>
                </div>
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-extrabold text-gray-900">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {category.description}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {category.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ee9d54]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl border border-[#F98636] bg-[#F98636] px-4 py-2 text-sm font-semibold text-white/90 hover:bg-gray-50 hover:text-[#F98636]"
                  >
                    Enquiry Now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TECHNICAL CONTENT SECTION */}
      <section className="mx-auto max-w-425 px-4 pb-16">
        <h2 className="mt-12 text-2xl font-extrabold text-gray-900 md:text-3xl">
          Pressure Vessels, Storage Tanks & Process Equipment
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-600 md:text-base">
          National Engineers & Steel Fabricators is a trusted pressure vessel manufacturer in India delivering engineered vessels and tanks for high-pressure and industrial applications.
        </p>

        <p className="mt-2 text-sm leading-6 text-gray-600 md:text-base">
          We also operate as a reliable storage tank manufacturer in India, supplying tanks for water, chemicals, and process fluids - built for durability and operational safety.
        </p>

        <p className="mt-3 font-semibold text-gray-800">Our manufacturing range includes:</p>

        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-gray-600">
          <li>Air Receiver Tanks</li>
          <li>Nitrogen Buffer Tanks</li>
          <li>Blowdown Tanks</li>
          <li>Activated Carbon Filter Tanks</li>
          <li>Process Equipment Assemblies</li>
        </ul>

        <p className="mt-3 text-sm text-gray-600">
          Each unit is fabricated using certified materials and inspected for dimensional accuracy and performance compliance.
        </p>

        <h3 className="mt-8 text-xl font-extrabold text-gray-900">
          Industrial Tank Manufacturing Capabilities
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          As an experienced air receiver tank manufacturer and nitrogen buffer tank manufacturer, we design tanks that support compressed air and gas management systems across multiple industries.
        </p>

        <p className="mt-3 font-semibold text-gray-800">We also fabricate:</p>

        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-gray-600">
          <li>Activated carbon filter tank for filtration applications</li>
          <li>Blowdown tank manufacturer solutions for pressure relief systems</li>
        </ul>

        <p className="mt-3 text-sm text-gray-600">
          All tanks are custom-built based on operational requirements.
        </p>

        <h2 className="mt-10 text-2xl font-extrabold text-gray-900 md:text-3xl">
          Pipeline Equipment & HVAC Fabrication
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          We provide specialized fabrication services for pipeline and HVAC infrastructure.
        </p>

        <h3 className="mt-6 text-xl font-extrabold text-gray-900">
          Pig Launcher & Pipeline Accessories
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          NESF is a dependable pig launcher manufacturer India, supplying pig launching and receiving systems for pipeline cleaning, inspection, and maintenance operations.
        </p>

        <h3 className="mt-6 text-xl font-extrabold text-gray-900">
          AHU Duct Manufacturing
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          As an established AHU duct manufacturer, we deliver precision-fabricated ducting systems for industrial ventilation and airflow management - engineered for performance and long service life.
        </p>

        <h2 className="mt-10 text-2xl font-extrabold text-gray-900 md:text-3xl">
          Custom Fabricated Equipment for Industrial Applications
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Every project has unique requirements - that is why we specialize in custom fabricated equipment tailored to client drawings and application-specific needs.
        </p>

        <p className="mt-3 font-semibold text-gray-800">Our fabrication capabilities cover:</p>

        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-gray-600">
          <li>Pressure vessels</li>
          <li>Storage tanks</li>
          <li>Filter tanks</li>
          <li>Pig launchers</li>
          <li>AHU ducting</li>
          <li>Structural assemblies</li>
        </ul>

        <p className="mt-3 text-sm text-gray-600">
          From concept to commissioning, our engineering team ensures accuracy, quality, and timely delivery.
        </p>

        <h2 className="mt-10 text-2xl font-extrabold text-gray-900 md:text-3xl">
          Why Choose NESF as Your Industrial Fabrication Partner?
        </h2>

        <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-gray-600">
          <li>Proven industrial process equipment manufacturer</li>
          <li>Complete in-house fabrication facility</li>
          <li>Certified raw materials</li>
          <li>Application-specific engineering</li>
          <li>Schedule-driven project execution</li>
          <li>Pan-India delivery support</li>
          <li>Focus on long-term performance</li>
        </ul>
      </section>

      {/* BOTTOM CTA */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-300 px-4 py-10">
          <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-extrabold text-gray-900">
                Need Custom Fabrication Support?
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Let us build your industrial solution - engineered for reliability and precision.
              </p>
            </div>
            <Link
              href="tel:919574011132"
              className="inline-flex items-center justify-center rounded-xl bg-[#ee9d54] px-6 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Share Your Specifications
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
