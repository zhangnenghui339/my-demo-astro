const siteUrl = "https://careerradar.io";

export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).toString();
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CareerRadar",
    url: absoluteUrl("/"),
    logo: absoluteUrl("/logo.svg"),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CareerRadar",
    url: absoluteUrl("/"),
    potentialAction: {
      "@type": "SearchAction",
      target: `${absoluteUrl("/")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function webPageSchema({
  type = "WebPage",
  name,
  description,
  path,
}: {
  type?: "WebPage" | "AboutPage" | "CollectionPage";
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: absoluteUrl(path),
    publisher: organizationSchema(),
  };
}

export function articleSchema({
  headline,
  description,
  path,
  dateModified = "2026-07-02",
}: {
  headline: string;
  description: string;
  path: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: absoluteUrl(path),
    datePublished: "2026-07-01",
    dateModified,
    author: organizationSchema(),
    publisher: organizationSchema(),
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function softwareApplicationSchema(name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}
