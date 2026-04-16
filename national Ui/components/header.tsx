/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import TopBar from "./top";

type NavSubItem = { label: string; href: string };

type NavChild = {
  label: string;
  href?: string;
  children?: NavSubItem[];
};

type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Products",
    children: [
      {
        label: "Pressure Vessels & Storage",
        children: [
          { label: "Air Receiver Vessels", href: "/products/pressure-vessels-and-storage/air-receiver-vessels" },
          { label: "Nitrogen Buffer / Gas Storage Tanks", href: "#" },
          { label: "Horizontal Storage Tanks", href: "#" },
          { label: "Vertical Storage Tanks", href: "#" },
          { label: "Blowdown / Flash Tanks", href: "#" },
          { label: "Water Holding / Utility Vessels", href: "#" },
          { label: "Filter Vessels (Activated Carbon / Softener)", href: "#" },
          { label: "Custom Pressure Vessels (As per drawing/spec)", href: "#" },
        ],
      },
      {
        label: "Process Equipment & Heat Transfer",
        children: [
          { label: "Condensers & Water Condensers", href: "#" },
          { label: "Heat Exchanger Shells / Columns", href: "#" },
          { label: "Process Skids & Packages", href: "#" },
          { label: "Special Purpose Process Vessels", href: "#" },
          { label: "Chemical Process Equipment (Custom)", href: "#" },
        ],
      },
      {
        label: "Piping & Pipeline Systems",
        children: [
          { label: "Pig Launcher / Pig Receiver Systems", href: "#" },
          { label: "Pipeline Spools & Fabrication", href: "#" },
          { label: "Headers, Manifolds & Special Piping", href: "#" },
          { label: "Compressor Suction / Discharge Ducting", href: "#" },
          { label: "Piping Supports", href: "#" },
        ],
      },
      {
        label: "Pollution Control & Gas Handling",
        children: [
          { label: "Venturi Scrubbers", href: "#" },
          { label: "Wet Scrubber Systems", href: "#" },
          { label: "Ducting & Flue Gas Lines", href: "#" },
          { label: "Scrubber Internals & Liners", href: "#" },
        ],
      },
      {
        label: "Material Handling & Storage (Bulk / Solid)",
        children: [
          { label: "Hoppers & Flakes Hoppers", href: "#" },
          { label: "Silos & Storage Bins", href: "#" },
          { label: "Chutes & Transitions", href: "#" },
          { label: "Tow Bin / Tow Can", href: "#" },
          { label: "Bulk Handling Fabrication (Custom)", href: "#" },
        ],
      },
      {
        label: "HVAC & Industrial Ducting",
        children: [
          { label: "AHU Ducts (GI / SS)", href: "#" },
          { label: "Industrial Ducting Systems", href: "#" },
          { label: "Transitions / Reducers / Elbows", href: "#" },
          { label: "Insulated Duct Casing", href: "#" },
        ],
      },
      {
        label: "Fabrication Components & Structural",
        children: [
          { label: "Base Plates", href: "#" },
          { label: "Pipe Saddles & Supports", href: "#" },
          { label: "Jack Stools / Temporary Supports", href: "#" },
          { label: "Liners (Hard Plate / Wear Plate)", href: "#" },
          { label: "Heavy Structural Fabrication (Custom)", href: "#" },
        ],
      },
      {
        label: "Custom Manufacturing (As per Client Drawing)",
        children: [
          { label: "Heavy Plate Fabrication", href: "#" },
          { label: "SS / CS / Alloy Steel Fabrication", href: "#" },
          { label: "On-site Erection Support", href: "#" },
          { label: "Repair / Modification Jobs", href: "#" },
        ],
      },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
  {
    label: "E-Catalogue",
    href: "https://drive.google.com/file/d/1dtTbRPr7q2pZ2Ev4gpbBZmmmTDN8xb2A/view",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(null);
  const [openMobileSubCategory, setOpenMobileSubCategory] = useState<string | null>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, [mobileOpen]);

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isProductsActive = pathname.startsWith("/products");

  const logo = useMemo(
    () => (
      <Link href="/" className="flex items-center gap-3 min-w-0">
        <div className="relative h-12 w-37.5 shrink-0 rounded-sm bg-white sm:h-14 sm:w-47.5">
          <img src="/logo222.png" alt="National Engineers Logo" className="h-full w-full object-contain px-3" />
        </div>
      </Link>
    ),
    []
  );

  const MobileDrawer = (
    <div className={`fixed inset-0 z-9999 transition lg:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      <div
        onClick={() => setMobileOpen(false)}
        className={`absolute inset-0 bg-black/50 transition-opacity ${mobileOpen ? "opacity-100" : "opacity-0"}`}
      />
      <div className={`absolute right-0 top-0 h-dvh w-[85%] max-w-sm overflow-y-auto bg-white shadow-2xl transition-transform ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
          <div className="relative h-14 w-40 shrink-0">
            <img src="/logo222.png" alt="National Engineers Logo" className="h-full w-full object-contain" />
          </div>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center border border-gray-200 text-gray-700"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="divide-y divide-gray-100">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href) || (item.label === "Products" && isProductsActive);

            if (item.children) {
              const categoryOpen = openMobileCategory === item.label;
              return (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => setOpenMobileCategory((prev) => (prev === item.label ? null : item.label))}
                    className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold transition ${active ? "text-[#ee9d54]" : "text-gray-800 hover:text-[#ee9d54]"}`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${categoryOpen ? "rotate-180" : ""}`} />
                  </button>

                  {categoryOpen && (
                    <div className="border-t border-gray-100 bg-gray-50">
                      {item.children.map((child) => {
                        const subOpen = openMobileSubCategory === child.label;
                        return (
                          <div key={child.label} className="border-b border-gray-100 last:border-0">
                            <button
                              type="button"
                              onClick={() => setOpenMobileSubCategory((prev) => (prev === child.label ? null : child.label))}
                              className="flex w-full items-center justify-between px-5 py-2.5 text-left text-sm text-gray-700 transition hover:text-[#ee9d54]"
                            >
                              <span>{child.label}</span>
                              <ChevronDown className={`h-3.5 w-3.5 shrink-0 transition-transform ${subOpen ? "rotate-180" : ""}`} />
                            </button>

                            {subOpen && child.children && (
                              <div className="border-t border-gray-100 bg-white">
                                {child.children.map((subItem) => (
                                  <Link
                                    key={subItem.label}
                                    href={subItem.href}
                                    onClick={() => { setMobileOpen(false); setOpenMobileCategory(null); setOpenMobileSubCategory(null); }}
                                    className={`block border-b border-gray-50 px-6 py-2 text-sm transition last:border-0 ${isActive(subItem.href) ? "font-medium text-[#ee9d54]" : "text-gray-600 hover:text-[#ee9d54]"}`}
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href ?? "#"}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 text-sm font-semibold transition ${active ? "text-[#ee9d54]" : "text-gray-800 hover:text-[#ee9d54]"}`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="p-4">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full bg-[#ee9d54] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#d88c45]"
            >
              Enquiry
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );

  return (
    <>
      <TopBar />

      <header className="z-100 w-full border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-425 items-center justify-between px-3 py-2 sm:px-4 lg:px-6">
          {logo}

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href) || (item.label === "Products" && isProductsActive);

              if (item.children) {
                return (
                  <div key={item.label} className="group relative">
                    {/* Nav trigger */}
                    <button
                      type="button"
                      className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-[#ee9d54] ${active ? "text-[#ee9d54]" : "text-gray-900"}`}
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-150 group-hover:rotate-180" />
                    </button>

                    {/* Level-1 dropdown */}
                    <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                      <div className="w-60 border border-gray-200 bg-white shadow-md">
                        {item.children.map((child) => (
                          <div key={child.label} className="group/sub relative">
                            <button
                              type="button"
                              className="flex w-full items-center justify-between border-b border-gray-100 px-4 py-2.5 text-left text-[13px] text-gray-700 last:border-0 transition hover:bg-gray-50 hover:text-[#ee9d54]"
                            >
                              <span>{child.label}</span>
                              {child.children && (
                                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-gray-400" />
                              )}
                            </button>

                            {/* Level-2 subdropdown — appears to the right */}
                            {child.children && (
                              <div className="invisible absolute left-full top-0 z-50 opacity-0 transition-all duration-150 group-hover/sub:visible group-hover/sub:opacity-100">
                                <div className="w-68 border border-gray-200 bg-white shadow-md" style={{ width: "272px" }}>
                                  {/* Sub-category heading */}
                                  <div className="border-b border-gray-200 bg-gray-50 px-4 py-2">
                                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                                      {child.label}
                                    </span>
                                  </div>
                                  {child.children.map((subItem) => (
                                    <Link
                                      key={subItem.label}
                                      href={subItem.href}
                                      className={`block border-b border-gray-100 px-4 py-2.5 text-[13px] last:border-0 transition ${
                                        isActive(subItem.href)
                                          ? "bg-orange-50 font-medium text-[#ee9d54]"
                                          : "text-gray-700 hover:bg-gray-50 hover:text-[#ee9d54]"
                                      }`}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href ?? "#"}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`text-sm font-semibold transition-colors hover:text-[#ee9d54] ${active ? "text-[#ee9d54]" : "text-gray-900"}`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="ml-2 bg-[#ee9d54] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#d88c45]"
            >
              Enquiry
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-gray-200 text-gray-900 transition hover:bg-gray-50 lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {mounted ? createPortal(MobileDrawer, document.body) : null}
    </>
  );
}
