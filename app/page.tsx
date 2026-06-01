import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeftRight,
  AlarmClock,
  Binary,
  BookOpen,
  Braces,
  Briefcase,
  Calendar,
  Calculator,
  Clock,
  Droplets,
  FileClock,
  Flame,
  Fuel,
  Gauge,
  Globe,
  HeartPulse,
  Home,
  Key,
  Landmark,
  Link as LinkIcon,
  ListChecks,
  Mail,
  MapPin,
  Megaphone,
  PiggyBank,
  QrCode,
  Receipt,
  Scale,
  Search,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
  Umbrella,
  Users,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { AdsPlaceholder } from "@/components/ads-placeholder";
import {
  HomepageSearch,
  type HomepageSearchTool,
} from "@/components/homepage-search";
import { ToolCard } from "@/components/tool-card";
import { blogPosts } from "@/lib/blog-posts";
import {
  allSiteTools,
  getToolsBySlugs,
  getToolsForCategory,
  siteCategories,
} from "@/lib/site-tools";

const iconMap: Record<string, LucideIcon> = {
  ArrowLeftRight,
  AlarmClock,
  Binary,
  BookOpen,
  Braces,
  Briefcase,
  Calendar,
  Calculator,
  Clock,
  Droplets,
  FileClock,
  Flame,
  Fuel,
  Gauge,
  Globe,
  HeartPulse,
  Home,
  Key,
  Landmark,
  Link: LinkIcon,
  ListChecks,
  Mail,
  MapPin,
  Megaphone,
  PiggyBank,
  QrCode,
  Receipt,
  Scale,
  Search,
  Target,
  Timer,
  TrendingUp,
  Umbrella,
  Users,
  Wallet,
  Zap,
};

const featuredTools = getToolsBySlugs([
  "speed-test",
  "vat-calculator",
  "unit-converter",
  "password-generator",
  "timezone-converter",
  "budget-planner",
]);

const featuredGuides = blogPosts.filter((post) =>
  [
    "what-internet-speed-do-you-need",
    "add-or-remove-vat-from-a-price-uk",
    "create-strong-passwords-you-can-manage",
  ].includes(post.slug)
);

const relatedWorkflows = [
  {
    title: "Plan monthly money decisions",
    description:
      "Start with a budget, compare repayments, then model savings growth and household bill pressure.",
    toolSlugs: [
      "budget-planner",
      "loan-repayment-calculator",
      "compound-interest-calculator",
      "uk-energy-direct-debit-calculator",
    ],
  },
  {
    title: "Prepare for an international meeting",
    description:
      "Check current city times, convert the invite, estimate meeting cost, and prepare follow-up links.",
    toolSlugs: [
      "world-clock",
      "timezone-converter",
      "meeting-cost-calculator",
      "email-link-generator",
    ],
  },
  {
    title: "Audit a web or IT task",
    description:
      "Test connection quality, format data, encode URL values, and preview page metadata before publishing.",
    toolSlugs: [
      "speed-test",
      "json-formatter-validator",
      "url-encoder-decoder",
      "meta-tag-preview-checker",
    ],
  },
];

const searchableTools: HomepageSearchTool[] = allSiteTools.map(
  ({ title, description, href, categorySlugs, keywords }) => ({
    title,
    description,
    href,
    category:
      siteCategories.find((category) => category.slug === categorySlugs[0])
        ?.title ?? "Tools",
    keywords,
  })
);

const searchableFeaturedTools: HomepageSearchTool[] = featuredTools.map(
  ({ title, description, href, categorySlugs, keywords }) => ({
    title,
    description,
    href,
    category:
      siteCategories.find((category) => category.slug === categorySlugs[0])
        ?.title ?? "Tools",
    keywords,
  })
);

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Daily Utility Dock - Free Online Tools for Everyday Tasks",
  url: "https://dailyutilitydock.com",
  description:
    "A free utility platform with financial tools, time and date tools, internet and IT tools, converters, productivity tools, and health and lifestyle tools.",
  mainEntity: {
    "@type": "ItemList",
    name: "Daily Utility Dock tool categories",
    itemListElement: siteCategories.map((category, categoryIndex) => ({
      "@type": "ListItem",
      position: categoryIndex + 1,
      name: category.title,
      description: category.description,
      url: `https://dailyutilitydock.com${category.path}`,
    })),
  },
};

export const metadata: Metadata = {
  title: "Free Online Tools for Everyday Tasks",
  description:
    "Daily Utility Dock offers free online tools for finance, time and date, internet and IT, converters, productivity, and health and lifestyle tasks.",
  keywords: [
    "free online tools",
    "financial calculators",
    "time and date tools",
    "internet tools",
    "IT utilities",
    "online converters",
    "productivity tools",
    "health lifestyle tools",
    "Daily Utility Dock",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://dailyutilitydock.com",
    title: "Daily Utility Dock - Free Online Tools for Everyday Tasks",
    description:
      "Find fast, free, browser-based utilities grouped into finance, time, IT, converter, productivity, and lifestyle categories.",
    siteName: "Daily Utility Dock",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Utility Dock - Free Online Tools",
    description:
      "Browse financial calculators, time tools, internet utilities, converters, productivity tools, and lifestyle planners.",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      <section className="border-b bg-gradient-to-b from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4 py-12 text-center md:py-20">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-xs font-medium text-muted-foreground shadow-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            Practical calculators, converters, and browser utilities
          </div>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Free Online Tools for Everyday Tasks
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base text-muted-foreground md:text-xl">
            Daily Utility Dock helps you solve common tasks quickly with clear,
            free tools for money planning, time zones, conversions, IT checks,
            productivity decisions, and lifestyle admin. Browse by category or
            search for the tool you need.
          </p>

          <div className="mt-8">
            <HomepageSearch
              tools={searchableTools}
              popularTools={searchableFeaturedTools}
            />
          </div>

          <nav
            className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-2"
            aria-label="Tool categories"
          >
            {siteCategories.map((category) => (
              <Link
                key={category.slug}
                href={category.path}
                className="rounded-full border bg-background/80 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                {category.title}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <AdsPlaceholder size="banner" className="container mx-auto my-6 px-4" />

      <section className="container mx-auto px-4 py-10" aria-labelledby="featured-tools">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Featured tools
            </p>
            <h2 id="featured-tools" className="mt-2 text-2xl font-semibold md:text-3xl">
              Popular utilities people use every day
            </h2>
          </div>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-right">
            Start with high-demand tools across connection testing, VAT,
            unit conversion, password security, time zones, and budgets.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool) => {
            const Icon = iconMap[tool.icon] ?? Calculator;

            return (
              <ToolCard
                key={tool.href}
                title={tool.title}
                description={tool.description}
                href={tool.href}
                icon={Icon}
              />
            );
          })}
        </div>
      </section>

      <section className="border-y bg-muted/30" aria-labelledby="featured-guides">
        <div className="container mx-auto px-4 py-10">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Practical guides
              </p>
              <h2 id="featured-guides" className="mt-2 text-2xl font-semibold md:text-3xl">
                Learn the context behind the tools
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <BookOpen className="h-4 w-4" />
              View all guides
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredGuides.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border bg-background p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {post.category}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-tight">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors hover:text-primary"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="tools"
        className="border-b bg-muted/30"
        aria-labelledby="all-tool-categories"
      >
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Browse by category
            </p>
            <h2 id="all-tool-categories" className="mt-2 text-2xl font-semibold md:text-4xl">
              A structured utility platform for common tasks
            </h2>
            <p className="mt-4 text-muted-foreground">
              Categories have dedicated SEO landing pages, explanatory content,
              FAQs, and links to every relevant tool so visitors can navigate
              without hitting thin or orphaned pages.
            </p>
          </div>

          <div className="space-y-10">
            {siteCategories.map((category) => {
              const CategoryIcon = iconMap[category.icon] ?? ListChecks;
              const tools = getToolsForCategory(category.slug).slice(0, 8);

              return (
                <section
                  key={category.slug}
                  id={category.slug}
                  className="scroll-mt-24 rounded-2xl border bg-background p-5 shadow-sm md:p-8"
                  aria-labelledby={`${category.slug}-heading`}
                >
                  <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <CategoryIcon className="h-7 w-7" />
                      </div>
                      <div>
                        <h2
                          id={`${category.slug}-heading`}
                          className="text-2xl font-semibold md:text-3xl"
                        >
                          {category.title}
                        </h2>
                        <p className="mt-2 max-w-3xl text-muted-foreground">
                          {category.description}
                        </p>
                        <Link
                          href={category.path}
                          className="mt-3 inline-flex text-sm font-semibold text-primary hover:underline"
                        >
                          View all {category.shortTitle.toLowerCase()} tools
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
                      {category.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    {tools.map((tool) => {
                      const ToolIcon = iconMap[tool.icon] ?? Calculator;

                      return (
                        <ToolCard
                          key={`${category.slug}-${tool.href}`}
                          title={tool.title}
                          description={tool.description}
                          href={tool.href}
                          icon={ToolIcon}
                        />
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <AdsPlaceholder size="banner" className="container mx-auto my-6 px-4" />

      <section className="container mx-auto px-4 py-10" aria-labelledby="related-tools">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Related tool suggestions
          </p>
          <h2 id="related-tools" className="mt-2 text-2xl font-semibold md:text-3xl">
            Useful tool combinations for common workflows
          </h2>
          <p className="mt-3 text-muted-foreground">
            These pathways connect calculators, converters, and utilities so you
            can continue from one task to the next without starting over.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {relatedWorkflows.map((workflow) => (
            <article
              key={workflow.title}
              className="rounded-2xl border bg-card p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{workflow.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {workflow.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {getToolsBySlugs(workflow.toolSlugs).map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="rounded-full border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {tool.shortTitle}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-6 text-center md:grid-cols-3">
            <div className="rounded-2xl border bg-background p-6">
              <h3 className="mb-2 text-lg font-semibold">Useful, not gated</h3>
              <p className="text-sm text-muted-foreground">
                Use the tools immediately with no account wall, subscription, or
                unnecessary page weight.
              </p>
            </div>
            <div className="rounded-2xl border bg-background p-6">
              <h3 className="mb-2 text-lg font-semibold">Clear content depth</h3>
              <p className="text-sm text-muted-foreground">
                Tool pages include introductions, how-it-works sections,
                use cases, FAQs, schema, and related links.
              </p>
            </div>
            <div className="rounded-2xl border bg-background p-6">
              <h3 className="mb-2 text-lg font-semibold">Clean ad-ready layout</h3>
              <p className="text-sm text-muted-foreground">
                Non-intrusive placeholder zones are separated from primary tasks
                so the experience stays readable on mobile and desktop.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
