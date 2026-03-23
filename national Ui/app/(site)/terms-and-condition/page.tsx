/* eslint-disable @next/next/no-img-element */


import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Terms and Conditions | National Engineers & Steel Fabricator",
  description:
    "Read the Terms and Conditions of National Engineers & Steel Fabricators to understand the rules, policies, website usage guidelines, and user responsibilities.",
  alternates: {
    canonical: "https://nationalengrs.com/terms-and-condition",
  },
};
const termsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://nationalengrs.com/terms-and-condition#webpage",
  "url": "https://nationalengrs.com/terms-and-condition",
  "name": "Terms and Conditions | National Engineers & Steel Fabricators",
  "headline": "Terms and Conditions",
  "description": "Terms and Conditions governing the use of the National Engineers & Steel Fabricators website and related services.",
  "dateModified": "2026-03-16",
  "inLanguage": "en",
  "isPartOf": {
    "@id": "https://nationalengrs.com/#website"
  },
  "about": {
    "@type": "Organization",
    "@id": "https://nationalengrs.com/#organization",
    "name": "National Engineers & Steel Fabricators"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://nationalengrs.com/#organization",
    "name": "National Engineers & Steel Fabricators"
  }
};

const TOS = {
  effectiveDate: "16th March 2026",
  company: "National Engineers & Steel Fabricators (NESF)",
  email: "admin@nationalengrs.com",
  phone: "+91 95740 11132",
};

const SECTIONS: Array<{
  id: string;
  title: string;
  content: React.ReactNode;
}> = [
    {
      id: "introduction",
      title: "1) Introduction",
      content: (
        <p className="leading-relaxed text-slate-700">
          Welcome to the official website of National Engineers and Steel Fabricators.
          These Terms and Conditions govern your access to and use of our website,
          products, and services. By accessing or using this website, you agree to
          comply with and be bound by these terms. If you do not agree with any part
          of these terms, please discontinue the use of this website immediately.
        </p>
      ),
    },
    {
      id: "about-company",
      title: "2) About the Company",
      content: (
        <p className="leading-relaxed text-slate-700">
          National Engineers and Steel Fabricators is a professional engineering and
          fabrication company specializing in the design and manufacturing of industrial
          equipment such as air receiver tanks, pressure vessels, steel fabrication
          structures, and related engineering solutions. Our website provides information
          about our products, services, and capabilities for business clients, partners,
          and potential customers.
        </p>
      ),
    },
    {
      id: "website-use",
      title: "3) Website Use",
      content: (
        <p className="leading-relaxed text-slate-700">
          The content on this website is provided for general information and business
          purposes only. You may browse the website, view product information, and
          contact us for inquiries. However, you may not reproduce, distribute, modify,
          or republish any part of the website without written permission from
          National Engineers and Steel Fabricators.
        </p>
      ),
    },
    {
      id: "eligibility",
      title: "4) Eligibility",
      content: (
        <p className="leading-relaxed text-slate-700">
          By using this website, you confirm that you are at least 18 years old or
          accessing the website under the supervision of a legal guardian or authorized
          organization representative. Businesses, contractors, engineers, and
          procurement professionals may use the website to explore our fabrication
          capabilities and request quotations.
        </p>
      ),
    },
    {
      id: "product-information",
      title: "5) Product Information and Accuracy",
      content: (
        <p className="leading-relaxed text-slate-700">
          We strive to ensure that all information provided on this website is accurate
          and up to date. However, specifications, product descriptions, images, and
          technical details are subject to change without notice. The information
          provided on the website should not be considered as a legally binding
          engineering specification unless confirmed through official quotations
          or documentation provided by our company.
        </p>
      ),
    },
    {
      id: "quotations-orders",
      title: "6) Quotations and Orders",
      content: (
        <p className="leading-relaxed text-slate-700">
          Any quotation provided by National Engineers and Steel Fabricators through
          the website, email, or other communication channels is subject to confirmation
          and acceptance by the company. Orders are considered valid only after
          formal approval, technical confirmation, and agreement on project scope,
          pricing, and delivery timelines.
        </p>
      ),
    },
    {
      id: "engineering-responsibility",
      title: "7) Engineering Responsibility",
      content: (
        <p className="leading-relaxed text-slate-700">
          All engineering products and fabricated equipment must be used in accordance
          with recommended industry standards and safety guidelines. Customers and
          contractors are responsible for ensuring that products are installed,
          maintained, and operated by qualified professionals. The company shall not
          be liable for damages resulting from improper installation, misuse, or
          unauthorized modification of equipment.
        </p>
      ),
    },
    {
      id: "intellectual-property",
      title: "8) Intellectual Property Rights",
      content: (
        <p className="leading-relaxed text-slate-700">
          All content on this website, including text, graphics, logos, product designs,
          technical information, and images, is the intellectual property of
          National Engineers and Steel Fabricators unless otherwise stated.
          Unauthorized use, duplication, or reproduction of this content is strictly
          prohibited without prior written consent from the company.
        </p>
      ),
    },
    {
      id: "third-party-links",
      title: "9) Third-Party Links",
      content: (
        <p className="leading-relaxed text-slate-700">
          Our website may contain links to third-party websites for informational
          purposes. These external websites are not controlled by National Engineers
          and Steel Fabricators, and we are not responsible for their content,
          privacy practices, or services. Accessing third-party websites is at
          your own risk.
        </p>
      ),
    },
    {
      id: "limitation-liability",
      title: "10) Limitation of Liability",
      content: (
        <p className="leading-relaxed text-slate-700">
          National Engineers and Steel Fabricators shall not be liable for any direct,
          indirect, incidental, or consequential damages arising from the use or
          inability to use this website or its content. This includes but is not
          limited to business losses, data loss, or operational interruptions.
        </p>
      ),
    },
    {
      id: "indemnification",
      title: "11) Indemnification",
      content: (
        <p className="leading-relaxed text-slate-700">
          By using this website, you agree to indemnify and hold harmless
          National Engineers and Steel Fabricators, its employees, partners,
          and affiliates from any claims, liabilities, damages, or expenses
          arising from your misuse of the website or violation of these terms.
        </p>
      ),
    },
    {
      id: "privacy",
      title: "12) Privacy",
      content: (
        <p className="leading-relaxed text-slate-700">
          Your use of this website is also subject to our Privacy Policy,
          which explains how we collect, use, and protect your information.
          By using this website, you consent to the practices described
          in the Privacy Policy.
        </p>
      ),
    },
    {
      id: "changes-to-terms",
      title: "13) Changes to Terms",
      content: (
        <p className="leading-relaxed text-slate-700">
          National Engineers and Steel Fabricators reserves the right to
          modify or update these Terms and Conditions at any time without
          prior notice. Any changes will be posted on this page, and
          continued use of the website will constitute acceptance
          of the updated terms.
        </p>
      ),
    },
    {
      id: "governing-law",
      title: "14) Governing Law",
      content: (
        <p className="leading-relaxed text-slate-700">
          These Terms and Conditions shall be governed by and interpreted
          in accordance with the laws of India. Any disputes arising from
          the use of this website shall be subject to the jurisdiction
          of the competent courts where the company operates.
        </p>
      ),
    },
    {
      id: "contact",
      title: "15) Contact",
      content: (
        <div className="space-y-2 text-slate-700">
          <p className="leading-relaxed">If you have any questions regarding these Terms and Conditions,
            please contact us using the following details:</p>
          <p className="text-sm font-medium text-slate-900">
            National Engineers and Steel Fabricators
          </p>
          <p className="text-sm">
            <span className="font-semibold text-slate-900">Email:</span>{" "}
            <a
              className="text-[#e78f3d] underline underline-offset-4 hover:text-[#d97927]"
              href={`mailto:${TOS.email}`}
            >
              {TOS.email}
            </a>
          </p>

          <p className="text-sm">
            <span className="font-semibold text-slate-900">Phone:</span>{" "}
            <a
              className="text-[#e78f3d] underline underline-offset-4 hover:text-[#d97927]"
              href={`tel:${TOS.phone.replace(/\s/g, "")}`}
            >
              {TOS.phone}
            </a>
          </p>
          <p className="text-sm">
            <span className="font-semibold text-slate-900">Website:</span>{" "}
            <a
              className="text-[#e78f3d] underline underline-offset-4 hover:text-[#d97927]"
              href="https://nationalengrs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://nationalengrs.com
            </a>
          </p>
          <p className="leading-relaxed">
            We will make reasonable efforts to respond to your inquiries
            as quickly as possible.
          </p>
        </div>
      ),
    },
  ];

export default function TermsOfServicePage() {
  return (
    <>     <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
    />

      <main className="relative overflow-hidden bg-white">
        {/* Subtle grid background like your site */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-size-[48px_48px]" />
          <div className="absolute right-0 top-0 h-full w-105 bg-linear-to-l from-[#f7e4d5] to-transparent" />
        </div>

        {/* HERO with same theme */}
        <section className="relative overflow-hidden px-4 py-16 lg:py-20 mb-4">
          {/* Background Image + Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070"
              alt="Engineering background"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/85" />
          </div>

          <div className="relative z-10 mx-auto max-w-425 px-2 lg:px-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
              Legal
            </p>

            <h1 className="mt-2 text-3xl font-bold text-white lg:text-5xl">
              Terms and <span className="text-[#e78f3d]">Conditions</span>
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-200">
              Last Updated:  <span className="font-semibold text-white">{TOS.effectiveDate}</span>
            </p>

            <div className="mt-5 max-w-3xl space-y-3 text-gray-200">
              <p className="leading-relaxed">
                These Terms & Condition govern your access to and use of the website of{" "}
                <span className="font-semibold text-white">{TOS.effectiveDate}</span>{" "}
                , including any
                pages, forms, and services provided through the website.
              </p>
              <p className="leading-relaxed">
                By accessing or using this website, you agree to be bound by these Terms. If you do
                not agree, you must not use the website.
              </p>
            </div>
          </div>
        </section>
        {/* CONTENT */}
        <section className="px-4 pb-14 lg:pb-20">
          <div className="mx-auto max-w-350">
            <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
              {/* Sticky TOC */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e78f3d]">
                    On this page
                  </p>

                  <nav className="mt-4 space-y-1.5">
                    {SECTIONS.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="block rounded-xl border border-transparent px-3 py-2 text-sm text-slate-700 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                      >
                        {s.title}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                      Contact
                    </p>
                    <p className="mt-2 text-sm text-slate-700">
                      <span className="font-semibold text-slate-900">Email:</span>{" "}
                      <a
                        className="text-[#e78f3d] underline underline-offset-4 hover:text-[#d97927]"
                        href={`mailto:${TOS.email}`}
                      >
                        {TOS.email}
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-slate-700">
                      <span className="font-semibold text-slate-900">Phone:</span>{" "}
                      <a
                        className="text-[#e78f3d] underline underline-offset-4 hover:text-[#d97927]"
                        href={`tel:${TOS.phone.replace(/\s/g, "")}`}
                      >
                        {TOS.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </aside>

              {/* Body */}
              <div className="space-y-6">
                {SECTIONS.map((s) => (
                  <section
                    key={s.id}
                    id={s.id}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-lg font-extrabold tracking-tight text-slate-900 md:text-xl">
                        {s.title}
                      </h2>
                      <span
                        aria-hidden="true"
                        className="mt-1 hidden h-2 w-14 rounded-full bg-[#ee9d54] md:block"
                      />
                    </div>

                    <div className="mt-3">{s.content}</div>
                  </section>
                ))}

                {/* bottom contact card */}
                <div className="rounded-2xl border border-[#ee9d54]/40 bg-linear-to-r from-[#fff7f0] to-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">
                    Need help regarding these Terms?
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    Email{" "}
                    <a
                      className="text-[#e78f3d] underline underline-offset-4 hover:text-[#d97927]"
                      href={`mailto:${TOS.email}`}
                    >
                      {TOS.email}
                    </a>{" "}
                    or call{" "}
                    <a
                      className="text-[#e78f3d] underline underline-offset-4 hover:text-[#d97927]"
                      href={`tel:${TOS.phone.replace(/\s/g, "")}`}
                    >
                      {TOS.phone}
                    </a>
                    .
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={`mailto:${TOS.email}`}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:border-slate-400"
                    >
                      Contact via Email <span aria-hidden="true">→</span>
                    </a>

                    <a
                      href={`tel:${TOS.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:border-slate-400"
                    >
                      Call Now <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>

                {/* Mobile TOC */}
                <div className="lg:hidden">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e78f3d]">
                      Jump to section
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {SECTIONS.map((s) => (
                        <a
                          key={s.id}
                          href={`#${s.id}`}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-800 hover:bg-slate-100"
                        >
                          {s.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* end */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
