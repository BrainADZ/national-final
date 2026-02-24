/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

const TOS = {
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
      id: "about",
      title: "1) About NESF",
      content: (
        <p className="leading-relaxed text-slate-700">
          National Engineers & Steel Fabricators (NESF) provides engineering and steel fabrication
          related services, which may include design support, detailing, manufacturing, supply,
          erection support, commissioning support, and maintenance services, subject to project scope
          and written agreement.
        </p>
      ),
    },
    {
      id: "eligibility",
      title: "2) Eligibility and permitted use",
      content: (
        <p className="leading-relaxed text-slate-700">
          You may use this website only for lawful purposes and for business or informational
          purposes. You agree not to misuse the website, interfere with its operation, attempt
          unauthorized access, or use the website to transmit harmful or illegal material.
        </p>
      ),
    },
    {
      id: "content-accuracy",
      title: "3) Website content and accuracy",
      content: (
        <p className="leading-relaxed text-slate-700">
          The content on this website is provided for general information and business communication.
          While we try to keep information accurate and updated, we do not guarantee that the website
          content is complete, error free, or always current. Product images, drawings,
          specifications, capacities, and timelines shown on the website are indicative and may vary
          based on project requirements and revisions.
        </p>
      ),
    },
    {
      id: "quotes",
      title: "4) Quotes, orders, and contracts",
      content: (
        <p className="leading-relaxed text-slate-700">
          Any request for quotation submitted through the website does not create a contract. Prices,
          timelines, technical scope, and delivery terms become binding only when confirmed in writing
          by NESF through an official quotation and accepted purchase order or work order, or another
          written agreement signed by authorized representatives.
        </p>
      ),
    },
    {
      id: "engineering",
      title: "5) Engineering and technical responsibility",
      content: (
        <p className="leading-relaxed text-slate-700">
          You are responsible for confirming that any product or service is suitable for your
          application, site conditions, and applicable standards and safety requirements. Nothing on
          the website should be treated as certified engineering advice for a specific project. Final
          designs and deliverables will be governed by the approved drawings, specifications, and
          project documents.
        </p>
      ),
    },
    {
      id: "ip",
      title: "6) Intellectual property",
      content: (
        <p className="leading-relaxed text-slate-700">
          All content on this website, including text, graphics, logos, photographs, brochures, and
          documents, is owned by or licensed to NESF and is protected by applicable laws. You may
          view and download content only for internal business evaluation. You may not copy, modify,
          republish, distribute, or commercially use any website content without prior written
          permission from NESF.
        </p>
      ),
    },
    {
      id: "third-party-links",
      title: "7) Third party links",
      content: (
        <p className="leading-relaxed text-slate-700">
          This website may contain links to third party websites for convenience. NESF does not
          control or endorse these websites and is not responsible for their content, security, or
          practices. Accessing third party sites is at your own risk.
        </p>
      ),
    },
    {
      id: "disclaimers",
      title: "8) Disclaimers",
      content: (
        <p className="leading-relaxed text-slate-700">
          This website is provided on an “as is” and “as available” basis. To the maximum extent
          permitted by law, NESF disclaims all warranties, whether express or implied, including
          implied warranties of merchantability, fitness for a particular purpose, non infringement,
          and availability.
        </p>
      ),
    },
    {
      id: "liability",
      title: "9) Limitation of liability",
      content: (
        <p className="leading-relaxed text-slate-700">
          To the maximum extent permitted by applicable law, NESF will not be liable for any direct
          or indirect losses arising from your use of, or inability to use, this website or reliance
          on its content. This includes any loss of profits, business interruption, loss of data,
          loss of goodwill, or consequential damages, even if NESF has been advised of the
          possibility of such damages.
        </p>
      ),
    },
    {
      id: "indemnity",
      title: "10) Indemnity",
      content: (
        <p className="leading-relaxed text-slate-700">
          You agree to indemnify and hold harmless NESF from any claims, damages, liabilities, costs,
          and expenses, including reasonable legal fees, arising from your use of the website, your
          violation of these Terms, or your infringement of any rights of any third party.
        </p>
      ),
    },
    {
      id: "privacy",
      title: "11) Privacy",
      content: (
        <p className="leading-relaxed text-slate-700">
          Your use of this website is also subject to our Privacy Policy. Please review it to
          understand how we collect and use information.
        </p>
      ),
    },
    {
      id: "changes",
      title: "12) Changes to these Terms",
      content: (
        <p className="leading-relaxed text-slate-700">
          We may update these Terms from time to time. The updated version will be posted on this
          page with a revised Effective Date. Continued use of the website after the update means
          you accept the revised Terms.
        </p>
      ),
    },
    {
      id: "law",
      title: "13) Governing law and jurisdiction",
      content: (
        <p className="leading-relaxed text-slate-700">
          These Terms will be governed by applicable laws. Any disputes will be subject to the
          jurisdiction of competent courts where NESF has its registered office or conducts business,
          unless otherwise required by law.
        </p>
      ),
    },
    {
      id: "contact",
      title: "14) Contact",
      content: (
        <div className="space-y-2 text-slate-700">
          <p className="leading-relaxed">For any questions about these Terms, please contact:</p>

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
        </div>
      ),
    },
  ];

export default function TermsOfServicePage() {
  return (
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
            Terms of <span className="text-[#e78f3d]">Service</span>
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-200">
            Effective Date: <span className="font-semibold text-white">{TOS.effectiveDate}</span>
          </p>

          <div className="mt-5 max-w-3xl space-y-3 text-gray-200">
            <p className="leading-relaxed">
              These Terms of Service govern your access to and use of the website of{" "}
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
  );
}
