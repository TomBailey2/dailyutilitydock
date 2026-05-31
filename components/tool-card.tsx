import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export function ToolCard({ title, description, href, icon: Icon }: ToolCardProps) {
  return (
    <Link href={href} className="tool-card block group">
      <div className="tool-card-icon group-hover:bg-primary/20 transition-colors">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Link>
  );
}
