import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    "Fortify Pest Control Inc. provides safe, eco-friendly, and reliable residential & commercial pest control across Winnipeg and Southern Manitoba. 100% satisfaction guarantee.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-fort-navy-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
