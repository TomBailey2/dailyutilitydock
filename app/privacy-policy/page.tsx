import { Shield } from "lucide-react";
import { AdsPlaceholder } from "@/components/ads-placeholder";
import { BreadcrumbSchema } from "@/components/schema-markup";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dailyutilitydock.com" },
          { name: "Privacy Policy", url: "https://dailyutilitydock.com/privacy-policy" },
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-6 flex items-center gap-3">
          <div className="tool-card-icon">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated: January 2024
            </p>
          </div>
        </div>

        <AdsPlaceholder size="banner" className="mb-6" />

        <div className="prose prose-neutral max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground">
              Daily Utility Dock ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
            <p className="text-muted-foreground">
              When you visit our website, we may automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Your IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Information You Provide</h3>
            <p className="text-muted-foreground">
              If you contact us through our contact form, we collect the information you provide, including your name, email address, and message content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide and maintain our website and tools</li>
              <li>Improve user experience</li>
              <li>Analyze website usage and trends</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Display relevant advertisements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Client-Side Processing</h2>
            <p className="text-muted-foreground">
              Most of our tools process data entirely in your browser (client-side). This means:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Passwords are generated locally and never sent to our servers</li>
              <li>Calculations are performed in your browser</li>
              <li>Your sensitive data remains on your device</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p className="text-muted-foreground">
              We use cookies and similar tracking technologies to enhance your experience. For more information, please see our <a href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground">
              We may use third-party services for:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
              <li><strong>Google AdSense:</strong> To display advertisements on our website</li>
              <li><strong>IP API Services:</strong> For IP address lookup functionality</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              These third parties have their own privacy policies governing the use of information they collect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate security measures to protect your information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-muted-foreground">You have the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of analytics tracking</li>
              <li>Disable cookies in your browser</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our website is not intended for children under 13. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please <a href="/contact" className="text-primary hover:underline">contact us</a>.
            </p>
          </section>
        </div>

        <AdsPlaceholder size="inline" className="mb-6 mt-8" />
      </div>
    </div>
  );
}
