import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site, serviceAreas } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fortifypest.ca"),
  title: {
    default: "Fortify Pest Control Inc. | Pest Control in Manitoba",
    template: "%s | Fortify Pest Control Inc.",
  },
  description:
    "Fortify Pest Control Inc. provides safe, eco-friendly, and reliable residential & commercial pest control across Winnipeg and Manitoba. 100% satisfaction guarantee.",
  keywords: [
    "pest control Manitoba",
    "pest control Winnipeg",
    "rodent control",
    "bed bug treatment",
    "commercial pest control",
    "eco-friendly pest control",
  ],
  openGraph: {
    title: "Fortify Pest Control Inc. | Pest Control in Manitoba",
    description:
      "Building a fort around your home and business — one pest-free property at a time.",
    type: "website",
    locale: "en_CA",
  },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "PestControl",
  name: site.name,
  image: "https://fortifypest.ca/logo.svg",
  url: "https://fortifypest.ca",
  telephone: site.phoneHref.replace("tel:", ""),
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.province,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: serviceAreas.map((area) => ({
    "@type": "City",
    name: area,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-fort-navy-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
