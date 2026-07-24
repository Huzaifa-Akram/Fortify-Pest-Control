import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/seo";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const DEFAULT_TITLE = "Fortify Pest Control Inc. | Pest Control in Manitoba";
const DEFAULT_DESCRIPTION =
  "Fortify Pest Control Inc. provides safe, eco-friendly, and reliable residential & commercial pest control across Winnipeg and Manitoba. 100% satisfaction guarantee.";

export const metadata: Metadata = {
  metadataBase: new URL("https://fortifypest.ca"),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Fortify Pest Control Inc.",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: site.name,
  keywords: [
    "pest control Manitoba",
    "pest control Winnipeg",
    "exterminator Winnipeg",
    "rodent control",
    "bed bug treatment",
    "cockroach control",
    "wasp nest removal",
    "commercial pest control",
    "eco-friendly pest control",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description:
      "Building a fort around your home and business — one pest-free property at a time.",
    url: "/",
    siteName: site.name,
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description:
      "Safe, eco-friendly residential & commercial pest control across Winnipeg and Manitoba.",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  themeColor: "#033562",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-fort-navy-900">
        <JsonLd data={localBusinessJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
