import { Info, Users, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AdsPlaceholder } from "@/components/ads-placeholder";
import { BreadcrumbSchema } from "@/components/schema-markup";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dailyutilitydock.com" },
          { name: "About", url: "https://dailyutilitydock.com/about" },
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-6 flex items-center gap-3">
          <div className="tool-card-icon">
            <Info className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">About Daily Utility Dock</h1>
            <p className="text-muted-foreground">
              Your trusted destination for free online tools
            </p>
          </div>
        </div>

        <AdsPlaceholder size="banner" className="mb-6" />

        <div className="prose prose-neutral max-w-none mb-8">
          <p className="lead text-lg text-muted-foreground">
            Daily Utility Dock was created with one simple mission: to provide fast, reliable, and easy-to-use online tools that help you with everyday tasks. Whether you need to check your internet speed, convert units, or generate a secure password, we have got you covered.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Story</h2>
          <p className="text-muted-foreground">
            Founded in 2024, Daily Utility Dock started as a simple collection of calculators and converters. Today, we serve thousands of users daily with a growing suite of tools designed to simplify your digital life. Our tools are built with performance and user experience as our top priorities.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Lightning Fast</h3>
                  <p className="text-sm text-muted-foreground">
                    Our tools run client-side in your browser, ensuring instant results without server delays.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Privacy First</h3>
                  <p className="text-sm text-muted-foreground">
                    Your data never leaves your browser. We don't store, track, or sell your information.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">No Registration</h3>
                  <p className="text-sm text-muted-foreground">
                    Jump right in and use any tool instantly. No sign-ups, no logins, no hassle.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Info className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Always Free</h3>
                  <p className="text-sm text-muted-foreground">
                    All our tools are and will remain free to use. No hidden fees or premium tiers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="prose prose-neutral max-w-none mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
          <p className="text-muted-foreground">
            We are committed to maintaining the highest standards of quality and security. Our tools undergo regular testing to ensure accuracy and reliability. We also regularly update our tools based on user feedback and changing needs.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            Have questions, suggestions, or feedback? We would love to hear from you! Visit our <a href="/contact" className="text-primary hover:underline">contact page</a> to get in touch with our team.
          </p>
        </div>

        <AdsPlaceholder size="inline" className="mb-6" />
      </div>
    </div>
  );
}
