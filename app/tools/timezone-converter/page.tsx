"use client";

import { useState } from "react";
import { Clock, ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FAQSection } from "@/components/faq-section";
import { AdsPlaceholder } from "@/components/ads-placeholder";
import { BreadcrumbSchema, FAQSchema, SoftwareAppSchema } from "@/components/schema-markup";
import { ToolEducationSections } from "@/components/tool-education-sections";
import { getCoreTool } from "@/lib/site-tools";

const timezones = [
  { id: "UTC", name: "UTC", offset: "UTC" },
  { id: "America/New_York", name: "New York (EST/EDT)", offset: "UTC-5/-4" },
  { id: "America/Los_Angeles", name: "Los Angeles (PST/PDT)", offset: "UTC-8/-7" },
  { id: "America/Chicago", name: "Chicago (CST/CDT)", offset: "UTC-6/-5" },
  { id: "Europe/London", name: "London (GMT/BST)", offset: "UTC+0/+1" },
  { id: "Europe/Paris", name: "Paris (CET/CEST)", offset: "UTC+1/+2" },
  { id: "Europe/Berlin", name: "Berlin (CET/CEST)", offset: "UTC+1/+2" },
  { id: "Asia/Tokyo", name: "Tokyo (JST)", offset: "UTC+9" },
  { id: "Asia/Shanghai", name: "Shanghai (CST)", offset: "UTC+8" },
  { id: "Asia/Dubai", name: "Dubai (GST)", offset: "UTC+4" },
  { id: "Asia/Singapore", name: "Singapore (SGT)", offset: "UTC+8" },
  { id: "Australia/Sydney", name: "Sydney (AEST/AEDT)", offset: "UTC+10/+11" },
  { id: "Asia/Kolkata", name: "Mumbai (IST)", offset: "UTC+5:30" },
];

const faqItems = [
  {
    question: "How do I convert time between timezones?",
    answer: "Simply select your source timezone, enter the time you want to convert, then select your target timezone. The converted time will be displayed instantly. You can convert both past and future times.",
  },
  {
    question: "Does it handle daylight saving time?",
    answer: "Yes! The converter automatically accounts for daylight saving time changes based on the date you select. Just enter the date of the event you're converting, and DST adjustments will be applied automatically.",
  },
  {
    question: "What's the difference between UTC and GMT?",
    answer: "UTC (Coordinated Universal Time) and GMT (Greenwich Mean Time) are often used interchangeably, but UTC is the modern standard. Both represent the same time zone without daylight saving time changes.",
  },
  {
    question: "Can I convert dates as well as times?",
    answer: "Yes, our timezone converter handles both dates and times. This is especially useful when converting times that cross midnight, where the date may change in the target timezone.",
  },
];

const toolContent = getCoreTool("timezone-converter")!;

export default function TimezoneConverterPage() {
  const [sourceTimezone, setSourceTimezone] = useState("Europe/London");
  const [targetTimezone, setTargetTimezone] = useState("America/New_York");
  const [inputDate, setInputDate] = useState("");
  const [inputTime, setInputTime] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleConvert = () => {
    if (!inputDate || !inputTime) return;

    const dateTimeStr = `${inputDate}T${inputTime}:00`;
    const sourceDate = new Date(dateTimeStr);

    const targetTime = new Date(
      sourceDate.toLocaleString("en-US", { timeZone: targetTimezone })
    );

    const formattedResult = targetTime.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    setResult(formattedResult);
  };

  const swapTimezones = () => {
    const temp = sourceTimezone;
    setSourceTimezone(targetTimezone);
    setTargetTimezone(temp);
    setResult(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dailyutilitydock.com" },
          { name: "Tools", url: "https://dailyutilitydock.com#tools" },
          { name: "Timezone Converter", url: "https://dailyutilitydock.com/tools/timezone-converter" },
        ]}
      />
      <FAQSchema questions={faqItems} />
      <SoftwareAppSchema
        name="Timezone Converter"
        description="Convert times between different timezones easily"
        url="https://dailyutilitydock.com/tools/timezone-converter"
      />

      <div className="max-w-2xl mx-auto">
        <div className="mb-6 flex items-center gap-3">
          <div className="tool-card-icon">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Timezone Converter</h1>
            <p className="text-muted-foreground">
              Convert times between different timezones
            </p>
          </div>
        </div>

        <AdsPlaceholder size="banner" className="mb-6" />

        <Card className="mb-6">
          <CardContent className="pt-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="source-tz">From Timezone</Label>
                  <Select
                    value={sourceTimezone}
                    onValueChange={setSourceTimezone}
                  >
                    <SelectTrigger id="source-tz">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {timezones.map((tz) => (
                        <SelectItem key={tz.id} value={tz.id}>
                          {tz.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="input-date">Date</Label>
                  <Input
                    id="input-date"
                    type="date"
                    value={inputDate}
                    onChange={(e) => setInputDate(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="input-time">Time</Label>
                  <Input
                    id="input-time"
                    type="time"
                    value={inputTime}
                    onChange={(e) => setInputTime(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="target-tz">To Timezone</Label>
                  <Select
                    value={targetTimezone}
                    onValueChange={setTargetTimezone}
                  >
                    <SelectTrigger id="target-tz">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {timezones.map((tz) => (
                        <SelectItem key={tz.id} value={tz.id}>
                          {tz.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={swapTimezones}
                >
                  <ArrowLeftRight className="mr-2 h-4 w-4" />
                  Swap Timezones
                </Button>
              </div>
            </div>

            <Button onClick={handleConvert} className="w-full" size="lg">
              Convert Time
            </Button>
          </CardContent>
        </Card>

        {result && (
          <Card className="mb-6 bg-primary/5 border-primary/20">
            <CardContent className="pt-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Converted Time in {timezones.find((t) => t.id === targetTimezone)?.name}
              </p>
              <p className="text-2xl font-semibold">{result}</p>
            </CardContent>
          </Card>
        )}

        <AdsPlaceholder size="inline" className="mb-6" />

        <ToolEducationSections tool={toolContent} />

        <FAQSection items={faqItems} />
      </div>
    </div>
  );
}
