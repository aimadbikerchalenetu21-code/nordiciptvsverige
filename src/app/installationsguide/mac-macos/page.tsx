import type { Metadata } from "next";
import GuideLayout, {
  Step, MethodBadge, WarningBox, DeviceIntro, FAQ, RelatedDevices, SectionDivider,
} from "@/components/nordic/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import { guideBreadcrumb, guideArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "IPTV på Mac (macOS) – Installationsguide 2026 | Nordic IPTV Sverige",
  description: "Komplett guide för att titta på IPTV på Mac med macOS. IPTV Smarters för Mac (rekommenderas) eller IINA/VLC Media Player. Fungerar på alla Mac-modeller.",
};

const FAQS = [
  { q: "Appen öppnas inte på min Mac?", a: "Om macOS blockerar appen, gå till Systeminställningar → Integritet & Säkerhet och klicka på 'Öppna ändå' bredvid appnamnet." },
  { q: "Fel inloggningsuppgifter?", a: "Kontrollera att du kopierar användarnamn, lösenord och server-URL exakt från ditt välkomstmail – inga extra mellanslag." },
  { q: "Hur lägger jag till en M3U-lista i IINA?", a: "Öppna IINA, gå till Fil → Öppna URL och klistra in din M3U-länk. Alternativt drar du M3U-filen direkt till IINA-fönstret." },
];

export default function MacPage() {
  return (
    <GuideLayout>
      <JsonLd data={[
        guideBreadcrumb("mac-macos", "Mac (macOS)"),
        guideArticleSchema({
          slug: "mac-macos",
          deviceLabel: "Mac (macOS)",
          headline: "IPTV på Mac (macOS) – Installationsguide 2026",
          description: "Komplett guide för att titta på IPTV på Mac med macOS. IPTV Smarters för Mac (rekommenderas) eller IINA/VLC Media Player. Fungerar på alla Mac-modeller.",
        }),
      ]} />
      <section style={{ background: "#07080e", padding: "48px 0 80px" }}>
        <div className="ni-container" style={{ maxWidth: 860 }}>

          <DeviceIntro
            icon="🍏"
            title="IPTV på Mac (macOS)"
            description="Välkommen! Att titta på IPTV på din Mac är enkelt med rätt app. Vi rekommenderar IPTV Smarters för Mac som ger dig en komplett upplevelse med EPG-guide och VOD-bibliotek."
          />

          <MethodBadge label="Metod A: IPTV Smarters för Mac (Rekommenderas)" variant="orange" />

          <Step num={1} title="Ladda ner IPTV Smarters">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Öppna App Store på din Mac.</li>
              <li>• Sök efter <strong style={{ color: "#f0f6ff" }}>&quot;IPTV Smarters Pro&quot;</strong>.</li>
              <li>• Ladda ner och installera appen.</li>
            </ul>
          </Step>

          <Step num={2} title="Konfigurera ditt abonnemang">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Öppna appen och välj <strong style={{ color: "#f0f6ff" }}>&quot;Login with Xtream Codes API&quot;</strong>.</li>
              <li>• Fyll i dina uppgifter:</li>
              <li style={{ paddingLeft: 16 }}>– Any Name: Valfritt, t.ex. NordicIPTV.</li>
              <li style={{ paddingLeft: 16 }}>– Username: Ditt användarnamn.</li>
              <li style={{ paddingLeft: 16 }}>– Password: Ditt lösenord.</li>
              <li style={{ paddingLeft: 16 }}>– URL: Din server-URL.</li>
              <li>• Klicka på <strong style={{ color: "#ff6b35" }}>&quot;Add User&quot;</strong> och börja titta!</li>
            </ul>
          </Step>

          <SectionDivider />

          <MethodBadge label="Metod B: IINA eller VLC (Alternativ)" variant="blue" />

          <WarningBox variant="yellow">
            <strong style={{ color: "#ffd740" }}>💡 IINA – Den bästa mediaspelaren för Mac</strong>
            <p style={{ marginTop: 6, marginBottom: 0 }}>
              IINA är en modern och snygg mediaspelare specifikt för macOS. Den stöder M3U-spellistor och är ett utmärkt alternativ till VLC.
            </p>
          </WarningBox>

          <Step num={1} title="Ladda ner IINA eller VLC">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• <strong style={{ color: "#f0f6ff" }}>IINA:</strong> Ladda ner från iina.io (gratis, öppen källkod).</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>VLC:</strong> Ladda ner från videolan.org (gratis).</li>
            </ul>
          </Step>

          <Step num={2} title="Öppna din M3U-spellistelänk">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• <strong style={{ color: "#f0f6ff" }}>I IINA:</strong> Fil → Öppna URL → Klistra in din M3U-länk.</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>I VLC:</strong> Fil → Öppna nätverksström → Klistra in din M3U-länk.</li>
              <li>• Klicka på &quot;Öppna&quot; eller &quot;Spela&quot;. Dina kanaler laddas automatiskt.</li>
            </ul>
          </Step>

          <FAQ items={FAQS} />

          <div style={{ marginTop: 32, padding: "16px 20px", background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", borderRadius: 8, fontSize: 14, color: "#7a90a8" }}>
            Kontakta vår support med ditt <strong style={{ color: "#b8cad8" }}>ordernummer</strong> om du behöver hjälp med Mac-installationen.
          </div>

          <RelatedDevices currentHref="/installationsguide/mac-macos" />

        </div>
      </section>
    </GuideLayout>
  );
}