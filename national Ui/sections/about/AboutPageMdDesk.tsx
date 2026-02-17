/* eslint-disable @next/next/no-img-element */

export default function AboutPageMdDeskSection() {
  return (
    <section className="relative bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-425 px-4 lg:px-6">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ee9d54]">
            MD&apos;S DESK
          </p>

          <div className="mt-3 flex items-center justify-between gap-6">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Message from the Managing Director
            </h2>
          </div>
        </div>

        {/* Premium unified panel */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-[0_18px_50px_rgba(17,24,39,0.08)]">
          <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-[360px_1fr] lg:gap-12">
            {/* LEFT: Compact profile block */}
            <aside className="lg:pt-2">
              {/* photo */}
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
                <div className="h-90 w-full">
                  <img
                    src="/MD.jpg"
                    alt="Mustafa Patrawala - Managing Director"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* identity */}
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  Mustafa Patrawala
                </h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ee9d54]">
                  Managing Director
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  National Engineers &amp; Steel Fabricators (NESF)
                </p>

                {/* small trust chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700">
                    Since 1990
                  </span>
                  <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700">
                    Surat, India
                  </span>
                  <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700">
                    Engineered Steel Solutions
                  </span>
                </div>
              </div>
            </aside>

            {/* RIGHT: Message */}
            <article className="lg:pr-2">
              {/* elegant quote strip */}
              <div className="relative mb-7 rounded-2xl border border-orange-100 bg-orange-50/60 px-6 py-5">
                <div className="absolute left-5 top-3 text-5xl leading-none text-orange-200">
                  “
                </div>
                <p className="pl-9 text-sm font-semibold text-gray-900 md:text-base">
                  Quality work is remembered long after the project is completed.
                </p>
              </div>

              {/* body */}
              <div className="space-y-5 text-[15px] leading-relaxed text-gray-700 text-justify">
                <p className="text-sm font-semibold text-gray-900 md:text-base">
                  Mustafa Patrawala – Managing Director
                </p>

                <p>
                  Since our establishment in Surat in{" "}
                  <span className="font-semibold text-gray-900">1990</span>, we
                  have focused on delivering engineered steel solutions that
                  combine innovation, disciplined fabrication practices, and
                  strong project management.
                </p>

                <p>
                  From pressure vessels and heat exchangers to complex
                  custom-built heavy equipment, every project reflects our
                  commitment to safety, compliance, and reliability.
                </p>

                <p>
                  We value the long-term trust of our clients and continuously
                  invest in technology, systems, and people to raise our
                  standards further.
                </p>
              </div>

              {/* signature row */}
              <div className="mt-9 border-t border-gray-200 pt-6">
                <div className="h-0.5 w-24 bg-[#ee9d54]" />
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-900">
                    Mustafa Patrawala
                  </p>
                  <p className="text-xs text-gray-600">Managing Director</p>
                  <p className="text-xs font-medium text-gray-500">
                    National Engineers &amp; Steel Fabricators (NESF)
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

