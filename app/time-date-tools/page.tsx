import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryLandingPage } from "@/components/category-landing-page";
import { getSiteCategory } from "@/lib/site-tools";

const category = getSiteCategory("time-date-tools");

export const metadata: Metadata = {
  title: category?.seoTitle ?? "Time and Date Tools",
  description: category?.metaDescription,
  keywords: category?.keywords,
  alternates: {
    canonical: "/time-date-tools",
  },
  openGraph: {
    type: "website",
    url: "/time-date-tools",
    title: category?.seoTitle,
    description: category?.metaDescription,
    siteName: "Daily Utility Dock",
  },
  twitter: {
    card: "summary",
    title: category?.seoTitle,
    description: category?.metaDescription,
  },
};

export default function TimeDateToolsPage() {
  if (!category) {
    notFound();
  }

  return <CategoryLandingPage category={category} />;
}
