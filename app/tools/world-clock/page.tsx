"use client";

import { useState, useEffect } from "react";
import { Globe, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

const timezones = [
  { id: "America/New_York", city: "New York", country: "USA", abbr: "EST/EDT" },
  { id: "America/Los_Angeles", city: "Los Angeles", country: "USA", abbr: "PST/PDT" },
  { id: "America/Chicago", city: "Chicago", country: "USA", abbr: "CST/CDT" },
  { id: "Europe/London", city: "London", country: "UK", abbr: "GMT/BST" },
  { id: "Europe/Paris", city: "Paris", country: "France", abbr: "CET/CEST" },
  { id: "Europe/Berlin", city: "Berlin", country: "Germany", abbr: "CET/CEST" },
  { id: "Asia/Tokyo", city: "Tokyo", country: "Japan", abbr: "JST" },
  { id: "Asia/Shanghai", city: "Shanghai", country: "China", abbr: "CST" },
  { id: "Asia/Dubai", city: "Dubai", country: "UAE", abbr: "GST" },
  { id: "Asia/Singapore", city: "Singapore", country: "Singapore", abbr: "SGT" },
  { id: "Asia/Hong_Kong", city: "Hong Kong", country: "China", abbr: "HKT" },
  { id: "Australia/Sydney", city: "Sydney", country: "Australia", abbr: "AEST/AEDT" },
  { id: "Asia/Kolkata", city: "Mumbai", country: "India", abbr: "IST" },
  { id: "America/Toronto", city: "Toronto", country: "Canada", abbr: "EST/EDT" },
  { id: "America/Sao_Paulo", city: "Sao Paulo", country: "Brazil", abbr: "BRT" },
];

const faqItems = [
  {
    question: "How accurate is the world clock?",
    answer: "Our world clock is highly accurate, syncing with your device's system time and using the standard timezone database. It updates in real-time every second to show the current time for each selected city.",
  },
  {
    question: "Does it account for daylight saving time?",
    answer: "Yes, the world clock automatically adjusts for daylight saving time (DST) based on each location's timezone rules. You don't need to manually adjust for DST changes.",
  },
  {
    question: "Can I add multiple cities to compare times?",
    answer: "Absolutely! You can add multiple cities to your world clock view and compare times side by side. Simply select a city from the dropdown menu to add it to your list.",
  },
  {
    question: "Why is the time different for the same timezone?",
    answer: "Some cities share the same timezone but may have different DST rules or historical changes. Our tool uses the official IANA timezone database to ensure accuracy for each specific location.",
  },
];

export default function WorldClockPage() {
  const [selectedClocks, setSelectedClocks] = useState([
    timezones[0],
    timezones[3],
    timezones[6],
  ]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const addClock = (timezoneId: string) => {
    const tz = timezones.find((t) => t.id === timezoneId);
    if (tz && !selectedClocks.find((c) => c.id === tz.id)) {
      setSelectedClocks([...selectedClocks, tz]);
    }
  };

  const removeClock = (timezoneId: string) => {
    setSelectedClocks(selectedClocks.filter((c) => c.id !== timezoneId));
  };

  const formatTime = (timezoneId: string) => {
    return currentTime.toLocaleTimeString("en-US", {
      timeZone: timezoneId,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (timezoneId: string) => {
    return currentTime.toLocaleDateString("en-US", {
      timeZone: timezoneId,
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const getTimeDiff = (timezoneId: string) => {
    const localOffset = currentTime.getTimezoneOffset();
    const targetDate = new Date(
      currentTime.toLocaleString("en-US", { timeZone: timezoneId })
    );
    const localDate = new Date(
      currentTime.toLocaleString("en-US", { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone })
    );
    const diffHours = (targetDate.getTime() - localDate.getTime()) / (1000 * 60 * 60);
    const sign = diffHours >= 0 ? "+" : "";
    return `${sign}${Math.round(diffHours)}h`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dailyutilityhub.com" },
          { name: "Tools", url: "https://dailyutilityhub.com#tools" },
          { name: "World Clock", url: "https://dailyutilityhub.com/tools/world-clock" },
        ]}
      />
      <FAQSchema questions={faqItems} />
      <SoftwareAppSchema
        name="World Clock"
        description="View current time in multiple cities worldwide"
        url="https://dailyutilityhub.com/tools/world-clock"
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-6 flex items-center gap-3">
          <div className="tool-card-icon">
            <Globe className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">World Clock</h1>
            <p className="text-muted-foreground">
              View current time in cities around the world
            </p>
          </div>
        </div>

        <AdsPlaceholder size="banner" className="mb-6" />

        <div className="mb-6 flex gap-2">
          <Select onValueChange={addClock}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Add a city..." />
            </SelectTrigger>
            <SelectContent>
              {timezones
                .filter((tz) => !selectedClocks.find((c) => c.id === tz.id))
                .map((tz) => (
                  <SelectItem key={tz.id} value={tz.id}>
                    {tz.city}, {tz.country}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-4 mb-6">
          {selectedClocks.map((clock) => (
            <Card key={clock.id}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {clock.country}
                    </p>
                    <h3 className="text-xl font-semibold">{clock.city}</h3>
                    <p className="text-sm text-muted-foreground">
                      {clock.abbr} • {getTimeDiff(clock.id)} from you
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold tracking-tight">
                      {formatTime(clock.id)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(clock.id)}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeClock(clock.id)}
                    className="ml-2"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <AdsPlaceholder size="inline" className="mb-6" />

        <FAQSection items={faqItems} />
      </div>
    </div>
  );
}
