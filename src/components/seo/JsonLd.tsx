"use client";

import Script from "next/script";
import { personalData } from "@/lib/data";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalData.name,
    url: process.env.NEXT_PUBLIC_SITE_URL || undefined,
    image: (process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}` : "") + "/profile.webp",
    sameAs: personalData.contact?.social?.map((s) => s.url) ?? [],
    jobTitle: personalData.title,
    worksFor: { "@type": "Organization", name: "Freelance" },
  };
  return (
    <Script
      id="ld-person"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebsiteJsonLd() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || undefined;
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: base,
    name: `Portfolio ${personalData.name}`,
    potentialAction: {
      "@type": "SearchAction",
      target: `${base ?? ""}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <Script
      id="ld-website"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbsJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
  return (
    <Script
      id="ld-breadcrumbs"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

