import { Suspense } from "react";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ThankYouClient from "./ThankYouClient";

export const metadata: Metadata = buildMetadata({
  title: "Thank You | National Engineers & Steel Fabricators",
  description:
    "Thank you for contacting National Engineers & Steel Fabricators. Our team will get back to you soon.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-[70vh] bg-white">
          <section className="mx-auto max-w-425 px-4 py-20 text-center">
            <p className="text-sm font-semibold text-gray-700">Loading...</p>
          </section>
        </main>
      }
    >
      <ThankYouClient />
    </Suspense>
  );
}
