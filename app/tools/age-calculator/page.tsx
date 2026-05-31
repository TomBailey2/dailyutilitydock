"use client";

import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FAQSection } from "@/components/faq-section";
import { AdsPlaceholder } from "@/components/ads-placeholder";
import { BreadcrumbSchema, FAQSchema, SoftwareAppSchema } from "@/components/schema-markup";

const faqItems = [
  {
    question: "How is age calculated exactly?",
    answer: "Age is calculated by comparing your date of birth with the current date. The calculation accounts for years, months, and days to give you an exact age. It also calculates the time until your next birthday.",
  },
  {
    question: "Is the age calculation accurate?",
    answer: "Yes, our calculator provides precise age calculations by accounting for leap years and varying month lengths. It calculates the exact number of days you've been alive.",
  },
  {
    question: "Can I calculate age from a past or future date?",
    answer: "No, the calculator uses your date of birth and compares it to today's date. For historical or future age calculations, simply use the date of birth and the target date would be the reference point.",
  },
  {
    question: "What's the difference between age in years and total days?",
    answer: "Age in years represents the number of complete years you've lived, while total days counts every single day from birth. For example, someone who is 30 years old has lived about 10,957 days (including leap years).",
  },
];

export default function AgeCalculatorPage() {
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState<{
    years: number;
    months: number;
    days: number;
    totalDays: number;
    totalWeeks: number;
    totalMonths: number;
    nextBirthday: string;
    daysUntilBirthday: number;
  } | null>(null);

  const calculateAge = () => {
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const today = new Date();

    if (birth > today) return;

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const totalDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;

    // Next birthday
    let nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBirthday < today) {
      nextBirthday = new Date(today.getFullYear() + 1, birth.getMonth(), birth.getDate());
    }
    const daysUntilBirthday = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const nextBirthdayStr = nextBirthday.toLocaleDateString('en-US', options);

    setResult({
      years,
      months,
      days,
      totalDays,
      totalWeeks,
      totalMonths,
      nextBirthday: nextBirthdayStr,
      daysUntilBirthday,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dailyutilitydock.com" },
          { name: "Tools", url: "https://dailyutilitydock.com#tools" },
          { name: "Age Calculator", url: "https://dailyutilitydock.com/tools/age-calculator" },
        ]}
      />
      <FAQSchema questions={faqItems} />
      <SoftwareAppSchema
        name="Age Calculator"
        description="Calculate exact age from date of birth"
        url="https://dailyutilitydock.com/tools/age-calculator"
      />

      <div className="max-w-2xl mx-auto">
        <div className="mb-6 flex items-center gap-3">
          <div className="tool-card-icon">
            <Calendar className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Age Calculator</h1>
            <p className="text-muted-foreground">
              Calculate your exact age in years, months, and days
            </p>
          </div>
        </div>

        <AdsPlaceholder size="banner" className="mb-6" />

        <Card className="mb-6">
          <CardContent className="pt-6 space-y-4">
            <div>
              <Label htmlFor="birth-date">Date of Birth</Label>
              <Input
                id="birth-date"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="mt-2"
              />
            </div>

            <Button onClick={calculateAge} className="w-full" size="lg">
              Calculate Age
            </Button>
          </CardContent>
        </Card>

        {result && (
          <>
            <Card className="mb-6 bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <p className="text-muted-foreground mb-2">Your Age</p>
                  <p className="text-5xl font-bold">
                    {result.years} years, {result.months} {result.months === 1 ? "month" : "months"}, {result.days} {result.days === 1 ? "day" : "days"}
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Days
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{result.totalDays.toLocaleString()}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Weeks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{result.totalWeeks.toLocaleString()}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Months
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{result.totalMonths}</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Next Birthday</p>
                    <p className="font-semibold">{result.nextBirthday}</p>
                    <p className="text-sm text-muted-foreground">
                      {result.daysUntilBirthday === 0 ? (
                        "Happy Birthday!"
                      ) : (
                        `${result.daysUntilBirthday} ${result.daysUntilBirthday === 1 ? "day" : "days"} to go`
                      )}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        <AdsPlaceholder size="inline" className="mb-6" />

        <FAQSection items={faqItems} />
      </div>
    </div>
  );
}
