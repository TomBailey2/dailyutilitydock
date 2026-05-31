"use client";

import { useState } from "react";
import { Calculator, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FAQSection } from "@/components/faq-section";
import { AdsPlaceholder } from "@/components/ads-placeholder";
import { BreadcrumbSchema, FAQSchema, SoftwareAppSchema } from "@/components/schema-markup";
import { ToolEducationSections } from "@/components/tool-education-sections";
import { getCoreTool } from "@/lib/site-tools";

const vatRates = [
  { value: "20", label: "Standard Rate (20%)" },
  { value: "5", label: "Reduced Rate (5%)" },
  { value: "0", label: "Zero Rate (0%)" },
];

const faqItems = [
  {
    question: "What is VAT in the UK?",
    answer: "VAT (Value Added Tax) is a consumption tax applied to most goods and services in the UK. The standard rate is 20%, with a reduced rate of 5% for certain items like children's car seats and home energy, and a zero rate for essential items like most foods and children's clothes.",
  },
  {
    question: "How do I calculate VAT from a net price?",
    answer: "To calculate VAT from a net (excluding VAT) price, multiply the net amount by the VAT rate (e.g., 100 x 0.20 = 20). The gross price would be net + VAT (100 + 20 = 120).",
  },
  {
    question: "How do I calculate the net price from a gross price?",
    answer: "To find the net price from a gross (including VAT) price, divide by (1 + VAT rate). For example, with a 20% VAT rate: 120 / 1.20 = 100. The VAT amount would be: 120 - 100 = 20.",
  },
  {
    question: "When do I need to register for VAT?",
    answer: "You must register for VAT if your taxable turnover exceeds £90,000 (as of 2024) in a 12-month period, or if you expect it to exceed this threshold. You can also register voluntarily if your turnover is below the threshold.",
  },
];

const toolContent = getCoreTool("vat-calculator")!;

export default function VATCalculatorPage() {
  const [amount, setAmount] = useState("");
  const [vatRate, setVatRate] = useState("20");
  const [calculationType, setCalculationType] = useState<"add" | "remove">("add");
  const [result, setResult] = useState<{
    netAmount: number;
    vatAmount: number;
    grossAmount: number;
  } | null>(null);

  const calculate = () => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount < 0) return;

    const rate = parseFloat(vatRate) / 100;

    if (calculationType === "add") {
      const vatAmount = numAmount * rate;
      setResult({
        netAmount: numAmount,
        vatAmount: Math.round(vatAmount * 100) / 100,
        grossAmount: Math.round((numAmount + vatAmount) * 100) / 100,
      });
    } else {
      const netAmount = numAmount / (1 + rate);
      const vatAmount = numAmount - netAmount;
      setResult({
        netAmount: Math.round(netAmount * 100) / 100,
        vatAmount: Math.round(vatAmount * 100) / 100,
        grossAmount: numAmount,
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dailyutilitydock.com" },
          { name: "Tools", url: "https://dailyutilitydock.com#tools" },
          { name: "VAT Calculator", url: "https://dailyutilitydock.com/tools/vat-calculator" },
        ]}
      />
      <FAQSchema questions={faqItems} />
      <SoftwareAppSchema
        name="UK VAT Calculator"
        description="Calculate UK VAT at 20%, 5%, or 0% rates"
        url="https://dailyutilitydock.com/tools/vat-calculator"
      />

      <div className="max-w-2xl mx-auto">
        <div className="mb-6 flex items-center gap-3">
          <div className="tool-card-icon">
            <Calculator className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">UK VAT Calculator</h1>
            <p className="text-muted-foreground">
              Calculate VAT for UK prices
            </p>
          </div>
        </div>

        <AdsPlaceholder size="banner" className="mb-6" />

        <Card className="mb-6">
          <CardContent className="pt-6 space-y-6">
            <div>
              <Label>VAT Rate</Label>
              <RadioGroup
                value={vatRate}
                onValueChange={setVatRate}
                className="flex flex-col md:flex-row gap-2 mt-2"
              >
                {vatRates.map((rate) => (
                  <div
                    key={rate.value}
                    className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-accent"
                  >
                    <RadioGroupItem value={rate.value} id={`rate-${rate.value}`} />
                    <Label htmlFor={`rate-${rate.value}`} className="cursor-pointer">
                      {rate.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="amount">Amount</Label>
              <div className="relative mt-2">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  £
                </span>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>

            <div>
              <Label>Calculation Type</Label>
              <RadioGroup
                value={calculationType}
                onValueChange={(v) => setCalculationType(v as "add" | "remove")}
                className="flex flex-col md:flex-row gap-2 mt-2"
              >
                <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-accent">
                  <RadioGroupItem value="add" id="add-vat" />
                  <Label htmlFor="add-vat" className="cursor-pointer">
                    Add VAT to net amount
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-accent">
                  <RadioGroupItem value="remove" id="remove-vat" />
                  <Label htmlFor="remove-vat" className="cursor-pointer">
                    Remove VAT from gross amount
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Button onClick={calculate} className="w-full" size="lg">
              Calculate
            </Button>
          </CardContent>
        </Card>

        {result && (
          <Card className="mb-6 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {calculationType === "add" ? "Net Amount" : "Net Amount"}
                  </p>
                  <p className="text-2xl font-bold">£{result.netAmount.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    VAT Amount ({vatRate}%)
                  </p>
                  <p className="text-2xl font-bold">£{result.vatAmount.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {calculationType === "add" ? "Gross Amount" : "Gross Amount"}
                  </p>
                  <p className="text-2xl font-bold">£{result.grossAmount.toFixed(2)}</p>
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
