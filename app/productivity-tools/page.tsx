import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryLandingPage } from "@/components/category-landing-page";
import { getSiteCategory } from "@/lib/site-tools";

const category = getSiteCategory("productivity-tools");

export const metadata: Metadata = {
  title: category?.seoTitle ?? "Productivity Tools",
  description: category?.metaDescription,
  keywords: category?.keywords,
  alternates: {
    canonical: "/productivity-tools",
  },
  openGraph: {
    type: "website",
    url: "/productivity-tools",
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

export default function ProductivityToolsPage() {
  if (!category) {
    notFound();
  }

  return <CategoryLandingPage category={category} />;
}
