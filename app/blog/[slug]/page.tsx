import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { AdsPlaceholder } from "@/components/ads-placeholder";
import { FAQSection } from "@/components/faq-section";
import {
  ArticleSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/schema-markup";
import {
  blogPosts,
  getBlogPost,
  getRelatedBlogPosts,
} from "@/lib/blog-posts";
import { getToolsBySlugs } from "@/lib/site-tools";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Article not found",
    };
  }

  const path = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      url: path,
      title: post.title,
      description: post.description,
      siteName: "Daily Utility Dock",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const url = `https://dailyutilitydock.com/blog/${post.slug}`;
  const relatedTools = getToolsBySlugs(post.relatedToolSlugs);
  const relatedPosts = getRelatedBlogPosts(post.slug);

  return (
    <article className="container mx-auto px-4 py-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dailyutilitydock.com" },
          { name: "Blog", url: "https://dailyutilitydock.com/blog" },
          { name: post.title, url },
        ]}
      />
      <FAQSchema questions={post.faqs} />
      <ArticleSchema
        title={post.title}
        description={post.description}
        url={url}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
      />

      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to guides
        </Link>

        <header>
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readingTime}
            </span>
            <time
              dateTime={post.publishedAt}
              className="inline-flex items-center gap-1.5"
            >
              <CalendarDays className="h-4 w-4" />
              Updated {post.updatedAt}
            </time>
          </div>
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            {post.description}
          </p>
        </header>

        <AdsPlaceholder size="banner" className="my-8" />

        <div className="prose prose-neutral max-w-none">
          {post.intro.map((paragraph) => (
            <p key={paragraph} className="text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        {relatedTools.length > 0 ? (
          <aside className="my-8 rounded-2xl border bg-muted/30 p-5">
            <h2 className="text-lg font-semibold">Useful tools for this guide</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Use these free tools alongside the steps in this article.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="rounded-full border bg-background px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {tool.shortTitle}
                </Link>
              ))}
            </div>
          </aside>
        ) : null}

        <div className="prose prose-neutral max-w-none">
          {post.sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="text-2xl font-semibold">{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <FAQSection items={post.faqs} />

        <AdsPlaceholder size="inline" className="my-8" />

        {relatedPosts.length > 0 ? (
          <section className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <div className="mt-5 grid gap-4">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="rounded-2xl border p-5 transition-colors hover:border-primary/40"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {relatedPost.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">
                    {relatedPost.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}
