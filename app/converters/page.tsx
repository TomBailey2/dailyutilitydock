import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryLandingPage } from "@/components/category-landing-page";
import { getSiteCategory } from "@/lib/site-tools";

const category = getSiteCategory("converters");

export const metadata: Metadata = {
  title: category?.seoTitle ?? "Online Converters",
  description: category?.metaDescription,
  keywords: category?.keywords,
  alternates: {
    canonical: "/converters",
  },
  openGraph: {
    type: "website",
    url: "/converters",
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

export default function ConvertersPage() {
  if (!category) {
    notFound();
  }

  return <CategoryLandingPage category={category} />;
}
