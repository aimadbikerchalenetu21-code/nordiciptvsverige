import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nordic IPTV Sverige – Sveriges Bästa IPTV-Tjänst 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#04050a",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Orange glow top-left */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(255,107,53,0.15)",
            display: "flex",
          }}
        />
        {/* Cyan glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: -150,
            right: -80,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "rgba(0,212,255,0.10)",
            display: "flex",
          }}
        />

        {/* Top border accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #ff6b35 0%, #088fc3 60%, transparent 100%)",
            display: "flex",
          }}
        />

        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 44 }}>
          {/* Icon box */}
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "rgba(255,107,53,0.18)",
              border: "1.5px solid rgba(255,107,53,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
            }}
          >
            ⚡
          </div>
          <span
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: "#f0f6ff",
              letterSpacing: "-0.01em",
            }}
          >
            Nordic IPTV Sverige
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              fontSize: 68,
              fontWeight: 900,
              color: "#f0f6ff",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Sveriges{" "}
            <span style={{ color: "#ff6b35" }}>bästa</span>
          </div>
          <div
            style={{
              fontSize: 68,
              fontWeight: 900,
              color: "#f0f6ff",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            IPTV-tjänst
          </div>
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: 26,
            color: "#7a90a8",
            marginBottom: 48,
            fontWeight: 400,
          }}
        >
          Inga bindningstider · Omedelbar aktivering
        </div>

        {/* Feature pills */}
        <div style={{ display: "flex", gap: 14 }}>
          {[
            { label: "35,000+ Kanaler", color: "#ff6b35", border: "rgba(255,107,53,0.4)", bg: "rgba(255,107,53,0.12)" },
            { label: "4K UHD",          color: "#00d4ff", border: "rgba(0,212,255,0.35)", bg: "rgba(0,212,255,0.10)" },
            { label: "Live 24/7",       color: "#00e676", border: "rgba(0,230,118,0.3)",  bg: "rgba(0,230,118,0.09)" },
            { label: "Alla Enheter",    color: "#c4b5fd", border: "rgba(196,181,253,0.3)", bg: "rgba(196,181,253,0.09)" },
          ].map((p) => (
            <div
              key={p.label}
              style={{
                padding: "10px 22px",
                borderRadius: 10,
                background: p.bg,
                border: `1px solid ${p.border}`,
                color: p.color,
                fontSize: 20,
                fontWeight: 700,
                display: "flex",
              }}
            >
              {p.label}
            </div>
          ))}
        </div>

        {/* Domain watermark */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 80,
            fontSize: 18,
            color: "rgba(255,255,255,0.2)",
            fontWeight: 500,
            letterSpacing: "0.03em",
            display: "flex",
          }}
        >
          nordiciptvsverige.se
        </div>
      </div>
    ),
    { ...size }
  );
}