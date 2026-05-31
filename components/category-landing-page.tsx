import Link from "next/link";
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
import { FAQSection } from "@/components/faq-section";
import { BreadcrumbSchema, FAQSchema } from "@/components/schema-markup";
import { ToolCard } from "@/components/tool-card";
import {
  getSiteCategory,
  getToolsForCategory,
  siteCategories,
  type SiteCategory,
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

function CategorySchema({
  category,
  tools,
}: {
  category: SiteCategory;
  tools: ReturnType<typeof getToolsForCategory>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.title} - Daily Utility Dock`,
    description: category.metaDescription,
    url: `https://dailyutilitydock.com${category.path}`,
    mainEntity: {
      "@type": "ItemList",
      name: category.title,
      itemListElement: tools.map((tool, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://dailyutilitydock.com${tool.href}`,
        name: tool.title,
        description: tool.description,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function CategoryLandingPage({ category }: { category: SiteCategory }) {
  const tools = getToolsForCategory(category.slug);
  const CategoryIcon = iconMap[category.icon] ?? ListChecks;
  const relatedCategories = category.relatedCategorySlugs
    .map((slug) => getSiteCategory(slug))
    .filter((related): related is SiteCategory => Boolean(related));

  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dailyutilitydock.com" },
          { name: category.title, url: `https://dailyutilitydock.com${category.path}` },
        ]}
      />
      <FAQSchema questions={category.faqs} />
      <CategorySchema category={category} tools={tools} />

      <div className="mx-auto max-w-6xl">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">{category.title}</span>
        </nav>

        <section className="rounded-3xl border bg-gradient-to-br from-primary/10 via-background to-background p-6 shadow-sm md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <CategoryIcon className="h-7 w-7" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Daily Utility Dock
              </p>
              <h1 className="mt-2 text-4xl font-bold md:text-5xl">{category.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {category.description}
              </p>
            </div>
            <div className="rounded-2xl border bg-background/80 p-5 shadow-sm lg:max-w-sm">
              <p className="text-sm font-semibold">Popular in this category</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tools.slice(0, 6).map((tool) => (
                  <Link
                    key={tool.slug}
                    href={tool.href}
                    className="rounded-full border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {tool.shortTitle}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <AdsPlaceholder size="banner" className="my-8" />

        <section className="grid gap-8 lg:grid-cols-[1fr,320px]">
          <div className="rounded-2xl border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-semibold">
              Useful {category.shortTitle.toLowerCase()} utilities in one place
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              {category.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border bg-card p-5">
              <h2 className="text-lg font-semibold">Related categories</h2>
              <div className="mt-4 space-y-3">
                {relatedCategories.map((related) => (
                  <Link
                    key={related.slug}
                    href={related.path}
                    className="block rounded-xl border p-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
                  >
                    <p className="font-semibold">{related.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {related.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <AdsPlaceholder size="sidebar" />
          </aside>
        </section>

        <section className="mt-10" aria-labelledby="category-tools">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Tools in this category
              </p>
              <h2 id="category-tools" className="mt-2 text-2xl font-semibold md:text-3xl">
                Browse all {category.shortTitle.toLowerCase()} tools
              </h2>
            </div>
            <p className="max-w-2xl text-sm text-muted-foreground md:text-right">
              Every card links to a dedicated tool page with instructions, use cases,
              FAQs, related tools, and structured metadata.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => {
              const ToolIcon = iconMap[tool.icon] ?? Calculator;

              return (
                <ToolCard
                  key={tool.slug}
                  title={tool.title}
                  description={tool.description}
                  href={tool.href}
                  icon={ToolIcon}
                />
              );
            })}
          </div>
        </section>

        <FAQSection items={category.faqs} />

        <section className="mt-10 rounded-2xl border bg-muted/30 p-6">
          <h2 className="text-2xl font-semibold">Explore all tool categories</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {siteCategories.map((item) => (
              <Link
                key={item.slug}
                href={item.path}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  item.slug === category.slug
                    ? "border-primary bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
