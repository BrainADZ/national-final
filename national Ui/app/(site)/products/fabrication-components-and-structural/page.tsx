/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { CATEGORY_NAME, productDetails } from "./productDetails";

const products = Object.values(productDetails);
const featuredProduct = productDetails["base-plates"];

export const metadata = buildMetadata({
  title: "Fabrication Components & Structural | National Engineers",
  description:
    "Explore fabrication components and structural assemblies by NESF, including base plates, pipe saddles, jack stools, wear liners, and custom heavy structures.",
  path: "/products/fabrication-components-and-structural",
  image: featuredProduct.image,
  keywords: [
    "fabrication components manufacturer",
    "structural steel fabrication",
    "base plate fabrication",
    "pipe saddles",
    "heavy structural fabrication",
  ],
});

export default function FabricationComponentsStructuralPage() {
  return (
    <main className="bg-white text-gray-950">
      <section className="relative isolate overflow-hidden bg-black">
        <img src={featuredProduct.image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/75 to-black/40" />
        <div className="relative mx-auto flex min-h-105 max-w-425 flex-col justify-end px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <nav className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="px-2 text-white/35">/</span>
            <Link href="/products" className="hover:text-white">Products</Link>
          </nav>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#ee9d54]">Product Category</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold text-white sm:text-5xl lg:text-6xl">{CATEGORY_NAME}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            Precision fabrication components and heavy structural assemblies built around drawings, loads, installation needs, and project quality requirements.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-425 px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ee9d54]">Product Range</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Explore Fabrication Components & Structural</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.pagePath} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <img src={product.image} alt={product.imageAlt} className="aspect-4/3 w-full object-cover" style={{ objectPosition: product.imagePosition ?? "center" }} />
              <div className="p-6">
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{product.description}</p>
                <Link href={product.pagePath} className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#ee9d54] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#d88c45]">
                  View Product
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
