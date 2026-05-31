import type { Metadata } from "next";
import { getCoreTool } from "@/lib/site-tools";

const tool = getCoreTool("speed-test")!;

export const metadata: Metadata = {
  title: `${tool.title} - Free Connection Checker`,
  description: tool.description,
  keywords: tool.keywords,
  alternates: {
    canonical: tool.href,
  },
  openGraph: {
    type: "website",
    url: tool.href,
    title: tool.title,
    description: tool.description,
    siteName: "Daily Utility Dock",
  },
  twitter: {
    card: "summary",
    title: tool.title,
    description: tool.description,
  },
};

export default function SpeedTestLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
