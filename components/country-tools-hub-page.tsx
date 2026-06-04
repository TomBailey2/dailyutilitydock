import Link from "next/link";
import {
  ArrowLeftRight,
  Calculator,
  Clock,
  Globe,
  Home,
  Landmark,
  PiggyBank,
  Receipt,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { AdsPlaceholder } from "@/components/ads-placeholder";
import { FAQSection } from "@/components/faq-section";
import { BreadcrumbSchema, FAQSchema } from "@/components/schema-markup";
import { ToolCard } from "@/components/tool-card";
import type { CountryToolHub } from "@/lib/international-tools";
import { getToolsBySlugs } from "@/lib/site-tools";

const iconMap: Record<string, LucideIcon> = {
  ArrowLeftRight,
  Calculator,
  Clock,
  Globe,
  Home,
  Landmark,
  PiggyBank,
  Receipt,
  Wallet,
};

function CountryHubSchema({
  hub,
  tools,
}: {
  hub: CountryToolHub;
  tools: ReturnType<typeof getToolsBySlugs>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${hub.title} - Daily Utility Dock`,
    description: hub.metaDescription,
    url: `https://dailyutilitydock.com${hub.path}`,
    mainEntity: {
      "@type": "ItemList",
      name: hub.title,
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

export function CountryToolsHubPage({ hub }: { hub: CountryToolHub }) {
  const countryTools = getToolsBySlugs(hub.toolSlugs);
  const globalTools = getToolsBySlugs(hub.globalToolSlugs);

  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dailyutilitydock.com" },
          { name: hub.title, url: `https://dailyutilitydock.com${hub.path}` },
        ]}
      />
      <FAQSchema questions={hub.faqs} />
      <CountryHubSchema hub={hub} tools={countryTools} />

      <div className="mx-auto max-w-6xl">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">{hub.title}</span>
        </nav>

        <section className="rounded-3xl border bg-gradient-to-br from-primary/10 via-background to-background p-6 shadow-sm md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Globe className="h-7 w-7" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                International tools
              </p>
              <h1 className="mt-2 text-4xl font-bold md:text-5xl">{hub.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{hub.intro}</p>
            </div>
            <div className="rounded-2xl border bg-background/80 p-5 shadow-sm lg:max-w-sm">
              <p className="text-sm font-semibold">Country focus</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {hub.focusAreas.map((focus) => (
                  <span
                    key={focus}
                    className="rounded-full border px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <AdsPlaceholder size="banner" className="my-8" />

        <section className="grid gap-8 lg:grid-cols-[1fr,320px]">
          <div className="rounded-2xl border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-semibold">
              Country-specific calculators with clear assumptions
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              {hub.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border bg-card p-5">
              <h2 className="text-lg font-semibold">Related categories</h2>
              <div className="mt-4 space-y-3">
                {hub.relatedCategoryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl border p-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
                  >
                    <p className="font-semibold">{link.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <AdsPlaceholder size="sidebar" />
          </aside>
        </section>

        <section className="mt-10" aria-labelledby={`${hub.slug}-tools`}>
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Country tool cards
              </p>
              <h2 id={`${hub.slug}-tools`} className="mt-2 text-2xl font-semibold md:text-3xl">
                Browse {hub.title.toLowerCase()}
              </h2>
            </div>
            <p className="max-w-2xl text-sm text-muted-foreground md:text-right">
              Each tool includes a working calculator, country-specific
              assumptions, estimate-only disclaimers, FAQs, schema, and related
              links.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {countryTools.map((tool) => {
              const Icon = iconMap[tool.icon] ?? Calculator;

              return (
                <ToolCard
                  key={tool.slug}
                  title={tool.title}
                  description={tool.description}
                  href={tool.href}
                  icon={Icon}
                />
              );
            })}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border bg-muted/30 p-6 md:p-8">
          <div className="mb-6 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Useful global tools
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Continue with country-neutral utilities
            </h2>
            <p className="mt-3 text-muted-foreground">
              These existing Daily Utility Dock pages work internationally when
              you enter local figures, units, dates, or assumptions.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {globalTools.map((tool) => (
              <Link
                key={tool.slug}
                href={tool.href}
                className="rounded-xl border bg-background p-4 shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                <p className="font-semibold">{tool.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{tool.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <FAQSection items={hub.faqs} />
      </div>
    </div>
  );
}
