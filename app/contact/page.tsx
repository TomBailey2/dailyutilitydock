"use client";

import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
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
import { AdsPlaceholder } from "@/components/ads-placeholder";
import { BreadcrumbSchema } from "@/components/schema-markup";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent successfully! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSubmitting(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://dailyutilityhub.com" },
          { name: "Contact", url: "https://dailyutilityhub.com/contact" },
        ]}
      />

      <div className="max-w-2xl mx-auto">
        <div className="mb-6 flex items-center gap-3">
          <div className="tool-card-icon">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="text-muted-foreground">
              We would love to hear from you
            </p>
          </div>
        </div>

        <AdsPlaceholder size="banner" className="mb-6" />

        <Card className="mb-6">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Select
                  value={formData.subject}
                  onValueChange={(v) =>
                    setFormData({ ...formData, subject: v })
                  }
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="bug">Report a Bug</SelectItem>
                    <SelectItem value="feature">Feature Request</SelectItem>
                    <SelectItem value="business">Business Inquiry</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="mt-2"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={submitting}
              >
                <Send className="mr-2 h-4 w-4" />
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  We typically respond to all inquiries within 24-48 hours. For urgent matters, please indicate this in your subject line.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <AdsPlaceholder size="inline" className="mb-6" />
      </div>
    </div>
  );
}
