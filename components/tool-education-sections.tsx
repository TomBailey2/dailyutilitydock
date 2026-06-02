import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import {
  getRelatedSiteTools,
  type CoreTool,
} from "@/lib/site-tools";
import { getBlogPostByToolSlug } from "@/lib/blog-posts";
import { getCoreToolPageCopy } from "@/lib/tool-page-copy";

function Paragraphs({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item) => (
        <p key={item} className="mt-3 text-muted-foreground">
          {item}
        </p>
      ))}
    </>
  );
}

export function ToolEducationSections({ tool }: { tool: CoreTool }) {
  const pageCopy = getCoreToolPageCopy(tool);
  const guide = getBlogPostByToolSlug(tool.slug);
  const relatedTools = getRelatedSiteTools(
    tool.relatedSlugs,
    tool.slug,
    tool.categorySlugs
  );

  return (
    <>
      <section className="rounded-xl border bg-card p-6">
        <h2 className="text-2xl font-semibold">Introduction</h2>
        <Paragraphs items={pageCopy.introduction} />

        <h2 className="mt-8 text-2xl font-semibold">About this {tool.shortTitle.toLowerCase()}</h2>
        <Paragraphs items={pageCopy.about} />

        <h2 className="mt-8 text-2xl font-semibold">How this tool works</h2>
        <Paragraphs items={pageCopy.howItWorks} />
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted-foreground">
          {tool.howItWorks.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <h2 className="mt-8 text-2xl font-semibold">When to use this tool</h2>
        <Paragraphs items={pageCopy.whenToUse} />
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
          {tool.whenToUse.map((useCase) => (
            <li key={useCase}>{useCase}</li>
          ))}
        </ul>
      </section>

      {guide ? (
        <section className="mt-8 rounded-xl border bg-primary/5 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
                <BookOpen className="h-4 w-4" />
                Full guide
              </div>
              <h2 className="text-2xl font-semibold">{guide.title}</h2>
              <p className="mt-3 text-muted-foreground">{guide.excerpt}</p>
            </div>
            <Link
              href={`/blog/${guide.slug}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary/40"
            >
              Read guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      ) : null}

      {relatedTools.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-semibold">Related tools</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedTools.map((related) => (
              <Link
                key={related.slug}
                href={related.href}
                className="group rounded-xl border bg-card p-4 shadow-sm transition-colors hover:border-primary/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">{related.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {related.description}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
