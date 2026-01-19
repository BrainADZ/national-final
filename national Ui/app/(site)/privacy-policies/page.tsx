/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

const POLICY = {
  effectiveDate: "01 January 2026",
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
      id: "scope",
      title: "1) Scope",
      content: (
        <p className="leading-relaxed text-slate-700">
          This Policy applies to personal information collected through our website and contact or
          quote forms, email, phone, or WhatsApp communications initiated via website details, and
          business inquiries, vendor or customer onboarding, and project discussions. It does not
          apply to third party websites you may access through links on our site.
        </p>
      ),
    },
    {
      id: "information-we-collect",
      title: "2) Information we collect",
      content: (
        <div className="space-y-5 text-slate-700">
          <p className="leading-relaxed">
            Depending on how you interact with us, we may collect the following categories of
            information.
          </p>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">A. Information you provide</p>
            <p className="mt-2 leading-relaxed text-slate-700">
              We may collect your name, company name, designation, email address, phone number,
              inquiry details such as requirements, specifications, timelines, and location or site
              details if you share them, documents you send such as drawings, datasheets, BOQ or BOM,
              and technical notes, and billing or shipping details where relevant for orders or
              projects.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">B. Automatically collected information</p>
            <p className="mt-2 leading-relaxed text-slate-700">
              We may collect device and browser type, operating system, IP address, approximate
              location such as city or region, referral source, pages viewed, time spent, clicks,
              and other interaction data. We may also use cookies and similar technologies where
              enabled.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">C. Business communications</p>
            <p className="mt-2 leading-relaxed text-slate-700">
              We may keep records of correspondence, meeting notes, and call logs where lawful and
              necessary for business continuity, quality, or dispute resolution.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "how-we-use",
      title: "3) How we use your information",
      content: (
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>Respond to inquiries and provide quotations.</li>
          <li>Understand technical requirements and propose solutions.</li>
          <li>Communicate about orders, projects, delivery schedules, and support.</li>
          <li>Improve our website and services.</li>
          <li>Maintain security and prevent misuse.</li>
          <li>Protect our rights.</li>
          <li>Comply with legal, accounting, tax, and regulatory requirements.</li>
        </ul>
      ),
    },
    {
      id: "legal-basis",
      title: "4) Legal basis where applicable",
      content: (
        <p className="leading-relaxed text-slate-700">
          Where privacy laws require a legal basis, we process personal information based on
          consent, contractual necessity, legitimate interests, or legal obligation, depending on
          the context and purpose.
        </p>
      ),
    },
    {
      id: "cookies",
      title: "5) Cookies and similar technologies",
      content: (
        <div className="space-y-3 text-slate-700">
          <p className="leading-relaxed">
            We may use cookies to ensure website functionality, remember preferences, and understand
            traffic patterns and performance when analytics are enabled.
          </p>
          <p className="leading-relaxed">
            You can control cookies through your browser settings. Blocking cookies may impact some
            website functionality.
          </p>
        </div>
      ),
    },
    {
      id: "sharing",
      title: "6) Sharing and disclosure",
      content: (
        <div className="space-y-3 text-slate-700">
          <p className="font-semibold text-slate-900">We do not sell your personal information.</p>
          <p className="leading-relaxed">
            We may share your information with service providers such as hosting, IT support, email
            tools, and analytics providers only as needed to operate our business and website.
          </p>
          <p className="leading-relaxed">
            We may also share information with project execution partners such as transport or
            logistics providers, installation or erection support teams, and subcontractors when
            required to fulfill your request or contract.
          </p>
          <p className="leading-relaxed">
            We may disclose information if required by law or legal process, or when needed to
            protect our rights, investigate fraud, or ensure safety.
          </p>
          <p className="leading-relaxed">
            Where appropriate, sharing is limited to the minimum necessary and subject to
            confidentiality obligations.
          </p>
        </div>
      ),
    },
    {
      id: "international",
      title: "7) International data transfers",
      content: (
        <p className="leading-relaxed text-slate-700">
          If your information is processed outside your country or region, for example through cloud
          hosting, we take reasonable steps to ensure appropriate safeguards consistent with
          applicable law.
        </p>
      ),
    },
    {
      id: "security",
      title: "8) Data security",
      content: (
        <p className="leading-relaxed text-slate-700">
          We use reasonable administrative, technical, and organizational measures to protect
          personal information from unauthorized access, alteration, disclosure, or destruction.
          However, no internet transmission or storage system is completely secure, and you share
          information at your own risk.
        </p>
      ),
    },
    {
      id: "retention",
      title: "9) Data retention",
      content: (
        <p className="leading-relaxed text-slate-700">
          We retain personal information only for as long as necessary to respond to your inquiry,
          manage ongoing business relationships and projects, comply with legal and accounting
          requirements, and maintain records for warranty, dispute resolution, and audit. Retention
          periods may vary depending on the type of information and applicable obligations.
        </p>
      ),
    },
    {
      id: "rights",
      title: "10) Your rights and choices",
      content: (
        <p className="leading-relaxed text-slate-700">
          Subject to applicable law, you may request access to the personal information we hold
          about you, correction of inaccurate information, deletion of your information where lawful
          and feasible, withdrawal of consent where processing is based on consent, and opting out of
          promotional communications if any. We may need to verify your identity before processing
          your request.
        </p>
      ),
    },
    {
      id: "children",
      title: "11) Children’s privacy",
      content: (
        <p className="leading-relaxed text-slate-700">
          Our website and services are intended for business and industrial users and are not
          directed to children. We do not knowingly collect personal information from children. If
          you believe a child has provided us personal information, please contact us and we will
          take appropriate steps.
        </p>
      ),
    },
    {
      id: "third-party",
      title: "12) Third party links",
      content: (
        <p className="leading-relaxed text-slate-700">
          Our website may contain links to third party sites. We are not responsible for their
          privacy practices. Please review their privacy policies before providing any information
          to them.
        </p>
      ),
    },
    {
      id: "changes",
      title: "13) Changes to this Privacy Policy",
      content: (
        <p className="leading-relaxed text-slate-700">
          We may update this Privacy Policy from time to time. The updated version will be posted on
          this page with a revised Effective Date. Continued use of the website after updates means
          you accept the revised Policy.
        </p>
      ),
    },
    {
      id: "contact",
      title: "14) Contact",
      content: (
        <div className="space-y-2 text-slate-700">
          <p className="leading-relaxed">For privacy questions or requests, please contact:</p>
          <p className="text-sm">
            <span className="font-semibold text-slate-900">Email:</span>{" "}
            <a
              className="text-[#e78f3d] underline underline-offset-4 hover:text-[#d97927]"
              href={`mailto:${POLICY.email}`}
            >
              {POLICY.email}
            </a>
          </p>
          <p className="text-sm">
            <span className="font-semibold text-slate-900">Phone:</span>{" "}
            <a
              className="text-[#e78f3d] underline underline-offset-4 hover:text-[#d97927]"
              href={`tel:${POLICY.phone.replace(/\s/g, "")}`}
            >
              {POLICY.phone}
            </a>
          </p>
        </div>
      ),
    },
  ];

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* Subtle grid background like your site */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-100"
      >
        {/* grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-size-[48px_48px]" />
        {/* right warm tint */}
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
            Privacy Policy
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-200">
            Effective Date: <span className="font-semibold text-white">{POLICY.effectiveDate}</span>
          </p>

          <div className="mt-5 max-w-3xl space-y-3 text-gray-200">
            <p className="leading-relaxed">
              This Privacy Policy explains how{" "}
              <span className="font-semibold text-white">{POLICY.company}</span>{" "}
              collects, uses, shares, and protects personal information when you use our website,
              contact us, or request information or quotations.
            </p>
            <p className="leading-relaxed">
              By using this website, you agree to the practices described in this Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-4 pb-14 lg:pb-20">
        <div className="mx-auto max-w-350">
          <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
            {/* Sticky TOC (clean card like your product section UI) */}
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
                      href={`mailto:${POLICY.email}`}
                    >
                      {POLICY.email}
                    </a>
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    <span className="font-semibold text-slate-900">Phone:</span>{" "}
                    <a
                      className="text-[#e78f3d] underline underline-offset-4 hover:text-[#d97927]"
                      href={`tel:${POLICY.phone.replace(/\s/g, "")}`}
                    >
                      {POLICY.phone}
                    </a>
                  </p>
                </div>
              </div>
            </aside>

            {/* Policy Body */}
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

                    {/* small accent bar (like your orange highlight vibe) */}
                    <span
                      aria-hidden="true"
                      className="mt-1 hidden h-2 w-14 rounded-full bg-[#ee9d54] md:block"
                    />
                  </div>

                  <div className="mt-3">{s.content}</div>
                </section>
              ))}

              {/* bottom contact card (matches orange accent strip) */}
              <div className="rounded-2xl border border-[#ee9d54]/40 bg-linear-to-r from-[#fff7f0] to-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  Need help with privacy requests?
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Reach out at{" "}
                  <a
                    className="text-[#e78f3d] underline underline-offset-4 hover:text-[#d97927]"
                    href={`mailto:${POLICY.email}`}
                  >
                    {POLICY.email}
                  </a>{" "}
                  or call{" "}
                  <a
                    className="text-[#e78f3d] underline underline-offset-4 hover:text-[#d97927]"
                    href={`tel:${POLICY.phone.replace(/\s/g, "")}`}
                  >
                    {POLICY.phone}
                  </a>
                  .
                </p>

                {/* optional CTA pill (same vibe as "VIEW ALL") */}
                <div className="mt-4">
                  <a
                    href={`mailto:${POLICY.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:border-slate-400"
                  >
                    Contact via Email <span aria-hidden="true">→</span>
                  </a>
                   <a
                    href={`tel:${POLICY.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:border-slate-400"
                  >
                    Call Now <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              {/* mobile mini toc */}
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
  );
}
