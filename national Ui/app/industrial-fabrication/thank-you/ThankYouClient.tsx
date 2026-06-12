/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

export default function GoogleAdsThankYouClient() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSeconds((current) => Math.max(current - 1, 0));
    }, 1000);

    const timeout = window.setTimeout(() => {
      router.replace("/google-ads");
    }, 5000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, [router]);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-425 flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <img src="/logo white.png" alt="National Engineers" className="mb-8 h-14 w-auto" />
        <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full bg-[#ee9d54]/15 text-[#ee9d54]">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.24em] text-[#ee9d54]">
          Enquiry Received
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
          Thank you. Our team will contact you soon.
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
          Your industrial fabrication requirement has been submitted to National Engineers & Steel Fabricators.
        </p>
        <p className="mt-6 text-sm font-semibold text-white/80">
          Redirecting back in {seconds} seconds...
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="/google-ads"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#ee9d54] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d88c45]"
          >
            Back to Landing Page
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:+919574011132"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-black"
          >
            Call Now
            <Phone className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
