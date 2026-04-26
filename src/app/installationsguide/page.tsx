import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "@/components/nordic/GuideLayout";
import DeviceGrid from "@/components/nordic/DeviceGrid";

export const metadata: Metadata = {
  title: "IPTV Installationsguide – Alla Enheter | Nordic IPTV Sverige",
  description: "Kompletta steg-för-steg installationsguider för IPTV på 13+ enheter: Samsung Smart TV, LG Smart TV, MAG Box, Amazon Fire TV Stick, Apple TV, Android, iPhone och mer.",
};

export default function InstallationsguideHub() {
  return (
    <GuideLayout>
      <section style={{ background: "#07080e", padding: "60px 0 80px" }}>
        <div className="ni-container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="ni-tag ni-tag-cyan" style={{ marginBottom: 16 }}>📋 Alla Guider</span>
            <h2 className="ni-section-title">Välj Din Enhet</h2>
            <p className="ni-section-sub">
              Klicka på din enhet nedan för att se en fullständig, illustrerad installationsguide anpassad för just din hårdvara.
            </p>
          </div>

          <DeviceGrid />

          <div style={{ marginTop: 64, padding: "36px", background: "#0c0e17", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12 }}>
            <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: 280 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#f0f6ff", marginBottom: 12 }}>Behöver du hjälp?</h3>
                <p style={{ color: "#7a90a8", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                  Hittar du inte din enhet eller stöter du på problem? Vårt supportteam finns tillgängligt 24/7 och svarar inom 2 minuter via WhatsApp eller e-post.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="https://wa.me/212651356639" target="_blank" rel="noreferrer" className="ni-btn ni-btn-cyan" style={{ fontSize: 14, padding: "10px 20px" }}>💬 WhatsApp Support</a>
                  <Link href="/#contact" className="ni-btn ni-btn-outline" style={{ fontSize: 14, padding: "10px 20px" }}>✉️ E-post</Link>
                </div>
              </div>
              <div style={{ minWidth: 220 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#f0f6ff", marginBottom: 12 }}>Vad du behöver för att installera:</div>
                {[
                  "✅ Aktivt Nordic IPTV-abonnemang",
                  "✅ Inloggningsuppgifter (e-post)",
                  "✅ Stabil internetanslutning",
                  "✅ Din enhet och fjärrkontroll",
                ].map((item, i) => (
                  <div key={i} style={{ fontSize: 13, color: "#7a90a8", padding: "5px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </GuideLayout>
  );
}