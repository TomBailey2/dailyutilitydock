import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryToolsHubPage } from "@/components/country-tools-hub-page";
import { getCountryHub } from "@/lib/international-tools";

const hub = getCountryHub("australia-tools");

export const metadata: Metadata = {
  title: hub?.seoTitle ?? "Australia Tools & Calculators",
  description: hub?.metaDescription,
  keywords: [
    "Australia tools",
    "Australian finance calculators",
    "Australian GST calculator",
    "Australian salary calculator",
    "superannuation calculator",
  ],
  alternates: {
    canonical: "/australia-tools",
  },
  openGraph: {
    type: "website",
    url: "/australia-tools",
    title: hub?.seoTitle,
    description: hub?.metaDescription,
    siteName: "Daily Utility Dock",
  },
  twitter: {
    card: "summary",
    title: hub?.seoTitle,
    description: hub?.metaDescription,
  },
};

export default function AustraliaToolsPage() {
  if (!hub) {
    notFound();
  }

  return <CountryToolsHubPage hub={hub} />;
}
