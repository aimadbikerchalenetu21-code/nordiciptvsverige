"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import * as PricingCard from "@/components/ui/pricing-card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Tv, Smartphone, Laptop, Flame, CalendarDays, Rewind, Radio, Globe, Film, Flag, MessageCircle, ShieldCheck } from "lucide-react";
import Phosphor30 from "@/components/ui/phosphor-30";
import { CardStack, type CardStackItem } from "@/components/ui/card-stack";

// ── DATA ──────────────────────────────────────────────────────────────────────

const CONTENT_TABS = ["Populära Serier", "Filmer i 4K", "Sport Live", "Svenska Kanaler", "Barnkanaler"];

interface ContentItem { id: number; title: string; year: string; rating: string; img: string; overlay: string; }

const CONTENT_ITEMS: Record<string, ContentItem[]> = {
  "Populära Serier": [
    { id: 1, title: "The Smashing Machine", year: "Sport / Drama", rating: "2025", img: "https://image.tmdb.org/t/p/w500/mPuBDGrVIBGOymBxR6rO3iIvBSe.jpg", overlay: "rgba(20,10,5,0.4)" },
    { id: 2, title: "Marty Supreme", year: "Drama / Komedi", rating: "2025", img: "https://image.tmdb.org/t/p/w500/lYWEXbQgRTR4ZQleSXAgRbxAjvq.jpg", overlay: "rgba(10,10,20,0.4)" },
    { id: 3, title: "Zootopia 2", year: "Animation / Familj", rating: "2025", img: "https://image.tmdb.org/t/p/w500/oJ7g2CifqpStmoYQyaLQgEU32qO.jpg", overlay: "rgba(0,15,25,0.4)" },
    { id: 4, title: "One Battle After Another", year: "Drama / Thriller", rating: "2025", img: "https://image.tmdb.org/t/p/w500/lbBWwxBht4JFP5PsuJ5onpMqugW.jpg", overlay: "rgba(20,8,0,0.4)" },
    { id: 5, title: "Weapons", year: "Skräck / Thriller", rating: "2025", img: "https://image.tmdb.org/t/p/w500/cpf7vsRZ0MYRQcnLWteD5jK9ymT.jpg", overlay: "rgba(5,10,20,0.4)" },
    { id: 6, title: "If I Had Legs I'd Kick You", year: "Drama", rating: "A24", img: "https://image.tmdb.org/t/p/w500/va0TQ9WprMXRqQAzY56vyqY0Yd5.jpg", overlay: "rgba(5,15,10,0.4)" },
    { id: 7, title: "Sinners", year: "Skräck / Drama", rating: "2025", img: "https://image.tmdb.org/t/p/w500/705nQHqe4JGdEisrQmVYmXyjs1U.jpg", overlay: "rgba(25,5,0,0.4)" },
  ],
  "Filmer i 4K": [
    { id: 9, title: "Interstellar", year: "Sci-Fi", rating: "8.6", img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&q=80", overlay: "rgba(5,10,25,0.5)" },
    { id: 10, title: "The Dark Knight", year: "Action", rating: "9.0", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80", overlay: "rgba(5,5,8,0.55)" },
    { id: 11, title: "Inception", year: "Sci-Fi", rating: "8.8", img: "https://images.unsplash.com/photo-1510784722466-f2aa240c3c4a?w=400&q=80", overlay: "rgba(10,10,25,0.5)" },
    { id: 12, title: "Dune: Del 2", year: "Sci-Fi", rating: "8.5", img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80", overlay: "rgba(25,18,5,0.5)" },
    { id: 13, title: "Oppenheimer", year: "Drama", rating: "8.3", img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&q=80", overlay: "rgba(10,5,8,0.55)" },
    { id: 14, title: "Avatar 2", year: "Sci-Fi", rating: "7.6", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80", overlay: "rgba(0,20,10,0.5)" },
    { id: 15, title: "Top Gun 2", year: "Action", rating: "8.3", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80", overlay: "rgba(5,10,20,0.55)" },
    { id: 16, title: "Gladiator II", year: "Action", rating: "7.9", img: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&q=80", overlay: "rgba(25,10,5,0.5)" },
  ],
  "Sport Live": [
    { id: 17, title: "Premier League", year: "Fotboll", rating: "Live", img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&q=80", overlay: "rgba(10,20,40,0.5)" },
    { id: 18, title: "Champions League", year: "Fotboll", rating: "Live", img: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=400&q=80", overlay: "rgba(0,8,20,0.55)" },
    { id: 19, title: "Allsvenskan", year: "Fotboll", rating: "Live", img: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&q=80", overlay: "rgba(0,15,10,0.5)" },
    { id: 20, title: "NHL Hockey", year: "Hockey", rating: "Live", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80", overlay: "rgba(10,10,25,0.5)" },
    { id: 21, title: "Formel 1", year: "Motorsport", rating: "Live", img: "https://images.unsplash.com/photo-1617593888757-6f2e82b1d16e?w=400&q=80", overlay: "rgba(20,5,5,0.55)" },
    { id: 22, title: "UFC", year: "Kampsport", rating: "Live", img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&q=80", overlay: "rgba(20,5,5,0.5)" },
    { id: 23, title: "NBA", year: "Basket", rating: "Live", img: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400&q=80", overlay: "rgba(20,10,5,0.5)" },
    { id: 24, title: "Tennis", year: "Grand Slam", rating: "Live", img: "https://images.unsplash.com/photo-1501696461415-6bd6660c6742?w=400&q=80", overlay: "rgba(5,20,5,0.5)" },
  ],
  "Svenska Kanaler": [
    { id: 25, title: "SVT1", year: "Public Service", rating: "HD", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80", overlay: "rgba(0,10,40,0.55)" },
    { id: 26, title: "TV4", year: "Underhållning", rating: "HD", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80", overlay: "rgba(0,15,10,0.5)" },
    { id: 27, title: "Kanal 5", year: "Underhållning", rating: "HD", img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80", overlay: "rgba(20,5,5,0.5)" },
    { id: 28, title: "Viaplay", year: "Sport/Film", rating: "4K", img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&q=80", overlay: "rgba(5,10,20,0.55)" },
    { id: 29, title: "C More", year: "Film/Sport", rating: "4K", img: "https://images.unsplash.com/photo-1510784722466-f2aa240c3c4a?w=400&q=80", overlay: "rgba(5,8,20,0.5)" },
    { id: 30, title: "Discovery+", year: "Dokumentär", rating: "4K", img: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&q=80", overlay: "rgba(10,15,5,0.5)" },
    { id: 31, title: "TV3", year: "Underhållning", rating: "HD", img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&q=80", overlay: "rgba(10,8,20,0.5)" },
    { id: 32, title: "SVT2", year: "Public Service", rating: "HD", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80", overlay: "rgba(0,10,40,0.5)" },
  ],
  "Barnkanaler": [
    { id: 33, title: "Disney Channel", year: "Barn/Familj", rating: "HD", img: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=400&q=80", overlay: "rgba(0,8,25,0.5)" },
    { id: 34, title: "Cartoon Network", year: "Animation", rating: "HD", img: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400&q=80", overlay: "rgba(20,10,5,0.5)" },
    { id: 35, title: "Nick Jr", year: "Småbarn", rating: "HD", img: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&q=80", overlay: "rgba(20,5,5,0.5)" },
    { id: 36, title: "Barnkanalen", year: "Barn", rating: "HD", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80", overlay: "rgba(0,15,15,0.5)" },
    { id: 37, title: "Disney Junior", year: "Familj", rating: "HD", img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&q=80", overlay: "rgba(0,8,20,0.5)" },
    { id: 38, title: "Nickelodeon", year: "Animation", rating: "HD", img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80", overlay: "rgba(20,15,5,0.5)" },
    { id: 39, title: "CBBC", year: "Ungdom", rating: "HD", img: "https://images.unsplash.com/photo-1474464240892-b8f8ca98fa7a?w=400&q=80", overlay: "rgba(5,15,5,0.5)" },
    { id: 40, title: "Boomerang", year: "Klassisk", rating: "HD", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80", overlay: "rgba(10,5,20,0.5)" },
  ],
};

const DEVICES = [
  { icon: "📺", name: "Smart TV", sub: "Samsung, LG, Sony, Philips" },
  { icon: "📱", name: "iOS & iPhone", sub: "iPhone, iPad, Apple TV" },
  { icon: "🤖", name: "Android", sub: "Mobil, Surfplatta, TV" },
  { icon: "🔥", name: "Fire TV Stick", sub: "Alla Amazon Fire TV" },
  { icon: "💻", name: "PC & Mac", sub: "Windows, macOS, Linux" },
  { icon: "🎮", name: "Spelkonsoler", sub: "PlayStation, Xbox" },
  { icon: "⚡", name: "Kodi & IPTV Smarters", sub: "Alla IPTV-spelare" },
  { icon: "📡", name: "MAG Box", sub: "MAG 254, 256, 322, 349" },
];

const FAQS = [
  { q: "Hur snabbt aktiveras min IPTV-prenumeration?", a: "Din prenumeration aktiveras omedelbart efter betalning. Du får inloggningsuppgifter direkt till din e-post inom några minuter. Ingen väntetid – börja streama på nolltid!" },
  { q: "Vilka enheter kan jag använda Nordic IPTV på?", a: "Du kan använda Nordic IPTV på alla moderna enheter: Smart TV (Samsung, LG, Sony), iOS-enheter (iPhone, iPad, Apple TV), Android-enheter, Amazon Fire TV Stick, PC/Mac, Kodi, IPTV Smarters Pro, MAG-boxar och spelkonsoler." },
  { q: "Finns det någon bindningstid?", a: "Nej, vi har inga bindningstider. Du kan avsluta när som helst. Vi erbjuder månadsabonnemang, halvårsabonnemang och årsabonnemang – allt utan kontrakt." },
  { q: "Vad händer om tjänsten inte fungerar?", a: "Vi har 99.9% drifttid och ett dedikerat supportteam tillgängligt 24/7 via live-chatt, e-post och Telegram. Vid driftstörningar kompenseras du automatiskt med förlängd prenumerationstid." },
  { q: "Kan jag titta på sport live?", a: "Absolut! Vi har över 500 sportkanaler inklusive Eurosport, ESPN, Sky Sports, TNT Sports och alla stora fotbollsligor – Premier League, Champions League, Allsvenskan, Bundesliga, La Liga och mycket mer." },
  { q: "Erbjuder ni gratis testperiod?", a: "Ja! Vi erbjuder en 24-timmars gratis testperiod utan kreditkort. Du kan prova alla kanaler och funktioner helt utan risk. Klicka på 'Prova Gratis' för att komma igång." },
  { q: "Hur ser bildkvaliteten ut?", a: "Vi erbjuder kanaler i HD, Full HD och 4K Ultra HD beroende på din prenumerationsnivå. Premium- och Familj-planerna inkluderar 4K UHD-strömning med Dolby Atmos-ljud." },
  { q: "Hur många kan titta samtidigt?", a: "Det beror på din plan: 3 månader (1 enhet), 6 månader (2 enheter), 12 månader (4 enheter). Varje enhet kan streama helt oberoende av varandra." },
];

const TESTIMONIALS = [
  { stars: 5, text: "Bästa IPTV-tjänsten jag testat! Bildkvaliteten är fantastisk och sportpaketet är komplett. Alla fotbollskanaler jag behöver på ett ställe.", name: "Magnus L.", loc: "Stockholm", initial: "M" },
  { stars: 5, text: "Väldigt nöjd med Nordic IPTV. Installationen tog 5 minuter och bildkvaliteten i 4K är imponerande. Supporten svarade inom minuter.", name: "Anna K.", loc: "Göteborg", initial: "A" },
  { stars: 5, text: "Äntligen en svensk IPTV-tjänst som levererar! Inga buffringsproblem, massor av kanaler och priset är verkligen rimligt jämfört med alternativen.", name: "Erik S.", loc: "Malmö", initial: "E" },
];

const FEATURES_LIST = [
  "Omedelbar aktivering", "Anonym Betalning", "Premiumkanaler", "Stöd alla enheter",
  "90 400+ filmer och serier", "22 500+ kanaler", "Sportkanaler",
  "4K / Ultra HD-kvalitet", "Ingen buffring eller frysning", "Frostskyddsteknik", "EPG för alla kanaler",
];

const MULTI_PLANS = [
  { label: "Årsplan – 2 enheter", price: "1399", old: "2636", save: "47%", devices: 2 },
  { label: "Årsplan – 3 enheter", price: "1999", old: "3807", save: "41%", devices: 3 },
  { label: "Årsplan – 4 enheter", price: "2699", old: "5078", save: "45%", devices: 4 },
];

const PANEL_COUNT = 18;
const SIGMA = 2.8;
const Z_SPREAD = 42;

const IMAGES = [
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
  "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400&q=80",
  "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80",
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80",
  "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&q=80",
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80",
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80",
  "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&q=80",
  "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400&q=80",
  "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&q=80",
  "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80",
  "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=400&q=80",
  "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&q=80",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80",
  "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&q=80",
  "https://images.unsplash.com/photo-1617593888757-6f2e82b1d16e?w=400&q=80",
  "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&q=80",
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80",
];

const OVERLAYS = [
  "linear-gradient(135deg,rgba(255,107,53,0.55),rgba(255,60,20,0.35))",
  "linear-gradient(135deg,rgba(0,212,255,0.5),rgba(0,98,255,0.4))",
  "linear-gradient(135deg,rgba(99,55,255,0.5),rgba(236,72,153,0.4))",
  "linear-gradient(135deg,rgba(0,230,118,0.4),rgba(0,212,255,0.5))",
  "linear-gradient(135deg,rgba(255,107,53,0.45),rgba(255,215,64,0.35))",
  "linear-gradient(135deg,rgba(0,98,255,0.5),rgba(99,55,255,0.4))",
  "linear-gradient(135deg,rgba(255,61,87,0.4),rgba(255,107,53,0.5))",
  "linear-gradient(135deg,rgba(0,212,255,0.4),rgba(0,230,118,0.5))",
  "linear-gradient(135deg,rgba(99,55,255,0.4),rgba(0,212,255,0.5))",
  "linear-gradient(135deg,rgba(255,215,64,0.4),rgba(0,230,118,0.5))",
  "linear-gradient(135deg,rgba(255,61,87,0.5),rgba(255,215,64,0.4))",
  "linear-gradient(135deg,rgba(99,55,255,0.5),rgba(0,98,255,0.4))",
  "linear-gradient(135deg,rgba(0,230,118,0.5),rgba(99,55,255,0.4))",
  "linear-gradient(135deg,rgba(236,72,153,0.4),rgba(0,98,255,0.5))",
  "linear-gradient(135deg,rgba(0,212,255,0.5),rgba(255,215,64,0.4))",
  "linear-gradient(135deg,rgba(0,98,255,0.4),rgba(0,230,118,0.5))",
  "linear-gradient(135deg,rgba(255,215,64,0.5),rgba(99,55,255,0.4))",
  "linear-gradient(135deg,rgba(255,61,87,0.4),rgba(0,212,255,0.5))",
];

const LABELS = ["Stranger Things","The Last of Us","House of Dragon","Succession","Wednesday","The Crown","Breaking Bad","Game of Thrones","Chernobyl","Peaky Blinders","True Detective","Interstellar","Dune: Del 2","Oppenheimer","Premier League","Champions League","SVT1","TV4"];

// ── STACKED PANELS ────────────────────────────────────────────────────────────

interface SpringState {
  rotY: number; rotX: number; targetRotY: number; targetRotX: number;
  waves: number[]; waveTargets: number[];
  scales: number[]; scaleTargets: number[];
  velRotY: number; velRotX: number;
  waveVels: number[]; scaleVels: number[];
}

function StackedPanels() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const stateRef = useRef<SpringState>({
    rotY: -38, rotX: 15, targetRotY: -38, targetRotX: 15,
    waves: Array(PANEL_COUNT).fill(0), waveTargets: Array(PANEL_COUNT).fill(0),
    scales: Array(PANEL_COUNT).fill(1), scaleTargets: Array(PANEL_COUNT).fill(1),
    velRotY: 0, velRotX: 0,
    waveVels: Array(PANEL_COUNT).fill(0), scaleVels: Array(PANEL_COUNT).fill(0),
  });
  const [rs, setRs] = useState({ rotY: -38, rotX: 15, waves: Array(PANEL_COUNT).fill(0), scales: Array(PANEL_COUNT).fill(1) });

  useEffect(() => {
    const spring = (cur: number, vel: number, target: number, stiff: number, damp: number, mass: number, dt: number): [number, number] => {
      const f = (target - cur) * stiff / mass;
      const nv = vel + f * dt - vel * damp * dt / mass;
      return [cur + nv * dt, nv];
    };
    const tick = () => {
      const s = stateRef.current;
      const dt = 0.016;
      let changed = false;
      const [ry, rvy] = spring(s.rotY, s.velRotY, s.targetRotY, 80, 22, 1, dt);
      const [rx, rvx] = spring(s.rotX, s.velRotX, s.targetRotX, 80, 22, 1, dt);
      if (Math.abs(ry - s.rotY) > 0.01 || Math.abs(rx - s.rotX) > 0.01) changed = true;
      s.rotY = ry; s.velRotY = rvy; s.rotX = rx; s.velRotX = rvx;
      const nw = [...s.waves], ns = [...s.scales];
      for (let i = 0; i < PANEL_COUNT; i++) {
        const [w, wv] = spring(s.waves[i], s.waveVels[i], s.waveTargets[i], 160, 22, 0.6, dt);
        const [sc, sv] = spring(s.scales[i], s.scaleVels[i], s.scaleTargets[i], 160, 22, 0.6, dt);
        if (Math.abs(w - s.waves[i]) > 0.1) changed = true;
        nw[i] = w; s.waveVels[i] = wv; ns[i] = sc; s.scaleVels[i] = sv;
      }
      s.waves = nw; s.scales = ns;
      if (changed) setRs({ rotY: s.rotY, rotX: s.rotX, waves: [...s.waves], scales: [...s.scales] });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = (e.clientX - rect.left) / rect.width;
    const cy = (e.clientY - rect.top) / rect.height;
    const s = stateRef.current;
    s.targetRotY = -38 + (cx - 0.5) * 16;
    s.targetRotX = 15 + (cy - 0.5) * -12;
    const pos = cx * (PANEL_COUNT - 1);
    for (let i = 0; i < PANEL_COUNT; i++) {
      const dist = Math.abs(i - pos);
      const inf = Math.exp(-(dist * dist) / (2 * SIGMA * SIGMA));
      s.waveTargets[i] = -inf * 65;
      s.scaleTargets[i] = 0.35 + inf * 0.65;
    }
  }, []);

  const onMouseLeave = useCallback(() => {
    const s = stateRef.current;
    s.targetRotY = -38; s.targetRotX = 15;
    for (let i = 0; i < PANEL_COUNT; i++) { s.waveTargets[i] = 0; s.scaleTargets[i] = 1; }
  }, []);

  return (
    <div ref={containerRef} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
      style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", userSelect: "none", perspective: "900px", cursor: "crosshair" }}>
      <div style={{ transform: `rotateY(${rs.rotY}deg) rotateX(${rs.rotX}deg)`, transformStyle: "preserve-3d", position: "relative", width: 0, height: 0 }}>
        {Array.from({ length: PANEL_COUNT }).map((_, i) => {
          const t = i / (PANEL_COUNT - 1);
          const baseZ = (i - (PANEL_COUNT - 1)) * Z_SPREAD;
          const w = 150 + t * 70, h = 220 + t * 100;
          const opacity = 0.25 + t * 0.75;
          const wave = rs.waves[i] || 0;
          const scale = rs.scales[i] || 1;
          return (
            <div key={i} style={{ position: "absolute", borderRadius: 10, overflow: "hidden", pointerEvents: "none", width: w, height: h, marginLeft: -w / 2, marginTop: -h / 2, transform: `translateZ(${baseZ}px) translateY(${wave}px) scaleY(${scale})`, transformOrigin: "bottom center", opacity }}>
              <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${IMAGES[i % IMAGES.length]})`, backgroundSize: "cover", backgroundPosition: "center" }} />
              <div style={{ position: "absolute", inset: 0, background: OVERLAYS[i % OVERLAYS.length], mixBlendMode: "multiply" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.5))" }} />
              <div style={{ position: "absolute", inset: 0, borderRadius: "inherit", border: `1px solid rgba(255,255,255,${(0.06 + t * 0.18).toFixed(2)})`, boxSizing: "border-box" }} />
              {t > 0.7 && <div style={{ position: "absolute", bottom: 10, left: 10, right: 10, fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.9)", textShadow: "0 1px 4px rgba(0,0,0,.8)" }}>{LABELS[i % LABELS.length]}</div>}
              {t > 0.6 && <div style={{ position: "absolute", top: 8, right: 8, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", borderRadius: 4, padding: "2px 6px", fontSize: 9, fontWeight: 700, color: "#ffd740" }}>{(8.5 + t * 0.8).toFixed(1)}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── SECTIONS ──────────────────────────────────────────────────────────────────

function TopBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="ni-top-banner">
      <div className="ni-top-banner-text">
        🟡 <strong>Sommarkampanj!</strong> Upp till 30% RABATT på alla abonnemang! 🌞<br className="ni-top-banner-sub" />
        <span className="ni-top-banner-sub"> Begränsad tid – njut av svalkande underhållning i sommarhetten! ❄️</span>
      </div>
      <button className="ni-top-banner-close" onClick={() => setVisible(false)}>✕</button>
    </div>
  );
}

const GUIDE_NAV_ITEMS = [
  { label: "TVIP Box", href: "/installationsguide/tvip-box", icon: "📺" },
  { label: "Formuler-MyTVOnline 2", href: "/installationsguide/formuler-mytvonline-2", icon: "📡" },
  { label: "Samsung Smart TV", href: "/installationsguide/samsung-smart-tv", icon: "🖥️" },
  { label: "LG Smart TV", href: "/installationsguide/lg-smart-tv", icon: "📺" },
  { label: "MAG Box", href: "/installationsguide/mag-box", icon: "📦" },
  { label: "Enigma Box", href: "/installationsguide/enigma2", icon: "⚙️" },
  { label: "Android TV / Box", href: "/installationsguide/android-tv", icon: "🤖" },
  { label: "Apple TV (tvOS)", href: "/installationsguide/apple-tv-tvos", icon: "🍎" },
  { label: "Chromecast", href: "/installationsguide/chromecast", icon: "🔄" },
  { label: "Windows PC", href: "/installationsguide/windows-pc", icon: "💻" },
  { label: "Mac (macOS)", href: "/installationsguide/mac-macos", icon: "🍏" },
  { label: "Smartphones (iOS & Android)", href: "/installationsguide/smartphones", icon: "📱" },
  { label: "Amazon Fire TV Stick", href: "/installationsguide/amazon-fire-tv-stick", icon: "🔥" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileGuideOpen, setMobileGuideOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const links: [string, string][] = [["#hero","Hem"],["#pricing","Priser"],["#faq","FAQ"]];

  return (
    <>
      <nav className={cn("ni-nav", scrolled && "scrolled")}>
        <div className="ni-container">
          <div className="ni-nav-inner">

            {/* Logo */}
            <a href="#" className="ni-nav-logo">
              <Image src="/logo.webp" alt="Nordic IPTV Sverige" width={160} height={44} priority style={{ height: 44, width: "auto", display: "block" }} />
            </a>

            {/* Desktop links */}
            <div className="ni-nav-links">
              {links.map(([href, label]) => (
                <a key={href} href={href} className="ni-nav-link">{label}</a>
              ))}

              {/* Instruktioner dropdown */}
              <div className="ni-dropdown" ref={dropRef}>
                <button
                  className={cn("ni-dropdown-btn", dropOpen && "open")}
                  onClick={() => setDropOpen(o => !o)}
                  aria-expanded={dropOpen}
                >
                  Instruktioner
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className={cn("ni-dropdown-panel", dropOpen && "open")}>
                  {GUIDE_NAV_ITEMS.map(item => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="ni-dropdown-item"
                      onClick={() => setDropOpen(false)}
                    >
                      <span className="ni-dropdown-item-icon">{item.icon}</span>
                      {item.label}
                    </a>
                  ))}
                  <div className="ni-dropdown-divider" />
                  <a href="/installationsguide" className="ni-dropdown-all" onClick={() => setDropOpen(false)}>
                    📋 Alla installationsguider →
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="ni-nav-actions">
              <a href="https://wa.me/212651356639" target="_blank" rel="noopener noreferrer" className="ni-nav-cta">Komma igång</a>
            </div>

            {/* Hamburger */}
            <div className="ni-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span /><span /><span />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn("ni-mobile-menu", menuOpen && "open")}>
        {links.map(([href, label]) => (
          <a key={href} href={href} className="ni-mobile-link" onClick={() => setMenuOpen(false)}>{label}</a>
        ))}

        {/* Mobile Instruktioner accordion */}
        <div
          className="ni-mobile-link"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}
          onClick={() => setMobileGuideOpen(o => !o)}
        >
          <span>Instruktioner</span>
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none" style={{ transition: "transform .2s", transform: mobileGuideOpen ? "rotate(180deg)" : "none" }}>
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {mobileGuideOpen && (
          <>
            <div className="ni-mobile-sub-header">Välj din enhet</div>
            {GUIDE_NAV_ITEMS.map(item => (
              <a key={item.href} href={item.href} className="ni-mobile-sub" onClick={() => setMenuOpen(false)}>
                {item.icon} {item.label}
              </a>
            ))}
            <a href="/installationsguide" className="ni-mobile-link" style={{ color: "#ff6b35", fontSize: 15 }} onClick={() => setMenuOpen(false)}>
              📋 Alla guider
            </a>
          </>
        )}

        <a href="https://wa.me/212651356639" target="_blank" rel="noopener noreferrer" className="ni-nav-cta" style={{ marginTop: 12, textAlign: "center" }} onClick={() => setMenuOpen(false)}>Komma igång</a>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section id="hero" className="ni-hero">
      {/* full-screen video */}
      <video autoPlay muted loop playsInline className="ni-hero-video">
        <source src="/hero-video.webm" type="video/webm" />
      </video>
      {/* dark overlay — left heavy, fades right so video shows through */}
      <div className="ni-hero-overlay" />

      {/* content pinned to bottom of viewport */}
      <div className="ni-hero-inner">
        <div className="ni-container">

          {/* kicker */}
          <div className="ni-hero-kicker ni-fade-up">
            Sveriges Ledande IPTV-Tjänst &nbsp;·&nbsp; Betyg 4.9 / 5
          </div>

          {/* headline */}
          <h1 className="ni-hero-title ni-fade-up">
            Bästa IPTV-prenumeration<br />
            — 35,000+ 4K Live-kanaler,<br />
            <span style={{ color: "#ff6b35" }}>24-timmars gratis provperiod</span>
          </h1>

          {/* description */}
          <p className="ni-hero-desc ni-fade-up ni-delay-1">
            NordicIPTV är den <strong>bästa IPTV-tjänsten</strong> för svenska tittare — en{" "}
            <strong>premium IPTV-prenumeration</strong> med 35,000+ live-kanaler i{" "}
            <strong>4K</strong> och 120,000+ on-demand-titlar. Från{" "}
            <strong>79 kr / månad</strong> med gratis IPTV-test — inget kort, ingen auto-förnyelse, avsluta när du vill.
          </p>

          {/* CTAs */}
          <div className="ni-hero-actions ni-fade-up ni-delay-2">
            <a href="https://wa.me/212651356639" target="_blank" rel="noopener noreferrer" className="ni-btn ni-btn-cyan" style={{ fontSize: 16, padding: "15px 32px" }}>
              Starta gratis IPTV-test
            </a>
            <a href="#pricing" className="ni-btn ni-btn-outline-white" style={{ fontSize: 16, padding: "15px 28px" }}>
              Se IPTV-priser &rarr;
            </a>
          </div>

          {/* trust line */}
          <p className="ni-hero-trust ni-fade-up ni-delay-2">
            Inget kort krävs · Uppgifter via WhatsApp på under 3 minuter · 7 dagars pengarna-tillbaka-garanti
          </p>

          {/* divider */}
          <div className="ni-hero-divider ni-fade-up ni-delay-3" />

          {/* stats */}
          <div className="ni-hero-stats ni-fade-up ni-delay-3">
            {([
              ["BETYG",       "4.9", "/ 5"],
              ["PRENUMERANTER","50,000+", ""],
              ["DRIFTTID",    "99.9%", ""],
            ] as [string,string,string][]).map(([lbl, num, sub]) => (
              <div key={lbl} className="ni-hero-stat">
                <div className="ni-hero-stat-lbl">{lbl}</div>
                <div className="ni-hero-stat-num">
                  {num}<span className="ni-hero-stat-sub">{sub}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* scroll indicator */}
      <div className="ni-hero-scroll">
        <svg width="28" height="44" viewBox="0 0 28 44" fill="none">
          <rect x="1" y="1" width="26" height="42" rx="13" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
          <rect x="12" y="8" width="4" height="8" rx="2" fill="rgba(255,255,255,0.6)"/>
        </svg>
      </div>

      {/* covers video watermark — radial fade from bottom-right corner */}
      <div style={{ position: "absolute", bottom: 0, right: 0, width: 1100, height: 500, background: "radial-gradient(ellipse 100% 100% at 100% 100%, #04050a 0%, rgba(4,5,10,0.9) 25%, rgba(4,5,10,0.6) 50%, rgba(4,5,10,0.2) 72%, transparent 100%)", zIndex: 5, pointerEvents: "none" }} />
    </section>
  );
}

function ContentShowcase() {
  const raw = CONTENT_ITEMS[CONTENT_TABS[0]] || [];
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const stackItems: CardStackItem[] = raw.map(item => ({
    id: item.id,
    title: item.title,
    description: item.year,
    imageSrc: item.img,
    tag: item.rating,
  }));

  const cardW = isMobile ? 160 : 300;
  const cardH = isMobile ? 240 : 450;

  return (
    <section className="ni-showcase" style={{ overflow: "hidden" }}>
      <div className="ni-container">
        <div style={{ textAlign: "center", marginBottom: 8 }}><span className="ni-tag ni-tag-cyan">▶ Innehållsbibliotek</span></div>
        <h2 className="ni-section-title">Oändligt underhållning</h2>
        <p className="ni-section-sub">Filmer, serier, sport och nyheter — allt på ett ställe</p>
      </div>
      {/* card stack breaks out of container so cards bleed to edges like a cinema marquee */}
      <div style={{ width: "100%", overflow: "visible" }}>
        <CardStack
          items={stackItems}
          cardWidth={cardW}
          cardHeight={cardH}
          spreadDeg={isMobile ? 28 : 42}
          overlap={isMobile ? 0.48 : 0.52}
          maxVisible={isMobile ? 5 : 7}
          depthPx={isMobile ? 50 : 100}
          tiltXDeg={10}
          activeLiftPx={30}
          activeScale={1.05}
          inactiveScale={0.87}
          autoAdvance={true}
          intervalMs={3200}
          pauseOnHover={true}
          springStiffness={260}
          springDamping={26}
        />
      </div>
    </section>
  );
}

function Countdown() {
  const [time, setTime] = useState({ d: 0, h: 2, m: 47, s: 50 });
  useEffect(() => {
    const iv = setInterval(() => {
      setTime(t => {
        let { d, h, m, s } = t;
        s--; if (s < 0) { s = 59; m--; } if (m < 0) { m = 59; h--; } if (h < 0) { h = 23; d--; } if (d < 0) { d = 0; h = 0; m = 0; s = 0; }
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(iv);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  const blocks = [{ val: time.d, label: "Dagar" }, { val: time.h, label: "Timmar" }, { val: time.m, label: "Minuter" }, { val: time.s, label: "Sekunder" }];
  return (
    <div className="ni-countdown-wrap">
      <div className="ni-cd-container">
        <div className="ni-cd-header">
          <div className="ni-cd-pulse" />
          <span className="ni-cd-header-text">Erbjudandet upphör om — säkra ditt pris nu</span>
          <div className="ni-cd-pulse" />
        </div>
        <div className="ni-cd-blocks">
          {blocks.map((b, i) => (
            <div key={i} style={{ display: "contents" }}>
              {i > 0 && <div className="ni-cd-sep-block">:</div>}
              <div className="ni-cd-block">
                <div className="ni-cd-digit-pair">{pad(b.val)}</div>
                <div className="ni-cd-label">{b.label}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="ni-cd-footer">
          <div className="ni-cd-spots">🔥 Endast <strong>23</strong> platser kvar till detta pris</div>
          <div className="ni-cd-progress-bar"><div className="ni-cd-progress-fill" /></div>
          <div style={{ fontSize: 12, color: "#7a90a8", whiteSpace: "nowrap" }}>77% redan tagna</div>
        </div>
      </div>
    </div>
  );
}

function Pricing() {
  const plans = [
    {
      period: "1 månad",
      price: "199",
      old: null,
      billing: "Faktureras månadsvis",
      featured: false,
    },
    {
      period: "3 månader",
      price: "349",
      old: "597",
      billing: "Faktureras var 3:e månad",
      featured: false,
    },
    {
      period: "12 månader",
      price: "599",
      old: "2 388",
      billing: "Faktureras årsvis",
      featured: true,
    },
  ];
  return (
    <>
      <section id="pricing" className="ni-pricing-section">
        <div className="ni-container">
          {/* Two-column header */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 32 }}>
            <div>
              <span className="ni-tag ni-tag-cyan" style={{ fontSize: 11, letterSpacing: ".14em", marginBottom: 12, display: "inline-block" }}>
                IPTV NORDIC PRISSÄTTNING
              </span>
              <h2 className="ni-section-title" style={{ marginBottom: 8, textAlign: "left" }}>
                Välj din plan
              </h2>
              <p style={{ fontSize: 15, color: "#7a90a8", maxWidth: 420 }}>
                Inga bindningstider. Omedelbar aktivering. Avboka när du vill.
              </p>
            </div>
            <div style={{
              background: "linear-gradient(135deg,rgba(255,107,53,0.12),rgba(255,107,53,0.06))",
              border: "1px solid rgba(255,107,53,0.25)",
              borderRadius: 12,
              padding: "14px 20px",
              textAlign: "right",
              flexShrink: 0,
            }}>
              <div style={{ fontSize: 12, color: "#ff6b35", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 4 }}>
                🔥 Bästa erbjudande
              </div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#f0f6ff" }}>Spara upp till 75%</div>
              <div style={{ fontSize: 13, color: "#7a90a8" }}>på årsabonnemang</div>
            </div>
          </div>

          <Countdown />

          {/* Pricing grid */}
          <div className="ni-pricing-grid" style={{ marginTop: 32 }}>
            {plans.map((plan, i) => (
              <div
                key={i}
                style={{
                  background: plan.featured
                    ? "linear-gradient(145deg,rgba(42,16,8,0.6),rgba(20,10,5,0.8))"
                    : "rgba(14,17,24,0.9)",
                  border: plan.featured
                    ? "1px solid #ff6b35"
                    : "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  boxShadow: plan.featured ? "0 0 48px rgba(255,107,53,0.18)" : "none",
                }}
              >
                {/* BÄSTA VÄRDE badge */}
                {plan.featured && (
                  <div style={{
                    position: "absolute",
                    top: -1,
                    right: 20,
                    background: "linear-gradient(135deg,#ff6b35,#ff8c42)",
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    padding: "5px 12px",
                    borderRadius: "0 0 8px 8px",
                  }}>
                    BÄSTA VÄRDE
                  </div>
                )}

                {/* Period label */}
                <div style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "#ff6b35",
                  marginBottom: 16,
                }}>
                  {plan.period}
                </div>

                {/* Price row */}
                <div style={{ display: "flex", alignItems: "flex-end", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 52, fontWeight: 900, color: "#f0f6ff", lineHeight: 1 }}>
                    {plan.price}
                  </span>
                  <span style={{ fontSize: 18, fontWeight: 600, color: "#7a90a8", paddingBottom: 8 }}>kr</span>
                  {plan.old && (
                    <span style={{ fontSize: 16, color: "#4a5568", textDecoration: "line-through", paddingBottom: 6, marginLeft: 4 }}>
                      {plan.old} kr
                    </span>
                  )}
                </div>

                {/* Billing text */}
                <div style={{ fontSize: 13, color: "#7a90a8", marginBottom: 24 }}>
                  {plan.billing}
                </div>

                {/* Feature list */}
                <ul style={{ listStyle: "none", margin: "0 0 auto", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {FEATURES_LIST.map((f, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <CheckCircle2
                        style={{ width: 16, height: 16, color: "#ff6b35", marginTop: 2, flexShrink: 0 }}
                        aria-hidden="true"
                      />
                      <span style={{ fontSize: 14, color: "#b8cad8" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom CTA area */}
                <div style={{ marginTop: 28 }}>
                  <a
                    href="https://wa.me/212651356639"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "13px 0",
                      borderRadius: 10,
                      textAlign: "center",
                      fontWeight: 700,
                      fontSize: 15,
                      letterSpacing: ".04em",
                      textDecoration: "none",
                      transition: "all .18s",
                      ...(plan.featured
                        ? {
                            background: "linear-gradient(135deg,#ff6b35,#ff8c42)",
                            color: "#fff",
                            boxShadow: "0 8px 24px rgba(255,107,53,0.35)",
                            border: "none",
                          }
                        : {
                            background: "transparent",
                            color: "#f0f6ff",
                            border: "1.5px solid rgba(255,255,255,0.25)",
                          }),
                    }}
                  >
                    Betala med kort
                  </a>

                  <a
                    href="https://wa.me/212651356639"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 7,
                      marginTop: 12,
                      fontSize: 13,
                      color: "#7a90a8",
                      textDecoration: "none",
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Beställ via WhatsApp
                  </a>

                  <div style={{ textAlign: "center", marginTop: 14, fontSize: 12, color: "#4a5568" }}>
                    🔒 7-dagars pengarna-tillbaka-garanti
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: "#7a90a8" }}>
            Alla planer inkluderar omedelbar aktivering • Inga dolda avgifter • Avboka när som helst
          </p>
        </div>
      </section>

      <div className="ni-sep-animated" aria-hidden="true" />

      <section className="ni-multi-section">
        <div className="ni-container">
          <div className="ni-multi-intro">
            <h3>Titta på fler skärmar samtidigt?</h3>
            <p>Slipp avbrott från någon annan till titta. Välj ett paket med 2, 3 eller 4 anslutningar och få maximal frihet till en bråkdel av kostnaden</p>
          </div>
          <div className="ni-multi-grid">
            {MULTI_PLANS.map((p, i) => (
              <div key={i} className="ni-multi-card">
                <div className="ni-multi-label">{p.label}</div>
                <div className="ni-multi-price">kr{p.price}</div>
                <div className="ni-multi-price-sub"><s>{p.old}</s>, spara {p.save}</div>
                <ul className="ni-multi-features">
                  {[`${p.devices} enheter`, "Omedelbar aktivering", "Anonym Betalning", "68 400+ filmer och serier", "17 200+ VOD", "22 500+ kanaler", "4K / Ultra HD-kvalitet"].map((f, j) => (
                    <li key={j}><span style={{ color: "#00e676", fontSize: 13 }}>✓</span>{f}</li>
                  ))}
                </ul>
                <a href="https://wa.me/212651356639" target="_blank" rel="noopener noreferrer" className="ni-multi-btn">Välj plan →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ni-sep-animated" aria-hidden="true" />
    </>
  );
}

// ── Comparison card subcomponents (features-10 style) ──────────────────────

interface CompareCardProps { children: React.ReactNode; className?: string; accentColor?: string; style?: React.CSSProperties; }
const CompareCard = ({ children, className = "", accentColor = "#ff6b35", style }: CompareCardProps) => (
  <div
    className={`group relative overflow-hidden ${className}`}
    style={{
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 0,
      background: "rgba(10,13,20,0.9)",
      backdropFilter: "blur(12px)",
      ...style,
    }}
  >
    {/* Corner decorators */}
    <span style={{ position: "absolute", top: -1, left: -1, width: 10, height: 10, borderTop: `2px solid ${accentColor}`, borderLeft: `2px solid ${accentColor}`, zIndex: 10 }} />
    <span style={{ position: "absolute", top: -1, right: -1, width: 10, height: 10, borderTop: `2px solid ${accentColor}`, borderRight: `2px solid ${accentColor}`, zIndex: 10 }} />
    <span style={{ position: "absolute", bottom: -1, left: -1, width: 10, height: 10, borderBottom: `2px solid ${accentColor}`, borderLeft: `2px solid ${accentColor}`, zIndex: 10 }} />
    <span style={{ position: "absolute", bottom: -1, right: -1, width: 10, height: 10, borderBottom: `2px solid ${accentColor}`, borderRight: `2px solid ${accentColor}`, zIndex: 10 }} />
    {children}
  </div>
);

function Comparison() {
  const cableItems = [
    { name: "Netflix", price: "179 kr/mån" },
    { name: "Disney+", price: "139 kr/mån" },
    { name: "HBO Max", price: "149 kr/mån" },
    { name: "Sportpaket", price: "399 kr/mån" },
    { name: "PPV-evenemang (årsvis)", price: "2 000 kr+" },
  ];
  const iptvItems = [
    { name: "Allt streaminginnehåll", val: "Ingår" },
    { name: "All live-sport", val: "Ingår" },
    { name: "Alla PPV-evenemang", val: "0 kr Extra" },
    { name: "35 000+ kanaler", val: "Ingår" },
    { name: "4K-kvalitet", val: "Ingår" },
  ];

  return (
    <section
      className="ni-compare-section"
      style={{
        background: "#03060d",
        backgroundImage: "radial-gradient(rgba(0,212,255,0.05) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Vignette overlay */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 70% at 50% 50%,transparent 30%,rgba(3,6,13,0.9) 80%)", pointerEvents: "none", zIndex: 0 }} />

      <div className="ni-container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <span className="ni-tag ni-tag-green">⚡ Spara Tusentals Kronor Varje År</span>
        </div>
        <h2 className="ni-section-title" style={{ marginBottom: 14 }}>
          Sluta Överbetala för Kabel-TV.<br />
          <span style={{ color: "#ff6b35" }}>Byt till Premium IPTV.</span>
        </h2>
        <p className="ni-section-sub">
          Varför slösa pengar? Få omedelbar tillgång till 35 000+ livekanaler och 50 000+ filmer och serier i fantastisk 4K. Inga kontrakt, inga dolda avgifter — bara ren underhållning.
        </p>

        {/* 2-col card grid */}
        <div className="ni-compare-grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, marginBottom: 0, border: "1px solid rgba(255,255,255,0.07)" }}>

          {/* Cable TV card */}
          <CompareCard accentColor="#ff3d57" className="ni-compare-cable" style={{ borderRight: "1px solid rgba(255,255,255,0.07)" } as React.CSSProperties}>
            {/* Subtle red radial at top */}
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 40% at 50% 0%,rgba(255,61,87,0.06),transparent 60%)", pointerEvents: "none" }} />
            <div style={{ padding: "28px 28px 0", position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
                <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#ff3d57", boxShadow: "0 0 8px #ff3d57" }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: "#7a90a8", letterSpacing: ".1em", textTransform: "uppercase" }}>Traditionell Kabel-TV</span>
              </div>
              {cableItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "13px 0",
                    borderBottom: i < cableItems.length - 1 ? "1px dashed rgba(255,255,255,0.06)" : "none",
                  }}
                >
                  <span style={{ fontSize: 15, color: "#b8cad8" }}>{item.name}</span>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#f0f6ff" }}>{item.price}</span>
                </div>
              ))}
            </div>
            {/* Cost footer */}
            <div style={{ margin: 20, padding: "20px 24px", background: "rgba(255,61,87,0.06)", border: "1px solid rgba(255,61,87,0.14)", position: "relative" }}>
              <span style={{ position: "absolute", top: -1, left: -1, width: 8, height: 8, borderTop: "2px solid #ff3d57", borderLeft: "2px solid #ff3d57" }} />
              <span style={{ position: "absolute", top: -1, right: -1, width: 8, height: 8, borderTop: "2px solid #ff3d57", borderRight: "2px solid #ff3d57" }} />
              <span style={{ position: "absolute", bottom: -1, left: -1, width: 8, height: 8, borderBottom: "2px solid #ff3d57", borderLeft: "2px solid #ff3d57" }} />
              <span style={{ position: "absolute", bottom: -1, right: -1, width: 8, height: 8, borderBottom: "2px solid #ff3d57", borderRight: "2px solid #ff3d57" }} />
              <div style={{ fontSize: 11, color: "#7a90a8", marginBottom: 8, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 700 }}>Årskostnad</div>
              <div style={{ fontSize: 44, fontWeight: 900, color: "#ff3d57", lineHeight: 1 }}>14 400 kr+</div>
            </div>
          </CompareCard>

          {/* Nordic IPTV card */}
          <CompareCard accentColor="#00e676">
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 40% at 50% 0%,rgba(0,230,118,0.07),transparent 60%)", pointerEvents: "none" }} />
            <div style={{ padding: "28px 28px 0", position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
                <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#00e676", boxShadow: "0 0 8px #00e676" }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: "#7a90a8", letterSpacing: ".1em", textTransform: "uppercase" }}>Nordic IPTV</span>
              </div>
              {iptvItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "13px 0",
                    borderBottom: i < iptvItems.length - 1 ? "1px dashed rgba(0,230,118,0.1)" : "none",
                  }}
                >
                  <span style={{ fontSize: 15, color: "#b8cad8" }}>{item.name}</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#00e676" }}>{item.val}</span>
                </div>
              ))}
            </div>
            {/* Cost footer */}
            <div style={{ margin: 20, padding: "20px 24px", background: "rgba(0,230,118,0.06)", border: "1px solid rgba(0,230,118,0.18)", position: "relative" }}>
              <span style={{ position: "absolute", top: -1, left: -1, width: 8, height: 8, borderTop: "2px solid #00e676", borderLeft: "2px solid #00e676" }} />
              <span style={{ position: "absolute", top: -1, right: -1, width: 8, height: 8, borderTop: "2px solid #00e676", borderRight: "2px solid #00e676" }} />
              <span style={{ position: "absolute", bottom: -1, left: -1, width: 8, height: 8, borderBottom: "2px solid #00e676", borderLeft: "2px solid #00e676" }} />
              <span style={{ position: "absolute", bottom: -1, right: -1, width: 8, height: 8, borderBottom: "2px solid #00e676", borderRight: "2px solid #00e676" }} />
              <div style={{ fontSize: 11, color: "#7a90a8", marginBottom: 8, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 700 }}>Nordic IPTV Årskostnad</div>
              <div style={{ fontSize: 44, fontWeight: 900, color: "#00e676", lineHeight: 1 }}>599 kr</div>
              <div style={{ fontSize: 13, color: "#7a90a8", marginTop: 6 }}>Bara ~50 kr/månad</div>
            </div>
          </CompareCard>
        </div>

        {/* Savings banner — full-width card */}
        <CompareCard accentColor="#ff6b35" className="mt-0">
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 50% 50%,rgba(255,107,53,0.05),transparent 70%)", pointerEvents: "none" }} />
          {/* Animated top line */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(255,107,53,0.6),rgba(0,230,118,0.6),transparent)", backgroundSize: "200% 100%", animation: "ni-line-travel 4s linear infinite" }} />
          <div style={{ padding: "36px 32px", textAlign: "center", position: "relative" }}>
            <div style={{ fontSize: 11, color: "#7a90a8", marginBottom: 10, letterSpacing: ".12em", textTransform: "uppercase", fontWeight: 700 }}>Dina Årliga Besparingar</div>
            <div style={{ fontSize: "clamp(48px,7vw,72px)", fontWeight: 900, background: "linear-gradient(90deg,#ff6b35 0%,#ffd700 50%,#00e676 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1, marginBottom: 12 }}>
              13 800 kr+
            </div>
            <div style={{ fontSize: 14, color: "#7a90a8", marginBottom: 24 }}>Byt idag och håll mer pengar i fickan</div>
            <a
              href="#trial"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 32px", borderRadius: 0,
                background: "linear-gradient(135deg,#ff6b35,#ff8c42)",
                color: "#fff", fontSize: 14, fontWeight: 800,
                letterSpacing: ".08em", textTransform: "uppercase",
                textDecoration: "none",
                boxShadow: "0 8px 28px rgba(255,107,53,0.35)",
                position: "relative",
              }}
            >
              <span style={{ position: "absolute", top: -1, left: -1, width: 8, height: 8, borderTop: "2px solid rgba(255,255,255,0.5)", borderLeft: "2px solid rgba(255,255,255,0.5)" }} />
              <span style={{ position: "absolute", top: -1, right: -1, width: 8, height: 8, borderTop: "2px solid rgba(255,255,255,0.5)", borderRight: "2px solid rgba(255,255,255,0.5)" }} />
              <span style={{ position: "absolute", bottom: -1, left: -1, width: 8, height: 8, borderBottom: "2px solid rgba(255,255,255,0.5)", borderLeft: "2px solid rgba(255,255,255,0.5)" }} />
              <span style={{ position: "absolute", bottom: -1, right: -1, width: 8, height: 8, borderBottom: "2px solid rgba(255,255,255,0.5)", borderRight: "2px solid rgba(255,255,255,0.5)" }} />
              Börja Spara Nu →
            </a>
          </div>
        </CompareCard>

        {/* Platform logos */}
        <div style={{ display: "flex", gap: 0, justifyContent: "center", flexWrap: "wrap", marginTop: 48 }}>
          {["macOS","Android","Roku","SAMSUNG","LG","Fire TV","Smart TV","Apple TV"].map((p, i) => (
            <div
              key={i}
              style={{
                width: 96, height: 72,
                border: "1px solid rgba(255,255,255,0.06)",
                marginLeft: i > 0 ? -1 : 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", cursor: "default",
              }}
            >
              {/* corner dots */}
              {i === 0 && <><span style={{ position: "absolute", top: -1, left: -1, width: 6, height: 6, borderTop: "2px solid #ff6b35", borderLeft: "2px solid #ff6b35" }} /><span style={{ position: "absolute", bottom: -1, left: -1, width: 6, height: 6, borderBottom: "2px solid #ff6b35", borderLeft: "2px solid #ff6b35" }} /></>}
              {i === 7 && <><span style={{ position: "absolute", top: -1, right: -1, width: 6, height: 6, borderTop: "2px solid #ff6b35", borderRight: "2px solid #ff6b35" }} /><span style={{ position: "absolute", bottom: -1, right: -1, width: 6, height: 6, borderBottom: "2px solid #ff6b35", borderRight: "2px solid #ff6b35" }} /></>}
              <span style={{ fontSize: 11, fontWeight: 700, color: "#f0f6ff", textAlign: "center", letterSpacing: ".04em" }}>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const WA_SLIDES = [
  {
    img: "/whatsapp/conversation_1.webp",
    badge: "TV + iPad aktiverade",
    quote: "\"Nu fungerar allt perfekt 🔥\"",
  },
  {
    img: "/whatsapp/conversation_2.webp",
    badge: "Nöjd återkommande kund",
    quote: "\"Hej det funkar bra med det nya abonnemanget 👍🤩\"",
  },
  {
    img: "/whatsapp/conversation_3.webp",
    badge: "Vill ha nytt konto",
    quote: "\"Allt fungerar toppen, återkommer angående ett nytt konto 👍\"",
  },
  {
    img: "/whatsapp/conversation_4.webp",
    badge: "4K Ultra HD aktiverad",
    quote: "\"Nu har jag betalat 🤩\" – aktiverad direkt",
  },
  {
    img: "/whatsapp/conversation_5.webp",
    badge: "Snabb aktivering",
    quote: "\"Tack för hjälpen, fungerar direkt 🙌\"",
  },
  {
    img: "/whatsapp/conversation_6.webp",
    badge: "Familjepaket",
    quote: "\"Perfekt, hela familjen kan titta nu 📺\"",
  },
  {
    img: "/whatsapp/conversation_7.webp",
    badge: "Sport-paketet",
    quote: "\"Allsvenskan och Champions League – allt ingår 🏆\"",
  },
  {
    img: "/whatsapp/conversation_8.webp",
    badge: "Förnyad prenumeration",
    quote: "\"Förnyat igen, bästa tjänsten på marknaden 🔥\"",
  },
];

const WA_ICON = (size = 14) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

function WaCard({ slide }: { slide: typeof WA_SLIDES[0] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{
        position: "relative", borderRadius: 18,
        border: "1px solid rgba(255,255,255,0.09)",
        overflow: "hidden", background: "#111b21",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
      }}>
        <div style={{
          position: "absolute", top: 10, left: 10, zIndex: 5,
          background: "rgba(37,211,102,0.92)", backdropFilter: "blur(8px)",
          borderRadius: 20, padding: "4px 11px",
          fontSize: 11, fontWeight: 700, color: "#fff", letterSpacing: ".03em",
        }}>{slide.badge}</div>
        <Image src={slide.img} alt={slide.badge} width={360} height={640} sizes="(max-width: 768px) 100vw, 360px"
          style={{ width: "100%", height: "auto", display: "block", aspectRatio: "9/16", objectFit: "cover" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 70, background: "linear-gradient(to top, rgba(17,27,33,0.95), transparent)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 10, left: 12, display: "flex", alignItems: "center", gap: 6 }}>
          {WA_ICON(14)}
          <span style={{ fontSize: 10, color: "#25D366", fontWeight: 600 }}>WhatsApp</span>
        </div>
      </div>
      <p style={{ fontSize: 13, color: "#7a90a8", lineHeight: 1.55, textAlign: "center", fontStyle: "italic", margin: 0 }}>
        {slide.quote}
      </p>
    </div>
  );
}

function WhatsAppReviews() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [hovering, setHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const total = WA_SLIDES.length;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const go = useCallback((newIdx: number, direction: number) => {
    setDir(direction);
    setIdx(((newIdx % total) + total) % total);
  }, [total]);

  useEffect(() => {
    if (hovering) return;
    const id = setInterval(() => go(idx + 1, 1), 3400);
    return () => clearInterval(id);
  }, [hovering, idx, go]);

  const perPage = isMobile ? 1 : 3;
  const slides = Array.from({ length: perPage }, (_, i) => ({
    data: WA_SLIDES[(idx + i) % total],
    key: (idx + i) % total,
  }));

  const current = WA_SLIDES[idx];

  const overlayArrow = (side: "left" | "right"): React.CSSProperties => ({
    position: "absolute",
    [side]: 14,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 20,
    width: 48,
    height: 48,
    borderRadius: "50%",
    background: "rgba(0,0,0,0.55)",
    border: "1.5px solid rgba(255,255,255,0.22)",
    color: "#fff",
    fontSize: 26,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    transition: ".2s",
  });

  return (
    <section style={{ background: "#03060d", padding: "80px 0 60px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(0,212,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
      <div className="ni-container" style={{ position: "relative" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 12 }}>
          <span className="ni-tag ni-tag-green" style={{ gap: 6 }}>
            {WA_ICON(13)}
            RIKTIGA IPTV-AKTIVERINGAR PÅ WHATSAPP
          </span>
        </div>
        <h2 className="ni-section-title" style={{ marginBottom: 12 }}>
          Verifierade IPTV-aktiveringar från<br />riktiga svenska prenumeranter
        </h2>
        <p style={{ textAlign: "center", color: "#7a90a8", fontSize: 14, lineHeight: 1.75, maxWidth: 620, margin: "0 auto 40px" }}>
          Oredigerade WhatsApp-skärmdumpar från våra kunder i Sverige. Namn är förkortade av integritetsskäl.{" "}
          Genomsnittlig svarstid: <strong style={{ color: "#f0f6ff" }}>under 4 minuter</strong>. Genomsnittlig aktivering efter betalning:{" "}
          <strong style={{ color: "#f0f6ff" }}>under 2 minuter</strong>.
        </p>
      </div>

      {/* ── MOBILE: contained card with side arrows ── */}
      {isMobile ? (
        <div
          className="ni-container"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {/* Row: left arrow · card · right arrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>

            {/* Left arrow */}
            <button
              onClick={() => go(idx - 1, -1)}
              aria-label="Föregående"
              style={{
                flexShrink: 0, width: 44, height: 44, borderRadius: "50%",
                background: "rgba(20,25,35,0.9)", border: "1.5px solid rgba(255,255,255,0.18)",
                color: "#fff", fontSize: 24, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >‹</button>

            {/* Card */}
            <div style={{ flex: 1, position: "relative", borderRadius: 16, overflow: "hidden", background: "#111b21", boxShadow: "0 12px 40px rgba(0,0,0,0.6)" }}>
              <div
                key={`${idx}-${dir}`}
                style={{ animation: `${dir >= 0 ? "waSlideIn" : "waSlideInLeft"} 0.38s ease both` }}
              >
                <Image
                  src={current.img}
                  alt={current.badge}
                  width={420}
                  height={747}
                  sizes="(max-width: 768px) 100vw, 420px"
                  style={{ width: "100%", height: "auto", display: "block", aspectRatio: "9/16", objectFit: "cover" }}
                />
              </div>

              {/* Badge */}
              <div style={{
                position: "absolute", top: 10, left: 10, zIndex: 10,
                background: "rgba(37,211,102,0.93)", backdropFilter: "blur(8px)",
                borderRadius: 20, padding: "4px 12px",
                fontSize: 11, fontWeight: 700, color: "#fff",
              }}>{current.badge}</div>

              {/* Bottom gradient + WhatsApp label */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 64, background: "linear-gradient(to top, rgba(17,27,33,0.96), transparent)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: 10, left: 12, display: "flex", alignItems: "center", gap: 5 }}>
                {WA_ICON(13)}
                <span style={{ fontSize: 10, color: "#25D366", fontWeight: 700 }}>WhatsApp</span>
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={() => go(idx + 1, 1)}
              aria-label="Nästa"
              style={{
                flexShrink: 0, width: 44, height: 44, borderRadius: "50%",
                background: "rgba(20,25,35,0.9)", border: "1.5px solid rgba(255,255,255,0.18)",
                color: "#fff", fontSize: 24, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >›</button>
          </div>

          {/* Quote */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "14px 4px 4px" }}>
            {WA_ICON(16)}
            <p style={{ margin: 0, fontSize: 13, color: "#c8d8e4", lineHeight: 1.55, fontStyle: "italic" }}>
              {current.quote}
            </p>
          </div>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 7, marginTop: 16, marginBottom: 16 }}>
            {WA_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i, i > idx ? 1 : -1)}
                style={{
                  width: i === idx ? 24 : 8, height: 8, borderRadius: 4,
                  background: i === idx ? "#25D366" : "rgba(255,255,255,0.18)",
                  border: "none", cursor: "pointer", padding: 0, transition: "all .25s",
                }}
              />
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div style={{ display: "flex", justifyContent: "flex-end", paddingBottom: 8 }}>
            <a
              href="https://wa.me/212651356639"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 10,
                background: "#25D366", color: "#fff",
                borderRadius: 32, padding: "12px 18px",
                fontWeight: 700, textDecoration: "none",
                boxShadow: "0 6px 24px rgba(37,211,102,0.4)",
              }}
            >
              {WA_ICON(20)}
              <span>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".03em" }}>Prova Gratis</div>
                <div style={{ fontSize: 11, fontWeight: 500, opacity: 0.9 }}>Chatta på WhatsApp</div>
              </span>
            </a>
          </div>
        </div>
      ) : (
        /* ── DESKTOP: 3-column animated grid ── */
        <div className="ni-container" style={{ position: "relative" }}>
          <div
            style={{ position: "relative", display: "flex", alignItems: "center", gap: 12 }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <button
              onClick={() => go(idx - 1, -1)}
              aria-label="Föregående"
              style={{
                width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
                background: "rgba(14,17,28,0.95)", border: "1px solid rgba(255,255,255,0.12)",
                color: "#f0f6ff", fontSize: 22, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", transition: ".2s",
              }}
            >‹</button>

            <div
              key={`${idx}-${dir}`}
              style={{
                flex: 1, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16,
                animation: `${dir >= 0 ? "waSlideIn" : "waSlideInLeft"} 0.42s ease both`,
              }}
            >
              {slides.map(({ data, key }) => <WaCard key={key} slide={data} />)}
            </div>

            <button
              onClick={() => go(idx + 1, 1)}
              aria-label="Nästa"
              style={{
                width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
                background: "rgba(14,17,28,0.95)", border: "1px solid rgba(255,255,255,0.12)",
                color: "#f0f6ff", fontSize: 22, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", transition: ".2s",
              }}
            >›</button>
          </div>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 7, marginTop: 24 }}>
            {WA_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i, i > idx ? 1 : -1)}
                style={{
                  width: i === idx ? 24 : 8, height: 8, borderRadius: 4,
                  background: i === idx ? "#25D366" : "rgba(255,255,255,0.18)",
                  border: "none", cursor: "pointer", padding: 0, transition: "all .25s",
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Stats bar — always shown */}
      <div className="ni-container" style={{ position: "relative", marginTop: 44 }}>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3,1fr)",
          gap: 0, border: "1px solid rgba(255,255,255,0.07)", position: "relative",
        }}>
          <span style={{ position: "absolute", top: -1, left: -1, width: 10, height: 10, borderTop: "2px solid #25D366", borderLeft: "2px solid #25D366" }} />
          <span style={{ position: "absolute", top: -1, right: -1, width: 10, height: 10, borderTop: "2px solid #25D366", borderRight: "2px solid #25D366" }} />
          <span style={{ position: "absolute", bottom: -1, left: -1, width: 10, height: 10, borderBottom: "2px solid #25D366", borderLeft: "2px solid #25D366" }} />
          <span style={{ position: "absolute", bottom: -1, right: -1, width: 10, height: 10, borderBottom: "2px solid #25D366", borderRight: "2px solid #25D366" }} />
          {[
            { val: "40 000+", label: "Nöjda prenumeranter i Sverige", color: "#ff6b35" },
            { val: "< 4 min", label: "Genomsnittlig svarstid på WhatsApp", color: "#00e676" },
            { val: "< 2 min", label: "Aktiveringstid efter betalning", color: "#00e676" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "28px 20px", textAlign: "center", borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
              <div style={{ fontSize: "clamp(22px,4vw,42px)", fontWeight: 900, color: s.color, lineHeight: 1, marginBottom: 8 }}>{s.val}</div>
              <div style={{ fontSize: 13, color: "#7a90a8" }}>{s.label}</div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: 20, fontSize: 12, color: "#4a5568" }}>
          Varje skärmdump är en riktig WhatsApp-konversation med svenska IPTV-kunder, återgiven med tillstånd.{" "}
          <a href="#pricing" style={{ color: "#25D366", textDecoration: "underline" }}>Starta gratis provperiod →</a>
        </p>
      </div>
    </section>
  );
}

function Ecosystem() {
  // Canvas dimensions — nodes are placed on a symmetric ellipse (rx=240, ry=190)
  // centred at (550, 260). Clock positions: left arc = devices, right arc = content,
  // top pair = features, bottom pair = features.
  const W = 1100, H = 520, cx = W / 2, cy = H / 2;

  const nodes = [
    // ── Left arc: devices (10 o'clock → 7 o'clock) ──────────────────────
    { id: "tv",    x: 108, y:  95, label: "Smart TV",         type: "device",  Icon: Tv },
    { id: "mob",   x:  82, y: 260, label: "Mobil & iPad",     type: "device",  Icon: Smartphone },
    { id: "pc",    x: 108, y: 425, label: "PC & Mac",         type: "device",  Icon: Laptop },
    { id: "fire",  x: 258, y: 492, label: "Fire TV",          type: "device",  Icon: Flame },
    // ── Top pair: features ───────────────────────────────────────────────
    { id: "epg",   x: 378, y:  28, label: "EPG Guide",        type: "feature", Icon: CalendarDays },
    { id: "cu",    x: 722, y:  28, label: "Catch-up TV",      type: "feature", Icon: Rewind },
    // ── Right arc: content (2 o'clock → 5 o'clock) ──────────────────────
    { id: "ch",    x: 992, y:  95, label: "35,000+ Kanaler",  type: "content", Icon: Radio },
    { id: "sport", x:1018, y: 260, label: "Sport Live",       type: "content", Icon: Globe },
    { id: "film",  x: 992, y: 425, label: "Film 4K UHD",      type: "content", Icon: Film },
    { id: "sv",    x: 842, y: 492, label: "Svenska Kanaler",  type: "content", Icon: Flag },
    // ── Bottom pair: features ────────────────────────────────────────────
    { id: "sup",   x: 418, y: 492, label: "24/7 Support",     type: "feature", Icon: MessageCircle },
    { id: "sec",   x: 672, y: 492, label: "Säker Streaming",  type: "feature", Icon: ShieldCheck },
  ];

  const paths = nodes.map((n, i) => ({ from: { x: n.x, y: n.y }, to: { x: cx, y: cy }, id: n.id, delay: i * 0.15 }));

  useEffect(() => {
    const lines = paths.map((p, i) => {
      const len = Math.hypot(p.to.x - p.from.x, p.to.y - p.from.y);
      return `@keyframes fl${i}{from{stroke-dashoffset:${len}}to{stroke-dashoffset:${-len}}}`;
    });
    const el = document.createElement("style");
    el.id = "eco-kf";
    el.textContent = lines.join(" ");
    document.head.appendChild(el);
    return () => { const e = document.getElementById("eco-kf"); if (e) e.remove(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tClass: Record<string, string> = { device: "ni-eco-pill-device", content: "ni-eco-pill-content", feature: "ni-eco-pill-feature" };
  const dClass: Record<string, string>  = { device: "ni-dot-cyan", content: "ni-dot-orange", feature: "ni-dot-green" };
  const lineColor = (id: string) => id.match(/tv|mob|pc|fire/) ? "#00d4ff" : id.match(/epg|cu|sup|sec/) ? "#00e676" : "#ff6b35";
  const lineBg    = (id: string) => id.match(/tv|mob|pc|fire/) ? "rgba(0,212,255,0.1)" : id.match(/epg|cu|sup|sec/) ? "rgba(0,230,118,0.08)" : "rgba(255,107,53,0.1)";

  return (
    <section className="ni-ecosystem-section">
      <div className="ni-container">
        <div className="ni-eco-text">
          <span className="ni-tag ni-tag-cyan" style={{ marginBottom: 16 }}>⚡ Ekosystem</span>
          <h2><strong>Allt kopplat.</strong> <span style={{ color: "#7a90a8", fontWeight: 400, fontSize: "0.85em" }}>Streama till alla enheter via en enda tjänst.</span></h2>
          <p>Nordic IPTV kopplar ihop dina enheter med tusentals kanaler, live-sport, filmer och mer — med noll buffring och maximalt skydd.</p>
        </div>

        <div className="ni-eco-canvas">
          {/* SVG layer — connection lines + animated particles */}
          <svg className="ni-eco-svg" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
            {/* Static dashed guide lines */}
            {paths.map((p, i) => (
              <line key={`s${i}`} x1={p.from.x} y1={p.from.y} x2={p.to.x} y2={p.to.y}
                stroke={lineBg(p.id)} strokeWidth="1" strokeDasharray="5 7" />
            ))}
            {/* Animated traveling segment */}
            {paths.map((p, i) => {
              const len = Math.hypot(p.to.x - p.from.x, p.to.y - p.from.y);
              const col = lineColor(p.id);
              return (
                <line key={`a${i}`} x1={p.from.x} y1={p.from.y} x2={p.to.x} y2={p.to.y}
                  stroke={col} strokeWidth="1.5" strokeOpacity="0.75"
                  strokeDasharray={`${len * 0.16} ${len * 0.84}`}
                  style={{ strokeDashoffset: len, animation: `fl${i} ${2.8 + i * 0.1}s linear infinite` }} />
              );
            })}
            {/* Traveling dot particles */}
            {paths.map((p, i) => {
              const col = lineColor(p.id);
              return (
                <g key={`f${i}`}>
                  <path id={`pp${i}`} d={`M${p.from.x} ${p.from.y} L${p.to.x} ${p.to.y}`} fill="none" stroke="none" />
                  <circle r="3" fill={col} fillOpacity="0.9">
                    <animateMotion dur={`${2.6 + i * 0.11}s`} repeatCount="indefinite" begin={`${p.delay}s`}>
                      <mpath href={`#pp${i}`} />
                    </animateMotion>
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* Center hub */}
          <div className="ni-eco-node" style={{ left: "50%", top: "50%" }}>
            <div className="ni-eco-hub">
              <div className="ni-eco-hub-ring" />
              <div className="ni-eco-hub-ring2" />
              <div style={{ width: 42, height: 42, marginBottom: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="42" height="42" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="ecoBrandSharp" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ff6b35"/>
                      <stop offset="100%" stopColor="#088fc3"/>
                    </linearGradient>
                    <linearGradient id="ecoBolt" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ff6b35"/>
                      <stop offset="100%" stopColor="#ff8a3d"/>
                    </linearGradient>
                    <filter id="ecoGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="8" result="blur"/>
                      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                  </defs>
                  <g transform="translate(86,40)">
                    <g strokeLinecap="round" fill="none">
                      <path d="M250 60 C 312 100, 348 158, 348 230 C 348 302, 312 360, 250 400" stroke="url(#ecoBrandSharp)" strokeWidth="14" opacity="0.45"/>
                      <path d="M232 92 C 282 124, 312 172, 312 230 C 312 288, 282 336, 232 368" stroke="url(#ecoBrandSharp)" strokeWidth="15" opacity="0.7"/>
                      <path d="M214 124 C 252 148, 274 186, 274 230 C 274 274, 252 312, 214 336" stroke="url(#ecoBrandSharp)" strokeWidth="16"/>
                    </g>
                    <g filter="url(#ecoGlow)">
                      <path d="M120 20 L40 230 L130 230 L80 410 L240 180 L150 180 L210 20 Z" fill="url(#ecoBolt)"/>
                    </g>
                    <path d="M138 60 L78 220 L120 220 L96 320 L186 184 L150 184 L184 60 Z" fill="#ffffff" fillOpacity="0.22"/>
                  </g>
                </svg>
              </div>
              <div className="ni-eco-hub-label">Nordic<br />IPTV</div>
              <div className="ni-eco-hub-sub">Live 24/7</div>
            </div>
          </div>

          {/* Node pills */}
          {nodes.map((n, i) => (
            <div key={i} className="ni-eco-node" style={{ left: `${(n.x / W) * 100}%`, top: `${(n.y / H) * 100}%` }}>
              <div className={cn("ni-eco-pill", tClass[n.type])}>
                <span className={cn("ni-eco-pill-dot", dClass[n.type])} />
                <n.Icon size={13} strokeWidth={2} style={{ flexShrink: 0 }} />
                <span>{n.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="ni-testimonials-section">
      <div className="ni-container">
        <div style={{ textAlign: "center", marginBottom: 8 }}><span className="ni-tag ni-tag-yellow">⭐ Kundrecensioner</span></div>
        <h2 className="ni-section-title">Vad säger våra kunder?</h2>
        <p className="ni-section-sub">Över 250,000 nöjda kunder i Sverige och Norden</p>
        <div className="ni-testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="ni-testimonial-card">
              <div className="ni-t-stars">{"★".repeat(t.stars)}</div>
              <div className="ni-t-text">&ldquo;{t.text}&rdquo;</div>
              <div className="ni-t-author">
                <div className="ni-t-avatar">{t.initial}</div>
                <div>
                  <div className="ni-t-name">{t.name}</div>
                  <div className="ni-t-loc">{t.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="ni-faq-section">
      <div className="ni-container">
        <div style={{ textAlign: "center", marginBottom: 8 }}><span className="ni-tag ni-tag-cyan">❓ FAQ</span></div>
        <h2 className="ni-section-title">Vanliga frågor</h2>
        <p className="ni-section-sub">Hittar du inte svaret? Kontakta vår support 24/7</p>
        <div className="ni-faq-list">
          {FAQS.map((faq, i) => (
            <div key={i} className={cn("ni-faq-item", open === i && "open")} onClick={() => setOpen(open === i ? null : i)}>
              <div className="ni-faq-q">
                <span>{faq.q}</span>
                <div className="ni-faq-icon">{open === i ? "−" : "+"}</div>
              </div>
              <div className="ni-faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section id="trial" className="ni-cta-banner">
      <div className="ni-container">
        <div className="ni-cta-inner">
          <span className="ni-tag ni-tag-green" style={{ marginBottom: 20 }}>🎁 Gratis Provperiod</span>
          <h2 className="ni-cta-title">Prova gratis i <span style={{ color: "#ff6b35" }}>24 timmar</span></h2>
          <p className="ni-cta-sub">Inget kreditkort behövs. Full tillgång till alla kanaler och funktioner. Aktiveras omedelbart.</p>
          <div className="ni-cta-actions">
            <a href="https://wa.me/212651356639" target="_blank" rel="noopener noreferrer" className="ni-btn ni-btn-cyan" style={{ fontSize: 18, padding: "17px 40px" }}>▶ Starta Gratis Test</a>
            <a href="#pricing" className="ni-btn ni-btn-outline" style={{ fontSize: 18, padding: "17px 32px" }}>Se Alla Priser</a>
          </div>
          <div className="ni-cta-note">✓ Inga bindningstider &nbsp;·&nbsp; ✓ Avsluta när som helst &nbsp;·&nbsp; ✓ Säker betalning</div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="ni-footer">
      <div className="ni-container">
        <div className="ni-footer-grid">
          <div>
            <div className="ni-footer-brand"><Image src="/logo.webp" alt="Nordic IPTV Sverige" width={180} height={48} style={{ height: 48, width: "auto", display: "block", marginBottom: 4 }} /></div>
            <div className="ni-footer-tagline">Sveriges ledande IPTV-tjänst med 35,000+ kanaler i 4K UHD-kvalitet. Titta på vad du vill, när du vill, på vilken enhet som helst.</div>
            <div style={{ display: "flex", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
              {["📘 Facebook", "🐦 Twitter", "📸 Instagram", "💬 Telegram"].map(s => (
                <a key={s} href="#" style={{ fontSize: 13, color: "#7a90a8", transition: ".2s" }}>{s}</a>
              ))}
            </div>
            <div className="ni-footer-payments">
              {["Visa", "Mastercard", "Swish", "PayPal", "Crypto"].map(p => (
                <span key={p} className="ni-pay-badge">{p}</span>
              ))}
            </div>
          </div>
          <div>
            <h4>Tjänster</h4>
            <ul className="ni-footer-links">
              {["Alla Kanaler", "Sportpaket", "Filmpaket", "4K UHD", "VOD-bibliotek", "Catch-up TV", "Barn & Familj", "Internationella kanaler"].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Information</h4>
            <ul className="ni-footer-links">
              <li><a href="#pricing">Priser</a></li>
              <li><a href="/installationsguide">Installationsguide</a></li>
              <li><a href="/installationsguide/samsung-smart-tv">Samsung Smart TV</a></li>
              <li><a href="/installationsguide/lg-smart-tv">LG Smart TV</a></li>
              <li><a href="/installationsguide/mag-box">MAG Box</a></li>
              <li><a href="/installationsguide/amazon-fire-tv-stick">Amazon Fire TV Stick</a></li>
              <li><a href="/installationsguide/apple-tv-tvos">Apple TV (tvOS)</a></li>
              <li><a href="/installationsguide/android-tv">Android TV / Box</a></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul className="ni-footer-links">
              {["Hjälpcenter", "Live Chat", "E-post Support", "Telegram Support", "Vanliga Frågor", "Status-sida", "Statusuppdateringar", "Kontakta Oss"].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
            <div style={{ marginTop: 16, padding: "12px 16px", borderRadius: 8, background: "rgba(0,230,118,.08)", border: "1px solid rgba(0,230,118,.15)" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#00e676", letterSpacing: ".08em", marginBottom: 4 }}>SUPPORT ONLINE NU</div>
              <div style={{ fontSize: 13, color: "#7a90a8" }}>Svarstid: &lt;2 min</div>
            </div>
          </div>
        </div>
        <div className="ni-footer-bottom">
          <div className="ni-footer-copy">© 2026 Nordic IPTV Sverige. Alla rättigheter förbehållna.</div>
          <div className="ni-footer-legal">
            <a href="#">Integritetspolicy</a>
            <a href="#">Användarvillkor</a>
            <a href="#">Cookiepolicy</a>
            <a href="#">DMCA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ScrollTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const h = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <div className={cn("ni-scroll-top", visible && "visible")} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</div>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────

const WA_URL = "https://wa.me/212651356639";

function FloatingWhatsApp() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "#25D366",
        color: "#fff",
        borderRadius: 50,
        padding: "12px 18px 12px 14px",
        textDecoration: "none",
        fontFamily: "inherit",
        boxShadow: "0 6px 28px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.3)",
        transition: "transform .2s, box-shadow .2s",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 36px rgba(37,211,102,0.55), 0 4px 12px rgba(0,0,0,0.35)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.3)"; }}
    >
      {WA_ICON(22)}
      <span style={{ lineHeight: 1.2 }}>
        <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".04em", whiteSpace: "nowrap" }}>Prova Gratis</div>
        <div style={{ fontSize: 11, fontWeight: 500, opacity: 0.9, whiteSpace: "nowrap" }}>Chatta på WhatsApp</div>
      </span>
    </a>
  );
}

export default function NordicSite() {
  return (
    <>
      <TopBanner />
      <Nav />
      <Hero />
      <ContentShowcase />
      <Pricing />
      <Comparison />
      <WhatsAppReviews />
      <Ecosystem />
      <Testimonials />
      <CTABanner />
      <FAQ />
      <Footer />
      <ScrollTop />
      <FloatingWhatsApp />
    </>
  );
}
