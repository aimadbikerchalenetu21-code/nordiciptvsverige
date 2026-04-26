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
          position: "relative",
          overflow: "hidden",
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Background radial glow — orange */}
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -120,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,107,53,0.18) 0%, transparent 70%)",
          }}
        />
        {/* Background radial glow — cyan bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Subtle grid dots */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Top border accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background:
              "linear-gradient(90deg, #ff6b35 0%, #088fc3 50%, transparent 100%)",
          }}
        />

        {/* Logo mark — lightning bolt SVG */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background:
                "linear-gradient(135deg, rgba(255,107,53,0.3), rgba(8,143,195,0.15))",
              border: "1.5px solid rgba(255,107,53,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Lightning bolt */}
            <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
              <path
                d="M16 2L4 18H13L10 30L24 14H15L16 2Z"
                fill="url(#bolt)"
              />
              <defs>
                <linearGradient id="bolt" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ff6b35" />
                  <stop offset="100%" stopColor="#ff8a3d" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <span
            style={{
              fontSize: 26,
              fontWeight: 800,
              color: "#f0f6ff",
              letterSpacing: "-0.02em",
            }}
          >
            Nordic IPTV Sverige
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: 62,
            fontWeight: 900,
            color: "#f0f6ff",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: 28,
            maxWidth: 820,
          }}
        >
          Sveriges{" "}
          <span style={{ color: "#ff6b35" }}>bästa</span>{" "}
          IPTV‑tjänst
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: 26,
            color: "#7a90a8",
            marginBottom: 52,
            fontWeight: 400,
          }}
        >
          Inga bindningstider · Omedelbar aktivering
        </div>

        {/* Feature pills */}
        <div style={{ display: "flex", gap: 16 }}>
          {[
            { label: "35,000+ Kanaler", color: "#ff6b35", bg: "rgba(255,107,53,0.12)", border: "rgba(255,107,53,0.3)" },
            { label: "4K UHD", color: "#00d4ff", bg: "rgba(0,212,255,0.1)", border: "rgba(0,212,255,0.28)" },
            { label: "Live 24/7", color: "#00e676", bg: "rgba(0,230,118,0.09)", border: "rgba(0,230,118,0.25)" },
            { label: "Alla Enheter", color: "#a78bfa", bg: "rgba(167,139,250,0.09)", border: "rgba(167,139,250,0.25)" },
          ].map((pill) => (
            <div
              key={pill.label}
              style={{
                padding: "10px 20px",
                borderRadius: 10,
                background: pill.bg,
                border: `1px solid ${pill.border}`,
                color: pill.color,
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              {pill.label}
            </div>
          ))}
        </div>

        {/* Bottom-right URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 80,
            fontSize: 18,
            color: "rgba(255,255,255,0.25)",
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          nordiciptvsverige.se
        </div>
      </div>
    ),
    { ...size }
  );
}