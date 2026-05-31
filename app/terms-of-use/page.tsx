import { FileText } from "lucide-react";
import { AdsPlaceholder } from "@/components/ads-placeholder";
import { BreadcrumbSchema } from "@/components/schema-markup";

export default function TermsOfUsePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dailyutilitydock.com" },
          { name: "Terms of Use", url: "https://dailyutilitydock.com/terms-of-use" },
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-6 flex items-center gap-3">
          <div className="tool-card-icon">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Terms of Use</h1>
            <p className="text-muted-foreground">
              Last updated: January 2024
            </p>
          </div>
        </div>

        <AdsPlaceholder size="banner" className="mb-6" />

        <div className="prose prose-neutral max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using Daily Utility Dock ("the Website"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Description of Service</h2>
            <p className="text-muted-foreground">
              Daily Utility Dock provides free online tools including calculators, converters, and utilities for everyday tasks. The service is provided "as is" and we make no guarantees about the availability or accuracy of any specific tool.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Acceptable Use</h2>
            <p className="text-muted-foreground">You agree to use the Website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Use the Website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the Website</li>
              <li>Interfere with or disrupt the Website or servers</li>
              <li>Use automated systems or scripts to access the Website without permission</li>
              <li>Reproduce, duplicate, or copy material from the Website for commercial purposes without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
            <p className="text-muted-foreground">
              The Website and its content are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>The Website will be uninterrupted or error-free</li>
              <li>Results from the use of the Website will be accurate or reliable</li>
              <li>The quality of any products, services, or information will meet your expectations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              In no event shall Daily Utility Dock, its directors, employees, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or use of the Website. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Accuracy of Results</h2>
            <p className="text-muted-foreground">
              While we strive to provide accurate tools and calculators, we cannot guarantee that all results will be accurate. Users should verify important calculations independently. The tools are provided for informational purposes only and should not be relied upon for critical decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground">
              The Website and its original content, features, and functionality are owned by Daily Utility Dock and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
            <p className="text-muted-foreground">
              The Website may contain links to third-party websites or services that are not owned or controlled by Daily Utility Dock. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">User Content</h2>
            <p className="text-muted-foreground">
              If you communicate with us, such as through our contact form, you acknowledge that any information you submit may be stored and used by us in accordance with our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Modifications to Service</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify or discontinue, temporarily or permanently, the Website or any service to which it connects, with or without notice and without liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms of Use at any time. We will notify users of any material changes by posting the new Terms of Use on this page. Your continued use of the Website after any such changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Use, please <a href="/contact" className="text-primary hover:underline">contact us</a>.
            </p>
          </section>
        </div>

        <AdsPlaceholder size="inline" className="mb-6 mt-8" />
      </div>
    </div>
  );
}
