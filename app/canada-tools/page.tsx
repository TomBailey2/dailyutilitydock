import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryToolsHubPage } from "@/components/country-tools-hub-page";
import { getCountryHub } from "@/lib/international-tools";

const hub = getCountryHub("canada-tools");

export const metadata: Metadata = {
  title: hub?.seoTitle ?? "Canada Tools & Calculators",
  description: hub?.metaDescription,
  keywords: [
    "Canada tools",
    "Canadian finance calculators",
    "GST HST calculator",
    "Canadian mortgage calculator",
    "TFSA calculator",
  ],
  alternates: {
    canonical: "/canada-tools",
  },
  openGraph: {
    type: "website",
    url: "/canada-tools",
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

export default function CanadaToolsPage() {
  if (!hub) {
    notFound();
  }

  return <CountryToolsHubPage hub={hub} />;
}
