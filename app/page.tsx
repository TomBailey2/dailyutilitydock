import {
  Gauge,
  Globe,
  Clock,
  Calculator,
  Fuel,
  Key,
  QrCode,
  MapPin,
  Calendar,
  ArrowLeftRight,
  Droplets,
  Flame,
  PiggyBank,
  Landmark,
  Home,
  Target,
  Wallet,
  TrendingUp,
  Timer,
  ListChecks,
  Users,
  BookOpen,
  AlarmClock,
  Link as LinkIcon,
  Binary,
  Braces,
  Megaphone,
  Mail,
  Search,
  Umbrella,
  Receipt,
  HeartPulse,
  Scale,
  FileClock,
  Briefcase,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { ToolCard } from "@/components/tool-card";
import { AdsPlaceholder } from "@/components/ads-placeholder";
import { seoTools } from "@/lib/seo-tools";

const newToolIconMap: Record<string, LucideIcon> = {
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

const tools = [
  {
    title: "Internet Speed Test",
    description: "Check your download and upload speeds in seconds",
    href: "/tools/speed-test",
    icon: Gauge,
  },
  {
    title: "World Clock",
    description: "View current time in multiple cities worldwide",
    href: "/tools/world-clock",
    icon: Globe,
  },
  {
    title: "Time Zone Converter",
    description: "Convert times between different time zones easily",
    href: "/tools/timezone-converter",
    icon: Clock,
  },
  {
    title: "UK VAT Calculator",
    description: "Calculate UK VAT at 20%, 5%, or 0% rates",
    href: "/tools/vat-calculator",
    icon: Calculator,
  },
  {
    title: "Fuel Cost Calculator",
    description: "Calculate your journey fuel costs and efficiency",
    href: "/tools/fuel-calculator",
    icon: Fuel,
  },
  {
    title: "Password Generator",
    description: "Create strong, secure passwords instantly",
    href: "/tools/password-generator",
    icon: Key,
  },
  {
    title: "QR Code Generator",
    description: "Generate QR codes for URLs, text, and more",
    href: "/tools/qr-generator",
    icon: QrCode,
  },
  {
    title: "IP Address Checker",
    description: "Find your public IP address and location details",
    href: "/tools/ip-checker",
    icon: MapPin,
  },
  {
    title: "Age Calculator",
    description: "Calculate exact age from date of birth",
    href: "/tools/age-calculator",
    icon: Calendar,
  },
  {
    title: "Unit Converter",
    description: "Convert length, weight, temperature and more",
    href: "/tools/unit-converter",
    icon: ArrowLeftRight,
  },
  ...seoTools.map((tool) => ({
    title: tool.title,
    description: tool.description,
    href: `/tools/${tool.slug}`,
    icon: newToolIconMap[tool.icon] ?? Calculator,
  })),
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="border-b bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free Online Tools for{" "}
            <span className="text-gradient">Everyday Tasks</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Fast, reliable, and easy-to-use calculators, converters, and utilities.
            No registration required. Completely free.
          </p>
        </div>
      </section>

      <AdsPlaceholder size="banner" className="container mx-auto px-4 my-6" />

      <section id="tools" className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          Our Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool) => (
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

      <AdsPlaceholder size="banner" className="container mx-auto px-4 my-6" />

      <section className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-lg mb-2">100% Free</h3>
              <p className="text-sm text-muted-foreground">
                All tools are completely free to use. No hidden fees or subscriptions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">No Registration</h3>
              <p className="text-sm text-muted-foreground">
                Start using our tools instantly. No sign-up or login required.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Fast & Secure</h3>
              <p className="text-sm text-muted-foreground">
                Your data stays in your browser. Privacy-first approach to all tools.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
