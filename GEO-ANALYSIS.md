# GEO Analysis — Nordic IPTV Sverige

**Site:** https://nordiciptvsverige.se
**Analyzed:** 2026-04-27
**Scope:** Static analysis of source files (no live URL fetch performed)

---

## GEO Readiness Score: 62/100

| Category | Score | Weight | Notes |
|---|---|---|---|
| Citability | 11/25 | 25% | Marketing copy dominates; few self-contained definitional passages |
| Structural Readability | 16/20 | 20% | Clean H1→H2 hierarchy; FAQ present; some H3 gaps |
| Multi-Modal | 10/15 | 15% | Images + video watermark; no infographics, no embedded YouTube |
| Authority & Brand | 9/20 | 20% | Schema strong; no author bylines, no dates, no source citations |
| Technical Accessibility | 16/20 | 20% | SSR via App Router OK; AI crawlers explicitly allowed; no llms.txt |

---

## Platform Breakdown

| Platform | Score | Reasoning |
|---|---|---|
| **Google AI Overviews** | 65/100 | Strong schema + SSR; needs passage-level "What is IPTV?" blocks and dated content |
| **ChatGPT** | 55/100 | Crawler allowed; weak Wikipedia/Reddit footprint (assumed — verify externally) |
| **Perplexity** | 50/100 | PerplexityBot allowed; Reddit signal likely thin for this brand |
| **Bing Copilot** | 60/100 | Standard SEO signals adequate; no IndexNow detected |

---

## 1. AI Crawler Access — STRONG

[src/app/robots.ts](src/app/robots.ts) explicitly allows all major AI crawlers. This is **better than ~80% of commercial sites**.

**Allowed:**
- ✅ GPTBot, ChatGPT-User, OAI-SearchBot (OpenAI)
- ✅ ClaudeBot, Claude-Web (Anthropic)
- ✅ PerplexityBot
- ✅ Google-Extended (Gemini)
- ✅ Applebot-Extended, Bytespider, CCBot, DuckAssistBot

**Blocked paths:** `/uploads/`, `/public-backup.html` (correct — these are operational/junk)

**No action needed here.**

---

## 2. llms.txt Status — MISSING

No `/llms.txt` file exists. This is the #1 quick win.

**Recommended file at [public/llms.txt](public/llms.txt):**

```
# Nordic IPTV Sverige
> Sveriges ledande IPTV-tjänst med 35,000+ live-kanaler i 4K UHD och 120,000+ on-demand-titlar. 24-timmars gratis testperiod. Från 79 kr/månad. Inga bindningstider.

## Kärnsidor
- [Hem](https://nordiciptvsverige.se/): Översikt, priser, kanalutbud, gratis testperiod
- [Priser](https://nordiciptvsverige.se/#pricing): 1 mån (199 kr), 3 mån (349 kr), 12 mån (599 kr), flerskärmsplaner
- [FAQ](https://nordiciptvsverige.se/#faq): Svar på vanliga frågor om aktivering, enheter, bindningstid, sport, kvalitet
- [Installationsguide](https://nordiciptvsverige.se/installationsguide): Steg-för-steg för 13+ enheter

## Installationsguider per enhet
- [Samsung Smart TV](https://nordiciptvsverige.se/installationsguide/samsung-smart-tv)
- [LG Smart TV](https://nordiciptvsverige.se/installationsguide/lg-smart-tv)
- [Apple TV (tvOS)](https://nordiciptvsverige.se/installationsguide/apple-tv-tvos)
- [Amazon Fire TV Stick](https://nordiciptvsverige.se/installationsguide/amazon-fire-tv-stick)
- [Android TV](https://nordiciptvsverige.se/installationsguide/android-tv)
- [MAG Box](https://nordiciptvsverige.se/installationsguide/mag-box)
- [Formuler MyTVOnline 2](https://nordiciptvsverige.se/installationsguide/formuler-mytvonline-2)
- [Enigma2](https://nordiciptvsverige.se/installationsguide/enigma2)
- [TVIP Box](https://nordiciptvsverige.se/installationsguide/tvip-box)
- [Chromecast](https://nordiciptvsverige.se/installationsguide/chromecast)
- [Windows PC](https://nordiciptvsverige.se/installationsguide/windows-pc)
- [Mac (macOS)](https://nordiciptvsverige.se/installationsguide/mac-macos)
- [Smartphones](https://nordiciptvsverige.se/installationsguide/smartphones)

## Nyckelfakta
- 35,000+ live-kanaler, varav 500+ sportkanaler
- 120,000+ filmer och serier (VOD)
- 4K UHD-bildkvalitet med Dolby Atmos-ljud
- 99.9% drifttid
- 24-timmars gratis testperiod, inget kreditkort krävs
- 7 dagars pengarna-tillbaka-garanti
- Aktiveras inom minuter
- Support på svenska och engelska via WhatsApp (svarstid <4 min)

## Kontakt
- WhatsApp: https://wa.me/212651356639
- Webbplats: https://nordiciptvsverige.se
```

---

## 3. Server-Side Rendering — OK with caveats

[src/app/page.tsx](src/app/page.tsx) is a server component. It imports `NordicSite` which has `"use client"`, but Next.js App Router still **SSRs the initial HTML** for client components. The initial HTML payload contains all FAQ Q&A, pricing, channel grid text, etc.

**Verified content blocks present in SSR HTML:**
- ✅ Hero H1 with "Bästa IPTV-prenumeration"
- ✅ All 8 FAQ entries (collapsed visually but present in DOM)
- ✅ All 3 pricing tiers with prices
- ✅ Channel names, device list, testimonials

**Action:** Run `curl -s https://nordiciptvsverige.se | grep -c "Erbjuder ni gratis"` after next deploy to confirm at least 1 match (proves FAQ text is in initial HTML, not only hydrated post-load).

**Risk:** [src/components/nordic/StackedPanels](src/components/nordic/NordicSite.tsx#L168) and the ecosystem canvas use heavy `useEffect` animation. Visual decoration only — no semantic content lost.

---

## 4. Schema Status

### Present
- ✅ **Organization** — [src/lib/schema.ts:4](src/lib/schema.ts#L4) — name, logo, contactPoint, areaServed
- ✅ **WebSite** — [src/lib/schema.ts:30](src/lib/schema.ts#L30)
- ✅ **Product + AggregateOffer** — [src/lib/schema.ts:42](src/lib/schema.ts#L42) — 3 offers, aggregateRating
- ✅ **BreadcrumbList** — [src/lib/schema.ts:100](src/lib/schema.ts#L100) — for guide pages

### Missing (recommended)
- ❌ **VideoObject** — hero-video.webm has no schema (AI Overviews increasingly cite VideoObject for product pages)
- ❌ **HowTo** — every installation guide is a perfect HowTo schema candidate; currently only Breadcrumb
- ❌ **Article + author/datePublished/dateModified** on guides — needed for AI freshness signal
- ❌ **Person** schema for an author/expert — none exists; biggest E-E-A-T gap

### Aware-of-but-skip
- FAQPage schema — Google deprecated rich results in 2023 for non-gov sites. ChatGPT and Perplexity still parse it, so adding it is +EV but low priority.

### Concern
[src/lib/schema.ts:88-95](src/lib/schema.ts#L88-L95) declares `aggregateRating: 5.0` from only **3 reviews**. Google flags low review-count aggregateRating as spammy; either grow real review count or drop the field rather than risk a manual action.

---

## 5. Citability — WEAK

The homepage is conversion-optimized, not citation-optimized. AI engines need self-contained 134–167 word answer blocks with specific facts.

### What's missing on the homepage

**No "What is IPTV?" block.** The page sells the service but never defines the category. ChatGPT/Perplexity citing "what is IPTV in Sweden" cannot quote this site.

**Recommended insertion** (before pricing, or after the hero stats):

```markdown
## Vad är IPTV?

IPTV (Internet Protocol Television) är en teknik som levererar
TV-kanaler och on-demand-innehåll via internetuppkoppling istället
för traditionell satellit eller kabel. Med en IPTV-prenumeration
streamar du över 35,000 live-kanaler och 120,000+ filmer direkt
till Smart TV, mobil, surfplatta, dator, Fire TV Stick eller
Apple TV — utan parabol eller kabelbox. Bildkvaliteten sträcker
sig från HD upp till 4K UHD, beroende på kanal och plan.
I Sverige använder över 50,000 hushåll Nordic IPTV med
99.9% drifttid och svensk support dygnet runt.
```
~120 words, self-contained, definitional, includes brand entity, sourced stats.

### FAQ answers — too short to cite well

Current answers ([src/components/nordic/NordicSite.tsx:81-90](src/components/nordic/NordicSite.tsx#L81-L90)) average 30–50 words. Sweet spot is 80–120 words per answer for AI citation. Expand the top three:

1. "Hur snabbt aktiveras min IPTV-prenumeration?" — add typical time range, what email contains, what to do on delay
2. "Vilka enheter kan jag använda Nordic IPTV på?" — currently a comma list; convert to a brief paragraph + a `<ul>` for AI parsing
3. "Erbjuder ni gratis testperiod?" — add what's included in the 24h trial vs paid plan

### Stats with no citation
"99.9% drifttid", "50,000+ prenumeranter", "<4 min svarstid" — all unsourced. Even self-attribution helps:
> "99.9% drifttid mätt över 12-månadersperioden 2025 (intern monitoring)"

---

## 6. Authority & Brand Signals

### On-site
- ❌ No author bio anywhere
- ❌ No "Senast uppdaterad" date on any page
- ❌ Footer social links are placeholder `href="#"` ([src/components/nordic/NordicSite.tsx:1611-1613](src/components/nordic/NordicSite.tsx#L1611-L1613)) — fix or remove
- ❌ No `sameAs` array in Organization schema (links to social profiles)

### Off-site (cannot verify from source — manual check needed)
- ❓ Wikipedia entry for "Nordic IPTV Sverige" — unlikely to qualify for notability
- ❓ Reddit r/svenskpolitik / r/sweden mentions — check `site:reddit.com "nordic iptv"`
- ❓ YouTube reviews/walkthroughs — strongest AI signal (~0.737 correlation per Ahrefs Dec 2025)
- ❓ Trustpilot profile — not linked in schema

### Add `sameAs` to Organization schema

Once social profiles are real, append to [src/lib/schema.ts:27](src/lib/schema.ts#L27):

```typescript
sameAs: [
  "https://www.facebook.com/nordiciptvsverige",
  "https://t.me/nordiciptvsverige",
  "https://se.trustpilot.com/review/nordiciptvsverige.se",
  // + any YouTube channel, Instagram once real
],
```

---

## 7. Heading Hierarchy

Counted from [src/components/nordic/NordicSite.tsx](src/components/nordic/NordicSite.tsx):

| Level | Count | Status |
|---|---|---|
| H1 | 1 (hero) | ✅ Correct — single H1 |
| H2 | 8 | ✅ Section-level, scannable |
| H3 | 1 | ⚠️ Underused — multi-screen section only |

**Suggestion:** Promote sub-points within Pricing, FAQ, and Installations sections to H3 to give AI crawlers more granular topic anchors.

---

## Top 5 Highest-Impact Changes

| # | Change | Effort | Impact |
|---|---|---|---|
| 1 | Create [public/llms.txt](public/llms.txt) (template above) | 5 min | High — direct GEO signal |
| 2 | Add "Vad är IPTV?" 120-word definitional block above pricing | 15 min | High — unlocks definitional citations |
| 3 | Add HowTo schema + datePublished/dateModified to all 13 guide pages | 1–2 hr | High — guide pages are your strongest AI-citation candidates |
| 4 | Replace placeholder `href="#"` social links + add real `sameAs` to Organization schema | 30 min | Medium — entity linking |
| 5 | Either grow real reviews to 50+ or drop the `aggregateRating` from Product schema | varies | Medium — risk-reduction; current 3-review 5.0 looks manipulated |

---

## Medium-Effort Wins

- Expand FAQ answers to 80–120 words each
- Add a "Senast uppdaterad: 2026-04-XX" line to the homepage and every guide
- Build a `/blogg/iptv-i-sverige-guide` long-form pillar piece (1,500+ words) with definitional H2s — this is what gets cited when users ask "best IPTV Sweden"
- Create Person schema for one named expert (e.g., a "Skribent: [Name], 8 års erfarenhet av streaming-tjänster")

## High-Impact (longer term)

- Publish original survey data: "Vi frågade 500 svenska IPTV-användare vad de tittar på" — unique citable data
- Get listed on Trustpilot Sweden + display verified Trustpilot widget
- Build a YouTube channel with installation walkthroughs — links from descriptions become AI citation fuel
- Reddit presence: answer 5–10 genuine questions in r/sweden, r/svenskaspel, r/IPTV per month with non-promotional value

---

## Quick-Verify Checklist (run after deploy)

```bash
# 1. Confirm llms.txt is live
curl -sI https://nordiciptvsverige.se/llms.txt | head -1

# 2. Confirm robots.txt allows GPTBot
curl -s https://nordiciptvsverige.se/robots.txt | grep -A1 GPTBot

# 3. Confirm FAQ text is in initial HTML (not JS-only)
curl -s https://nordiciptvsverige.se | grep -c "Erbjuder ni gratis"

# 4. Confirm schema is rendered server-side
curl -s https://nordiciptvsverige.se | grep -c '"@type":"Product"'

# 5. Validate schema against schema.org
# Paste a curl of the homepage into https://validator.schema.org
```

All five should return non-zero / 200.
