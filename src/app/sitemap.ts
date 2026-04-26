import type { MetadataRoute } from "next";

const BASE = "https://nordiciptvsverige.se";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const guidePages = [
    "tvip-box",
    "formuler-mytvonline-2",
    "samsung-smart-tv",
    "lg-smart-tv",
    "mag-box",
    "enigma2",
    "android-tv",
    "apple-tv-tvos",
    "chromecast",
    "windows-pc",
    "mac-macos",
    "smartphones",
    "amazon-fire-tv-stick",
  ];

  return [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/installationsguide`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...guidePages.map((slug) => ({
      url: `${BASE}/installationsguide/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}