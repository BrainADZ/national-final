"use client";

/* eslint-disable @next/next/no-img-element */
type Advantage = {
  title: string;
  description: string;
  iconSrc: string; // <-- your svg / png
  highlight?: boolean;
};

const ADVANTAGES: Advantage[] = [
  {
    title: "Experienced Industrial Fabrication Team",
    description:
      "Backed by a highly experienced industrial fabrication team, we execute complex engineering projects with precision. Our skilled engineers, supervisors, and technicians ensure high-quality workmanship, strict safety compliance, and reliable performance across industries.",

        iconSrc: "/icons/2.svg",
  },
  {
    title: "Advanced Manufacturing Infrastructure",
    description:
      "Our advanced manufacturing infrastructure, equipped with modern machinery and in-house fabrication capabilities, enables us to deliver cost-effective and custom-built engineering solutions while maintaining superior quality standards.",
    iconSrc: "/icons/1.png",
    highlight: true,
  },
  {
    title: "Strong Focus on Quality & Safety",
    description:
      "We follow a disciplined, process-driven approach with rigorous quality assurance systems and strict adherence to safety standards. Every project undergoes detailed inspections, testing, and validation to ensure assured performance and long-term reliability.",
    iconSrc: "/icons/3.svg",
  },
  {
    title: "Timely Execution with PAN India Reach",
    description:
      "With efficient project management systems and a strong logistics network, we ensure timely project execution across India. Our PAN India service capability allows us to support clients seamlessly, regardless of project location.",
    iconSrc: "/icons/4.svg",
  },
];


export default function CompetitiveAdvantageSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-350 px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ee9d54]">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
           Why Choose National Engineers?
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-gray-600 md:text-base">
           From pressure vessels to custom fabricated equipment, we deliver solutions designed for performance and longevity.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {ADVANTAGES.map(({ title, description, iconSrc}) => (
            <div
              key={title}
              className={`relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl border border-gray-200 bg-white
                
              `}
            >
              {/* top accent */}
              
              {/* icon + title */}
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 ring-1 ring-orange-100">
                  <img
                    src={iconSrc}
                    alt={`${title} icon`}
                    className="h-12 w-12 object-contain"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-base font-semibold text-gray-900">
                  {title}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
