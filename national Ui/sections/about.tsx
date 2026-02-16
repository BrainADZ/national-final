/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type TabKey = "story" | "mission" | "vision";

const TAB_CONTENT: Record<TabKey, string> = {
  story:
    "NESF is built to lead in precision engineering and fabrication setting higher standards in safety, quality, and reliability. From pressure vessels and heat exchangers to boilers and structural steelwork, we deliver solutions that endure. Anchored in integrity and continuous improvement, we empower our people, elevate capability, and forge long-term partnerships that create lasting industrial value.",
  mission:
    "Our mission is to deliver high-quality, safe, and reliable engineering and fabrication solutions that meet the evolving needs of our clients and industries. We are committed to manufacturing precision-built pressure vessels, heat exchangers, boilers, structural steelwork, and custom-fabricated components with uncompromising attention to detail and adherence to established standards.",
  vision:
    "Through innovation, disciplined processes, transparent communication, and a culture of continuous improvement, we strive to complete every project with excellence and on schedule. We aim to foster long-term relationships, empower our workforce, and contribute to India’s industrial growth by consistently providing engineering solutions that clients trust and value.",
};

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("story");

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto flex max-w-425 flex-col gap-10 px-2 lg:flex-row lg:px-4">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 text-gray-900">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#ee9d54]">
            About NESF
          </p>

          <h1 className="mt-4 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
            Industrial Steel Fabrication & Process Equipment

            <br />
            <span className="text-[#ee9d54]"> Manufacturer in India</span>
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
          National Engineers & Steel Fabricators (NESF) a trusted industrial steel fabrication company in India, specializing in custom metal fabrication, heavy engineering works, and industrial process equipment manufacturing. Based in Gujarat, we deliver precision-built solutions for chemical plants, manufacturing units, and infrastructure projects across PAN India.
          <br/>
          With strong fabrication capabilities and experienced engineering teams, we support industries with reliable pressure vessels, storage tanks, air receivers, and turnkey fabrication services.
          </p>

          {/* TABS */}
          <div className="mt-8">
            <div className="flex flex-wrap gap-0 overflow-x-auto ">
              {(
                [
                  ["story", "Our Story"],
                  ["mission", "Mission"],
                  ["vision", "Vision"],
                ] as [TabKey, string][]
              ).map(([key, label]) => {
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-8 py-4 text-sm font-semibold transition-colors border 
                      ${
                        isActive
                          ? "bg-white border-gray-300 text-gray-900"
                          : "bg-gray-100 border-transparent text-gray-600 hover:bg-gray-200"
                      }
                    `}
                  >
                    {label}
                    {isActive && (
                      <div className="mt-3 h-0.75 w-full bg-[#ee9d54]" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 max-w-3xl text-sm leading-relaxed text-gray-700 md:text-base">
              {TAB_CONTENT[activeTab]}
            </div>
          </div>

          {/* CTA BUTTON */}
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#ee9d54] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#ee9d54]">
            Explore More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* RIGHT IMAGE BLOCK */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative h-65 w-full overflow-hidden rounded-lg shadow-lg sm:h-80 lg:h-95">
            <img
              src="/about hero.jpg"
              alt="National Engineers facility"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
