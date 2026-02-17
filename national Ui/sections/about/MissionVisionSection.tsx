/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function MissionVisionSection() {
    return (
        <section className="bg-white py-6 lg:py-8">
            <div className="mx-auto max-w-425 pl-6 lg:pl-4 pr-5 md:pr-15">
                {/* TOP CONTENT */}
                <div data-aos="fade-up" className="text-left md:text-justify">
                    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ee9d54]">
                        Company Profile
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
                        About National Engineers & Steel Fabricators (NESF)
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
                        Established in 1990 in Surat, Gujarat, <Link
                            href="/"
                            className="font-bold no-underline hover:no-underline text-inherit"
                        >
                            National Engineers & Steel Fabricators (NESF)
                        </Link> is a leading industrial fabrication company in
                        Surat delivering end-to-end engineering and fabrication solutions for
                        critical industries. We build pressure vessels, air receivers, heat
                        exchangers, boilers, process piping skids, storage tanks and silos,
                        structural steelwork, and HVAC ducts.
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
                        Our disciplined Quality Assurance and Quality Control System,
                        qualified welding procedures, and safety-first culture drive
                        reliability and full traceability, while our planning and execution
                        practices support on-time delivery, all in accordance with
                        applicable industry codes and standards.
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
                        We serve clients across oil and gas, chemicals and petrochemicals,
                        fertilizers, effluent treatment, steel, shipbuilding and man-made
                        fibers, bringing practical engineering, transparent communication,
                        and a life-cycle-cost focus so assets run better, longer, and safer.
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
                        With over 35 years of expertise, we are recognized as engineering
                        fabrication experts specializing in precision-built pressure vessels,
                        heat exchangers, boilers, storage tanks, silos, structural steelwork,
                        HVAC ducts, and process piping systems.
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
                        Guided by continuous improvement, we deliver to spec and on schedule.
                        As Managing Director Mustafa Patrawala notes, “Our promise is simple:
                        do the basics right every time and keep raising the bar.” That
                        philosophy treats clients as partners, backed by clear drawings,
                        clean fabrication, and safe sites, use to deliver long-term value
                        equipment that is easy to operate, safe to maintain, and built to
                        last.
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
                        As a trusted custom fabrication manufacturer in Gujarat, we support
                        clients from concept design and detailing to manufacturing, erection,
                        and commissioning — ensuring quality, safety, and performance at
                        every stage.
                    </p>
                </div>

                {/* NEW SECTION: CAPABILITIES / INDUSTRIES / HEAVY ENGINEERING */}
                <div className="mt-12" data-aos="fade-up" data-aos-delay="120">
                    <div className="rounded-2xl border border-[#ee9d54]/30 bg-[#ee9d54]/5 p-6 md:p-8 text-left md:text-justify">
                        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ee9d54]">
                            Capabilities & Industries
                        </p>

                        {/* H2-1 */}
                        <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                            Steel Fabrication Specialists in India for Critical Industries
                        </h2>

                        <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
                            NESF operates as one of the experienced steel fabrication
                            specialists in India, serving industries such as:
                        </p>

                        <ul className="mt-4 space-y-2 text-sm text-gray-700 md:text-base">
                            {[
                                "Oil & Gas",
                                "Chemicals & Petrochemicals",
                                "Fertilizers",
                                "Effluent Treatment Plants",
                                "Steel & Metallurgy",
                                "Shipbuilding",
                                "Man-Made Fiber Industries",
                            ].map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ee9d54]" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
                            Our solutions are designed to improve operational efficiency,
                            reduce lifecycle costs, and enhance safety in demanding industrial
                            environments.
                        </p>

                        {/* Divider */}
                        <div className="my-8 h-px w-full bg-[#ee9d54]/25" />

                        {/* H2-2 */}
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            Process Equipment Fabrication Company with End-to-End Capabilities
                        </h2>

                        <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
                            As a dedicated process equipment fabrication company, we
                            manufacture:
                        </p>

                        <ul className="mt-4 space-y-2 text-sm text-gray-700 md:text-base">
                            {[
                                "Pressure Vessels",
                                "Heat Exchangers",
                                "Air Receivers",
                                "Multilayer Vessels",
                                "Boilers",
                                "Storage Tanks & Silos",
                                "Process Piping Skids",
                                "Structural Steel Fabrication",
                                "Custom Heavy Fabricated Equipment",
                            ].map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ee9d54]" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
                            Our integrated approach ensures seamless coordination between
                            engineering, procurement, fabrication, quality inspection, and
                            final installation.
                        </p>

                        {/* Divider */}
                        <div className="my-8 h-px w-full bg-[#ee9d54]/25" />

                        {/* H2-3 */}
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            Heavy Engineering Fabrication with Precision & Compliance
                        </h2>

                        <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
                            NESF is equipped to handle heavy engineering fabrication projects
                            requiring:
                        </p>

                        <ul className="mt-4 space-y-2 text-sm text-gray-700 md:text-base">
                            {[
                                "Qualified welding procedures (WPS/PQR)",
                                "Strict Quality Assurance & Quality Control systems",
                                "Material traceability",
                                "Dimensional accuracy",
                                "Compliance with national and international standards",
                            ].map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ee9d54]" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
                            Our disciplined project execution practices ensure on-time delivery
                            without compromising structural integrity or safety.
                        </p>
                    </div>
                </div>

                {/* QUALITY POLICY + EXCELLENCE */}
                <div
                    className="mt-12 grid items-center gap-6 md:grid-cols-[160px_1fr] text-justify"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="flex items-center justify-center rounded-2xl border border-[#ee9d54] p-6">
                        <div className="flex flex-col items-center gap-3">
                            <p className="text-sm font-semibold text-black">Quality Policy</p>

                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ee9d54]">
                                <img src="/icons/quality.svg" alt="Quality Policy" className="h-12 w-12" />
                            </div>
                        </div>
                    </div>

                    <div className="text-sm leading-relaxed text-black/85 md:text-base">
                        {/* NEW H2 */}
                        <h2 className="mb-3 text-xl font-bold text-gray-900">
                            Quality, Safety & Engineering Excellence Since 1990
                        </h2>

                        <p className="mb-3">Our strength lies in:</p>

                        <ul className="mb-4 space-y-2">
                            {[
                                "Robust Quality Management System",
                                "Skilled engineers and certified welders",
                                "Structured planning and execution",
                                "Transparent client communication",
                                "Continuous improvement culture",
                            ].map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ee9d54]" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mb-5">
                            Over the past three decades, we have earned repeat business through consistent
                            workmanship, dependable schedules, and safe project sites.
                        </p>

                        {/* EXISTING QUALITY POLICY CONTENT (kept) */}
                        <p>
                            We are committed to achieving total customer satisfaction by delivering
                            high-quality fabricated steel structures and components that meet customer
                            statutory and regulatory requirements. We ensure on-time delivery through
                            efficient resource utilization, process control, and continuous improvement
                            in our operations. Our success is driven by active employee participation,
                            teamwork, and a strong commitment to enhancing the effectiveness of our
                            Quality Management System.
                        </p>
                    </div>
                </div>


                {/* MISSION (MERGED) */}
                <div
                    className="mt-12 grid items-center gap-6 md:grid-cols-[160px_1fr] text-justify"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="flex items-center justify-center rounded-2xl border border-[#ee9d54] p-6">
                        <div className="flex flex-col items-center gap-3">
                            <p className="text-sm font-semibold text-black">Mission</p>

                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ee9d54]">
                                <img src="/icons/mission.svg" alt="Mission" className="h-12 w-12" />
                            </div>
                        </div>
                    </div>

                    <div className="text-sm leading-relaxed text-black/85 md:text-base">
                        {/* NEW H2 */}
                        <h2 className="mb-3 text-xl font-bold text-gray-900">Our Mission</h2>

                        {/* NEW SHORT POINT */}
                        <p className="mb-4">
                            To deliver high-quality, safe, and reliable engineering and fabrication solutions
                            that meet evolving industrial demands. We aim to provide precision-built equipment
                            while maintaining uncompromising attention to detail and strict adherence to
                            engineering standards.
                        </p>

                        {/* EXISTING LONG CONTENT (kept) */}
                        <p>
                            Our mission is to deliver high-quality, safe, and reliable engineering and
                            fabrication solutions that meet the evolving needs of our clients and industries.
                            We are committed to manufacturing precision-built pressure vessels, heat exchangers,
                            boilers, structural steelwork, and custom-fabricated components with uncompromising
                            attention to detail and adherence to established standards.
                            <br />
                            Through innovation, disciplined processes, transparent communication, and a culture
                            of continuous improvement, we strive to complete every project with excellence and
                            on schedule.
                            <br />
                            We aim to foster long-term relationships, empower our workforce, and contribute to
                            India’s industrial growth by consistently providing engineering solutions that clients
                            trust and value.
                        </p>
                    </div>
                </div>


                {/* VISION (MERGED) */}
                <div
                    className="mt-10 grid items-center gap-6 md:grid-cols-[160px_1fr]"
                    data-aos="fade-up"
                    data-aos-delay="180"
                >
                    <div className="flex items-center justify-center rounded-2xl border border-[#ee9d54] bg-transparent p-6">
                        <div className="flex flex-col items-center gap-3">
                            <p className="text-sm font-semibold text-black">Vision</p>

                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ee9d54]">
                                <img src="/icons/vision.svg" alt="Vision" className="h-12 w-12" />
                            </div>
                        </div>
                    </div>

                    <div className="text-sm leading-relaxed text-black/85 md:text-base">
                        {/* NEW H2 */}
                        <h2 className="mb-3 text-xl font-bold text-gray-900">Our Vision</h2>

                        {/* NEW SHORT POINT */}
                        <p className="mb-4">
                            To emerge as a trusted leader in heavy engineering fabrication, recognized for
                            excellence, reliability, and long-lasting value across India and global markets.
                        </p>

                        {/* EXISTING LONG CONTENT (kept) */}
                        <p>
                            To emerge as a trusted leader in precision engineering and fabrication, recognized
                            for excellence, reliability, and long-lasting value. We envision a future where our
                            pressure vessels, heat exchangers, boilers, structural steelwork, and custom-engineered
                            solutions consistently set industry benchmarks for safety, quality, and innovation.
                            <br />
                            Rooted in integrity and driven by continuous improvement, we aim to empower our people,
                            elevate our capabilities, and build enduring partnerships with clients across industries.
                            NESF aspires to contribute to a resilient, technology-forward industrial landscape by
                            delivering engineering solutions that stand strong for generations.
                        </p>
                    </div>
                </div>


            </div>
        </section>
    );
}
