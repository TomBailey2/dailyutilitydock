import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbSchema, FAQSchema, SoftwareAppSchema } from "@/components/schema-markup";
import { SeoToolPage } from "@/components/seo-tool-page";
import { getRelatedTools, getSeoTool, getSeoToolFaqs, seoTools } from "@/lib/seo-tools";

interface ToolPageProps {
  params: {
    toolSlug: string;
  };
}

export function generateStaticParams() {
  return seoTools.map((tool) => ({
    toolSlug: tool.slug,
  }));
}

export function generateMetadata({ params }: ToolPageProps): Metadata {
  const tool = getSeoTool(params.toolSlug);

  if (!tool) {
    return {
      title: "Tool not found",
    };
  }

  const path = `/tools/${tool.slug}`;
  const title = `${tool.title} - Free Online Tool`;

  return {
    title,
    description: tool.description,
    keywords: tool.keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: path,
      title,
      description: tool.description,
      siteName: "Daily Utility Dock",
    },
    twitter: {
      card: "summary",
      title,
      description: tool.description,
    },
  };
}

export default function ToolPage({ params }: ToolPageProps) {
  const tool = getSeoTool(params.toolSlug);

  if (!tool) {
    notFound();
  }

  const url = `https://dailyutilitydock.com/tools/${tool.slug}`;
  const relatedTools = getRelatedTools(tool);
  const faqs = getSeoToolFaqs(tool);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dailyutilitydock.com" },
          { name: "Tools", url: "https://dailyutilitydock.com#tools" },
          { name: tool.title, url },
        ]}
      />
      <FAQSchema questions={faqs} />
      <SoftwareAppSchema name={tool.title} description={tool.description} url={url} />
      <SeoToolPage tool={tool} relatedTools={relatedTools} faqs={faqs} />
    </>
  );
}
