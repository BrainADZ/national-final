"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo, useState } from "react";

type BrandLogo = {
  name: string;
  src: string;
  href?: string; // optional: click to open brand page
};

const BRAND_LOGOS: BrandLogo[] = [
  { name: "Brand 1", src: "/brands/brand1.png" },
  { name: "Brand 2", src: "/brands/brand2.png" },
  { name: "Brand 3", src: "/brands/brand3.png" },
  { name: "Brand 4", src: "/brands/brand4.jpeg" },
  { name: "Brand 5", src: "/brands/brand5.jpeg" },
  { name: "Brand 6", src: "/brands/brand6.jpeg" },
  { name: "Brand 7", src: "/brands/brand7.jpeg" },
  { name: "Brand 8", src: "/brands/brand8.jpeg" },
  { name: "Brand 9", src: "/brands/brand9.jpeg" },
  { name: "Brand 10", src: "/brands/brand10.jpeg" },
  { name: "Brand 11", src: "/brands/brand11.jpeg" },
  { name: "Brand 12", src: "/brands/brand12.jpeg" },
  { name: "Brand 13", src: "/brands/brand13.jpeg" },
  { name: "Brand 14", src: "/brands/brand14.jpeg" },
  { name: "Brand 15", src: "/brands/brand15.jpeg" },
  { name: "Brand 15", src: "/brands/brand16.png" },
];

/**
 * Reads a public manifest and converts it into BrandLogo[]
 *
 * Supported manifest formats:
 * 1) ["logo1.png", "logo2.jpg"]
 * 2) [{ "name": "MOSIL", "src": "mosil.png", "href": "https://..." }]
 *
 * Place it at: /public/brands/manifest.json
 */
async function loadBrandsFromPublicManifest(
  manifestUrl = "/brands/manifest.json"
): Promise<BrandLogo[] | null> {
  try {
    const res = await fetch(`${manifestUrl}?v=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) return null;

    const data = await res.json();

    // Format 1: array of strings (filenames)
    if (Array.isArray(data) && data.length > 0 && typeof data[0] === "string") {
      const files = data as string[];

      const cleaned = files
        .filter(Boolean)
        .filter((f) => /\.(png|jpe?g|webp|svg)$/i.test(f));

      return cleaned.map((file) => {
        const base = file.split("/").pop() || file;
        const name = base.replace(/\.[^/.]+$/, "").replace(/[-_]+/g, " ").trim();
        return {
          name: name || base,
          src: file.startsWith("/") ? file : `/brands/${file}`,
        };
      });
    }

    // Format 2: array of objects
    if (Array.isArray(data) && data.length > 0 && typeof data[0] === "object") {
      const list = data as Array<Partial<BrandLogo> & { src?: string }>;
      const normalized: BrandLogo[] = list
        .filter((x) => !!x?.src)
        .map((x) => {
          const rawSrc = String(x.src);
          const src = rawSrc.startsWith("/") ? rawSrc : `/brands/${rawSrc}`;
          const name =
            (x.name && String(x.name).trim()) ||
            (rawSrc.split("/").pop() || rawSrc).replace(/\.[^/.]+$/, "").replace(/[-_]+/g, " ").trim() ||
            "Brand";

          return {
            name,
            src,
            href: x.href ? String(x.href) : undefined,
          };
        });

      return normalized.length ? normalized : null;
    }

    return null;
  } catch {
    return null;
  }
}

export default function BrandLogosCarousel() {
  const [logos, setLogos] = useState<BrandLogo[]>(BRAND_LOGOS);

  // Auto-load from /public/brands/manifest.json (if present)
  useEffect(() => {
    let alive = true;

    (async () => {
      const fromManifest = await loadBrandsFromPublicManifest("/brands/manifest.json");
      if (alive && fromManifest && fromManifest.length) {
        setLogos(fromManifest);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  // Duplicate array for seamless loop
  const track = useMemo(() => [...logos, ...logos], [logos]);

  // If you have very few logos, this prevents weird spacing
  const hasEnough = logos.length >= 6;

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-425 px-2 lg:px-4">
        {/* Heading */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ee9d54]">
              OUR ASSOCIATED BRANDS
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
            Your Reliable Partner for Heavy Fabrication & Process Equipment
            </h2>
            <p className="mt-2 max-w-5xl text-sm text-gray-600">
              As an experienced process equipment manufacturer in India, we provide end-to-end fabrication solutions — from concept and design to manufacturing and installation. Our facility is equipped to handle heavy fabrication projects with strict quality control and industry standards.
              <br/>
              We work closely with clients to deliver customized engineering solutions that meet operational requirements, timelines, and budget expectations.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white">
          {/* top accent */}
          <div className="h-1 w-full bg-[#ee9d54]" />

          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-linear-to-l from-white to-transparent" />

          <div className="p-6 md:p-8">
            <div className="group overflow-hidden">
              <div
                className={[
                  "flex w-max items-center gap-10",
                  "animate-logo-marquee",
                  "group-hover:[animation-play-state:paused]",
                  !hasEnough ? "gap-14" : "",
                ].join(" ")}
              >
                {track.map((logo, i) => {
                  const item = (
                    <div
                      key={`${logo.name}-${i}`}
                      className="flex h-20 w-48 items-center justify-center rounded-xl border border-gray-100 bg-white px-4 shadow-[0_6px_18px_rgba(17,24,39,0.06)]"
                    >
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="max-h-16 w-auto max-w-35 object-contain opacity-90 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                        loading="lazy"
                        onError={(e) => {
                          // if any image missing/broken, hide it gracefully
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                  );

                  if (logo.href) {
                    return (
                      <a
                        key={`${logo.name}-${i}`}
                        href={logo.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={logo.name}
                        className="outline-none focus-visible:ring-2 focus-visible:ring-[#ee9d54] focus-visible:ring-offset-2"
                      >
                        {item}
                      </a>
                    );
                  }

                  return item;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animation */}
      <style jsx global>{`
        @keyframes logoMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-logo-marquee {
          animation: logoMarquee 22s linear infinite;
        }

        /* slower on small screens */
        @media (max-width: 640px) {
          .animate-logo-marquee {
            animation-duration: 28s;
          }
        }
      `}</style>
    </section>
  );
}
