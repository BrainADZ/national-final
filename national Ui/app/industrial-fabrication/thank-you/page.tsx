import type { Metadata } from "next";
import GoogleAdsThankYouClient from "./ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | National Engineers",
  description:
    "Thank you for contacting National Engineers & Steel Fabricators.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GoogleAdsThankYouPage() {
  return <GoogleAdsThankYouClient />;
}
