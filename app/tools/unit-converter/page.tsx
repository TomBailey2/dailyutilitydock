"use client";

import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FAQSection } from "@/components/faq-section";
import { AdsPlaceholder } from "@/components/ads-placeholder";
import { BreadcrumbSchema, FAQSchema, SoftwareAppSchema } from "@/components/schema-markup";

const conversionData = {
  length: {
    units: ["meters", "kilometers", "miles", "yards", "feet", "inches", "centimeters", "millimeters"],
    conversions: {
      meters: 1,
      kilometers: 0.001,
      miles: 0.000621371,
      yards: 1.09361,
      feet: 3.28084,
      inches: 39.3701,
      centimeters: 100,
      millimeters: 1000,
    },
  },
  weight: {
    units: ["kilograms", "grams", "pounds", "ounces", "stones", "tons-metric", "tons-imperial"],
    conversions: {
      kilograms: 1,
      grams: 1000,
      pounds: 2.20462,
      ounces: 35.274,
      stones: 0.157473,
      "tons-metric": 0.001,
      "tons-imperial": 0.000984207,
    },
  },
  temperature: {
    units: ["celsius", "fahrenheit", "kelvin"],
    special: true,
  },
  volume: {
    units: ["liters", "milliliters", "gallons-us", "gallons-uk", "quarts", "pints", "cups", "fluid-ounces"],
    conversions: {
      liters: 1,
      milliliters: 1000,
      "gallons-us": 0.264172,
      "gallons-uk": 0.219969,
      quarts: 1.05669,
      pints: 2.11338,
      cups: 4.22675,
      "fluid-ounces": 33.814,
    },
  },
  area: {
    units: ["sq-meters", "sq-kilometers", "sq-miles", "sq-yards", "sq-feet", "acres", "hectares"],
    conversions: {
      "sq-meters": 1,
      "sq-kilometers": 0.000001,
      "sq-miles": 3.861e-7,
      "sq-yards": 1.19599,
      "sq-feet": 10.7639,
      acres: 0.000247105,
      hectares: 0.0001,
    },
  },
};

const faqItems = [
  {
    question: "What units can I convert?",
    answer: "You can convert length (meters, kilometers, miles, feet, etc.), weight (kilograms, pounds, ounces, etc.), temperature (Celsius, Fahrenheit, Kelvin), volume (liters, gallons, etc.), and area (square meters, acres, etc.).",
  },
  {
    question: "How accurate are the conversions?",
    answer: "Our conversions use precise conversion factors and are highly accurate. Temperature conversions have their own formulas, while other units use standardized conversion ratios recognized internationally.",
  },
  {
    question: "What's the difference between US and UK gallons?",
    answer: "A US gallon equals 3.785 liters, while a UK (imperial) gallon equals 4.546 liters. This is due to historical differences in measurement systems. Our converter supports both US and UK gallons.",
  },
  {
    question: "Can I convert between metric and imperial units?",
    answer: "Yes! Our unit converter seamlessly handles conversions between metric and imperial systems. Simply select your source unit, enter the value, and choose your target unit to get the converted result.",
  },
];

type ConversionCategory = keyof typeof conversionData;

export default function UnitConverterPage() {
  const [category, setCategory] = useState<ConversionCategory>("length");
  const [fromValue, setFromValue] = useState("");
  const [fromUnit, setFromUnit] = useState("meters");
  const [toUnit, setToUnit] = useState("feet");
  const [result, setResult] = useState<number | null>(null);

  const units = conversionData[category].units;

  const convert = () => {
    const value = parseFloat(fromValue);
    if (isNaN(value)) return;

    if (category === "temperature") {
      let celsius: number;

      // Convert to Celsius first
      if (fromUnit === "celsius") {
        celsius = value;
      } else if (fromUnit === "fahrenheit") {
        celsius = (value - 32) * 5/9;
      } else {
        celsius = value - 273.15;
      }

      // Convert from Celsius to target
      if (toUnit === "celsius") {
        setResult(Math.round(celsius * 1000) / 1000);
      } else if (toUnit === "fahrenheit") {
        setResult(Math.round((celsius * 9/5 + 32) * 1000) / 1000);
      } else {
        setResult(Math.round((celsius + 273.15) * 1000) / 1000);
      }
    } else {
      const conversions = conversionData[category].conversions as Record<string, number>;
      const fromFactor = conversions[fromUnit];
      const toFactor = conversions[toUnit];

      if (fromFactor && toFactor) {
        const baseValue = value / fromFactor;
        const convertedValue = baseValue * toFactor;
        setResult(Math.round(convertedValue * 1000000) / 1000000);
      }
    }
  };

  const swapUnits = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
    setResult(null);
  };

  const handleCategoryChange = (newCategory: ConversionCategory) => {
    setCategory(newCategory);
    setFromUnit(conversionData[newCategory].units[0]);
    setToUnit(conversionData[newCategory].units[1]);
    setResult(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dailyutilityhub.com" },
          { name: "Tools", url: "https://dailyutilityhub.com#tools" },
          { name: "Unit Converter", url: "https://dailyutilityhub.com/tools/unit-converter" },
        ]}
      />
      <FAQSchema questions={faqItems} />
      <SoftwareAppSchema
        name="Unit Converter"
        description="Convert length, weight, temperature and more"
        url="https://dailyutilityhub.com/tools/unit-converter"
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-6 flex items-center gap-3">
          <div className="tool-card-icon">
            <ArrowLeftRight className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Unit Converter</h1>
            <p className="text-muted-foreground">
              Convert between different units of measurement
            </p>
          </div>
        </div>

        <AdsPlaceholder size="banner" className="mb-6" />

        <Tabs value={category} onValueChange={(v) => handleCategoryChange(v as ConversionCategory)} className="mb-6">
          <TabsList className="grid grid-cols-5">
            <TabsTrigger value="length">Length</TabsTrigger>
            <TabsTrigger value="weight">Weight</TabsTrigger>
            <TabsTrigger value="temperature">Temp</TabsTrigger>
            <TabsTrigger value="volume">Volume</TabsTrigger>
            <TabsTrigger value="area">Area</TabsTrigger>
          </TabsList>
        </Tabs>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-[1fr,auto,1fr] gap-4 items-end">
              <div className="space-y-4">
                <div>
                  <Label>Value</Label>
                  <Input
                    type="number"
                    placeholder="Enter value"
                    value={fromValue}
                    onChange={(e) => setFromValue(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label>From</Label>
                  <Select value={fromUnit} onValueChange={setFromUnit}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {units.map((unit) => (
                        <SelectItem key={unit} value={unit}>
                          {unit.replace(/-/g, " ").replace(/^sq /, "sq ")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-center pb-1">
                <Button variant="outline" size="icon" onClick={swapUnits}>
                  <ArrowLeftRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <Label>To</Label>
                  <Select value={toUnit} onValueChange={setToUnit}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {units.map((unit) => (
                        <SelectItem key={unit} value={unit}>
                          {unit.replace(/-/g, " ").replace(/^sq /, "sq ")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={convert} className="w-full" size="lg">
                  Convert
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {result !== null && (
          <Card className="mb-6 bg-primary/5 border-primary/20">
            <CardContent className="pt-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Result</p>
              <p className="text-4xl font-bold">
                {result.toLocaleString()} {toUnit.replace(/-/g, " ")}
              </p>
            </CardContent>
          </Card>
        )}

        <AdsPlaceholder size="inline" className="mb-6" />

        <FAQSection items={faqItems} />
      </div>
    </div>
  );
}
