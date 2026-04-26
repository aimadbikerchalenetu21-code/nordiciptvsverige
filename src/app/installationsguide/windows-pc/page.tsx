import type { Metadata } from "next";
import GuideLayout, {
  Step, MethodBadge, WarningBox, DeviceIntro, FAQ, RelatedDevices, SectionDivider,
} from "@/components/nordic/GuideLayout";

export const metadata: Metadata = {
  title: "IPTV på Windows PC – Installationsguide 2026 | Nordic IPTV Sverige",
  description: "Komplett guide för att titta på IPTV på din Windows-dator. IPTV Smarters för Windows (rekommenderas) eller VLC Media Player. Stöder Windows 10 och 11.",
};

const FAQS = [
  { q: "Appen startar inte eller kraschar?", a: "Kontrollera att du har Windows 10 (version 1903 eller senare) eller Windows 11. Uppdatera Windows och försök igen. Om problemet kvarstår, prova VLC-metoden istället." },
  { q: "Fel användarnamn eller lösenord?", a: "Kontrollera att du kopierar uppgifterna exakt – inga extra mellanslag och rätt versaler. Server-URL ska inkludera port om angiven." },
  { q: "Hur öppnar jag M3U-listan i VLC?", a: "Öppna VLC, gå till Media → Öppna nätverksström och klistra in din M3U-länk. Alternativt kan du ladda ner M3U-filen och öppna den direkt med VLC." },
];

export default function WindowsPCPage() {
  return (
    <GuideLayout>
      <section style={{ background: "#07080e", padding: "48px 0 80px" }}>
        <div className="ni-container" style={{ maxWidth: 860 }}>

          <DeviceIntro
            icon="💻"
            title="IPTV på Windows PC"
            description="Välkommen! Att titta på IPTV på din Windows-dator är enkelt och ger dig full flexibilitet. Vi rekommenderar IPTV Smarters för Windows som är gratis och lättanvänd. Du kan även använda VLC Media Player som ett alternativ."
          />

          <MethodBadge label="Metod A: IPTV Smarters för Windows (Rekommenderas)" variant="orange" />

          <Step num={1} title="Ladda ner IPTV Smarters">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Gå till Microsoft Store på din dator.</li>
              <li>• Sök efter <strong style={{ color: "#f0f6ff" }}>&quot;IPTV Smarters Pro&quot;</strong> eller <strong style={{ color: "#f0f6ff" }}>&quot;IPTV Smarters&quot;</strong>.</li>
              <li>• Ladda ner och installera appen.</li>
            </ul>
          </Step>

          <Step num={2} title="Öppna och konfigurera">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Starta IPTV Smarters och välj <strong style={{ color: "#f0f6ff" }}>&quot;Login with Xtream Codes API&quot;</strong>.</li>
              <li>• Fyll i dina uppgifter:</li>
              <li style={{ paddingLeft: 16 }}>– Any Name: Valfritt, t.ex. NordicIPTV.</li>
              <li style={{ paddingLeft: 16 }}>– Username: Ditt användarnamn.</li>
              <li style={{ paddingLeft: 16 }}>– Password: Ditt lösenord.</li>
              <li style={{ paddingLeft: 16 }}>– URL: Din server-URL.</li>
              <li>• Klicka på <strong style={{ color: "#ff6b35" }}>&quot;Add User&quot;</strong> och börja titta!</li>
            </ul>
          </Step>

          <SectionDivider />

          <MethodBadge label="Metod B: VLC Media Player (Alternativ)" variant="blue" />

          <WarningBox variant="yellow">
            <strong style={{ color: "#ffd740" }}>💡 VLC-metoden</strong>
            <p style={{ marginTop: 6, marginBottom: 0 }}>
              VLC ger inte EPG-guide eller VOD-bibliotek, men fungerar utmärkt för live-kanaler via din M3U-spellistelänk.
            </p>
          </WarningBox>

          <Step num={1} title="Ladda ner och installera VLC">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Ladda ner VLC från <strong style={{ color: "#f0f6ff" }}>videolan.org</strong> och installera det.</li>
            </ul>
          </Step>

          <Step num={2} title="Öppna din M3U-spellistelänk i VLC">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Öppna VLC och gå till <strong style={{ color: "#f0f6ff" }}>Media → Öppna nätverksström</strong> (Ctrl+N).</li>
              <li>• Klistra in din M3U-länk som du fick från oss i välkomstmailen.</li>
              <li>• Klicka på <strong style={{ color: "#f0f6ff" }}>&quot;Spela&quot;</strong>. Dina kanaler laddas i spellistepanelen.</li>
            </ul>
          </Step>

          <FAQ items={FAQS} />

          <div style={{ marginTop: 32, padding: "16px 20px", background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", borderRadius: 8, fontSize: 14, color: "#7a90a8" }}>
            Kontakta vår support med ditt <strong style={{ color: "#b8cad8" }}>ordernummer</strong> om du behöver hjälp med Windows-installationen.
          </div>

          <RelatedDevices currentHref="/installationsguide/windows-pc" />

        </div>
      </section>
    </GuideLayout>
  );
}