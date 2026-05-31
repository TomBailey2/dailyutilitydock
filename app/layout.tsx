import './globals.css';
import Script from 'next/script';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { WebSiteSchema } from '@/components/schema-markup';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://dailyutilitydock.com'),
  title: {
    default: 'Daily Utility Hub - Free Online Tools for Everyday Tasks',
    template: '%s | Daily Utility Hub',
  },
  description:
    'Free online tools including internet speed test, world clock, timezone converter, VAT calculator, password generator, and more. Fast, reliable, and easy to use.',
  keywords: [
    'online tools',
    'utility tools',
    'speed test',
    'world clock',
    'calculator',
    'password generator',
    'QR code',
    'unit converter',
  ],
  authors: [{ name: 'Daily Utility Hub' }],
  creator: 'Daily Utility Hub',
  publisher: 'Daily Utility Hub',

  verification: {
    google: 'PASTE_GOOGLE_SEARCH_CONSOLE_CODE_HERE',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dailyutilitydock.com',
    siteName: 'Daily Utility Hub',
    title: 'Daily Utility Hub - Free Online Tools for Everyday Tasks',
    description:
      'Free online tools including internet speed test, world clock, timezone converter, VAT calculator, password generator, and more.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Daily Utility Hub',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Daily Utility Hub - Free Online Tools',
    description:
      'Free online tools including internet speed test, world clock, timezone converter, and more.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-2L72B3KCWK"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2L72B3KCWK');
          `}
        </Script>

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <WebSiteSchema
          name="Daily Utility Hub"
          url="https://dailyutilitydock.com"
          description="Free online tools for everyday tasks"
        />
      </head>

      <body className="min-h-screen flex flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
