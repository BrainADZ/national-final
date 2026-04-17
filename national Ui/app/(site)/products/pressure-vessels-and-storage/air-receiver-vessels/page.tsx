/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import ProductEnquiryForm from "@/components/ProductEnquiryForm";
import { buildMetadata } from "@/lib/seo";

const categoryName = "Pressure Vessels & Storage";

export const metadata: Metadata = buildMetadata({
  title: "Air Receiver Vessels | National Engineers",
  description:
    "Explore industrial air receiver vessels by National Engineers for compressed air storage, pressure stabilization, and reliable plant performance.",
  path: "/products/pressure-vessels-and-storage/air-receiver-vessels",
  image:
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1600&auto=format&fit=crop",
});

const sidebarProducts = [
  {
    label: "Air Receiver Vessels",
    href: "/products/air-receiver-vessels",
  },
  {
    label: "Nitrogen Buffer / Gas Storage Tanks",
    href: "/products/nitrogen-buffer-gas-storage-tanks",
  },
  {
    label: "Horizontal Storage Tanks",
    href: "/products/horizontal-storage-tanks",
  },
  {
    label: "Vertical Storage Tanks",
    href: "/products/vertical-storage-tanks",
  },
  {
    label: "Blowdown / Flash Tanks",
    href: "/products/blowdown-flash-tanks",
  },
  {
    label: "Water Holding / Utility Vessels",
    href: "/products/water-holding-utility-vessels",
  },
  {
    label: "Filter Vessels (Activated Carbon / Softener)",
    href: "/products/filter-vessels",
  },
  {
    label: "Custom Pressure Vessels (As per drawing/spec)",
    href: "/products/custom-pressure-vessels",
  },
];

export default function AirReceiverVesselsPage() {
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
            Air Receiver Vessels
          </h1>

          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-2 rounded-md bg-white/90 px-5 py-3 text-sm font-medium text-black shadow-lg">
            <Link href="/" className="transition hover:text-[#f0a14a]">
              Home
            </Link>
            <span>➜</span>
            <Link href="/products" className="transition hover:text-[#f0a14a]">
              Products
            </Link>
            <span>➜</span>
            <span>{categoryName}</span>
            <span>➜</span>
            <span className="text-[#f0a14a]">Air Receiver Vessels</span>
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
                  const isActive = item.href === "/products/air-receiver-vessels";

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
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1600&auto=format&fit=crop"
                alt="Air Receiver Vessels"
                className="h-65 w-full object-cover sm:h-90 lg:h-107.5"
              />
            </div>

            {/* Content */}
            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <h2 className="text-3xl font-bold leading-tight text-[#0f223d] sm:text-4xl">
                Air Receiver Vessels – Industrial Compressed Air Storage Solutions
              </h2>

              <h3 className="mt-8 text-2xl font-bold text-[#0f223d]">
                Overview
              </h3>
              <p className="mt-4 text-[15px] leading-8 text-[#5b6472]">
                NESF manufactures air receiver vessels for compressed air systems
                to stabilize pressure, reduce compressor cycling, and improve
                plant air quality and reliability. Built for industrial duty with
                robust welding, traceable materials, and disciplined QA/QC
                practices.
              </p>

              <h3 className="mt-10 text-2xl font-bold text-[#0f223d]">
                What it’s used for
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-[#5b6472]">
                <li>• Buffer storage to handle peak air demand</li>
                <li>
                  • Pressure stabilization to protect downstream tools and
                  equipment
                </li>
                <li>• Moisture separation (with drain and accessories)</li>
                <li>• Supporting compressor efficiency and lifecycle</li>
              </ul>

              <h3 className="mt-10 text-2xl font-bold text-[#0f223d]">
                Typical Construction & Options
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-[#5b6472]">
                <li>• Vertical or horizontal orientation</li>
                <li>
                  • Inlet/outlet nozzles, drain, vent, manhole / handhole
                </li>
                <li>• Supports: saddles / legs / skirt as required</li>
                <li>
                  • Accessories: safety valve, pressure gauge, moisture drain,
                  NRV, isolation valves
                </li>
                <li>
                  • Optional internal lining / coating based on service
                  conditions
                </li>
              </ul>

              <h3 className="mt-10 text-2xl font-bold text-[#0f223d]">
                Materials of Construction
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-[#5b6472]">
                <li>
                  • Carbon Steel / Stainless Steel (as per service requirement)
                </li>
                <li>
                  • Internals and nozzles designed for corrosion and temperature
                  conditions
                </li>
              </ul>

              <h3 className="mt-10 text-2xl font-bold text-[#0f223d]">
                Fabrication & Quality Controls
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-[#5b6472]">
                <li>• Qualified welding procedures and controlled fit-up</li>
                <li>• Stage-wise inspection and quality monitoring</li>
                <li>
                  • NDT as specified (DPT / MPT / UT / RT where required)
                </li>
                <li>• Hydro / pneumatic testing as applicable</li>
                <li>• Dimensional checks and final documentation package</li>
              </ul>

              <h3 className="mt-10 text-2xl font-bold text-[#0f223d]">
                Scope of Supply
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-[#5b6472]">
                <li>• Complete vessel with nozzles and supports</li>
                <li>
                  • Surface preparation with primer / paint or coating system
                </li>
                <li>
                  • Documentation: QAP / ITP, test certificates, inspection
                  reports (as agreed)
                </li>
              </ul>

              <h3 className="mt-10 text-2xl font-bold text-[#0f223d]">
                What we need from you (for quotation)
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-[#5b6472]">
                <li>
                  • Design pressure and temperature, operating conditions
                </li>
                <li>• Required capacity / volume or airflow demand</li>
                <li>
                  • Material preference, corrosion allowance, painting system
                </li>
                <li>
                  • Code / inspection requirements and accessories list
                </li>
              </ul>

              {/* Product Enquiry Form */}
              <div className="mt-12">
                <ProductEnquiryForm
                  title="Request a quote for an Air Receiver Vessel"
                  subtitle="Custom sizes and configurations available based on your plant requirements."
                  productName="Air Receiver Vessel"
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
