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
        oneLine: [" 5 mm thick 3500 x 2400 x 5100mmH - 4.5MT Atmospheric pressure. "
        ],
        image: "product/00.jpg",
    },
    {
        title: "Stand Tube",
        oneLine: ["16 mm thick Ø 2850 x 2750 mm H-4.5 MT Atmospheric pressure"
        ],
        image: "product/1.jpg",
    },
    {
        title: "Boilers & Accessories",
        oneLine: "Reliable boiler fabrication with precision-built components.",
        image: "product/2.jpg",
    },
    {
        title: "Venturi & Scrubber",
        oneLine: "12 mm Liner (Hard) plates 7000 mm H-12 MT 4.5 kg/cm²g pressure",
        image: "product/3.jpg",
    },
    {
        title: "Tow Can",
        oneLine: "2 mm thick 2600 x 2600 x 3400mmH - 3.2MT Atmospheric pressure",
        image: "product/4.jpg",
    },
    {
        title: "Upper Insert Pipe",
        oneLine: "20/25 mm thick Atmospheric pressure 3800 x 3740mmH - 15MT",
        image: "product/5.jpg",
    },
    {
        title: "Nitrogen Buffer tank (50 m³)",
        oneLine: "25 mm thick Ø 2600 ID x 10500 mm H -16.5 MT 18 kg/cm²g pressure",
        image: "product/6.jpg",
    },
    {
        title: "Air Reciver",
        oneLine: "25 mm thick Ø 1400 ID x 3800 mm H-4 MT 19 kg/cm²g pressure",
        image: "product/7.jpg",
    },
    {
        title: "Compressure Suction Pipe",
        oneLine: "10 mm thick Ø1300 ID x 5800 mm H - 4.2 MT Atmospheric pressure",
        image: "product/8.jpg",
    },
    {
        title: "Water Holding Vessel",
        oneLine: "6 mm thick Ø 1000 ID x 4200 mm H-1 MT 4.5 kg/cm²g pressure",
        image: "product/9.jpg",
    },

    {
        title: "Blowdown Tank",
        oneLine: "8 mm thick Ø 2000 x 3900 mm H-4 MT 4 kg/cm²g pressure",
        image: "product/11.jpg",
    },
    {
        title: "Activated Carbon Filter & Softner Tank",
        oneLine: "10 mm thick Ø2800 x 4700 mm H-4 MT 1.5 kg/cm²g pressure",
        image: "product/12.jpg",
    },
    {
        title: "AHU Ducts",
        oneLine: "3 mm thick Fabrication Weight - 160 MT Erection Weight - 450 MT",
        image: "product/13.jpg",
    },
    {
        title: "Air Receiver",
        oneLine: "Made-to-order fabrication as per drawings/specifications.",
        image: "product/14.jpg",
    },
    {
        title: "Ted Boilout Tank",
        oneLine: "Made-to-order fabrication as per drawings/specifications.",
        image: "product/15.jpg",
    },
    {
        title: "SHIP LAUNCHING BEAM WITH SLIDE (37 MT x 22 m L)",
        oneLine: "25/15/12 mm thick 22 m L x 2.2 m H-37 MT Qty: 5 sets",
        image: "product/16.jpg",
    },
    {
        title: "PIPE SADDLE",
        oneLine: "32 mm thk",
        image: "product/17.jpg",
    },
    {
        title: "BASE PLATES",
        oneLine: "100 mm thk",
        image: "product/18.jpg",
    },
    {
        title: "Elliptical Sleeves",
        oneLine: "Made-to-order fabrication as per drawings/specifications.",
        image: "product/21.jpeg",
    },
    {
        title: "Jack Stools",
        oneLine: "32/25 mm thk",
        image: "product/19.jpeg",
    },
    // {
    //     title: "Custom Fabrication",
    //     oneLine: "Made-to-order fabrication as per drawings/specifications.",
    //     image: "product/20.jpg",
    // },
];


export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* HERO */}
            {/* HERO (image + overlay) */}
            <section className="relative">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        src="/3.webp"
                        alt="Gallery"
                        className="h-full w-full object-cover"
                    />
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
                                Industrial Fabrication & Heat Transfer Products
                            </h1>

                            <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
                                National Engineers & Steel Fabricators delivers application-driven
                                manufacturing for OEMs and industrial projects—built for safety,
                                reliability, and long service life.
                            </p>

                        </div>
                    </div>
                </div>

                {/* Bottom separator for clean transition */}
                <div className="h-10 w-full bg-linear-to-b from-black/10 to-white" />
            </section>

            {/* SHORT DESCRIPTION */}
            <section className="mx-auto max-w-300 px-4 py-10 md:py-12">
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-8">
                    <h2 className="text-xl font-extrabold text-gray-900 md:text-2xl">
                        Built for demanding industrial applications
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-gray-600 md:text-base">
                        From heat exchangers and pressure vessels to structural steelwork and
                        custom fabrication—our team supports end-to-end manufacturing with
                        strong quality control and project-specific execution.
                    </p>
                </div>
            </section>

            {/* IMAGE LEFT + CONTENT RIGHT */}
            <section className="mx-auto max-w-425 px-4 pb-12 md:pb-16">
                <div className="grid gap-8 md:grid-cols-2 md:items-center">
                    {/* Left Image */}
                    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                        <img
                            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=70"
                            alt="Industrial fabrication"
                            className="h-65 w-full object-cover md:h-90"
                        />
                    </div>

                    {/* Right Content */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ee9d54]">
                            About Our Products
                        </p>
                        <h3 className="mt-2 text-2xl font-extrabold text-gray-900 md:text-3xl">
                            Precision Engineering, Consistent Output
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-gray-600 md:text-base">
                            Every product is fabricated with attention to dimensional accuracy,
                            weld quality, and long-term performance. We support custom sizes,
                            drawings, and industry-specific requirements based on application.
                        </p>

                        <ul className="mt-6 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
                            <li className="rounded-xl border border-gray-100 bg-white px-4 py-3">
                                <span className="font-semibold">Quality-first</span> processes
                            </li>
                            <li className="rounded-xl border border-gray-100 bg-white px-4 py-3">
                                <span className="font-semibold">Custom</span> fabrication support
                            </li>
                            <li className="rounded-xl border border-gray-100 bg-white px-4 py-3">
                                <span className="font-semibold">Industrial-grade</span> materials
                            </li>
                            <li className="rounded-xl border border-gray-100 bg-white px-4 py-3">
                                <span className="font-semibold">Timely</span> project delivery
                            </li>
                        </ul>

                        <div className="mt-7">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-xl bg-[#ee9d54] px-6 py-3 text-sm font-semibold text-white hover:opacity-95"
                            >
                                Share Requirement
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
                        Select a category to view details and request specifications.
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
                                <h3 className="text-base font-extrabold text-gray-900">
                                    {p.title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-gray-600">
                                    {p.oneLine}
                                </p>

                                <div className="mt-4">
                                    <a
                                        href="/contact"
                                        className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        Enquire Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section className="border-t border-gray-100 bg-gray-50">
                <div className="mx-auto max-w-300 px-4 py-10">
                    <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
                        <div>
                            <h3 className="text-lg font-extrabold text-gray-900">
                                Need a custom fabrication or specification?
                            </h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Share your drawing / requirement—our team will get back with the best solution.
                            </p>
                        </div>
                        <a
                            href="tel:919574011132"
                            className="inline-flex items-center justify-center rounded-xl bg-[#ee9d54] px-6 py-3 text-sm font-semibold text-white hover:opacity-95"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
