import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  getRelatedSiteTools,
  type CoreTool,
} from "@/lib/site-tools";

export function ToolEducationSections({ tool }: { tool: CoreTool }) {
  const relatedTools = getRelatedSiteTools(
    tool.relatedSlugs,
    tool.slug,
    tool.categorySlugs
  );

  return (
    <>
      <section className="rounded-xl border bg-card p-6">
        <h2 className="text-2xl font-semibold">About this {tool.shortTitle.toLowerCase()}</h2>
        <p className="mt-3 text-muted-foreground">{tool.intro}</p>

        <h2 className="mt-8 text-2xl font-semibold">How this tool works</h2>
        <p className="mt-3 text-muted-foreground">
          The calculator keeps the workflow focused: enter the values you know,
          review the result, then adjust one input at a time to compare
          scenarios. The output is intended as a practical estimate, with the
          key assumptions visible on the page.
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted-foreground">
          {tool.howItWorks.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <h2 className="mt-8 text-2xl font-semibold">When to use this tool</h2>
        <p className="mt-3 text-muted-foreground">
          Use this page when you need a quick answer for an everyday decision
          and want the calculation separated from unrelated settings. For
          official, regulated, or high-value decisions, treat the result as a
          planning aid and verify the details with the relevant provider,
          employer, authority, or professional adviser.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
          {tool.whenToUse.map((useCase) => (
            <li key={useCase}>{useCase}</li>
          ))}
        </ul>
      </section>

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
