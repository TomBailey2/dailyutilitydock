"use client";

import { useState } from "react";
import { Fuel, Car } from "lucide-react";
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

const faqItems = [
  {
    question: "How is fuel cost calculated?",
    answer: "Fuel cost is calculated by dividing the distance by your vehicle's fuel efficiency (MPG) to get the fuel needed, then multiplying by the fuel price per litre. We also convert between litres and gallons for UK calculations.",
  },
  {
    question: "What is the difference between MPG (UK) and MPG (US)?",
    answer: "UK gallons are larger than US gallons (1 UK gallon = 1.2 US gallons). This means MPG (UK) will show higher numbers for the same efficiency. Always use the correct MPG unit for your vehicle's specs.",
  },
  {
    question: "How can I improve my fuel efficiency?",
    answer: "You can improve fuel efficiency by maintaining proper tire pressure, removing excess weight, driving at steady speeds, avoiding aggressive acceleration and braking, and keeping up with regular vehicle maintenance.",
  },
  {
    question: "How do I calculate cost per mile?",
    answer: "To calculate cost per mile, divide your fuel cost per litre by your vehicle's MPG, then multiply by the conversion factor for your gallon type (UK: 4.546, US: 3.785). Our calculator does this automatically for you.",
  },
];

const toolContent = getCoreTool("fuel-calculator")!;

export default function FuelCalculatorPage() {
  const [distance, setDistance] = useState("");
  const [fuelEfficiency, setFuelEfficiency] = useState("");
  const [fuelPrice, setFuelPrice] = useState("");
  const [efficiencyUnit, setEfficiencyUnit] = useState("mpg-uk");
  const [distanceUnit, setDistanceUnit] = useState("miles");
  const [result, setResult] = useState<{
    totalCost: number;
    fuelNeeded: number;
    costPerMile: number;
  } | null>(null);

  const calculate = () => {
    const numDistance = parseFloat(distance);
    const numEfficiency = parseFloat(fuelEfficiency);
    const numPrice = parseFloat(fuelPrice);

    if (isNaN(numDistance) || isNaN(numEfficiency) || isNaN(numPrice)) return;
    if (numEfficiency <= 0) return;

    const distanceMiles =
      distanceUnit === "km" ? numDistance / 1.60934 : numDistance;

    const mpg =
      efficiencyUnit === "lpk"
        ? 282.48 / numEfficiency // L/100km to MPG (UK)
        : efficiencyUnit === "mpg-us"
        ? numEfficiency * 1.20095 // US MPG to UK MPG
        : numEfficiency;

    const gallonsNeeded = distanceMiles / mpg;
    const litresNeeded = gallonsNeeded * 4.546;
    const totalCost = litresNeeded * numPrice;
    const costPerMile = totalCost / distanceMiles;

    setResult({
      totalCost: Math.round(totalCost * 100) / 100,
      fuelNeeded: Math.round(litresNeeded * 10) / 10,
      costPerMile: Math.round(costPerMile * 100) / 100,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dailyutilitydock.com" },
          { name: "Tools", url: "https://dailyutilitydock.com#tools" },
          { name: "Fuel Calculator", url: "https://dailyutilitydock.com/tools/fuel-calculator" },
        ]}
      />
      <FAQSchema questions={faqItems} />
      <SoftwareAppSchema
        name="Fuel Cost Calculator"
        description="Calculate your journey fuel costs and efficiency"
        url="https://dailyutilitydock.com/tools/fuel-calculator"
      />

      <div className="max-w-2xl mx-auto">
        <div className="mb-6 flex items-center gap-3">
          <div className="tool-card-icon">
            <Fuel className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Fuel Cost Calculator</h1>
            <p className="text-muted-foreground">
              Calculate your journey fuel costs
            </p>
          </div>
        </div>

        <AdsPlaceholder size="banner" className="mb-6" />

        <Card className="mb-6">
          <CardContent className="pt-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="distance">Distance</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="distance"
                    type="number"
                    placeholder="100"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                  />
                  <Select value={distanceUnit} onValueChange={setDistanceUnit}>
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="miles">Miles</SelectItem>
                      <SelectItem value="km">Km</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="fuel-price">Fuel Price (per litre)</Label>
                <div className="relative mt-2">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    £
                  </span>
                  <Input
                    id="fuel-price"
                    type="number"
                    step="0.01"
                    placeholder="1.45"
                    value={fuelPrice}
                    onChange={(e) => setFuelPrice(e.target.value)}
                    className="pl-8"
                  />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="fuel-efficiency">Fuel Efficiency</Label>
              <div className="flex gap-2 mt-2">
                <Input
                  id="fuel-efficiency"
                  type="number"
                  placeholder="35"
                  value={fuelEfficiency}
                  onChange={(e) => setFuelEfficiency(e.target.value)}
                />
                <Select value={efficiencyUnit} onValueChange={setEfficiencyUnit}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mpg-uk">MPG (UK)</SelectItem>
                    <SelectItem value="mpg-us">MPG (US)</SelectItem>
                    <SelectItem value="lpk">L/100km</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button onClick={calculate} className="w-full" size="lg">
              Calculate Cost
            </Button>
          </CardContent>
        </Card>

        {result && (
          <Card className="mb-6 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Cost</p>
                  <p className="text-2xl font-bold">£{result.totalCost.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Fuel Needed</p>
                  <p className="text-2xl font-bold">{result.fuelNeeded}L</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Cost per Mile</p>
                  <p className="text-2xl font-bold">£{result.costPerMile.toFixed(2)}</p>
                </div>
              </div>
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
