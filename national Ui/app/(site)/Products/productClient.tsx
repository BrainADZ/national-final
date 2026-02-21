/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import React from "react";

type Product = {
  title: string;
  oneLine: string | string[];
  image: string;
};

const PRODUCTS: Product[] = [
  {
    title: "Flakes Hopper",
    oneLine: [
      "MOC: SS 304",
      "Thickness: 5 mm",
      "Dimensions: 3500 × 2400 × 5100 mm",
      "Weight: 4.5 MT",
    ],
    image: "product/00.jpg",
  },
  {
    title: "Stand Tube",
    oneLine: [
      "MOC: SS 304",
      "Thickness: 16 mm",
      "Dimensions: Ø 2850 × 2750 mm",
      "Weight: 4.5 MT",
    ],
    image: "product/1.jpg",
  },
  {
    title: "Dow Storage Tank",
    oneLine: [
      "MOC: SA 516 Gr. 70B",
      "Thickness: 10 mm",
      "Dimensions: Ø 1100 × 2700 mm",
      "Weight: 0.9 MT",
    ],
    image: "product/2.jpg",
  },
  {
    title: "Venturi & Scrubber",
    oneLine: [
      "MOC: IS 2062 + Sail Hard Plate Liner",
      "Thickness: 12 mm",
      "Height: 7000 mm",
      "Weight: 12 MT",
      "Working Pressure: 4.5 kg/cm²",
    ],
    image: "product/3.jpg",
  },
  {
    title: "Tow Can",
    oneLine: [
      "MOC: SS 304 / MS",
      "Thickness: 2 mm",
      "Dimensions: 2600 × 2600 × 3400 mm",
      "Weight: 3.2 MT",
    ],
    image: "product/4.jpg",
  },
  {
    title: "Upper Insert Pipe",
    oneLine: [
      "MOC: SS 304",
      "Thickness: 20 / 25 mm",
      "Dimensions: 3800 × 3740 mm",
      "Weight: 15 MT",
    ],
    image: "product/5.jpg",
  },
  {
    title: "Nitrogen Buffer Tank (50 m³)",
    oneLine: [
      "MOC: SA 516 Gr. 70",
      "Thickness: 25 mm",
      "Dimensions: Ø 2600 (ID) × 10500 mm",
      "Weight: 16.5 MT",
      "Working Pressure: 18 kg/cm²",
    ],
    image: "product/6.jpg",
  },
  {
    title: "Air Receiver",
    oneLine: [
      "MOC: SA 516",
      "Thickness: 25 mm",
      "Dimensions: Ø 1400 (ID) × 3800 mm",
      "Weight: 4 MT",
      "Working Pressure: 19 kg/cm²",
    ],
    image: "product/7.jpg",
  },
  {
    title: "Compressor Suction Pipe",
    oneLine: [
      "MOC: IS 2062",
      "Thickness: 10 mm",
      "Dimensions: Ø 1300 (ID) × 5800 mm",
      "Weight: 4.2 MT",
    ],
    image: "product/8.jpg",
  },
  {
    title: "Water Holding Vessel",
    oneLine: [
      "MOC: SA 516 Gr. 70",
      "Thickness: 6 mm",
      "Dimensions: Ø 1000 (ID) × 4200 mm",
      "Weight: 1 MT",
      "Working Pressure: 4.5 kg/cm²",
    ],
    image: "product/9.jpg",
  },
  {
    title: "Blowdown Tank",
    oneLine: [
      "MOC: SA 516 Gr. 70",
      "Thickness: 8 mm",
      "Dimensions: Ø 2000 × 3900 mm",
      "Weight: 4 MT",
      "Working Pressure: 4 kg/cm²",
    ],
    image: "product/11.jpg",
  },
  {
    title: "Activated Carbon Filter & Softener Tank",
    oneLine: [
      "MOC: IS 2062 Gr. B",
      "Thickness: 10 mm",
      "Dimensions: Ø 2800 × 4700 mm",
      "Weight: 4 MT",
      "Working Pressure: 1.5 kg/cm²",
    ],
    image: "product/12.jpg",
  },
  {
    title: "AHU Ducts",
    oneLine: [
      "MOC: SS 304",
      "Thickness: 3 mm",
      "Dimensions: 2500 × 3500 × 6000 mm",
      "Fabrication Weight: 160 MT",
    ],
    image: "product/13.jpg",
  },
  {
    title: "Horizontal Air Receiver",
    oneLine: [
      "MOC: SA 516",
      "Thickness: 20 mm",
      "Dimensions: Ø 2000 × 5000 mm",
      "Working Pressure: 10 kg/cm²",
    ],
    image: "product/14.jpg",
  },
  {
    title: "Ted Boilout Tank",
    oneLine: [
      "MOC: IS 2062 Gr. B",
      "Thickness: 14 mm",
      "Dimensions: Ø 3500 × 11000 mm",
      "Weight: 16.5 MT",
    ],
    image: "product/15.jpg",
  },
  {
    title: "Ship Launching Beam with Slide",
    oneLine: [
      "MOC: IS 2062 Gr. B",
      "Thickness: 10 / 12 mm",
      "Dimensions: 22000 × 2200 mm",
      "Weight: 37 MT",
    ],
    image: "product/16.jpg",
  },
  {
    title: "Pipe Saddle",
    oneLine: [
      "MOC: IS 2062 Gr. B",
      "Thickness: 32 mm",
      "For Pipe Diameter: Ø 1220 mm",
    ],
    image: "product/17.jpg",
  },
  {
    title: "Base Plates",
    oneLine: [
      "MOC: SA 516",
      "Thickness: 100 mm",
      "Dimensions: 1220 × 4000 mm",
    ],
    image: "product/18.jpg",
  },
  {
    title: "Elliptical Sleeves",
    oneLine: [
      "MOC: IS 2062 E350C",
      "Thickness: 25 / 32 mm",
    ],
    image: "product/21.jpeg",
  },
  {
    title: "Jack Stools",
    oneLine: [
      "MOC: IS 2062 Gr. B",
      "Thickness: 32 / 25 mm",
    ],
    image: "product/19.jpeg",
  },
  {
    title: " Water condensor",
    oneLine: [
      "MOC: SS 304L",
      "Thickness: 8 mm",
      "Dimension: Ø 700 x 3200",
      "Weight: 1.5 MT",
    ],
    image: "product/25.png",
  },
  {
    title: "Process Equipments",
    oneLine: [
      "MOC: SA 516",
      "Industry: Steel Plant",
    ],
    image: "product/23.jpeg",
  },
  {
    title: "Pig Launcher",
    oneLine: [
      "MOC: ASTM A-105 & SA-106",
      "Diameter: 200NB, 160 SCH",
      "Length: 6700 mm",
      "Pressure: 160 kg / cm ^ 2 g",
    ],
    image: "product/26.jpeg",
  },
];


export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src="/DSCN2685.jpg" alt="Gallery" className="h-full w-full object-cover" />
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
                <li className="text-orange-300">Products</li>
              </ol>
            </nav>

            {/* Title block */}
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

        {/* Bottom separator */}
        <div className="h-10 w-full bg-linear-to-b from-black/10 to-white" />
      </section>

      {/* SHORT DESCRIPTION */}
      <section className="mx-auto max-w-300 px-4 py-10 md:py-12">
        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-8">
          <h2 className="text-xl font-extrabold text-gray-900 md:text-2xl">
            Built to Endure – Precision Fabrication & Engineered Performance.
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-600 md:text-base">
            From pressure vessels and storage tanks to pig launchers, AHU ducting, and custom fabricated equipment, every product is manufactured through disciplined quality processes to deliver consistent performance and long service life in demanding industrial environments.
          </p>
        </div>
      </section>

      {/* IMAGE LEFT + CONTENT RIGHT */}
      <section className="mx-auto max-w-425 px-4 pb-12 md:pb-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* Left Image */}
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <img
              src="/Pho 0042.jpg"
              alt="Industrial fabrication"
              className="h-65 w-full object-cover md:h-90"
            />
          </div>

          {/* Right Content */}
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
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#ee9d54] px-6 py-3 text-sm font-semibold text-white hover:opacity-95"
              >
                Discuss Your Requirement
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT HEADING */}
      <section className="mx-auto max-w-425 px-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ee9d54]">
            Product Range
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
            Explore Our Products
          </h2>
          <p className="text-sm text-gray-600 md:text-base">
            Select a category to view details and request specifications
          </p>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section id="product-grid" className="mx-auto max-w-425 px-4 py-10 md:py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <div
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-84 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-60" />
              </div>

              <div className="p-5">
                <h3 className="text-base font-extrabold text-gray-900">{p.title}</h3>

                {/* ✅ DESCRIPTION IN POINTS */}
                <ul className="mt-2 space-y-1.5 pr-2.5 text-sm leading-6 text-gray-600 list-disc list-inside">
                  {Array.isArray(p.oneLine) ? (
                    p.oneLine.map((line, i) => <li key={i}>{line}</li>)
                  ) : (
                    <li>{p.oneLine}</li>
                  )}
                </ul>

                <div className="mt-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl border border-[#F98636] bg-[#F98636] px-4 py-2 text-sm font-semibold text-white/90 hover:bg-gray-50 hover:text-[#F98636]"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* TECHNICAL CONTENT SECTION */}
      <section className="mx-auto max-w-425 px-4 pb-16">

        {/* H2 */}
        <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl mt-12">
          Pressure Vessels, Storage Tanks & Process Equipment
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-600 md:text-base">
          National Engineers & Steel Fabricators is a trusted pressure vessel manufacturer in India delivering engineered vessels and tanks for high-pressure and industrial applications.
        </p>

        <p className="mt-2 text-sm leading-6 text-gray-600 md:text-base">
          We also operate as a reliable storage tank manufacturer in India, supplying tanks for water, chemicals, and process fluids — built for durability and operational safety.
        </p>

        <p className="mt-3 font-semibold text-gray-800">Our manufacturing range includes:</p>

        <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-gray-600">
          <li>Air Receiver Tanks</li>
          <li>Nitrogen Buffer Tanks</li>
          <li>Blowdown Tanks</li>
          <li>Activated Carbon Filter Tanks</li>
          <li>Process Equipment Assemblies</li>
        </ul>

        <p className="mt-3 text-sm text-gray-600">
          Each unit is fabricated using certified materials and inspected for dimensional accuracy and performance compliance.
        </p>

        {/* H3 */}
        <h3 className="mt-8 text-xl font-extrabold text-gray-900">
          Industrial Tank Manufacturing Capabilities
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          As an experienced air receiver tank manufacturer and nitrogen buffer tank manufacturer, we design tanks that support compressed air and gas management systems across multiple industries.
        </p>

        <p className="mt-3 font-semibold text-gray-800">We also fabricate:</p>

        <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-gray-600">
          <li>Activated carbon filter tank for filtration applications</li>
          <li>Blowdown tank manufacturer solutions for pressure relief systems</li>
        </ul>

        <p className="mt-3 text-sm text-gray-600">
          All tanks are custom-built based on operational requirements.
        </p>

        {/* H2 */}
        <h2 className="mt-10 text-2xl font-extrabold text-gray-900 md:text-3xl">
          Pipeline Equipment & HVAC Fabrication
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          We provide specialized fabrication services for pipeline and HVAC infrastructure.
        </p>

        {/* H3 */}
        <h3 className="mt-6 text-xl font-extrabold text-gray-900">
          Pig Launcher & Pipeline Accessories
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          NESF is a dependable pig launcher manufacturer India, supplying pig launching and receiving systems for pipeline cleaning, inspection, and maintenance operations.
        </p>

        {/* H3 */}
        <h3 className="mt-6 text-xl font-extrabold text-gray-900">
          AHU Duct Manufacturing
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          As an established AHU duct manufacturer, we deliver precision-fabricated ducting systems for industrial ventilation and airflow management — engineered for performance and long service life.
        </p>

        {/* H2 */}
        <h2 className="mt-10 text-2xl font-extrabold text-gray-900 md:text-3xl">
          Custom Fabricated Equipment for Industrial Applications
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Every project has unique requirements — that’s why we specialize in custom fabricated equipment tailored to client drawings and application-specific needs.
        </p>

        <p className="mt-3 font-semibold text-gray-800">Our fabrication capabilities cover:</p>

        <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-gray-600">
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

        {/* H2 */}
        <h2 className="mt-10 text-2xl font-extrabold text-gray-900 md:text-3xl">
          Why Choose NESF as Your Industrial Fabrication Partner?
        </h2>

        <ul className="mt-4 list-disc list-inside space-y-1 text-sm text-gray-600">
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
                Let’s build your industrial solution — engineered for reliability and precision.
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
  );
}
