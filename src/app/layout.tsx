import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const SITE_URL = "https://nordiciptvsverige.se";
const DEFAULT_TITLE = "Nordic IPTV Sverige – Sveriges Bästa IPTV-Tjänst 2026";
const DEFAULT_DESC =
  "Över 35,000 kanaler, filmer och serier i kristallklar 4K UHD — på alla dina enheter. Inga bindningstider. Omedelbar aktivering.";

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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nordic IPTV Sverige – 35,000+ kanaler i 4K",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: ["/og-image.png"],
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv" className={`${outfit.className} dark`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
