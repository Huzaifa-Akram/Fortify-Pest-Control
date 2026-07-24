import type { Metadata } from "next";
import { site, services, serviceAreas } from "@/lib/site";

/** Canonical production origin. Keep in sync with metadataBase in layout.tsx. */
export const BASE_URL = "https://fortifypest.ca";

/** Stable schema.org node ids so entities can reference one another. */
const BUSINESS_ID = `${BASE_URL}/#business`;
const WEBSITE_ID = `${BASE_URL}/#website`;

/**
 * Builds a consistent Metadata object for a page: title (fed through the root
 * template), description, canonical URL, and matching Open Graph / Twitter
 * cards. The site-wide OG image (app/opengraph-image.tsx) is inherited.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

/** BreadcrumbList structured data for rich breadcrumb results in search. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

/**
 * The primary business entity. As a LocalBusiness (PestControl) subtype it
 * carries the name, logo, address, contact, hours, and service area that power
 * Google's business/knowledge panel and local results.
 */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "PestControl",
  "@id": BUSINESS_ID,
  name: site.name,
  url: BASE_URL,
  logo: `${BASE_URL}/logo.svg`,
  image: `${BASE_URL}/hero-bg-1.png`,
  telephone: site.phoneHref.replace("tel:", ""),
  email: site.email,
  priceRange: "$$",
  slogan: site.slogan,
  description:
    "Fortify Pest Control Inc. provides safe, eco-friendly residential and commercial pest control across Winnipeg and Manitoba, backed by a 100% satisfaction guarantee.",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.province,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
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

/** WebSite entity — helps search engines lock in the official site name. */
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: site.name,
  url: BASE_URL,
  inLanguage: "en-CA",
  publisher: { "@id": BUSINESS_ID },
};

/** Catalog of every service, so each can surface for "related work" searches. */
export const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: `Pest control services by ${site.name}`,
  itemListElement: services.map((s, i) => ({
    "@type": "Offer",
    position: i + 1,
    itemOffered: {
      "@type": "Service",
      name: s.title,
      description: s.short,
      url: `${BASE_URL}/services#${s.slug}`,
      serviceType: s.title,
      areaServed: site.region,
      provider: { "@id": BUSINESS_ID },
    },
  })),
};
