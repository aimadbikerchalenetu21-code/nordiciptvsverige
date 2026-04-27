"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { GUIDE_DEVICES } from "@/lib/guideDevices";

export { GUIDE_DEVICES };

function WA_ICON(size: number) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path d="M23.7 8.3A10.85 10.85 0 005.1 20.4L4 28l7.8-2a10.85 10.85 0 0011.9-17.7zM16 25a9 9 0 01-4.6-1.3l-.3-.2-3.4.9.9-3.3-.2-.3A9 9 0 1116 25zm5-6.6c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.2-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.5-.6-.5H12c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3 4.9 4.2 2.9 1.2 2.9.8 3.4.7.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.2.1-1.3-.1-.1-.3-.2-.6-.3z" fill="white" />
    </svg>
  );
}

function TopBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="ni-top-banner">
      <div className="ni-top-banner-text">
        🟡 <strong>Sommarkampanj!</strong> Upp till 30% RABATT på alla abonnemang! 🌞
        <span className="ni-top-banner-sub">&nbsp;Begränsad tid – njut av svalkande underhållning i sommarhetten! ❄️</span>
      </div>
      <button className="ni-top-banner-close" onClick={() => setVisible(false)}>✕</button>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links: [string, string][] = [
    ["/", "Hem"],
    ["/#pricing", "Priser"],
    ["/installationsguide", "Installationsguide"],
    ["/#faq", "FAQ"],
  ];

  return (
    <>
      <nav className={`ni-nav${scrolled ? " scrolled" : ""}`}>
        <div className="ni-container">
          <div className="ni-nav-inner">
            <Link href="/" className="ni-nav-logo">
              <Image src="/logo.webp" alt="Nordic IPTV Sverige" width={160} height={44} priority style={{ height: 44, width: "auto", display: "block" }} />
            </Link>
            <div className="ni-nav-links">
              {links.map(([href, label]) => (
                <Link key={href} href={href} className="ni-nav-link">{label}</Link>
              ))}
            </div>
            <div className="ni-nav-actions">
              <Link href="/#trial" className="ni-nav-cta">Komma igång</Link>
            </div>
            <div className="ni-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span /><span /><span />
            </div>
          </div>
        </div>
      </nav>
      <div className={`ni-mobile-menu${menuOpen ? " open" : ""}`}>
        {links.map(([href, label]) => (
          <Link key={href} href={href} className="ni-mobile-link" onClick={() => setMenuOpen(false)}>{label}</Link>
        ))}
        <Link href="/#trial" className="ni-nav-cta" style={{ marginTop: 12, textAlign: "center" }} onClick={() => setMenuOpen(false)}>Komma igång</Link>
      </div>
    </>
  );
}

function GuideHero() {
  return (
    <div style={{ background: "linear-gradient(180deg, #07080e 0%, #0c0e17 100%)", paddingBottom: 0 }}>
      <div style={{ background: "linear-gradient(90deg, #ff6b35, #e55a25)", padding: "8px 0", textAlign: "center" }}>
        <Link href="/installationsguide" style={{ fontSize: 13, fontWeight: 600, color: "#fff", letterSpacing: ".02em" }}>
          Följ Smart TV till Firestick – vi har en guide som passar dig ▸
        </Link>
      </div>
      <div className="ni-container" style={{ paddingTop: 48, paddingBottom: 48, textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "#f0f6ff", marginBottom: 16, lineHeight: 1.2 }}>
          Installera IPTV: Kompletta Guider<br />för Över 13 Enheter
        </h1>
        <p style={{ color: "#7a90a8", fontSize: 16, lineHeight: 1.7, maxWidth: 680, margin: "0 auto" }}>
          Vi vet att varje enhet är unik. Därför har vi skapat 13 detaljerade och illustrerade installationsguider
          för att göra din start så enkel som möjligt. Inga tekniska kunskaper krävs – följ bara bilderna och
          instruktionerna. Välj din enhet i listan nedan för att komma igång direkt.
        </p>
      </div>
    </div>
  );
}

function DeviceTabs() {
  const pathname = usePathname();
  return (
    <div style={{ background: "#0c0e17", borderBottom: "1px solid rgba(255,255,255,0.08)", position: "sticky", top: 114, zIndex: 100, boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}>
      <div className="ni-container">
        <div style={{ display: "flex", gap: 4, overflowX: "auto", padding: "10px 0", scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}>
          {GUIDE_DEVICES.map(d => {
            const active = pathname === d.href;
            return (
              <Link
                key={d.href}
                href={d.href}
                style={{
                  padding: "8px 14px",
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: active ? 700 : 400,
                  color: active ? "#fff" : "#7a90a8",
                  background: active ? "rgba(255,107,53,0.15)" : "transparent",
                  border: `1px solid ${active ? "rgba(255,107,53,0.4)" : "transparent"}`,
                  whiteSpace: "nowrap",
                  transition: "all .2s",
                  textDecoration: "none",
                  flexShrink: 0,
                }}
              >
                {d.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function CTABanner() {
  return (
    <section style={{ background: "linear-gradient(135deg, #07080e 0%, #0c0e17 50%, #07080e 100%)", padding: "80px 0", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="ni-container">
        <h2 style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 800, color: "#f0f6ff", marginBottom: 12 }}>
          Upplev Skillnaden<br />med nordic iptv
        </h2>
        <p style={{ color: "#7a90a8", fontSize: 16, maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.7 }}>
          Värsta bra – Beställ ditt IPTV-abonnemang från nordic iptv idag och upplev vad som gör oss bäst på marknaden!
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/#trial" className="ni-btn ni-btn-cyan" style={{ fontSize: 16, padding: "14px 32px" }}>Börja streama idag! ▶</Link>
          <Link href="/#contact" className="ni-btn ni-btn-outline" style={{ fontSize: 16, padding: "14px 24px" }}>kontakta oss</Link>
        </div>
        <p style={{ marginTop: 20, fontSize: 13, color: "#4a5568" }}>
          Om du behöver mer hjälp, kontakta vår support och inkludera information om{" "}
          <strong style={{ color: "#7a90a8" }}>vilken app du använder</strong> samt ditt{" "}
          <strong style={{ color: "#7a90a8" }}>ordernummer</strong> så hjälper vi dig.
        </p>
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
            <div className="ni-footer-brand">
              <Image src="/logo.webp" alt="Nordic IPTV Sverige" width={180} height={48} style={{ height: 48, width: "auto", display: "block", marginBottom: 4 }} />
            </div>
            <div className="ni-footer-tagline">Sveriges ledande IPTV-tjänst med 35,000+ kanaler i 4K UHD-kvalitet. Titta på vad du vill, när du vill, på vilken enhet som helst.</div>
            <div className="ni-footer-payments">
              {["Visa", "Mastercard", "Swish", "PayPal", "Crypto"].map(p => (
                <span key={p} className="ni-pay-badge">{p}</span>
              ))}
            </div>
          </div>
          <div>
            <h4>Snabblänkar</h4>
            <ul className="ni-footer-links">
              <li><Link href="/">Nordic IPTV</Link></li>
              <li><Link href="/#pricing">Prissättning</Link></li>
              <li><Link href="/installationsguide">Våra Tjänster</Link></li>
              <li><Link href="/#faq">Förmåner</Link></li>
            </ul>
          </div>
          <div>
            <h4>Kontakta oss</h4>
            <ul className="ni-footer-links">
              <li><Link href="/#contact">Kontakta gärna för ytterligare frågor eller förtydliganden.</Link></li>
              <li><Link href="/#contact">Kontakta oss</Link></li>
            </ul>
          </div>
          <div>
            <h4>Installationsguider</h4>
            <ul className="ni-footer-links">
              {GUIDE_DEVICES.map(d => (
                <li key={d.href}><Link href={d.href}>{d.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="ni-footer-bottom">
          <div className="ni-footer-copy">©Nordic IPTV 2011-2026 Med ensamrätt.</div>
          <div className="ni-footer-legal">
            <a href="#">Terms and conditions</a>
            <a href="#">Privacy policy</a>
            <a href="#">Refund Policy</a>
            <a href="#">DMCA-policy</a>
          </div>
        </div>
        <div style={{ marginTop: 24, padding: "16px 0", borderTop: "1px solid rgba(255,255,255,0.05)", fontSize: 12, color: "#4a5568", lineHeight: 1.6 }}>
          Nordic IPTV är inte ansvarigt för några olagliga eller omoraliska/olicensierade användningar av denna webbplats. Alla varumärken och logotyper tillhör sina respektive ägare.<br />
          Genom att använda vår tjänst accepterar du våra användarvillkor. All åtkomst till NORDIC IPTV är auktoriserad och laglig användning uppmuntras. Vi tillhandahåller inte och stöder inte piratkopiering på ett sätt.
        </div>
      </div>
    </footer>
  );
}

function ScrollTopBtn() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const h = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <div className={`ni-scroll-top${visible ? " visible" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</div>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/212651356639"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      style={{ position: "fixed", bottom: 24, right: 24, zIndex: 2000, display: "flex", alignItems: "center", gap: 10, background: "#25D366", color: "#fff", borderRadius: 50, padding: "12px 18px 12px 14px", textDecoration: "none", boxShadow: "0 6px 28px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.3)", transition: "transform .2s, box-shadow .2s" }}
    >
      {WA_ICON(22)}
      <span style={{ lineHeight: 1.2 }}>
        <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".04em", whiteSpace: "nowrap" }}>Prova Gratis</div>
        <div style={{ fontSize: 11, fontWeight: 500, opacity: 0.9, whiteSpace: "nowrap" }}>Chatta på WhatsApp</div>
      </span>
    </a>
  );
}

export interface StepProps {
  num: number;
  title: string;
  children: React.ReactNode;
}

export function Step({ num, title, children }: StepProps) {
  return (
    <div style={{ display: "flex", gap: 16, marginBottom: 28 }}>
      <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #ff6b35, #ff8c5a)", display: "flex", alignItems: "center", justifyContent: "center", color: "#000", fontWeight: 800, fontSize: 15, flexShrink: 0, marginTop: 2 }}>
        {num}
      </div>
      <div style={{ flex: 1 }}>
        <h4 style={{ color: "#f0f6ff", fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{title}</h4>
        <div style={{ color: "#b8cad8", fontSize: 15, lineHeight: 1.7 }}>{children}</div>
      </div>
    </div>
  );
}

export function MethodBadge({ label, variant = "orange" }: { label: string; variant?: "orange" | "blue" | "green" }) {
  const colors: Record<string, { bg: string; border: string; text: string }> = {
    orange: { bg: "rgba(255,107,53,0.1)", border: "rgba(255,107,53,0.25)", text: "#ff6b35" },
    blue: { bg: "rgba(0,212,255,0.08)", border: "rgba(0,212,255,0.2)", text: "#00d4ff" },
    green: { bg: "rgba(0,230,118,0.08)", border: "rgba(0,230,118,0.2)", text: "#00e676" },
  };
  const c = colors[variant];
  return (
    <div style={{ background: c.bg, border: `1px solid ${c.border}`, borderRadius: 8, padding: "8px 16px", marginBottom: 24, display: "inline-block" }}>
      <span style={{ fontSize: 12, fontWeight: 700, color: c.text, letterSpacing: ".1em", textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}

export function WarningBox({ children, variant = "orange" }: { children: React.ReactNode; variant?: "orange" | "yellow" | "green" }) {
  const colors: Record<string, { bg: string; border: string; icon: string; iconColor: string }> = {
    orange: { bg: "rgba(255,107,53,0.07)", border: "rgba(255,107,53,0.2)", icon: "⚠️", iconColor: "#ff6b35" },
    yellow: { bg: "rgba(255,215,64,0.07)", border: "rgba(255,215,64,0.2)", icon: "💡", iconColor: "#ffd740" },
    green: { bg: "rgba(0,230,118,0.07)", border: "rgba(0,230,118,0.2)", icon: "✅", iconColor: "#00e676" },
  };
  const c = colors[variant];
  return (
    <div style={{ background: c.bg, border: `1px solid ${c.border}`, borderRadius: 10, padding: "16px 20px", marginBottom: 28 }}>
      <div style={{ color: "#b8cad8", fontSize: 14, lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}

export function DeviceIntro({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "flex-start", marginBottom: 36, padding: "28px 32px", background: "rgba(14,17,24,0.8)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12 }}>
      <div style={{ width: 72, height: 72, borderRadius: 16, background: "#11141f", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800, color: "#f0f6ff", marginBottom: 10 }}>{title}</h2>
        <p style={{ color: "#7a90a8", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{description}</p>
      </div>
    </div>
  );
}

export function Prereqs({ items }: { items: { color: string; text: string }[] }) {
  return (
    <WarningBox variant="orange">
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, margin: 0, padding: 0 }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ fontSize: 16, marginTop: 1 }}>▶</span>
            <span style={{ color: item.color !== "default" ? item.color : "#b8cad8" }}>{item.text}</span>
          </li>
        ))}
      </ul>
    </WarningBox>
  );
}

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div style={{ marginTop: 40 }}>
      <h3 style={{ fontSize: 20, fontWeight: 700, color: "#f0f6ff", marginBottom: 20 }}>❓ Felsökning &amp; Vanliga Problem</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {items.map((item, i) => (
          <div key={i} style={{ background: "#0c0e17", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, padding: "16px 20px" }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#f0f6ff", marginBottom: 8 }}>• {item.q}</div>
            <div style={{ fontSize: 14, color: "#7a90a8", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RelatedDevices({ currentHref }: { currentHref: string }) {
  const related = GUIDE_DEVICES.filter(d => d.href !== currentHref).slice(0, 6);
  return (
    <div style={{ marginTop: 48, padding: "32px", background: "#0c0e17", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12 }}>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#f0f6ff", marginBottom: 20 }}>📱 Andra Installationsguider</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {related.map(d => (
          <Link
            key={d.href}
            href={d.href}
            style={{ padding: "8px 16px", borderRadius: 6, fontSize: 13, fontWeight: 500, color: "#b8cad8", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none", transition: "all .2s" }}
          >
            {d.icon} {d.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SectionDivider() {
  return (
    <div style={{ margin: "36px 0", height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }} />
  );
}

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBanner />
      <Nav />
      <main style={{ paddingTop: 114 }}>
        <GuideHero />
        <DeviceTabs />
        {children}
        <CTABanner />
      </main>
      <Footer />
      <ScrollTopBtn />
      <FloatingWhatsApp />
    </>
  );
}