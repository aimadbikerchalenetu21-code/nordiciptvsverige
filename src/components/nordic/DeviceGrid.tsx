"use client";

import Link from "next/link";
import { GUIDE_DEVICES } from "@/lib/guideDevices";

const DEVICE_DESCRIPTIONS: Record<string, string> = {
  "/installationsguide/tvip-box": "Portal-baserad installation via MAC-adress. Snabb och stabil.",
  "/installationsguide/formuler-mytvonline-2": "Installera via MyTVOnline 2-appen med portal-URL.",
  "/installationsguide/samsung-smart-tv": "Tre metoder: Net Player, IPTV Smarters eller SmartOne IPTV.",
  "/installationsguide/lg-smart-tv": "Installera via Net Player, Smart IPTV eller Filo IPTV på webOS.",
  "/installationsguide/mag-box": "Konfigurera portal-URL via systemmenyn. Alla MAG-modeller stöds.",
  "/installationsguide/enigma2": "AutoScript-installation via SSH/Telnet för Zgemma, VU+, Dreambox.",
  "/installationsguide/android-tv": "IPTV Smarters Pro från Google Play. Fungerar på alla Android TV.",
  "/installationsguide/apple-tv-tvos": "IPTVX-appen från App Store. Stöder alla Apple TV-generationer.",
  "/installationsguide/chromecast": "Google Play Store med Net Player eller IPTV Smarters Pro.",
  "/installationsguide/windows-pc": "IPTV Smarters för Windows eller VLC Media Player.",
  "/installationsguide/mac-macos": "IPTV Smarters för Mac eller VLC Media Player.",
  "/installationsguide/smartphones": "IPTV Smarters Pro för iOS och Android-smartphones.",
  "/installationsguide/amazon-fire-tv-stick": "IPTV Smarters Pro via Amazon Store eller Downloader-appen.",
};

const DEVICE_ICON_BG: Record<string, string> = {
  "/installationsguide/tvip-box": "linear-gradient(135deg, #1a3a5c 0%, #0d2137 100%)",
  "/installationsguide/formuler-mytvonline-2": "linear-gradient(135deg, #2d1a4a 0%, #1a0d2e 100%)",
  "/installationsguide/samsung-smart-tv": "linear-gradient(135deg, #001e62 0%, #001040 100%)",
  "/installationsguide/lg-smart-tv": "linear-gradient(135deg, #a50034 0%, #6b0022 100%)",
  "/installationsguide/mag-box": "linear-gradient(135deg, #1a2a1a 0%, #0d1a0d 100%)",
  "/installationsguide/enigma2": "linear-gradient(135deg, #2a1a0d 0%, #1a0d00 100%)",
  "/installationsguide/android-tv": "linear-gradient(135deg, #1a3d1a 0%, #0d2610 100%)",
  "/installationsguide/apple-tv-tvos": "linear-gradient(135deg, #2a2a2a 0%, #111111 100%)",
  "/installationsguide/chromecast": "linear-gradient(135deg, #1a2c4a 0%, #0d1a30 100%)",
  "/installationsguide/windows-pc": "linear-gradient(135deg, #003366 0%, #001a40 100%)",
  "/installationsguide/mac-macos": "linear-gradient(135deg, #1c1c2e 0%, #0d0d1a 100%)",
  "/installationsguide/smartphones": "linear-gradient(135deg, #1a1a3e 0%, #0d0d26 100%)",
  "/installationsguide/amazon-fire-tv-stick": "linear-gradient(135deg, #4a1a00 0%, #2e0d00 100%)",
};

function IconTVIP() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#60a5fa" }}>
      <rect x="2" y="7" width="20" height="13" rx="2" />
      <polyline points="16 2 12 7 8 2" />
      <line x1="12" y1="13" x2="12" y2="13.01" />
    </svg>
  );
}

function IconFormuler() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a78bfa" }}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconSamsung() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#93c5fd" }}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <polyline points="7 10 10 13 17 6" />
    </svg>
  );
}

function IconLG() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#fca5a5" }}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <line x1="8" y1="10" x2="8" y2="10.01" />
      <line x1="12" y1="10" x2="12" y2="10.01" />
      <line x1="16" y1="10" x2="16" y2="10.01" />
    </svg>
  );
}

function IconMAG() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#86efac" }}>
      <rect x="2" y="8" width="20" height="12" rx="2" />
      <path d="M6 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
      <circle cx="12" cy="14" r="2" />
      <line x1="8" y1="14" x2="8" y2="14.01" />
      <line x1="16" y1="14" x2="16" y2="14.01" />
    </svg>
  );
}

function IconEnigma() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#fdba74" }}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    </svg>
  );
}

function IconAndroid() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#4ade80" }}>
      <path d="M17 6H7a5 5 0 0 0-5 5v6h20v-6a5 5 0 0 0-5-5z" />
      <line x1="2" y1="17" x2="2" y2="21" />
      <line x1="22" y1="17" x2="22" y2="21" />
      <line x1="7" y1="6" x2="5" y2="2" />
      <line x1="17" y1="6" x2="19" y2="2" />
      <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconAppleTV() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#e2e8f0" }}>
      <path d="M12 3c-1.5 0-2.7.9-3.3 2.1-.5-.1-1-.2-1.5-.2C4.7 4.9 3 6.7 3 8.9c0 .7.2 1.4.5 2C2.6 11.8 2 13 2 14.4 2 17 4 19 6.5 19H18c2.2 0 4-1.8 4-4 0-1.8-1.2-3.4-2.9-3.9.1-.4.1-.7.1-1.1 0-2.8-2.2-5-5-5-.1 0-.1 0-.2 0z" />
      <polyline points="10 14 12 12 14 14" />
      <line x1="12" y1="12" x2="12" y2="17" />
    </svg>
  );
}

function IconChromecast() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#7dd3fc" }}>
      <path d="M2 8.5A6.5 6.5 0 0 1 8.5 2" />
      <path d="M2 13a11 11 0 0 1 11-11" />
      <path d="M2 18.5A16.5 16.5 0 0 1 18.5 2" />
      <rect x="2" y="19" width="4" height="3" rx="1" />
    </svg>
  );
}

function IconWindows() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#93c5fd" }}>
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
    </svg>
  );
}

function IconMac() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#c4b5fd" }}>
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="10" y1="17" x2="14" y2="21" />
      <path d="M12 8c-.5-1-1.5-1.5-2-1.5-.8 0-1.5.7-1.5 1.5 0 1 1 1.5 2 1.5 1 0 2 .5 2 1.5 0 .8-.7 1.5-1.5 1.5-.5 0-1.5-.5-2-1.5" />
      <line x1="12" y1="6.5" x2="12" y2="7.5" />
      <line x1="12" y1="12.5" x2="12" y2="13.5" />
    </svg>
  );
}

function IconSmartphone() {
  return (
    <svg width="22" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#a5b4fc" }}>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function IconFireTV() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#fb923c" }}>
      <path d="M12 2c0 0-5 4-5 9a5 5 0 0 0 10 0c0-5-5-9-5-9z" />
      <path d="M12 12c0 0-2 1.5-2 3a2 2 0 0 0 4 0c0-1.5-2-3-2-3z" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
}

const DEVICE_ICONS: Record<string, React.ReactNode> = {
  "/installationsguide/tvip-box": <IconTVIP />,
  "/installationsguide/formuler-mytvonline-2": <IconFormuler />,
  "/installationsguide/samsung-smart-tv": <IconSamsung />,
  "/installationsguide/lg-smart-tv": <IconLG />,
  "/installationsguide/mag-box": <IconMAG />,
  "/installationsguide/enigma2": <IconEnigma />,
  "/installationsguide/android-tv": <IconAndroid />,
  "/installationsguide/apple-tv-tvos": <IconAppleTV />,
  "/installationsguide/chromecast": <IconChromecast />,
  "/installationsguide/windows-pc": <IconWindows />,
  "/installationsguide/mac-macos": <IconMac />,
  "/installationsguide/smartphones": <IconSmartphone />,
  "/installationsguide/amazon-fire-tv-stick": <IconFireTV />,
};

export default function DeviceGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
      {GUIDE_DEVICES.map(device => (
        <Link key={device.href} href={device.href} style={{ textDecoration: "none" }}>
          <div
            className="ni-card"
            style={{ padding: 24, transition: "all .25s", cursor: "pointer", height: "100%", display: "flex", flexDirection: "column", gap: 12 }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,107,53,0.35)";
              el.style.transform = "translateY(-3px)";
              el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "";
              el.style.transform = "";
              el.style.boxShadow = "";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                background: DEVICE_ICON_BG[device.href] ?? "linear-gradient(135deg, #1a1a2e 0%, #0d0d1a 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              }}>
                {DEVICE_ICONS[device.href]}
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#f0f6ff", lineHeight: 1.3 }}>{device.label}</div>
                <div style={{ fontSize: 12, color: "#ff6b35", fontWeight: 600, marginTop: 3 }}>Installationsguide →</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: "#7a90a8", lineHeight: 1.6, margin: 0 }}>
              {DEVICE_DESCRIPTIONS[device.href]}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}