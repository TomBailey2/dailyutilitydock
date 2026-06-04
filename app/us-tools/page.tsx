import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryToolsHubPage } from "@/components/country-tools-hub-page";
import { getCountryHub } from "@/lib/international-tools";

const hub = getCountryHub("us-tools");

export const metadata: Metadata = {
  title: hub?.seoTitle ?? "USA Tools & Calculators",
  description: hub?.metaDescription,
  keywords: [
    "USA tools",
    "US finance calculators",
    "US sales tax calculator",
    "US mortgage calculator",
    "401k calculator",
  ],
  alternates: {
    canonical: "/us-tools",
  },
  openGraph: {
    type: "website",
    url: "/us-tools",
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

export default function UsToolsPage() {
  if (!hub) {
    notFound();
  }

  return <CountryToolsHubPage hub={hub} />;
}
