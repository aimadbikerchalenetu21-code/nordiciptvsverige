import type { Metadata } from "next";
import NordicSite from "@/components/nordic/NordicSite";
import { JsonLd } from "@/components/JsonLd";
import { productSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Nordic IPTV Sverige – Sveriges Bästa IPTV-Tjänst 2026",
  description:
    "Nordic IPTV Sverige — 40,000+ live-kanaler och 100,000+ filmer i kristallklar 4K Ultra HD. Inga bindningstider. Prova gratis i 24 timmar.",
  alternates: {
    canonical: "https://nordiciptvsverige.se",
  },
  openGraph: {
    url: "https://nordiciptvsverige.se",
    title: "Nordic IPTV Sverige – Sveriges Bästa IPTV-Tjänst 2026",
    description:
      "Nordic IPTV Sverige — 40,000+ live-kanaler och 100,000+ filmer i kristallklar 4K Ultra HD. Inga bindningstider. Prova gratis i 24 timmar.",
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
