const SITE = "https://nordiciptvsverige.se";
const SUPPORT_WA = "+212651356639";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "Nordic IPTV Sverige",
  url: SITE,
  logo: `${SITE}/logo.webp`,
  image: `${SITE}/opengraph-image`,
  description:
    "Sveriges bästa IPTV-tjänst med över 35,000 kanaler, filmer och serier i 4K UHD. Inga bindningstider, omedelbar aktivering.",
  areaServed: {
    "@type": "Country",
    name: "Sweden",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SUPPORT_WA,
      contactType: "customer support",
      contactOption: "TollFree",
      availableLanguage: ["Swedish", "English"],
      areaServed: "SE",
    },
  ],
} as const;

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: SITE,
  name: "Nordic IPTV Sverige",
  description:
    "Sveriges bästa IPTV-tjänst – över 35,000 kanaler, filmer och serier i 4K UHD.",
  inLanguage: "sv-SE",
  publisher: { "@id": `${SITE}/#organization` },
} as const;

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Nordic IPTV Sverige – Prenumeration",
  description:
    "IPTV-prenumeration med över 35,000 kanaler, on-demand-filmer och serier i 4K UHD. Streama till alla dina enheter — Smart TV, mobil, dator, Fire TV, Apple TV med flera.",
  brand: {
    "@type": "Brand",
    name: "Nordic IPTV Sverige",
  },
  image: [`${SITE}/opengraph-image`],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "SEK",
    lowPrice: "199",
    highPrice: "599",
    offerCount: 3,
    availability: "https://schema.org/InStock",
    url: `${SITE}/#pricing`,
    offers: [
      {
        "@type": "Offer",
        name: "1 månad",
        price: "199",
        priceCurrency: "SEK",
        availability: "https://schema.org/InStock",
        url: `${SITE}/#pricing`,
      },
      {
        "@type": "Offer",
        name: "3 månader",
        price: "349",
        priceCurrency: "SEK",
        availability: "https://schema.org/InStock",
        url: `${SITE}/#pricing`,
      },
      {
        "@type": "Offer",
        name: "12 månader",
        price: "599",
        priceCurrency: "SEK",
        availability: "https://schema.org/InStock",
        url: `${SITE}/#pricing`,
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "3",
    reviewCount: "3",
  },
} as const;

type BreadcrumbItem = { name: string; url: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function guideBreadcrumb(slug: string, deviceLabel: string) {
  return breadcrumbSchema([
    { name: "Hem", url: SITE },
    { name: "Installationsguide", url: `${SITE}/installationsguide` },
    { name: deviceLabel, url: `${SITE}/installationsguide/${slug}` },
  ]);
}

export const installationsguideHubBreadcrumb = breadcrumbSchema([
  { name: "Hem", url: SITE },
  { name: "Installationsguide", url: `${SITE}/installationsguide` },
]);