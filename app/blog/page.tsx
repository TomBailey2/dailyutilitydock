import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, CalendarDays, Clock } from "lucide-react";
import { AdsPlaceholder } from "@/components/ads-placeholder";
import { BreadcrumbSchema } from "@/components/schema-markup";
import { blogPosts } from "@/lib/blog-posts";
import { getSiteTool } from "@/lib/site-tools";

export const metadata: Metadata = {
  title: "Utility Tool Guides and Practical How-Tos",
  description:
    "Read practical guides for internet checks, time zones, VAT, fuel costs, passwords, QR codes, IP addresses, age calculation, and unit conversion.",
  keywords: [
    "utility tool guides",
    "online calculator guides",
    "how to use online tools",
    "Daily Utility Dock blog",
    "practical how to guides",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Utility Tool Guides and Practical How-Tos",
    description:
      "Helpful guides that explain common calculations, conversions, and browser utility tasks.",
    siteName: "Daily Utility Dock",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utility Tool Guides and Practical How-Tos",
    description:
      "Practical guides for using online calculators, converters, and browser utilities.",
  },
};

export default function BlogIndexPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dailyutilitydock.com" },
          { name: "Blog", url: "https://dailyutilitydock.com/blog" },
        ]}
      />

      <section className="mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <BookOpen className="h-7 w-7" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Guides
        </p>
        <h1 className="mt-2 text-3xl font-bold md:text-5xl">
          Practical guides for everyday online tools
        </h1>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Clear explanations for common search questions: checking connection
          speed, converting time zones, calculating VAT, estimating fuel costs,
          making QR codes, securing passwords, and more.
        </p>
      </section>

      <AdsPlaceholder size="banner" className="my-8" />

      <section className="grid gap-6 md:grid-cols-2" aria-label="Blog articles">
        {blogPosts.map((post) => {
          const primaryTool = getSiteTool(post.primaryToolSlug);

          return (
            <article
              key={post.slug}
              className="rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readingTime}
                </span>
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {post.publishedAt}
                </span>
              </div>

              <h2 className="text-xl font-semibold leading-tight">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors hover:text-primary"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                {post.excerpt}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {primaryTool ? (
                  <Link
                    href={primaryTool.href}
                    className="rounded-full border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    Tool: {primaryTool.shortTitle}
                  </Link>
                ) : null}
                <Link
                  href={`/blog/${post.slug}`}
                  className="rounded-full border px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:border-primary/40"
                >
                  Read guide
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
