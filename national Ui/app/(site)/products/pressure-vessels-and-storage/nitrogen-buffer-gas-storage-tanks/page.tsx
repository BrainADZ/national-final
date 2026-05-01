/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import ProductEnquiryForm from "@/components/ProductEnquiryForm";
import { buildMetadata } from "@/lib/seo";

const categoryName = "Pressure Vessels & Storage";
const pagePath =
  "/products/pressure-vessels-and-storage/nitrogen-buffer-gas-storage-tanks";

export const metadata: Metadata = buildMetadata({
  title: "Nitrogen Buffer & Gas Storage Tanks | National Engineers",
  description:
    "NESF fabricates nitrogen buffer and gas storage tanks for stable gas availability, demand fluctuation control, and uninterrupted plant operations.",
  path: pagePath,
  image: "/product/6.jpg",
  keywords: [
    "nitrogen buffer tank manufacturer",
    "gas storage tank manufacturer",
    "nitrogen storage tank fabrication",
    "industrial gas buffer vessel",
    "pressure vessel fabrication india",
  ],
});

const sidebarProducts = [
  {
    label: "Air Receiver Vessels",
    href: "/products/pressure-vessels-and-storage/air-receiver-vessels",
  },
  {
    label: "Nitrogen Buffer / Gas Storage Tanks",
    href: pagePath,
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
    href: "/products/pressure-vessels-and-storage/custom-pressure-vessels",
  },
];

export default function NitrogenBufferGasStorageTanksPage() {
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
            Nitrogen Buffer / Gas Storage Tanks
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
              Nitrogen Buffer / Gas Storage Tanks
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
                src="/product/6.jpg"
                alt="Nitrogen Buffer / Gas Storage Tanks"
                className="h-65 w-full object-cover sm:h-90 lg:h-107.5"
              />
            </div>

            {/* Content */}
            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <h2 className="text-3xl font-bold leading-tight text-[#0f223d] sm:text-4xl">
                Nitrogen Buffer / Gas Storage Tanks
              </h2>

              <h3 className="mt-8 text-2xl font-bold text-[#0f223d]">
                Overview
              </h3>
              <p className="mt-4 text-[15px] leading-8 text-[#5b6472]">
                NESF fabricates nitrogen buffer and gas storage tanks to ensure
                stable gas availability, manage demand fluctuations, and support
                uninterrupted plant operations.
              </p>

              <h3 className="mt-10 text-2xl font-bold text-[#0f223d]">
                What it&apos;s used for
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-[#5b6472]">
                <li>Buffering N2 supply for purging, blanketing, and inerting</li>
                <li>Managing demand spikes in process lines</li>
                <li>
                  Improving regulator and line stability while reducing pressure
                  drop issues
                </li>
              </ul>

              <h3 className="mt-10 text-2xl font-bold text-[#0f223d]">
                Typical Construction & Options
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-[#5b6472]">
                <li>Vertical or horizontal storage configuration</li>
                <li>Nozzle arrangements as per P&amp;ID</li>
                <li>
                  PSV, PRV, pressure gauges, and rupture disc if required
                </li>
                <li>
                  Earthing lug, lifting lugs, nameplate, and inspection openings
                </li>
                <li>
                  Compatibility for cylinder banks, PSA systems, or liquid N2
                  vaporizer outlets
                </li>
              </ul>

              <h3 className="mt-10 text-2xl font-bold text-[#0f223d]">
                Materials of Construction
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-[#5b6472]">
                <li>
                  Carbon steel or stainless steel, selected as per gas purity,
                  environment, and corrosion conditions
                </li>
              </ul>

              <h3 className="mt-10 text-2xl font-bold text-[#0f223d]">
                Fabrication & Quality Controls
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-[#5b6472]">
                <li>
                  Controlled welding and full traceability aligned with NESF
                  QA/QC systems
                </li>
                <li>Pressure testing and leakage checks as applicable</li>
                <li>Documentation pack for audits and maintenance</li>
              </ul>

              <h3 className="mt-10 text-2xl font-bold text-[#0f223d]">
                Scope of Supply
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-[#5b6472]">
                <li>
                  Tank with supports, standard fittings, and paint or coating
                  system
                </li>
                <li>Testing, marking, and documentation as agreed</li>
                <li>Skid mounting option with buffer vessel and valve station</li>
              </ul>

              <h3 className="mt-10 text-2xl font-bold text-[#0f223d]">
                What we need from you (for quotation)
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-[#5b6472]">
                <li>Gas type and purity</li>
                <li>Design and operating pressure / temperature</li>
                <li>Required storage capacity in Nm3 and duty cycle</li>
                <li>
                  Accessories, instrumentation, line requirements, and site
                  conditions
                </li>
              </ul>

              <div className="mt-10 rounded-2xl border border-[#f0a14a]/30 bg-[#fff7ef] p-6">
                <p className="text-base font-bold text-[#0f223d]">
                  Share your P&amp;ID or specification to get a compliant
                  nitrogen buffer tank.
                </p>
              </div>

              {/* Product Enquiry Form */}
              <div className="mt-12">
                <ProductEnquiryForm
                  title="Request a quote for a Nitrogen Buffer Tank"
                  subtitle="Share your P&ID, gas data, storage capacity, and site requirements for a compliant solution."
                  productName="Nitrogen Buffer / Gas Storage Tank"
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
