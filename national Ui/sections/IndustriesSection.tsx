"use client";

/* eslint-disable @next/next/no-img-element */
type Industry = {
  name: string;
  description: string;
  details: string;
  iconSrc: string; // <-- you will add your svg/png here
};
const INDUSTRIES: Industry[] = [
  {
    name: "Chemical & Process Industries",
    description:
      "Engineered process equipment for chemical and process manufacturing plants.",
    details:
      "Design and fabrication of pressure vessels, reactors, heat exchangers, and storage tanks suitable for high-temperature, high-pressure, and corrosive operating conditions.",
    iconSrc: "/icons/flask.svg",
  },
  {
    name: "Manufacturing & Engineering Plants",
    description:
      "Industrial fabrication solutions for manufacturing facilities.",
    details:
      "Supply of structural assemblies, process equipment, ducting systems, and heavy fabrication components engineered for continuous plant operations.",
    iconSrc: "/icons/i-beam.svg",
  },
  {
    name: "Oil & Gas Projects",
    description:
      "High-performance equipment for upstream and downstream applications.",
    details:
      "Fabrication of pressure vessels, separators, heat exchangers, and storage systems designed in compliance with stringent oil and gas industry codes.",
    iconSrc: "/icons/oil-refinery.svg",
  },
  {
    name: "Water & Effluent Treatment Facilities",
    description:
      "Solutions for water and wastewater management systems.",
    details:
      "Manufacture of tanks, clarifiers, and process equipment engineered to handle corrosive effluents and varying operational conditions.",
    iconSrc: "/icons/water.svg",
  },
  {
    name: "Power & Utility Infrastructure",
    description:
      "Fabrication solutions for power generation and utility systems.",
    details:
      "Design and manufacture of heat exchangers, ducting systems, pressure vessels, and structural components built to withstand thermal loads and continuous operations.",
    iconSrc: "/icons/anchor.svg",
  },
  {
    name: "Effluent Treatment",
    description:
      "Specialized fabrication for effluent treatment plants.",
    details:
      "Fabrication of process tanks, pressure vessels, and treatment units designed for safe handling of industrial wastewater in compliance with environmental standards.",
    iconSrc: "/icons/water.svg",
  },
];




export default function IndustriesSection() {
  return (
    <section className="bg-[#f4f5f7] py-16 lg:py-20">
      <div className="mx-auto max-w-425 px-2 lg:px-4">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ee9d54]">
            Industries
          </p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
           Industries We Serve
          </h2>
          <p className="mt-3 text-sm text-gray-600 md:text-base">
            We partner with a wide range of process and
            manufacturing industries, delivering application-engineered
            heat-transfer and pressure equipment designed for demanding operating
            conditions. We support a wide range of industrial sectors including:
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map(({ name, description, details, iconSrc }) => (
            <div
              key={name}
              className="group relative flex h-full flex-col  border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-[#ee9d54]/80 opacity-0 transition group-hover:opacity-100" />

              <div className="flex items-start gap-4">
                {/* Icon wrapper */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 ring-1 ring-orange-100 transition group-hover:bg-orange-100">
                  <img
                    src={iconSrc}
                    alt={`${name} icon`}
                    className="h-10 w-10 object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-gray-900">
                    {name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-700">{description}</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                {details}
              </p>

              {/* Bottom accent */}
              <div className="mt-6 h-0.75 w-16 rounded-full bg-[#ee9d54]/70 opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
                  <p className="mt-3 text-sm text-gray-600 md:text-base">
Our fabrication expertise allows us to adapt to diverse industrial requirements while maintaining consistent quality standards.
          </p>
      </div>
    </section>
  );
}
