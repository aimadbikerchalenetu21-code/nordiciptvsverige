import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const SITE_URL = "https://nordiciptvsverige.se";
const DEFAULT_TITLE = "Nordic IPTV Sverige – Sveriges Bästa IPTV-Tjänst 2026";
const DEFAULT_DESC =
  "Nordic IPTV Sverige — 40,000+ live-kanaler och 100,000+ filmer i kristallklar 4K Ultra HD. På alla dina enheter. Inga bindningstider. Omedelbar aktivering.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Nordic IPTV Sverige",
  },
  description: DEFAULT_DESC,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: SITE_URL,
    siteName: "Nordic IPTV Sverige",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    // opengraph-image.tsx auto-generates and injects the image URL
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    // opengraph-image.tsx auto-generates and injects the image URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#04050a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv" className={`${outfit.className} dark`}>
      <body className="antialiased">
        <JsonLd data={[organizationSchema, websiteSchema]} />
        {children}
      </body>
    </html>
  );
}
