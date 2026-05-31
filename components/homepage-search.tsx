"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";

export interface HomepageSearchTool {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords?: string[];
}

interface HomepageSearchProps {
  tools: HomepageSearchTool[];
  popularTools: HomepageSearchTool[];
}

export function HomepageSearch({ tools, popularTools }: HomepageSearchProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!normalizedQuery) {
      return popularTools.slice(0, 5);
    }

    return tools
      .filter((tool) => {
        const searchableText = [
          tool.title,
          tool.description,
          tool.category,
          ...(tool.keywords ?? []),
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(normalizedQuery);
      })
      .sort((a, b) => {
        const aTitleMatch = a.title.toLowerCase().startsWith(normalizedQuery);
        const bTitleMatch = b.title.toLowerCase().startsWith(normalizedQuery);

        if (aTitleMatch === bTitleMatch) {
          return a.title.localeCompare(b.title);
        }

        return aTitleMatch ? -1 : 1;
      })
      .slice(0, 6);
  }, [normalizedQuery, popularTools, tools]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (results[0]) {
      router.push(results[0].href);
    }
  }

  return (
    <div className="mx-auto w-full max-w-3xl rounded-2xl border bg-card/95 p-3 text-left shadow-lg shadow-primary/5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="homepage-tool-search">
          Search tools
        </label>
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            id="homepage-tool-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search calculators, converters, time tools, IT utilities..."
            className="input-field h-12 pl-12"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn-primary h-12 shrink-0">
          Search tools
        </button>
      </form>

      <div className="mt-3 rounded-xl bg-muted/50 p-2" aria-live="polite">
        <p className="px-2 pb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {normalizedQuery ? "Matching tools" : "Popular searches"}
        </p>
        {results.length > 0 ? (
          <div className="grid gap-2 sm:grid-cols-2">
            {results.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-lg border bg-background p-3 transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                <span className="flex items-center justify-between gap-3 text-sm font-semibold">
                  {tool.title}
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  {tool.category}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="px-2 pb-1 text-sm text-muted-foreground">
            No matching tool found. Try a broader term such as finance, time,
            converter, password, or JSON.
          </p>
        )}
      </div>
    </div>
  );
}
