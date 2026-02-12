/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
};

// ✅ Single placeholder image for all (you will replace with Google icon svg later)
const DEFAULT_TESTIMONIAL_IMAGE = "/icons/google.svg";


const TESTIMONIALS: Testimonial[] = [
  {
    name: "Bhilosa Industries Pvt. Ltd.",
    role: "Client Testimonial",
    company: "Bhilosa Industries Pvt. Ltd.",
    quote:
      "National Engineers and Steel Fabricators (NESF) has consistently delivered high-quality fabrication solutions in line with our technical specifications and project timelines. Their engineering expertise, attention to detail, and commitment to quality standards make them a reliable partner for industrial fabrication requirements.",
    image: DEFAULT_TESTIMONIAL_IMAGE,
  },
  {
    name: "Beekaylon Synthetics Pvt. Ltd.",
    role: "Client Testimonial",
    company: "Beekaylon Synthetics Pvt. Ltd.",
    quote:
      "We appreciate NESF’s structured approach to project execution and their ability to meet committed delivery schedules. Their coordination, workmanship, and adherence to safety and quality norms have supported the successful completion of our projects.",
    image: DEFAULT_TESTIMONIAL_IMAGE,
  },
  {
    name: "AB Engineering and Systems Pvt. Ltd.",
    role: "Client Testimonial",
    company: "AB Engineering and Systems Pvt. Ltd.",
    quote:
      "NESF demonstrates strong compliance with quality standards and maintains consistency across fabrication and installation works. Their focus on precision, inspection, and documentation reflects a professional and process-driven organization.",
    image: DEFAULT_TESTIMONIAL_IMAGE,
  },
  {
    name: "Todi Rayons Pvt. Ltd.",
    role: "Client Testimonial",
    company: "Todi Rayons Pvt. Ltd.",
    quote:
      "Our association with NESF has been marked by professionalism, technical competence, and dependable service. Their team has shown flexibility in accommodating project requirements while maintaining quality and operational efficiency.",
    image: DEFAULT_TESTIMONIAL_IMAGE,
  },
  {
    name: "NEW AGE FAB TECHNOLOGIES Pvt. Ltd.",
    role: "Client Testimonial",
    company: "NEW AGE FAB TECHNOLOGIES Pvt. Ltd.",
    quote:
      "NESF has proven to be a dependable fabrication partner with sound engineering practices and experienced manpower. Their ability to execute complex steel fabrication works with accuracy and discipline is commendable.",
    image: DEFAULT_TESTIMONIAL_IMAGE,
  },
  {
    name: "ArcelorMittal Nippon Steel India",
    role: "Client Testimonial",
    company: "ArcelorMittal Nippon Steel India",
    quote:
      "The NESF team maintains clear communication throughout the project lifecycle, ensuring alignment on scope, timelines, and technical requirements. Their responsiveness and structured workflow contribute to smooth project execution.",
    image: DEFAULT_TESTIMONIAL_IMAGE,
  },
];

export default function TestimonialsSection() {
  /**
   * Responsive visible cards:
   * - mobile: 1
   * - md: 2
   * - lg: 4
   */
  const [perView, setPerView] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 768) setPerView(1);
      else if (w < 1024) setPerView(2);
      else setPerView(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // clones for infinite loop
  const clones = useMemo(() => {
    const head = TESTIMONIALS.slice(0, perView);
    const tail = TESTIMONIALS.slice(-perView);
    return [...tail, ...TESTIMONIALS, ...head];
  }, [perView]);

  // start at the "real" first item index (after leading clones)
  const [index, setIndex] = useState(perView);
  const [animating, setAnimating] = useState(true);

  const indexRef = useRef(index);
  const snappingRef = useRef(false);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  // when perView changes, reset properly
  useEffect(() => {
    snappingRef.current = true;
    setAnimating(false);
    setIndex(perView);

    // re-enable transition after layout settles
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        snappingRef.current = false;
        setAnimating(true);
      });
    });

    return () => cancelAnimationFrame(id);
  }, [perView]);

  const snapTo = (newIndex: number) => {
    // prevent multiple transitionEnd snaps
    if (snappingRef.current) return;
    snappingRef.current = true;

    // snap WITHOUT transition
    setAnimating(false);
    setIndex(newIndex);

    // wait 2 frames so browser paints the snapped position,
    // then re-enable transition for the next move
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        snappingRef.current = false;
        setAnimating(true);
      });
    });
  };

  // after transition ends, if we are in clone region, snap without animation
  const handleTransitionEnd = () => {
    if (snappingRef.current) return;

    const realLen = TESTIMONIALS.length;
    const current = indexRef.current;

    // moved into the leading clones (left side)
    if (current < perView) {
      snapTo(current + realLen);
      return;
    }

    // moved into the trailing clones (right side)
    if (current >= perView + realLen) {
      snapTo(current - realLen);
      return;
    }
  };

  const next = () => {
    if (snappingRef.current) return;
    setIndex((p) => p + 1);
  };

  const prev = () => {
    if (snappingRef.current) return;
    setIndex((p) => p - 1);
  };

  // Each card width in %
  const itemW = 100 / perView;
  const translateX = -(index * itemW);

  return (
    <section className="bg-white py-6 lg:py-8">
      <div className="mx-auto max-w-425  lg:px-4">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ee9d54]">
            Client Speak
          </p>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 md:text-base">
            Trusted by engineering, operations and maintenance leaders across multiple industries.
          </p>
        </div>

        {/* Carousel wrapper */}
        <div className="relative mt-12">
          <div className="relative rounded-2xl bg-white">
            <div className="relative px-5 py-5 sm:px-5">
              {/* Track viewport */}
              <div className="overflow-hidden">
                <div
                  onTransitionEnd={handleTransitionEnd}
                  className={[
                    "flex will-change-transform",
                    animating ? "transition-transform duration-500 ease-in-out" : "transition-none",
                  ].join(" ")}
                  style={{ transform: `translateX(${translateX}%)` }}
                >
                  {clones.map((t, i) => (
                    <div
                      key={`${t.company}-${i}`}
                      className="shrink-0 px-3"
                      style={{ width: `${itemW}%` }}
                    >
                      <article className="h-full rounded-xl border border-gray-200 bg-white p-6 ">
                        <div className="flex items-center gap-4">
                          <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-orange-100 bg-white">
                            <Image src={t.image} alt={t.company} fill className="object-contain p-2" />
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-gray-900">{t.company}</p>
                            <p className="truncate text-xs text-gray-500">{t.role}</p>
                          </div>

                          <div className="ml-auto hidden text-[#ee9d54] sm:block">
                            <Quote className="h-5 w-5" />
                          </div>
                        </div>

                        <p className="mt-4 text-sm leading-relaxed text-gray-700">“{t.quote}”</p>

                        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#ee9d54]">
                          {t.name}
                        </p>
                      </article>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrows */}
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-orange-50"
              >
                <ChevronLeft className="h-5 w-5 text-gray-800" />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-orange-50"
              >
                <ChevronRight className="h-5 w-5 text-gray-800" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}