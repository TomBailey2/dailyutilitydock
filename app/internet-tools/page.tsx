import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryLandingPage } from "@/components/category-landing-page";
import { getSiteCategory } from "@/lib/site-tools";

const category = getSiteCategory("internet-tools");

export const metadata: Metadata = {
  title: category?.seoTitle ?? "Internet and IT Tools",
  description: category?.metaDescription,
  keywords: category?.keywords,
  alternates: {
    canonical: "/internet-tools",
  },
  openGraph: {
    type: "website",
    url: "/internet-tools",
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

export default function InternetToolsPage() {
  if (!category) {
    notFound();
  }

  return <CategoryLandingPage category={category} />;
}
