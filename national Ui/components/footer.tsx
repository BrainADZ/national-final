/* eslint-disable @next/next/no-img-element */
import { ChevronDown, ChevronRight, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Link from "next/link";

type ProductCategory = { name: string; products: { name: string; href: string }[] };

const quickLinks = [
  ["Home", "/"], ["About Us", "/about"], ["Products", "/products"],
  ["Careers", "/careers"], ["Gallery", "/gallery"], ["Blogs", "/blogs"], ["Contact", "/contact"],
] as const;

const productCategories: ProductCategory[] = [
  { name: "Pressure Vessels & Storage", products: [
    { name: "Air Receiver Vessels", href: "/products/air-receiver-vessels-manufacturer" },
    { name: "Nitrogen Buffer Tank", href: "/products/nitrogen-buffer-tank-manufacturer" },
    { name: "Gas Storage Tank", href: "/products/gas-storage-tank-manufacturer" },
    { name: "Horizontal Storage Tanks", href: "/products/horizontal-storage-tank-manufacturer" },
    { name: "Vertical Storage Tanks", href: "/products/vertical-storage-tank-manufacturer" },
    { name: "Blowdown / Flash Tanks", href: "/products/blowdown-flash-tank-manufacturer" },
    { name: "Water Holding / Utility Vessels", href: "/products/water-holding-utility-vessel-manufacturer" },
    { name: "Filter Vessels (Activated Carbon / Softener)", href: "/products/filter-vessel-manufacturer" },
    { name: "Custom Pressure Vessels (As per drawing/spec)", href: "/products/custom-pressure-vessel-manufacturer" },
  ]},
  { name: "Material Handling & Storage (Bulk / Solid)", products: [
    { name: "Hoppers & Flakes Hoppers", href: "/products/hopper-flakes-hopper-manufacturer" },
    { name: "Silos & Storage Bins", href: "/products/silo-storage-bin-manufacturer" },
    { name: "Chutes & Transitions", href: "/products/chute-transition-manufacturer" },
    { name: "Tow Bin / Tow Can", href: "/products/tow-bin-tow-can-manufacturer" },
    { name: "Bulk Handling Fabrication (Custom)", href: "/products/custom-bulk-handling-fabrication" },
  ]},
  { name: "Process Equipment & Heat Transfer", products: [
    { name: "Condensers & Water Condensers", href: "/products/condenser-manufacturer" },
    { name: "Heat Exchanger Shell", href: "/products/heat-exchanger-shell-manufacturer" },
    { name: "Process Column", href: "/products/process-column-manufacturer" },
    { name: "Process Skids & Packages", href: "/products/process-skid-manufacturer" },
    { name: "Special Purpose Process Vessels", href: "/products/special-purpose-process-vessel-manufacturer" },
    { name: "Chemical Process Equipment (Custom)", href: "/products/custom-chemical-process-equipment-manufacturer" },
  ]},
  { name: "HVAC & Industrial Ducting", products: [
    { name: "AHU Ducts (GI / SS)", href: "/products/ahu-duct-manufacturer" },
    { name: "Industrial Ducting Systems", href: "/products/industrial-ducting-system-manufacturer" },
    { name: "Duct Transition", href: "/products/duct-transition-manufacturer" },
    { name: "Duct Reducer", href: "/products/duct-reducer-manufacturer" },
    { name: "Duct Elbow", href: "/products/duct-elbow-manufacturer" },
    { name: "Insulated Duct Casing", href: "/products/insulated-duct-casing-manufacturer" },
  ]},
  { name: "Piping & Pipeline Systems", products: [
    { name: "Pig Launcher / Pig Receiver Systems", href: "/products/pig-launcher-receiver-system-manufacturer" },
    { name: "Pipeline Spools & Fabrication", href: "/products/pipeline-spool-fabrication" },
    { name: "Headers, Manifolds & Special Piping", href: "/products/headers-manifolds-manufacturer" },
    { name: "Compressor Suction / Discharge Ducting", href: "/products/compressor-suction-discharge-ducting-manufacturer" },
    { name: "Piping Supports", href: "/products/piping-supports-manufacturer" },
  ]},
  { name: "Fabrication Components & Structural", products: [
    { name: "Base Plates", href: "/products/base-plate-manufacturer" },
    { name: "Pipe Saddles & Supports", href: "/products/pipe-saddle-manufacturer" },
    { name: "Jack Stools / Temporary Supports", href: "/products/jack-stool-manufacturer" },
    { name: "Liners (Hard Plate / Wear Plate)", href: "/products/wear-plate-liner-manufacturer" },
    { name: "Heavy Structural Fabrication (Custom)", href: "/products/custom-heavy-structural-fabrication" },
  ]},
  { name: "Pollution Control & Gas Handling", products: [
    { name: "Venturi Scrubbers", href: "/products/venturi-scrubber-manufacturer" },
    { name: "Wet Scrubber Systems", href: "/products/wet-scrubber-system-manufacturer" },
    { name: "Ducting & Flue Gas Lines", href: "/products/ducting-flue-gas-lines-manufacturer" },
    { name: "Scrubber Internals & Liners", href: "/products/scrubber-internals-liners-manufacturer" },
  ]},
  { name: "Custom Manufacturing (As per Client Drawing)", products: [
    { name: "Heavy Plate Fabrication", href: "/products/heavy-plate-fabrication" },
    { name: "SS / CS / Alloy Steel Fabrication", href: "/products/ss-cs-alloy-steel-fabrication" },
    { name: "On-site Erection Support", href: "/products/on-site-erection-support" },
    { name: "Repair / Modification Jobs", href: "/products/industrial-repair-modification-jobs" },
  ]},
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <div className="mb-5"><h3 className="text-xl font-semibold text-white">{children}</h3><span className="mt-3 block h-0.5 w-10 bg-[#ee9d54]" /></div>;
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0d0f] text-gray-300">
      <div className="mx-auto grid max-w-425 grid-cols-1 gap-8 px-5 py-9 sm:px-6 md:grid-cols-2 xl:grid-cols-[minmax(250px,1fr)_190px_minmax(560px,2.2fr)_minmax(250px,1fr)] xl:gap-8 xl:px-8 xl:py-10">
        <section>
          <Link href="/" aria-label="National Engineers home" className="inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ee9d54]">
            <img src="/logo white.webp" alt="National Engineers & Steel Fabricators" className="h-auto w-64 max-w-full" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">Delivering precision-engineered heat transfer equipment, fabrication solutions and industrial engineering services with unmatched quality and reliability.</p>
          <div className="mt-5 flex items-center gap-3">
            {[
              { label: "YouTube", href: "https://youtube.com/@national_engineers?si=AMV0srGlRfVUdmyo", Icon: Youtube },
              { label: "Instagram", href: "https://www.instagram.com/nationalengrs?igsh=dWNscnFxbmNxa2hz&utm_source=qr", Icon: Instagram },
              { label: "LinkedIn", href: "https://www.linkedin.com/company/national-engineers-steel-fabricators/", Icon: Linkedin },
            ].map(({ label, href, Icon }) => (
              <Link key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-gray-300 transition hover:border-[#ee9d54] hover:text-[#ee9d54] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ee9d54]"><Icon className="h-5 w-5" /></Link>
            ))}
          </div>
        </section>

        <nav aria-label="Footer quick links">
          <div className="whitespace-nowrap"><SectionTitle>Quick Links</SectionTitle></div>
          <ul className="space-y-1">{quickLinks.map(([name, href]) => <li key={href}><Link href={href} className="group flex items-center justify-between py-2 text-sm text-gray-400 transition hover:text-white focus-visible:text-white focus-visible:outline-none">{name}<ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:text-[#ee9d54]" /></Link></li>)}</ul>
        </nav>

        <section className="relative z-20">
          <SectionTitle>Products</SectionTitle>
          <div className="hidden grid-cols-2 xl:grid">
            {productCategories.map((category, index) => {
              const isRightColumn = index % 2 === 1;
              return (
                <div key={category.name} className="group relative border-b border-white/10 odd:border-r last:border-b-0 [&:nth-last-child(2)]:border-b-0">
                  <button type="button" aria-haspopup="true" className="flex min-h-16 w-full cursor-pointer items-center gap-3 px-4 py-3 text-left text-sm text-gray-200 transition group-hover:bg-white/[0.035] group-focus-within:bg-white/[0.035] group-hover:text-white group-focus-within:text-white focus-visible:outline-none">
                    <span className="min-w-0 flex-1 leading-5">{category.name}</span><ChevronRight className="h-4 w-4 shrink-0 text-gray-500 transition group-hover:translate-x-0.5 group-hover:text-[#ee9d54] group-focus-within:text-[#ee9d54]" />
                  </button>
                  <div className={`pointer-events-none invisible absolute top-0 z-50 w-110 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 ${isRightColumn ? "right-full" : "left-full"}`}>
                    <div className="rounded-md border border-white/20 bg-[#151719] p-4 shadow-2xl shadow-black/70">
                      <p className="mb-3 border-b border-white/10 pb-3 text-sm font-semibold text-white">{category.name}</p>
                      <ul className="grid grid-cols-2 gap-x-5">
                        {category.products.map((product) => <li key={product.href}><Link href={product.href} className="group/link flex min-h-10 items-start gap-2 py-2 text-[13px] leading-5 text-gray-300 transition hover:text-white focus-visible:text-white focus-visible:outline-none"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ee9d54]" /><span className="group-hover/link:underline">{product.name}</span></Link></li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="divide-y divide-white/10 rounded-md border border-white/10 xl:hidden">
            {productCategories.map((category) => {
              return <details key={category.name} className="group/details"><summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-3 text-sm text-gray-200 transition hover:bg-white/[0.035] [&::-webkit-details-marker]:hidden"><span className="flex-1 leading-6">{category.name}</span><ChevronDown className="h-4 w-4 text-gray-500 transition group-open/details:rotate-180 group-open/details:text-[#ee9d54]" /></summary><ul className="grid gap-x-5 bg-black/20 px-4 pb-3 sm:grid-cols-2">{category.products.map((product) => <li key={product.href}><Link href={product.href} className="flex items-start gap-2 py-2.5 text-sm leading-5 text-gray-400 transition hover:text-white focus-visible:text-white focus-visible:outline-none"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ee9d54]" />{product.name}</Link></li>)}</ul></details>;
            })}
          </div>
        </section>

        <section>
          <SectionTitle>Contact Us</SectionTitle>
          <div className="space-y-7 text-sm text-gray-400">
            <div className="flex items-start gap-4"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#ee9d54]" /><p className="leading-7"><strong className="block text-base text-gray-100">Address:</strong>Plot No. 1022, Cross Road No.87,<br />Sachin GIDC, Surat - 394230</p></div>
            <div className="flex items-start gap-4"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#ee9d54]" /><p className="leading-7"><strong className="block text-base text-gray-100">Phone:</strong><Link href="tel:919574011132" className="hover:text-white">+91 95740 11132</Link></p></div>
            <div className="flex items-start gap-4"><Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#ee9d54]" /><p className="min-w-0 leading-7"><strong className="block text-base text-gray-100">Email:</strong><Link href="mailto:admin@nationalengrs.com" className="break-all hover:text-white">admin@nationalengrs.com</Link></p></div>
          </div>
        </section>
      </div>

      <div className="border-t border-white/10"><div className="mx-auto flex max-w-425 flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-500 md:flex-row lg:px-8"><p className="text-center md:text-left">© {new Date().getFullYear()} National Engineers. All Rights Reserved.</p><div className="flex items-center gap-5 sm:gap-7"><Link href="/privacy-policies" className="transition hover:text-[#ee9d54]">Privacy Policy</Link><span aria-hidden="true" className="h-5 w-px bg-white/10" /><Link href="/terms-and-condition" className="transition hover:text-[#ee9d54]">Terms of Service</Link></div></div></div>
    </footer>
  );
}
