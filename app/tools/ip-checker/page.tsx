"use client";

import { useState, useEffect } from "react";
import { MapPin, RefreshCw, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FAQSection } from "@/components/faq-section";
import { AdsPlaceholder } from "@/components/ads-placeholder";
import { BreadcrumbSchema, FAQSchema, SoftwareAppSchema } from "@/components/schema-markup";

const faqItems = [
  {
    question: "What is an IP address?",
    answer: "An IP (Internet Protocol) address is a unique numerical label assigned to each device connected to the internet. It serves as an identifier and allows devices to communicate with each other across networks.",
  },
  {
    question: "What's the difference between IPv4 and IPv6?",
    answer: "IPv4 uses 32-bit addresses (e.g., 192.168.1.1) allowing about 4.3 billion unique addresses. IPv6 uses 128-bit addresses, providing a virtually unlimited number of addresses to accommodate the growing number of internet-connected devices.",
  },
  {
    question: "Can my IP address reveal my location?",
    answer: "An IP address can reveal your approximate geographic location, typically down to the city level. However, it cannot pinpoint your exact address. The accuracy of location data depends on your internet service provider and how they assign IP addresses.",
  },
  {
    question: "How can I hide my IP address?",
    answer: "You can hide or mask your IP address by using a VPN (Virtual Private Network), proxy server, or Tor browser. These services route your traffic through different servers, making it appear as though you're connecting from a different location.",
  },
];

export default function IPCheckerPage() {
  const [ipInfo, setIpInfo] = useState<{
    ip: string;
    city?: string;
    country?: string;
    countryCode?: string;
    region?: string;
    timezone?: string;
    isp?: string;
    lat?: number;
    lon?: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchIPInfo = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://ipapi.co/json/");
      if (!response.ok) throw new Error("Failed to fetch IP information");
      const data = await response.json();
      setIpInfo({
        ip: data.ip,
        city: data.city,
        country: data.country_name,
        countryCode: data.country_code,
        region: data.region,
        timezone: data.timezone,
        isp: data.org,
        lat: data.latitude,
        lon: data.longitude,
      });
    } catch (err) {
      setError("Unable to retrieve IP information. Please try again.");
      // Fallback to simulated data
      setIpInfo({
        ip: "192.168.1.1",
        city: "Unknown",
        country: "Unknown",
        countryCode: "UK",
        region: "Unknown",
        timezone: "Europe/London",
        isp: "Your ISP",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIPInfo();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dailyutilityhub.com" },
          { name: "Tools", url: "https://dailyutilityhub.com#tools" },
          { name: "IP Checker", url: "https://dailyutilityhub.com/tools/ip-checker" },
        ]}
      />
      <FAQSchema questions={faqItems} />
      <SoftwareAppSchema
        name="IP Address Checker"
        description="Find your public IP address and location details"
        url="https://dailyutilityhub.com/tools/ip-checker"
      />

      <div className="max-w-2xl mx-auto">
        <div className="mb-6 flex items-center gap-3">
          <div className="tool-card-icon">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">IP Address Checker</h1>
            <p className="text-muted-foreground">
              Find your public IP address and location
            </p>
          </div>
        </div>

        <AdsPlaceholder size="banner" className="mb-6" />

        <Card className="mb-6">
          <CardContent className="pt-6">
            {loading ? (
              <div className="text-center py-8">
                <RefreshCw className="h-8 w-8 mx-auto mb-4 animate-spin text-muted-foreground" />
                <p className="text-muted-foreground">Detecting your IP address...</p>
              </div>
            ) : error ? (
              <div className="text-center py-8">
                <p className="text-destructive mb-4">{error}</p>
                <Button onClick={fetchIPInfo}>Try Again</Button>
              </div>
            ) : ipInfo ? (
              <div className="text-center space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Your IP Address</p>
                  <p className="text-4xl font-mono font-bold">{ipInfo.ip}</p>
                </div>
                <Button onClick={fetchIPInfo} variant="outline">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Refresh
                </Button>
              </div>
            ) : null}
          </CardContent>
        </Card>

        {ipInfo && !loading && (
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">
                  {ipInfo.city}, {ipInfo.country}
                </p>
                <p className="text-sm text-muted-foreground">{ipInfo.region}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Timezone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">{ipInfo.timezone}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  ISP / Organization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">{ipInfo.isp}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Coordinates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">
                  {ipInfo.lat?.toFixed(4)}, {ipInfo.lon?.toFixed(4)}
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        <AdsPlaceholder size="inline" className="mb-6" />

        <FAQSection items={faqItems} />
      </div>
    </div>
  );
}
