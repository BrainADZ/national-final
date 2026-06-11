"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { sanitizeReturnTo } from "@/lib/thankYou";

const copyByType: Record<string, { title: string; message: string }> = {
  career: {
    title: "Application Submitted",
    message:
      "Thank you for sharing your profile. Our HR team will review it and connect with you if there is a suitable match.",
  },
  feedback: {
    title: "Feedback Submitted",
    message:
      "Thank you for your feedback. It helps us improve our process and communication.",
  },
  enquiry: {
    title: "Thank You",
    message:
      "Your enquiry has been submitted successfully. Our team will get back to you soon.",
  },
};

export default function ThankYouClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [seconds, setSeconds] = useState(4);

  const returnTo = useMemo(
    () => sanitizeReturnTo(searchParams.get("returnTo")),
    [searchParams]
  );
  const type = searchParams.get("type") || "enquiry";
  const content = copyByType[type] ?? copyByType.enquiry;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSeconds((current) => Math.max(current - 1, 0));
    }, 1000);

    const timeout = window.setTimeout(() => {
      router.replace(returnTo);
    }, 4000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, [returnTo, router]);

  return (
    <main className="min-h-[70vh] bg-white">
      <section className="mx-auto flex max-w-425 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto w-full max-w-2xl rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ee9d54]/10 text-[#ee9d54]">
            <CheckCircle2 className="h-9 w-9" />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#ee9d54]">
            Submission Received
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-950 sm:text-4xl">
            {content.title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            {content.message}
          </p>

          <p className="mt-6 text-sm font-semibold text-gray-700">
            Redirecting back in {seconds} seconds...
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href={returnTo}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#ee9d54] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d88c45]"
            >
              Go Back Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
