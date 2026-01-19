/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PRODUCTS = [
  {
    title: "Dowtherm Boiler",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&h=1400&fit=crop",
    tag: "Material Handling",
    description:
      "Electric and gas-fired thermal oil (Dowtherm) heating systems are designed for stable, uniform process heating without steam. They provide precise temperature control, efficient heat transfer, and reliable continuous operation, making them ideal when consistent high-temperature performance and clean, controlled heating are required.",
  },
  {
    title: "Surge Tanks",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1400&h=1400&fit=crop",
    tag: "Agriculture",
    description:
      "Surge tanks help stabilize pressure and flow by absorbing sudden spikes and fluctuations in the system. They reduce water hammer and pump cycling, protecting pumps, valves, and piping while improving overall system reliability and smooth operation.",
  },
  {
    title: "Silos & Storage Tanks",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1400&h=1400&fit=crop",
    tag: "Railways",
    description:
      "Silos and storage are tanks built for safe, long-term storage of liquids and bulk materials with controlled filling and discharge. Designed for durability and easy integration, they can be customized with access points, venting, and required connections to suit site and process needs.",
  },
  {
    title: "Immersion Coil / Jacketed Vessel",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&h=1400&fit=crop",
    tag: "Power Backup",
    description:
      "Vessels with immersion coils or external jackets are designed for efficient heating or cooling during mixing, batching, holding, or process operations. They deliver more consistent product temperatures and can be tailored with the right connections and configurations to match your heating and cooling circuit.",
  },
];

export default function ProductsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProducts = useMemo(() => PRODUCTS, []);

  // ✅ mobile tap flip state
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20 px-4">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,black_1px,transparent_1px),linear-gradient(to_bottom,black_1px,transparent_1px)] bg-size-[44px_44px]" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#EE9D54]/20 blur-3xl" />
        <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[#EE9D54]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-425 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#EE9D54]">
              PRODUCT RANGE
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-black">
              Reliable Products.{" "}
              <span className="text-[#EE9D54]">Proven Performance.</span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm text-black/70">
              Precision-built equipment designed for durability, performance, and
              application-specific requirements.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-black/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-black hover:text-white"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product, index) => {
            const isFlipped = flippedIndex === index;

            return (
              <div
                key={index}
                className="group relative h-full"
                // ✅ mobile tap/click flip
                onClick={() => setFlippedIndex(isFlipped ? null : index)}
                role="button"
                tabIndex={0}
              >
                {/* Flip container */}
                <div className="relative h-full w-full rounded-xl perspective-distant lg:perspective-distant">
                  {/* Flipper */}
                  <div
                    className={`
                      relative h-full w-full rounded-xl
                      transition-transform duration-700
                      transform-3d
                      ${isFlipped ? "transform-[rotateY(180deg)]" : ""}
                      lg:group-hover:transform-[rotateY(180deg)]
                    `}
                  >
                    {/* FRONT */}
                    <div className="overflow-hidden rounded-xl bg-white border border-black/10 shadow-sm backface-hidden">
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-full w-full object-cover transition-transform duration-500 lg:group-hover:scale-110 will-change-transform"
                        />
                        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/20 to-black/60" />
                      </div>

                      <div className="bg-[#EE9D54] px-5 py-4 text-center">
                        <h3 className="text-white font-bold text-[15px] md:text-[17px]">
                          {product.title}
                        </h3>
                        <div className="mx-auto mt-2 h-0.5 w-14 bg-white/80" />
                      </div>
                    </div>

                    {/* BACK */}
                    <div
                      className={`
                        absolute inset-0 rounded-xl
                        border border-black/10 bg-white shadow-sm
                        transform-[rotateY(180deg)]
                        backface-hidden
                        ${isFlipped ? "block" : "hidden"} 
                        lg:block
                      `}
                    >
                      <div className="bg-[#EE9D54] px-5 py-4" 
                      style={{
                        borderRadius: "12px 12px 0 0"
                      }}
                      >
                        {/* <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90">
                          {product.tag}
                        </p> */}
                        <h3 className="mt-1 text-white font-bold text-[18px]">
                          {product.title}
                        </h3>
                      </div>

                      <div className="flex h-[calc(100%-64px)] flex-col justify-between p-5">
                        <p className="text-sm text-black/70 leading-relaxed">
                          {product.description}
                        </p>

                        <p className="mt-4 text-center text-[11px] text-black/50">
                          Tap again to return
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14  pt-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-black">
            Explore Our Online Catalogue
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-black/70">
            Download our catalogue to view complete product specifications,
            applications, and custom solutions.
          </p>

          <div className="mt-8">
            <Link
              href="https://drive.google.com/file/d/1dtTbRPr7q2pZ2Ev4gpbBZmmmTDN8xb2A/view"
              className="inline-flex items-center gap-2 rounded-md bg-[#EE9D54] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#d88942]"
            >
              Explore Catalogue
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
