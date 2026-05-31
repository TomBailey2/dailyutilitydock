import Link from "next/link";
import type { Metadata } from "next";
import {
  AlarmClock,
  ArrowLeftRight,
  Binary,
  BookOpen,
  Braces,
  Briefcase,
  Calculator,
  Calendar,
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
import { seoTools } from "@/lib/seo-tools";

type HomepageCategory =
  | "Financial Tools"
  | "Time & Date Tools"
  | "Internet & IT Tools"
  | "Converters"
  | "Productivity Tools";

interface ToolListing {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  category: HomepageCategory;
  keywords: string[];
}

interface ToolCategorySection {
  id: string;
  title: HomepageCategory;
  description: string;
  metadata: string;
  keywords: string[];
  icon: LucideIcon;
  tools: ToolListing[];
}

const seoToolIconMap: Record<string, LucideIcon> = {
  AlarmClock,
  Binary,
  BookOpen,
  Braces,
  Briefcase,
  Calendar,
  Clock,
  Droplets,
  FileClock,
  Flame,
  HeartPulse,
  Home,
  Landmark,
  Link: LinkIcon,
  ListChecks,
  Mail,
  Megaphone,
  PiggyBank,
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

const primaryCategoryBySeoCategory: Record<string, HomepageCategory> = {
  Finance: "Financial Tools",
  Productivity: "Productivity Tools",
  "Internet Utilities": "Internet & IT Tools",
  "UK Workplace": "Productivity Tools",
  "UK Utilities": "Financial Tools",
};

const coreTools: ToolListing[] = [
  {
    title: "Internet Speed Test",
    description: "Check download, upload, and connection performance in seconds.",
    href: "/tools/speed-test",
    icon: Gauge,
    category: "Internet & IT Tools",
    keywords: ["internet speed", "wifi speed", "connection test"],
  },
  {
    title: "World Clock",
    description: "View current time in multiple cities and time zones worldwide.",
    href: "/tools/world-clock",
    icon: Globe,
    category: "Time & Date Tools",
    keywords: ["world time", "time zones", "clock"],
  },
  {
    title: "Time Zone Converter",
    description: "Convert meeting times between cities and time zones.",
    href: "/tools/timezone-converter",
    icon: Clock,
    category: "Time & Date Tools",
    keywords: ["timezone converter", "meeting time", "time conversion"],
  },
  {
    title: "UK VAT Calculator",
    description: "Calculate UK VAT at 20%, 5%, or 0% rates.",
    href: "/tools/vat-calculator",
    icon: Calculator,
    category: "Financial Tools",
    keywords: ["vat calculator", "tax calculator", "uk vat"],
  },
  {
    title: "Fuel Cost Calculator",
    description: "Estimate journey fuel costs, consumption, and efficiency.",
    href: "/tools/fuel-calculator",
    icon: Fuel,
    category: "Financial Tools",
    keywords: ["fuel cost", "journey calculator", "mileage"],
  },
  {
    title: "Password Generator",
    description: "Create strong, secure passwords instantly in your browser.",
    href: "/tools/password-generator",
    icon: Key,
    category: "Internet & IT Tools",
    keywords: ["password generator", "security", "random password"],
  },
  {
    title: "QR Code Generator",
    description: "Generate QR codes for URLs, text, contact details, and more.",
    href: "/tools/qr-generator",
    icon: QrCode,
    category: "Internet & IT Tools",
    keywords: ["qr code", "barcode", "url qr"],
  },
  {
    title: "IP Address Checker",
    description: "Find your public IP address and basic location details.",
    href: "/tools/ip-checker",
    icon: MapPin,
    category: "Internet & IT Tools",
    keywords: ["ip address", "public ip", "network"],
  },
  {
    title: "Age Calculator",
    description: "Calculate exact age from a date of birth or important date.",
    href: "/tools/age-calculator",
    icon: Calendar,
    category: "Time & Date Tools",
    keywords: ["age calculator", "date calculator", "birthday"],
  },
  {
    title: "Unit Converter",
    description: "Convert length, weight, temperature, volume, area, and more.",
    href: "/tools/unit-converter",
    icon: ArrowLeftRight,
    category: "Converters",
    keywords: ["unit converter", "measurement converter", "temperature converter"],
  },
];

const seoToolListings: ToolListing[] = seoTools.map((tool) => ({
  title: tool.title,
  description: tool.description,
  href: `/tools/${tool.slug}`,
  icon: seoToolIconMap[tool.icon] ?? Calculator,
  category: primaryCategoryBySeoCategory[tool.category] ?? "Productivity Tools",
  keywords: tool.keywords,
}));

const allTools = [...coreTools, ...seoToolListings];
const toolsByHref = new Map(allTools.map((tool) => [tool.href, tool]));

function selectTools(hrefs: string[]) {
  return hrefs
    .map((href) => toolsByHref.get(href))
    .filter((tool): tool is ToolListing => Boolean(tool));
}

const featuredTools = selectTools([
  "/tools/speed-test",
  "/tools/vat-calculator",
  "/tools/unit-converter",
  "/tools/password-generator",
  "/tools/timezone-converter",
  "/tools/budget-planner",
]);

const categories: ToolCategorySection[] = [
  {
    id: "financial-tools",
    title: "Financial Tools",
    description:
      "Plan costs, compare repayments, estimate taxes, and understand everyday money decisions with practical calculators.",
    metadata:
      "Finance calculators for VAT, fuel, budgeting, savings, loans, mortgages, pay, and household utility costs.",
    keywords: ["VAT", "budget", "loan", "savings", "fuel", "utility bills"],
    icon: Landmark,
    tools: selectTools([
      "/tools/vat-calculator",
      "/tools/fuel-calculator",
      "/tools/budget-planner",
      "/tools/compound-interest-calculator",
      "/tools/loan-repayment-calculator",
      "/tools/mortgage-overpayment-calculator",
      "/tools/savings-goal-calculator",
      "/tools/uk-take-home-pay-estimator",
      "/tools/uk-electricity-cost-calculator",
      "/tools/uk-energy-direct-debit-calculator",
    ]),
  },
  {
    id: "time-date-tools",
    title: "Time & Date Tools",
    description:
      "Coordinate across time zones, count dates, calculate ages, and plan deadlines without spreadsheet setup.",
    metadata:
      "Time and date utilities covering world clocks, time zone conversion, birthdays, deadlines, workdays, and timesheets.",
    keywords: ["world clock", "time zones", "age", "deadline", "working days"],
    icon: Clock,
    tools: selectTools([
      "/tools/world-clock",
      "/tools/timezone-converter",
      "/tools/age-calculator",
      "/tools/deadline-countdown-calculator",
      "/tools/time-card-calculator",
      "/tools/uk-working-days-calculator",
      "/tools/uk-holiday-entitlement-calculator",
      "/tools/pomodoro-timer",
    ]),
  },
  {
    id: "internet-it-tools",
    title: "Internet & IT Tools",
    description:
      "Use browser-based utilities for networking, security, encoding, structured data, campaign links, and web previews.",
    metadata:
      "Internet and IT tools for speed testing, passwords, IP lookup, QR codes, JSON formatting, URL encoding, Base64, and UTM links.",
    keywords: ["speed test", "password", "IP checker", "JSON", "Base64", "UTM"],
    icon: Gauge,
    tools: selectTools([
      "/tools/speed-test",
      "/tools/password-generator",
      "/tools/ip-checker",
      "/tools/qr-generator",
      "/tools/json-formatter-validator",
      "/tools/url-encoder-decoder",
      "/tools/base64-encoder-decoder",
      "/tools/utm-builder",
      "/tools/email-link-generator",
      "/tools/meta-tag-preview-checker",
    ]),
  },
  {
    id: "converters",
    title: "Converters",
    description:
      "Convert measurements, time zones, salaries, encoded text, and bill units with straightforward conversion tools.",
    metadata:
      "Conversion tools for units, time zones, salary rates, URL text, Base64 data, gas meter units, and water usage.",
    keywords: ["unit converter", "timezone", "salary", "URL encode", "gas kWh"],
    icon: ArrowLeftRight,
    tools: selectTools([
      "/tools/unit-converter",
      "/tools/timezone-converter",
      "/tools/salary-to-hourly-calculator",
      "/tools/url-encoder-decoder",
      "/tools/base64-encoder-decoder",
      "/tools/uk-gas-bill-calculator",
      "/tools/uk-water-bill-calculator",
      "/tools/uk-electricity-cost-calculator",
    ]),
  },
  {
    id: "productivity-tools",
    title: "Productivity Tools",
    description:
      "Prioritise work, estimate effort, manage focus sessions, and make everyday planning decisions faster.",
    metadata:
      "Productivity tools for focus timing, task priority, meeting costs, reading time, time cards, and deadline planning.",
    keywords: ["pomodoro", "priority matrix", "meeting cost", "reading time", "time card"],
    icon: ListChecks,
    tools: selectTools([
      "/tools/pomodoro-timer",
      "/tools/task-priority-matrix",
      "/tools/meeting-cost-calculator",
      "/tools/reading-time-calculator",
      "/tools/time-card-calculator",
      "/tools/deadline-countdown-calculator",
      "/tools/break-even-calculator",
      "/tools/uk-notice-period-calculator",
    ]),
  },
];

const relatedSuggestions = [
  {
    title: "Plan monthly money decisions",
    description:
      "Start with a budget, compare repayments, then model savings growth.",
    tools: selectTools([
      "/tools/budget-planner",
      "/tools/loan-repayment-calculator",
      "/tools/compound-interest-calculator",
    ]),
  },
  {
    title: "Prepare for an international meeting",
    description:
      "Check the time, convert zones, estimate meeting cost, and generate follow-up links.",
    tools: selectTools([
      "/tools/world-clock",
      "/tools/timezone-converter",
      "/tools/meeting-cost-calculator",
      "/tools/email-link-generator",
    ]),
  },
  {
    title: "Audit a web or IT task",
    description:
      "Test connection quality, format JSON, encode URL values, and preview metadata.",
    tools: selectTools([
      "/tools/speed-test",
      "/tools/json-formatter-validator",
      "/tools/url-encoder-decoder",
      "/tools/meta-tag-preview-checker",
    ]),
  },
];

const searchableTools: HomepageSearchTool[] = allTools.map(
  ({ title, description, href, category, keywords }) => ({
    title,
    description,
    href,
    category,
    keywords,
  })
);

const searchableFeaturedTools: HomepageSearchTool[] = featuredTools.map(
  ({ title, description, href, category, keywords }) => ({
    title,
    description,
    href,
    category,
    keywords,
  })
);

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Daily Utility Dock - Free Online Utility Tools",
  url: "https://dailyutilitydock.com",
  description:
    "A category-based utility platform with free financial tools, time and date tools, internet and IT tools, converters, and productivity tools.",
  mainEntity: {
    "@type": "ItemList",
    name: "Utility tool categories",
    itemListElement: categories.map((category, categoryIndex) => ({
      "@type": "ListItem",
      position: categoryIndex + 1,
      item: {
        "@type": "ItemList",
        name: category.title,
        description: category.metadata,
        url: `https://dailyutilitydock.com/#${category.id}`,
        numberOfItems: category.tools.length,
        itemListElement: category.tools.map((tool, toolIndex) => ({
          "@type": "ListItem",
          position: toolIndex + 1,
          url: `https://dailyutilitydock.com${tool.href}`,
          name: tool.title,
          description: tool.description,
        })),
      },
    })),
  },
};

export const metadata: Metadata = {
  title: "Free Online Utility Tools by Category",
  description:
    "Explore Daily Utility Dock tools by category: financial calculators, time and date tools, internet and IT utilities, converters, and productivity tools.",
  keywords: [
    "free online tools",
    "financial calculators",
    "time and date tools",
    "internet tools",
    "IT utilities",
    "online converters",
    "productivity tools",
    "Daily Utility Dock",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://dailyutilitydock.com",
    title: "Daily Utility Dock - Free Online Utility Tools by Category",
    description:
      "Find fast, free, browser-based utilities grouped into finance, time, IT, converter, and productivity categories.",
    siteName: "Daily Utility Dock",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Utility Dock - Free Online Utility Tools",
    description:
      "Browse financial calculators, time tools, internet utilities, converters, and productivity tools.",
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
            Professional, fast-loading utilities for everyday decisions
          </div>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Free online tools organised for{" "}
            <span className="text-gradient">finance, time, IT, conversion, and productivity</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-xl">
            Daily Utility Dock brings practical calculators, converters, and
            browser-based utilities into clear categories so you can find the
            right tool quickly.
          </p>

          <div className="mt-8">
            <HomepageSearch
              tools={searchableTools}
              popularTools={searchableFeaturedTools}
            />
          </div>

          <nav
            className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2"
            aria-label="Tool categories"
          >
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border bg-background/80 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                {category.title}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <AdsPlaceholder size="banner" className="container mx-auto px-4 my-6" />

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
            Start with high-demand tools across speed testing, money planning,
            conversion, password security, and time zone coordination.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <ToolCard
              key={tool.href}
              title={tool.title}
              description={tool.description}
              href={tool.href}
              icon={tool.icon}
            />
          ))}
        </div>
      </section>

      <section
        id="tools"
        className="border-y bg-muted/30"
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
              Each section uses descriptive headings, category metadata, and
              internal links to help visitors and search engines understand the
              tool library.
            </p>
          </div>

          <div className="space-y-10">
            {categories.map((category) => {
              const CategoryIcon = category.icon;

              return (
                <section
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-24 rounded-2xl border bg-background p-5 shadow-sm md:p-8"
                  aria-labelledby={`${category.id}-heading`}
                >
                  <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <CategoryIcon className="h-7 w-7" />
                      </div>
                      <div>
                        <h2
                          id={`${category.id}-heading`}
                          className="text-2xl font-semibold md:text-3xl"
                        >
                          {category.title}
                        </h2>
                        <p className="mt-2 max-w-3xl text-muted-foreground">
                          {category.description}
                        </p>
                        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
                          {category.metadata}
                        </p>
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
                    {category.tools.map((tool) => (
                      <ToolCard
                        key={`${category.id}-${tool.href}`}
                        title={tool.title}
                        description={tool.description}
                        href={tool.href}
                        icon={tool.icon}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <AdsPlaceholder size="banner" className="container mx-auto px-4 my-6" />

      <section className="container mx-auto px-4 py-10" aria-labelledby="related-tools">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Related tool suggestions
          </p>
          <h2 id="related-tools" className="mt-2 text-2xl font-semibold md:text-3xl">
            Useful tool combinations for common workflows
          </h2>
          <p className="mt-3 text-muted-foreground">
            These suggestions connect related tools so visitors can move between
            calculators, converters, and utilities without searching again.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {relatedSuggestions.map((suggestion) => (
            <article
              key={suggestion.title}
              className="rounded-2xl border bg-card p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{suggestion.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {suggestion.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {suggestion.tools.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="rounded-full border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {tool.title}
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
              <h3 className="mb-2 text-lg font-semibold">Free and accessible</h3>
              <p className="text-sm text-muted-foreground">
                Use the tools immediately with no account gate, subscription, or
                unnecessary page weight.
              </p>
            </div>
            <div className="rounded-2xl border bg-background p-6">
              <h3 className="mb-2 text-lg font-semibold">Fast browser utilities</h3>
              <p className="text-sm text-muted-foreground">
                Many calculations run directly in the browser, keeping results
                quick and privacy-conscious.
              </p>
            </div>
            <div className="rounded-2xl border bg-background p-6">
              <h3 className="mb-2 text-lg font-semibold">AdSense friendly layout</h3>
              <p className="text-sm text-muted-foreground">
                Clear content sections, natural ad placements, and internal
                links keep the experience clean and readable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
