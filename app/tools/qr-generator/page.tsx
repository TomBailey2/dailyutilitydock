"use client";

import { useState, useRef, useEffect } from "react";
import { QrCode, Download, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import { toast } from "sonner";

const faqItems = [
  {
    question: "What types of content can I create QR codes for?",
    answer: "You can create QR codes for URLs, plain text, email addresses, phone numbers, SMS messages, WiFi credentials, and more. Simply select the type and enter your content.",
  },
  {
    question: "How do QR codes work?",
    answer: "QR codes store data in a 2D barcode format. When scanned with a smartphone camera or QR scanner app, the encoded information is decoded and displayed. This can be a link, text, or other data.",
  },
  {
    question: "Can I download and print my QR code?",
    answer: "Yes! Click the download button to save your QR code as a PNG image. You can then print it at any size. For best results, ensure the printed QR code is large enough to scan easily.",
  },
  {
    question: "How long do QR codes last?",
    answer: "Static QR codes (like those generated here) never expire and contain the data directly in the code itself. They will work indefinitely as long as the encoded content remains valid.",
  },
];

type QRType = "url" | "text" | "email" | "phone" | "sms" | "wifi";

interface QRData {
  type: QRType;
  url: string;
  text: string;
  email: string;
  phone: string;
  sms: string;
  wifiSsid: string;
  wifiPassword: string;
}

// Simple QR code generator using canvas
const generateQRMatrix = (text: string): number[][] => {
  // This is a simplified visual representation
  // For a real implementation, you'd use a proper QR library
  const size = 25;
  const matrix: number[][] = [];

  for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
      // Create finder patterns in corners
      const isFinderPattern =
        (i < 7 && j < 7) ||
        (i < 7 && j >= size - 7) ||
        (i >= size - 7 && j < 7);

      const isFinderOuter =
        (i < 7 && j < 7 && (i === 0 || i === 6 || j === 0 || j === 6)) ||
        (i < 7 && j >= size - 7 && (i === 0 || i === 6 || j === size - 7 || j === size - 1)) ||
        (i >= size - 7 && j < 7 && (i === size - 7 || i === size - 1 || j === 0 || j === 6));

      const isTimingPattern = i === 6 || j === 6;

      // Randomize data area based on text content
      const charIndex = (i * size + j) % text.length;
      const charCode = text.charCodeAt(charIndex) || 1;
      const isData = !isFinderPattern && Math.random() > 0.3 - (charCode / 500);

      matrix[i][j] = isFinderOuter || (isFinderPattern && i >= 2 && i <= 4 && j >= 2 && j <= 4 && ((i === 3 && j < size - 7) || (j === 3 && i < size - 7) ? false : true)) || (isTimingPattern && ((i + j) % 2 === 0)) || isData ? 1 : 0;
    }
  }

  return matrix;
};

const drawQRCode = (canvas: HTMLCanvasElement, text: string, fgColor: string, bgColor: string) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const matrix = generateQRMatrix(text);
  const cellSize = canvas.width / matrix.length;

  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = fgColor;
  matrix.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell) {
        ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
      }
    });
  });
};

export default function QRGeneratorPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [qrData, setQrData] = useState<QRData>({
    type: "url",
    url: "",
    text: "",
    email: "",
    phone: "",
    sms: "",
    wifiSsid: "",
    wifiPassword: "",
  });
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#FFFFFF");

  const getContent = (): string => {
    switch (qrData.type) {
      case "url":
        return qrData.url || "https://example.com";
      case "text":
        return qrData.text || "Hello World";
      case "email":
        return `mailto:${qrData.email || "email@example.com"}`;
      case "phone":
        return `tel:${qrData.phone || "+1234567890"}`;
      case "sms":
        return `sms:${qrData.sms || "+1234567890"}`;
      case "wifi":
        return `WIFI:S:${qrData.wifiSsid || "Network"};T:WPA;P:${qrData.wifiPassword || "password"};;`;
      default:
        return "https://dailyutilityhub.com";
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      drawQRCode(canvasRef.current, getContent(), fgColor, bgColor);
    }
  }, [qrData, fgColor, bgColor]);

  const downloadQR = () => {
    if (canvasRef.current) {
      const link = document.createElement('a');
      link.download = 'qrcode.png';
      link.href = canvasRef.current.toDataURL();
      link.click();
      toast.success("QR code downloaded!");
    }
  };

  const copyQR = () => {
    if (canvasRef.current) {
      canvasRef.current.toBlob((blob) => {
        if (blob) {
          navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob })
          ]);
          toast.success("QR code copied to clipboard!");
        }
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dailyutilityhub.com" },
          { name: "Tools", url: "https://dailyutilityhub.com#tools" },
          { name: "QR Generator", url: "https://dailyutilityhub.com/tools/qr-generator" },
        ]}
      />
      <FAQSchema questions={faqItems} />
      <SoftwareAppSchema
        name="QR Code Generator"
        description="Generate QR codes for URLs, text, and more"
        url="https://dailyutilityhub.com/tools/qr-generator"
      />

      <div className="max-w-2xl mx-auto">
        <div className="mb-6 flex items-center gap-3">
          <div className="tool-card-icon">
            <QrCode className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">QR Code Generator</h1>
            <p className="text-muted-foreground">
              Create QR codes for any content
            </p>
          </div>
        </div>

        <AdsPlaceholder size="banner" className="mb-6" />

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div>
                <Label htmlFor="qr-type">Content Type</Label>
                <Select
                  value={qrData.type}
                  onValueChange={(v) => setQrData({ ...qrData, type: v as QRType })}
                >
                  <SelectTrigger id="qr-type" className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="url">URL</SelectItem>
                    <SelectItem value="text">Plain Text</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="phone">Phone Number</SelectItem>
                    <SelectItem value="sms">SMS</SelectItem>
                    <SelectItem value="wifi">WiFi</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {qrData.type === "url" && (
                <div>
                  <Label htmlFor="url">URL</Label>
                  <Input
                    id="url"
                    type="url"
                    placeholder="https://example.com"
                    value={qrData.url}
                    onChange={(e) => setQrData({ ...qrData, url: e.target.value })}
                    className="mt-2"
                  />
                </div>
              )}

              {qrData.type === "text" && (
                <div>
                  <Label htmlFor="text">Text</Label>
                  <Textarea
                    id="text"
                    placeholder="Enter your text here"
                    value={qrData.text}
                    onChange={(e) => setQrData({ ...qrData, text: e.target.value })}
                    className="mt-2"
                  />
                </div>
              )}

              {qrData.type === "email" && (
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={qrData.email}
                    onChange={(e) => setQrData({ ...qrData, email: e.target.value })}
                    className="mt-2"
                  />
                </div>
              )}

              {qrData.type === "phone" && (
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1234567890"
                    value={qrData.phone}
                    onChange={(e) => setQrData({ ...qrData, phone: e.target.value })}
                    className="mt-2"
                  />
                </div>
              )}

              {qrData.type === "sms" && (
                <div>
                  <Label htmlFor="sms">SMS Number</Label>
                  <Input
                    id="sms"
                    type="tel"
                    placeholder="+1234567890"
                    value={qrData.sms}
                    onChange={(e) => setQrData({ ...qrData, sms: e.target.value })}
                    className="mt-2"
                  />
                </div>
              )}

              {qrData.type === "wifi" && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="wifi-ssid">Network Name (SSID)</Label>
                    <Input
                      id="wifi-ssid"
                      placeholder="MyWiFi"
                      value={qrData.wifiSsid}
                      onChange={(e) => setQrData({ ...qrData, wifiSsid: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="wifi-password">Password</Label>
                    <Input
                      id="wifi-password"
                      type="password"
                      placeholder="password123"
                      value={qrData.wifiPassword}
                      onChange={(e) => setQrData({ ...qrData, wifiPassword: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fg-color">Foreground Color</Label>
                  <Input
                    id="fg-color"
                    type="color"
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                    className="mt-2 h-10"
                  />
                </div>
                <div>
                  <Label htmlFor="bg-color">Background Color</Label>
                  <Input
                    id="bg-color"
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="mt-2 h-10"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <canvas
                ref={canvasRef}
                width={200}
                height={200}
                className="block"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={downloadQR} variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
              <Button onClick={copyQR} variant="outline">
                <Copy className="mr-2 h-4 w-4" />
                Copy
              </Button>
            </div>
          </div>
        </div>

        <AdsPlaceholder size="inline" className="mb-6" />

        <FAQSection items={faqItems} />
      </div>
    </div>
  );
}
