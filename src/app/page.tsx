import type { Metadata } from "next";
import NordicSite from "@/components/nordic/NordicSite";
import { JsonLd } from "@/components/JsonLd";
import { productSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Nordic IPTV Sverige – Sveriges Bästa IPTV-Tjänst 2026",
  description:
    "Över 35,000 kanaler, filmer och serier i kristallklar 4K UHD — på alla dina enheter. Inga bindningstider. Prova gratis i 24 timmar.",
  alternates: {
    canonical: "https://nordiciptvsverige.se",
  },
  openGraph: {
    url: "https://nordiciptvsverige.se",
    title: "Nordic IPTV Sverige – Sveriges Bästa IPTV-Tjänst 2026",
    description:
      "Över 35,000 kanaler, filmer och serier i kristallklar 4K UHD — på alla dina enheter. Inga bindningstider. Prova gratis i 24 timmar.",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={productSchema} />
      <NordicSite />
    </>
  );
}
