/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileText,
  PhoneCall,
} from "lucide-react";
import ProductEnquiryForm from "@/components/ProductEnquiryForm";
import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/seo";
import {
  CATEGORY_NAME as DEFAULT_CATEGORY_NAME,
  pressureVesselNav,
  type ProductDetail,
} from "../pressure-vessels-and-storage/productDetails";

type ProductNavItem = {
  label: string;
  href: string;
};

type ProductDetailLayoutProps = {
  product: ProductDetail;
  categoryName?: string;
  categoryPath?: string;
  navItems?: ProductNavItem[];
};

export default function ProductDetailLayout({
  product,
  categoryName = DEFAULT_CATEGORY_NAME,
  categoryPath,
  navItems = pressureVesselNav,
}: ProductDetailLayoutProps) {
  const resolvedCategoryPath =
    categoryPath || product.pagePath.split("/").slice(0, -1).join("/") || "/products";

  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": `${absoluteUrl(product.pagePath)}#product`,
      name: product.title,
      description: product.description,
      image: absoluteUrl(product.image),
      category: categoryName,
      url: absoluteUrl(product.pagePath),
      brand: {
        "@type": "Brand",
        name: SITE_NAME,
      },
      manufacturer: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${absoluteUrl(product.pagePath)}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Products",
          item: absoluteUrl("/products"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: categoryName,
          item: absoluteUrl(resolvedCategoryPath),
        },
        {
          "@type": "ListItem",
          position: 4,
          name: product.title,
          item: absoluteUrl(product.pagePath),
        },
      ],
    },
  ];

  if (product.faqs?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${absoluteUrl(product.pagePath)}#faq`,
      mainEntity: product.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <main className="bg-white text-gray-950">
        <section className="relative isolate overflow-hidden bg-black">
          <img
            src={product.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-[0.55]"
            style={{ objectPosition: product.imagePosition ?? "center" }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/35" />
          <div className="absolute inset-0 bg-[#ee9d54]/10 mix-blend-overlay" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white to-transparent" />

          <div className="relative mx-auto flex min-h-125 max-w-425 flex-col justify-end px-4 pb-16 pt-20 sm:px-6 lg:min-h-140 lg:px-8 lg:pb-20">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/75" 
            >
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="transition hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/35">
                  /
                </li>
                <li>
                  <Link href="/products" className="transition hover:text-white">
                    Products
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/35">
                  /
                </li>
                <li>
                  <Link href={resolvedCategoryPath} className="transition hover:text-white">
                    {categoryName}
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/35">
                  /
                </li>
                <li className="text-[#ee9d54]">{product.title}</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ee9d54]">
                {categoryName}
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                {product.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                {product.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#enquiry"
                  className="inline-flex items-center gap-2 rounded-md bg-[#ee9d54] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d88c45]"
                >
                  Request Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-white hover:bg-white hover:text-black"
                >
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-425 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)]">
            <aside className="self-start lg:sticky lg:top-22">
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <p className="px-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#ee9d54]">
                  Product Range
                </p>
                <h2 className="px-2 pt-2 text-xl font-bold text-gray-950">
                  {categoryName}
                </h2>

                <div className="mt-5 space-y-1">
                  {navItems.map((item) => {
                    const isActive = item.href === product.pagePath;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex items-start justify-between gap-3 rounded-md px-3 py-3 text-sm leading-6 transition ${
                          isActive
                            ? "bg-gray-950 font-semibold text-white"
                            : "text-gray-700 hover:bg-gray-50 hover:text-gray-950"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronRight
                          className={`mt-1 h-4 w-4 shrink-0 ${
                            isActive ? "text-[#ee9d54]" : "text-gray-400"
                          }`}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 rounded-lg bg-gray-950 p-5 text-white shadow-sm">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#ee9d54]">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold">Need a custom build?</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Send drawings, datasheets, or duty conditions. NESF will review the requirement and respond with the right fabrication scope.
                </p>
                <Link
                  href="tel:919574011132"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#ee9d54] hover:text-white"
                >
                  Call +91 95740 11132
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>

            <article className="min-w-0">
              <section className="grid gap-8 border-b border-gray-200 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-100 shadow-sm">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="aspect-4/3 w-full object-cover"
                    style={{ objectPosition: product.imagePosition ?? "center" }}
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ee9d54]">
                    Overview
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-gray-950 sm:text-4xl">
                    {product.headline}
                  </h2>
                  <div className="mt-5 space-y-4 text-[15px] leading-8 text-gray-600">
                    {product.overview.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-7 rounded-lg border border-[#ee9d54]/25 bg-[#fff7ef] p-5">
                    <p className="text-sm font-semibold leading-7 text-gray-950">
                      {product.note}
                    </p>
                  </div>

                  {product.quickFacts.length ? (
                    <dl className="mt-7 grid gap-3 sm:grid-cols-2">
                      {product.quickFacts.map((fact) => (
                        <div
                          key={fact.label}
                          className="rounded-md border border-gray-200 bg-gray-50 p-4"
                        >
                          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ee9d54]">
                            {fact.label}
                          </dt>
                          <dd className="mt-2 text-sm font-semibold leading-6 text-gray-950">
                            {fact.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}
                </div>
              </section>

              <section className="mt-10 grid gap-5 md:grid-cols-2">
                {product.sections.map((section) => {
                  const isWide = section.table || section.groups || section.links;

                  return (
                    <section
                      key={section.title}
                      className={`rounded-lg border border-gray-200 bg-white p-6 shadow-sm ${
                        isWide ? "md:col-span-2" : ""
                      }`}
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gray-950 text-[#ee9d54]">
                          <FileText className="h-4 w-4" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-950">
                          {section.title}
                        </h3>
                      </div>

                      {section.body?.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="mt-3 text-sm leading-7 text-gray-600"
                        >
                          {paragraph}
                        </p>
                      ))}

                      {section.bullets ? (
                        <ul className="mt-4 space-y-3">
                          {section.bullets.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-7 text-gray-700"
                            >
                              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#ee9d54]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      {section.table ? (
                        <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200">
                          <table className="w-full min-w-180 border-collapse text-left text-sm">
                            <thead className="bg-gray-950 text-white">
                              <tr>
                                {section.table.columns.map((column) => (
                                  <th
                                    key={column}
                                    scope="col"
                                    className="px-4 py-3 font-semibold"
                                  >
                                    {column}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              {section.table.rows.map((row) => (
                                <tr key={row.join("-")} className="align-top">
                                  {row.map((cell, index) => (
                                    <td
                                      key={`${row[0]}-${cell}`}
                                      className={`px-4 py-3 leading-6 ${
                                        index === 0
                                          ? "w-64 font-semibold text-gray-950"
                                          : "text-gray-700"
                                      }`}
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : null}

                      {section.groups ? (
                        <div className="mt-5 space-y-5">
                          {section.groups.map((group) => (
                            <div
                              key={group.title}
                              className="border-t border-gray-200 pt-5 first:border-t-0 first:pt-0"
                            >
                              <h4 className="text-base font-bold text-gray-950">
                                {group.title}
                              </h4>

                              {group.body?.map((paragraph) => (
                                <p
                                  key={paragraph}
                                  className="mt-2 text-sm leading-7 text-gray-600"
                                >
                                  {paragraph}
                                </p>
                              ))}

                              {group.bullets ? (
                                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                                  {group.bullets.map((item) => (
                                    <li
                                      key={item}
                                      className="flex gap-3 text-sm leading-7 text-gray-700"
                                    >
                                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#ee9d54]" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      ) : null}

                      {section.links ? (
                        <div className="mt-5 divide-y divide-gray-200 border-y border-gray-200">
                          {section.links.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex flex-col gap-1 py-4 text-sm transition hover:text-[#ee9d54] sm:flex-row sm:items-center sm:justify-between"
                            >
                              <span className="font-semibold text-gray-950">
                                {item.label}
                              </span>
                              {item.description ? (
                                <span className="text-gray-600">
                                  {item.description}
                                </span>
                              ) : null}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </section>
                  );
                })}
              </section>

              {product.faqs?.length ? (
                <section className="mt-10 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gray-950 text-[#ee9d54]">
                      <FileText className="h-4 w-4" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-950">
                      Frequently Asked Questions
                    </h2>
                  </div>

                  <div className="divide-y divide-gray-200">
                    {product.faqs.map((faq) => (
                      <div key={faq.question} className="py-5 first:pt-0 last:pb-0">
                        <h3 className="text-base font-bold text-gray-950">
                          {faq.question}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}

              <section className="mt-10 rounded-lg bg-gray-950 p-6 text-white sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ee9d54]">
                  Fabrication Support
                </p>
                <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      Built around your drawings, duty conditions, and inspection needs.
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
                      Share specifications, P&ID, MOC, dimensions, and testing requirements. The NESF team can align fabrication, documentation, and delivery around your project.
                    </p>
                  </div>
                  <Link
                    href="#enquiry"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#ee9d54] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d88c45]"
                  >
                    Start Enquiry
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </section>

              {product.contactDetails?.length ? (
                <section className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6">
                  <h2 className="text-xl font-bold text-gray-950">
                    Contact Details
                  </h2>
                  <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                    {product.contactDetails.map((item) => (
                      <div key={item.label}>
                        <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ee9d54]">
                          {item.label}
                        </dt>
                        <dd className="mt-1 text-sm font-semibold leading-6 text-gray-950">
                          {item.href ? (
                            <Link href={item.href} className="hover:text-[#ee9d54]">
                              {item.value}
                            </Link>
                          ) : (
                            item.value
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              ) : null}

              <section id="enquiry" className="scroll-mt-28 pt-10">
                <ProductEnquiryForm
                  title={product.enquiry.title}
                  subtitle={product.enquiry.subtitle}
                  productName={product.enquiry.productName}
                  buttonText={product.enquiry.buttonText}
                  className="border-[#ee9d54]/20"
                />
              </section>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
