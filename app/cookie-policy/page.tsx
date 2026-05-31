import { Cookie } from "lucide-react";
import { AdsPlaceholder } from "@/components/ads-placeholder";
import { BreadcrumbSchema } from "@/components/schema-markup";

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dailyutilityhub.com" },
          { name: "Cookie Policy", url: "https://dailyutilityhub.com/cookie-policy" },
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-6 flex items-center gap-3">
          <div className="tool-card-icon">
            <Cookie className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Cookie Policy</h1>
            <p className="text-muted-foreground">
              Last updated: January 2024
            </p>
          </div>
        </div>

        <AdsPlaceholder size="banner" className="mb-6" />

        <div className="prose prose-neutral max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
            <p className="text-muted-foreground">
              Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
            <p className="text-muted-foreground">
              Daily Utility Hub uses cookies for the following purposes:
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Essential Cookies</h3>
            <p className="text-muted-foreground">
              These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas. The website cannot function properly without these cookies.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Analytics Cookies</h3>
            <p className="text-muted-foreground">
              We use Google Analytics to understand how visitors interact with our website. These cookies collect information anonymously, including the number of visitors, where visitors come from, and the pages they visit.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Advertising Cookies</h3>
            <p className="text-muted-foreground">
              We use Google AdSense to display advertisements. These cookies are used to show ads that are relevant to you and measure the effectiveness of advertising campaigns.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Preference Cookies</h3>
            <p className="text-muted-foreground">
              These cookies allow the website to remember choices you make (such as your user name, language, or the region you are in) and provide enhanced, more personalized features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 pr-4 font-semibold">Cookie Type</th>
                    <th className="text-left py-3 pr-4 font-semibold">Purpose</th>
                    <th className="text-left py-3 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 pr-4">Session Cookies</td>
                    <td className="py-3 pr-4">Essential website functionality</td>
                    <td className="py-3">Until browser closes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4">Persistent Cookies</td>
                    <td className="py-3 pr-4">Remember preferences</td>
                    <td className="py-3">Up to 2 years</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4">Analytics Cookies</td>
                    <td className="py-3 pr-4">Website usage analysis</td>
                    <td className="py-3">26 months</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Advertising Cookies</td>
                    <td className="py-3 pr-4">Relevant ad delivery</td>
                    <td className="py-3">Up to 1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
            <p className="text-muted-foreground">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>View cookies stored on your device</li>
              <li>Accept or reject cookies</li>
              <li>Delete all or specific cookies</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific sites</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Please note that blocking some cookies may affect your experience on our website and some features may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
            <p className="text-muted-foreground">
              Some cookies are placed by third-party services that appear on our pages. These include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Google Analytics:</strong> For website analytics</li>
              <li><strong>Google AdSense:</strong> For displaying advertisements</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We do not control these third-party cookies. Please refer to the respective third-party websites for information about their cookie practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              For any questions about our use of cookies, please <a href="/contact" className="text-primary hover:underline">contact us</a>.
            </p>
          </section>
        </div>

        <AdsPlaceholder size="inline" className="mb-6 mt-8" />
      </div>
    </div>
  );
}
