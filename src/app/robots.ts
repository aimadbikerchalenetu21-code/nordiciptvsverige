import type { MetadataRoute } from "next";

/**
 * AI crawler policy: explicitly allow major AI crawlers so the site is
 * eligible for citation in ChatGPT, Perplexity, Gemini, Claude, etc.
 * For an IPTV brand discoverability play, AI citations drive referral
 * traffic — we lose more by blocking than we gain.
 */
const AI_CRAWLERS = [
  "GPTBot",          // OpenAI training
  "ChatGPT-User",    // ChatGPT real-time browsing
  "OAI-SearchBot",   // OpenAI SearchGPT
  "ClaudeBot",       // Anthropic training
  "Claude-Web",      // Anthropic real-time browsing
  "PerplexityBot",   // Perplexity index
  "Google-Extended", // Gemini training (does NOT affect Google Search)
  "Bytespider",      // ByteDance / Doubao
  "Applebot-Extended", // Apple Intelligence training
  "CCBot",           // Common Crawl
  "DuckAssistBot",   // DuckDuckGo AI
];

const DISALLOWED_PATHS = ["/uploads/", "/public-backup.html"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow everything except admin/backup paths
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOWED_PATHS,
      },
      // Explicitly allow AI crawlers (documents deliberate policy)
      ...AI_CRAWLERS.map((bot) => ({
        userAgent: bot,
        allow: "/",
        disallow: DISALLOWED_PATHS,
      })),
    ],
    sitemap: "https://nordiciptvsverige.se/sitemap.xml",
    host: "https://nordiciptvsverige.se",
  };
}
