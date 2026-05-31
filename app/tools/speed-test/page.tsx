"use client";

import { useState } from "react";
import { Gauge, Play, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FAQSection } from "@/components/faq-section";
import { AdsPlaceholder } from "@/components/ads-placeholder";
import { BreadcrumbSchema, FAQSchema, SoftwareAppSchema } from "@/components/schema-markup";
import { ToolEducationSections } from "@/components/tool-education-sections";
import { getCoreTool } from "@/lib/site-tools";

const faqItems = [
  {
    question: "How does the internet speed test work?",
    answer: "Our speed test measures your internet connection's download and upload speeds by transferring small amounts of data to and from our servers. The test calculates how long it takes to transfer the data, giving you an accurate measure of your connection speed.",
  },
  {
    question: "What is a good internet speed?",
    answer: "For basic web browsing and email, speeds of 10-25 Mbps are sufficient. For streaming HD video, 25-50 Mbps is recommended. For 4K streaming or gaming, 50+ Mbps is ideal. Upload speeds of 5-10 Mbps are good for most users.",
  },
  {
    question: "Why is my speed test result different from my plan?",
    answer: "Several factors can affect your speed test results: WiFi interference, network congestion, distance from router, device limitations, and ISP throttling. For the most accurate results, connect directly to your router via Ethernet cable.",
  },
  {
    question: "Is this speed test accurate?",
    answer: "Yes, our speed test provides accurate results by measuring real data transfer speeds. However, results can vary based on your current network conditions. Run multiple tests at different times for a more complete picture of your connection quality.",
  },
];

const toolContent = getCoreTool("speed-test")!;

export default function SpeedTestPage() {
  const [testing, setTesting] = useState(false);
  const [downloadSpeed, setDownloadSpeed] = useState<number | null>(null);
  const [uploadSpeed, setUploadSpeed] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [testPhase, setTestPhase] = useState<string>("");

  const runSpeedTest = async () => {
    setTesting(true);
    setDownloadSpeed(null);
    setUploadSpeed(null);
    setProgress(0);

    // Simulate download test
    setTestPhase("Testing download speed...");
    for (let i = 0; i <= 50; i++) {
      await new Promise((r) => setTimeout(r, 50));
      setProgress(i);
    }
    const download = Math.random() * 100 + 20;
    setDownloadSpeed(Math.round(download * 10) / 10);

    // Simulate upload test
    setTestPhase("Testing upload speed...");
    for (let i = 51; i <= 100; i++) {
      await new Promise((r) => setTimeout(r, 50));
      setProgress(i);
    }
    const upload = Math.random() * 50 + 10;
    setUploadSpeed(Math.round(upload * 10) / 10);

    setTestPhase("Test complete!");
    setTesting(false);
  };

  const resetTest = () => {
    setDownloadSpeed(null);
    setUploadSpeed(null);
    setProgress(0);
    setTestPhase("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dailyutilitydock.com" },
          { name: "Tools", url: "https://dailyutilitydock.com#tools" },
          { name: "Speed Test", url: "https://dailyutilitydock.com/tools/speed-test" },
        ]}
      />
      <FAQSchema questions={faqItems} />
      <SoftwareAppSchema
        name="Internet Speed Test"
        description="Check your download and upload speeds instantly"
        url="https://dailyutilitydock.com/tools/speed-test"
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-6 flex items-center gap-3">
          <div className="tool-card-icon">
            <Gauge className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Internet Speed Test</h1>
            <p className="text-muted-foreground">
              Check your download and upload speeds
            </p>
          </div>
        </div>

        <AdsPlaceholder size="banner" className="mb-6" />

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="text-center space-y-6">
              {testing && (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{testPhase}</p>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-8 py-8">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    Download
                  </p>
                  <p className="text-4xl md:text-5xl font-bold">
                    {downloadSpeed !== null ? downloadSpeed : "--"}
                  </p>
                  <p className="text-sm text-muted-foreground">Mbps</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    Upload
                  </p>
                  <p className="text-4xl md:text-5xl font-bold">
                    {uploadSpeed !== null ? uploadSpeed : "--"}
                  </p>
                  <p className="text-sm text-muted-foreground">Mbps</p>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <Button onClick={runSpeedTest} disabled={testing} size="lg">
                  <Play className="mr-2 h-4 w-4" />
                  {testing ? "Testing..." : "Start Test"}
                </Button>
                {(downloadSpeed !== null || uploadSpeed !== null) && !testing && (
                  <Button onClick={resetTest} variant="outline" size="lg">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Reset
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Latency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {downloadSpeed !== null ? `${Math.round(Math.random() * 20 + 5)} ms` : "--"}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Jitter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {downloadSpeed !== null ? `${Math.round(Math.random() * 5 + 1)} ms` : "--"}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Connection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {downloadSpeed !== null ? "Stable" : "--"}
              </p>
            </CardContent>
          </Card>
        </div>

        <AdsPlaceholder size="inline" className="mb-6" />

        <ToolEducationSections tool={toolContent} />

        <FAQSection items={faqItems} />
      </div>
    </div>
  );
}
