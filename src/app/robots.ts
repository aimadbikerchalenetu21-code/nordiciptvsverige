import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/uploads/", "/public-backup.html"],
      },
    ],
    sitemap: "https://nordiciptvsverige.se/sitemap.xml",
  };
}