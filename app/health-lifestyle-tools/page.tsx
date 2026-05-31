import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryLandingPage } from "@/components/category-landing-page";
import { getSiteCategory } from "@/lib/site-tools";

const category = getSiteCategory("health-lifestyle-tools");

export const metadata: Metadata = {
  title: category?.seoTitle ?? "Health and Lifestyle Tools",
  description: category?.metaDescription,
  keywords: category?.keywords,
  alternates: {
    canonical: "/health-lifestyle-tools",
  },
  openGraph: {
    type: "website",
    url: "/health-lifestyle-tools",
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

export default function HealthLifestyleToolsPage() {
  if (!category) {
    notFound();
  }

  return <CategoryLandingPage category={category} />;
}
