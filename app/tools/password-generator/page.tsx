"use client";

import { useState, useCallback } from "react";
import { Key, Copy, RefreshCw, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { FAQSection } from "@/components/faq-section";
import { AdsPlaceholder } from "@/components/ads-placeholder";
import { BreadcrumbSchema, FAQSchema, SoftwareAppSchema } from "@/components/schema-markup";
import { toast } from "sonner";

const faqItems = [
  {
    question: "What makes a strong password?",
    answer: "A strong password should be at least 12 characters long, include a mix of uppercase and lowercase letters, numbers, and special symbols. Avoid using personal information, dictionary words, or common patterns.",
  },
  {
    question: "Is this password generator safe to use?",
    answer: "Yes! All password generation happens locally in your browser. No passwords are sent to our servers or stored anywhere. Your generated passwords remain completely private.",
  },
  {
    question: "Should I use different passwords for different accounts?",
    answer: "Absolutely! Using unique passwords for each account is crucial for security. If one password is compromised, your other accounts remain protected. Consider using a password manager to store them securely.",
  },
  {
    question: "How often should I change my passwords?",
    answer: "Change passwords immediately if you suspect they've been compromised. Otherwise, focus on using strong, unique passwords rather than frequent changes. Enable two-factor authentication for added security.",
  },
];

export default function PasswordGeneratorPage() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    let chars = "";
    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (chars.length === 0) {
      setPassword("Select at least one character type");
      return;
    }

    let newPassword = "";
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
      newPassword += chars[array[i] % chars.length];
    }

    setPassword(newPassword);
    setCopied(false);
  }, [length, uppercase, lowercase, numbers, symbols]);

  const copyPassword = () => {
    if (password && password !== "Select at least one character type") {
      navigator.clipboard.writeText(password);
      setCopied(true);
      toast.success("Password copied to clipboard");
    }
  };

  const getPasswordStrength = () => {
    if (!password || password === "Select at least one character type") return { score: 0, label: "None" };

    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (password.length >= 16) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) return { score: 1, label: "Weak", color: "bg-red-500" };
    if (score <= 4) return { score: 2, label: "Fair", color: "bg-yellow-500" };
    if (score <= 5) return { score: 3, label: "Good", color: "bg-blue-500" };
    return { score: 4, label: "Strong", color: "bg-green-500" };
  };

  const strength = getPasswordStrength();

  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dailyutilitydock.com" },
          { name: "Tools", url: "https://dailyutilitydock.com#tools" },
          { name: "Password Generator", url: "https://dailyutilitydock.com/tools/password-generator" },
        ]}
      />
      <FAQSchema questions={faqItems} />
      <SoftwareAppSchema
        name="Password Generator"
        description="Create strong, secure passwords instantly"
        url="https://dailyutilitydock.com/tools/password-generator"
      />

      <div className="max-w-2xl mx-auto">
        <div className="mb-6 flex items-center gap-3">
          <div className="tool-card-icon">
            <Key className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Password Generator</h1>
            <p className="text-muted-foreground">
              Create strong, secure passwords
            </p>
          </div>
        </div>

        <AdsPlaceholder size="banner" className="mb-6" />

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="bg-muted rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-lg break-all">
                  {password || "Click Generate"}
                </p>
                <div className="flex gap-2 shrink-0">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={copyPassword}
                    disabled={!password}
                  >
                    {copied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={generatePassword}
                  >
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {password && password !== "Select at least one character type" && (
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Password Strength</span>
                  <span className="font-medium">{strength.label}</span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`h-2 flex-1 rounded ${
                        strength.score >= level
                          ? strength.color
                          : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <Label>Password Length</Label>
                  <span className="font-medium">{length}</span>
                </div>
                <Slider
                  value={[length]}
                  onValueChange={(v) => setLength(v[0])}
                  min={4}
                  max={64}
                  step={1}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-between border rounded-lg p-3">
                  <Label htmlFor="uppercase">Uppercase (A-Z)</Label>
                  <Switch
                    id="uppercase"
                    checked={uppercase}
                    onCheckedChange={setUppercase}
                  />
                </div>
                <div className="flex items-center justify-between border rounded-lg p-3">
                  <Label htmlFor="lowercase">Lowercase (a-z)</Label>
                  <Switch
                    id="lowercase"
                    checked={lowercase}
                    onCheckedChange={setLowercase}
                  />
                </div>
                <div className="flex items-center justify-between border rounded-lg p-3">
                  <Label htmlFor="numbers">Numbers (0-9)</Label>
                  <Switch
                    id="numbers"
                    checked={numbers}
                    onCheckedChange={setNumbers}
                  />
                </div>
                <div className="flex items-center justify-between border rounded-lg p-3">
                  <Label htmlFor="symbols">Symbols (!@#$)</Label>
                  <Switch
                    id="symbols"
                    checked={symbols}
                    onCheckedChange={setSymbols}
                  />
                </div>
              </div>

              <Button onClick={generatePassword} className="w-full" size="lg">
                Generate Password
              </Button>
            </div>
          </CardContent>
        </Card>

        <AdsPlaceholder size="inline" className="mb-6" />

        <FAQSection items={faqItems} />
      </div>
    </div>
  );
}
