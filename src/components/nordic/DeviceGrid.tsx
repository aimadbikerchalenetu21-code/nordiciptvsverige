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
              <div style={{ width: 52, height: 52, borderRadius: 12, background: "#11141f", border: "1px solid rgba(255,107,53,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>
                {device.icon}
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