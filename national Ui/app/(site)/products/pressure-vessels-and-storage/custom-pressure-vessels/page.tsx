/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import ProductEnquiryForm from "@/components/ProductEnquiryForm";
import { buildMetadata } from "@/lib/seo";

const categoryName = "Pressure Vessels & Storage";
const pagePath =
  "/products/pressure-vessels-and-storage/custom-pressure-vessels";

export const metadata: Metadata = buildMetadata({
  title: "Custom Pressure Vessels | National Engineers",
  description:
    "NESF manufactures custom-engineered pressure vessels as per client drawings, datasheets, and project specifications for industrial applications.",
  path: pagePath,
  image: "/product/23.jpeg",
  keywords: [
    "custom pressure vessel manufacturer",
    "pressure vessel fabrication as per drawing",
    "process vessel manufacturer",
    "custom engineered pressure vessels",
    "industrial pressure vessel fabrication",
  ],
});

const sidebarProducts = [
  {
    label: "Air Receiver Vessels",
    href: "/products/pressure-vessels-and-storage/air-receiver-vessels",
  },
  {
    label: "Nitrogen Buffer / Gas Storage Tanks",
    href: "/products/pressure-vessels-and-storage/nitrogen-buffer-gas-storage-tanks",
  },
  {
    label: "Horizontal Storage Tanks",
    href: "/products/pressure-vessels-and-storage/horizontal-storage-tanks",
  },
  {
    label: "Vertical Storage Tanks",
    href: "/products/pressure-vessels-and-storage/vertical-storage-tanks",
  },
  {
    label: "Blowdown / Flash Tanks",
    href: "/products/pressure-vessels-and-storage/blowdown-flash-tanks",
  },
  {
    label: "Water Holding / Utility Vessels",
    href: "/products/pressure-vessels-and-storage/water-holding-utility-vessels",
  },
  {
    label: "Filter Vessels (Activated Carbon / Softener)",
    href: "/products/pressure-vessels-and-storage/filter-vessels",
  },
  {
    label: "Custom Pressure Vessels (As per drawing/spec)",
    href: pagePath,
  },
];

export default function CustomPressureVesselsPage() {
  return (
    <main className="bg-[#f5f6f8]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1800&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-[#0f223d]/75" />

        <div className="relative mx-auto flex min-h-60 max-w-450 flex-col items-center justify-center px-4 py-14 text-center sm:px-6 lg:min-h-75 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Custom Pressure Vessels
          </h1>

          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-2 rounded-md bg-white/90 px-5 py-3 text-sm font-medium text-black shadow-lg">
            <Link href="/" className="transition hover:text-[#f0a14a]">
              Home
            </Link>
            <span>&gt;</span>
            <Link href="/products" className="transition hover:text-[#f0a14a]">
              Products
            </Link>
            <span>&gt;</span>
            <span>{categoryName}</span>
            <span>&gt;</span>
            <span className="text-[#f0a14a]">
              Custom Pressure Vessels
            </span>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <section className="mx-auto max-w-400 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[330px_minmax(0,1fr)] xl:gap-10">
          {/* Left Sticky Sidebar */}
          <aside className="self-start lg:sticky lg:top-28">
            <div className="rounded-xl border border-gray-200 bg-[#ececec] p-6 shadow-sm">
              <h2 className="mb-5 text-xl font-bold text-[#0f223d]">
                NESF Products
              </h2>

              <div className="space-y-2">
                {sidebarProducts.map((item) => {
                  const isActive = item.href === pagePath;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`block rounded-lg px-4 py-3 text-sm leading-6 transition ${
                        isActive
                          ? "bg-[#f0a14a] font-semibold text-white shadow-sm"
                          : "text-[#4b5563] hover:bg-white hover:text-[#0f223d]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Right Content */}
          <div className="min-w-0">
            {/* Product Image */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <img
                src="/product/23.jpeg"
                alt="Custom Pressure Vessels"
                className="h-65 w-full object-cover sm:h-90 lg:h-107.5"
              />
            </div>

            {/* Content */}
            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <h2 className="text-3xl font-bold leading-tight text-[#0f223d] sm:text-4xl">
                Custom Pressure Vessels (As per drawing/spec)
              </h2>

              <h3 className="mt-8 text-2xl font-bold text-[#0f223d]">
                Overview
              </h3>
              <div className="mt-4 space-y-4 text-[15px] leading-8 text-[#5b6472]">
                <p>
                  NESF specializes in custom-engineered pressure vessels
                  manufactured strictly as per client drawings, datasheets, and
                  project specifications, covering vessels, reactors, air
                  receivers, and process equipment.
                </p>
                <p>
                  If code compliance is required, pressure vessel construction
                  rules commonly reference recognized standards such as ASME BPVC
                  Section VIII, as applicable.
                </p>
              </div>

              <h3 className="mt-10 text-2xl font-bold text-[#0f223d]">
                What we build (examples)
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-[#5b6472]">
                <li>Process vessels, separators, and buffer vessels</li>
                <li>Specialized nozzle-heavy vessels for skids</li>
                <li>
                  High-temperature or corrosive-service vessels, MOC dependent
                </li>
                <li>Package units for oil &amp; gas, chemicals, and utilities</li>
              </ul>

              <h3 className="mt-10 text-2xl font-bold text-[#0f223d]">
                What you can specify (and we will build to)
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-[#5b6472]">
                <li>Client drawings, datasheets, and BOM</li>
                <li>MOC, corrosion allowance, PWHT, and NDT requirements</li>
                <li>Code / inspection requirements and documentation format</li>
                <li>
                  Painting / coating, insulation supports, and instrumentation
                  nozzles
                </li>
              </ul>

              <h3 className="mt-10 text-2xl font-bold text-[#0f223d]">
                Fabrication & Quality Controls
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-[#5b6472]">
                <li>
                  Engineering-to-commissioning capability and disciplined QA/QC
                </li>
                <li>
                  Weld traceability, inspection hold points, and stage-wise
                  checks
                </li>
                <li>Hydro / pneumatic testing as applicable</li>
                <li>
                  Complete MDR (Manufacturing Data Record) compilation as agreed
                </li>
              </ul>

              <h3 className="mt-10 text-2xl font-bold text-[#0f223d]">
                Scope of Supply
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-[#5b6472]">
                <li>Fabrication, testing, and surface protection</li>
                <li>Optional accessories and project-specific fittings</li>
                <li>
                  Documentation pack aligned to your project requirement
                </li>
              </ul>

              <h3 className="mt-10 text-2xl font-bold text-[#0f223d]">
                What we need from you (for quotation)
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-[#5b6472]">
                <li>Drawings / datasheets and design conditions</li>
                <li>NDT / PWHT requirements and acceptance criteria</li>
                <li>Third-party inspection requirement, if any</li>
                <li>Delivery location, timeline, and packaging expectations</li>
              </ul>

              <div className="mt-10 rounded-2xl border border-[#f0a14a]/30 bg-[#fff7ef] p-6">
                <p className="text-base font-bold text-[#0f223d]">
                  Upload your drawing or specification, and NESF will respond
                  with a technical and commercial proposal.
                </p>
              </div>

              {/* Product Enquiry Form */}
              <div className="mt-12">
                <ProductEnquiryForm
                  title="Request a quote for a Custom Pressure Vessel"
                  subtitle="Upload drawings, datasheets, design conditions, NDT/PWHT requirements, and inspection expectations."
                  productName="Custom Pressure Vessel"
                  buttonText="Request Quote"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
