import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nordic IPTV Sverige – Sveriges Bästa IPTV-Tjänst 2026",
  description:
    "Över 35,000 kanaler, filmer och serier i kristallklar 4K UHD — på alla dina enheter. Inga bindningstider. Omedelbar aktivering.",
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
