/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import TopBar from "./top";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href?: string; children?: NavChild[] };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Blogs", href: "/blogs" },
  // { label: "Contact", href: "/contact" },
  {
    label: "E-Catalogue",
    href: "https://drive.google.com/file/d/1dtTbRPr7q2pZ2Ev4gpbBZmmmTDN8xb2A/view",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileOpen]);

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const logo = useMemo(
    () => (
      <Link href="/" className="flex items-center gap-3 min-w-0">
        <div className="relative h-12 w-37.5 sm:h-14 sm:w-47.5 shrink-0 bg-white rounded-sm">
          <img
            src="/logo222.png"
            alt="National Engineers Logo"
            className="object-contain w-full h-full px-3"
          />
        </div>
      </Link>
    ),
    []
  );

  const MobileDrawer = (
    <div
      className={`lg:hidden fixed inset-0 z-9999 transition ${
        mobileOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div
        onClick={() => setMobileOpen(false)}
        className={`absolute inset-0 bg-black/50 transition-opacity ${
          mobileOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`absolute right-0 top-0 h-dvh w-[85%] max-w-sm bg-white shadow-2xl transition-transform ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
          <div className="relative h-14 w-40 shrink-0">
            <img
              src="/logo222.png"
              alt="National Engineers Logo"
              className="object-contain w-full h-full"
            />
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-900"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="px-4 py-3">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.label}
                href={item.href ?? "#"}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold transition ${
                  active
                    ? "bg-orange-50 text-[#ee9d54]"
                    : "text-gray-900 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block w-full rounded-md bg-[#ee9d54] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#d88c45]"
          >
            Enquiry
          </Link>
        </nav>
      </div>
    </div>
  );

  return (
    <>
      <TopBar />

      <header className="w-full bg-white border-b border-gray-200 z-100">
        <div className="mx-auto flex max-w-425 items-center justify-between px-3 py-2 sm:px-4 lg:px-6">
          {logo}

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href ?? "#"}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`text-sm font-semibold transition-colors hover:text-[#ee9d54] ${
                    active ? "text-[#ee9d54]" : "text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="ml-2 rounded-md bg-[#ee9d54] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#d88c45]"
            >
              Enquiry
            </Link>
          </nav>

          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-900 transition hover:bg-gray-50 shrink-0"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {mounted ? createPortal(MobileDrawer, document.body) : null}
    </>
  );
}