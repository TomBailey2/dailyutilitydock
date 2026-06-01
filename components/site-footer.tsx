import Link from "next/link";
import { Wrench } from "lucide-react";
import { siteCategories } from "@/lib/site-tools";

const footerLinks = {
  tools: [
    { label: "Speed Test", href: "/tools/speed-test" },
    { label: "World Clock", href: "/tools/world-clock" },
    { label: "Time Zone Converter", href: "/tools/timezone-converter" },
    { label: "VAT Calculator", href: "/tools/vat-calculator" },
    { label: "Fuel Calculator", href: "/tools/fuel-calculator" },
    { label: "Password Generator", href: "/tools/password-generator" },
  ],
  moreTools: [
    { label: "QR Generator", href: "/tools/qr-generator" },
    { label: "IP Checker", href: "/tools/ip-checker" },
    { label: "Age Calculator", href: "/tools/age-calculator" },
    { label: "Unit Converter", href: "/tools/unit-converter" },
  ],
  categories: siteCategories.map((category) => ({
    label: category.title,
    href: category.path,
  })),
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
  ],
  company: [
    { label: "Guides", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Wrench className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold">Daily Utility Dock</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Free online tools for everyday tasks. Fast, reliable, and easy to use.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Popular Tools</h3>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">More Tools</h3>
            <ul className="space-y-2">
              {footerLinks.moreTools.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Categories</h3>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Daily Utility Dock. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with care for everyday users.
          </p>
        </div>
      </div>
    </footer>
  );
}
