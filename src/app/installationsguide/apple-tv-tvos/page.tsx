import type { Metadata } from "next";
import GuideLayout, {
  Step, MethodBadge, WarningBox, DeviceIntro, FAQ, RelatedDevices, SectionDivider,
} from "@/components/nordic/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import { guideBreadcrumb } from "@/lib/schema";

export const metadata: Metadata = {
  title: "IPTV på Apple TV (tvOS) – Installationsguide 2026 | Nordic IPTV",
  description: "Komplett guide för att installera IPTV på Apple TV (tvOS). IPTVX-appen rekommenderas – en engångsbetalning från App Store. Fungerar på alla Apple TV-generationer.",
};

const FAQS = [
  { q: "'Login false' eller 'Error loading playlist'?", a: "Gå tillbaka och dubbelkolla att alla inloggningsuppgifter är korrekt stavade. Användarnamn och server-URL är 100% korrekta." },
  { q: "Ogiltigt Användarnamn/Lösenord eller Login failed?", a: "Det är det vanligaste felet. Dubbelkolla att du har skrivit in ditt användarnamn, lösenord och server-URL 100% korrekt." },
  { q: "Det buffrar eller bilden fryser?", a: "En Apple TV presterar bäst med en stabil anslutning. Anslut ett 50MHz Wi-Fi-nätverk och se till att du har stark signal. För bästa resultat, anslut via Ethernet-adapter." },
  { q: "Visa filmer/serier saknar svensk text?", a: "IPTV kan du oftast välja undertexter direkt i videospelaren. Leta efter en textnings-ikon eller i inställningarna." },
];

export default function AppleTVPage() {
  return (
    <GuideLayout>
      <JsonLd data={guideBreadcrumb("apple-tv-tvos", "Apple TV (tvOS)")} />
      <section style={{ background: "#07080e", padding: "48px 0 80px" }}>
        <div className="ni-container" style={{ maxWidth: 860 }}>

          <DeviceIntro
            icon="🍎"
            title="IPTV på Apple TV (tvOS)"
            description="Välkommen! Att få igång IPTV på Apple TV (4:e generationen eller nyare) är enkelt och ger en fantastisk upplevelse med hög bildkvalitet och hög prestanda. Följ stegen nedan för att komma igång."
          />

          <WarningBox variant="orange">
            Se till att du har följande redo:
            <ul style={{ listStyle: "none", padding: 0, margin: "10px 0 0", display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Din Apple TV 4K eller HD, ansluten till TV och med tillgång till internet.</li>
              <li>• En stabil internetanslutning (trådbunden kabel (Ethernet) rekommenderas starkt).</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>Dina abonnemangsuppgifter</strong> som du fick i ett e-postmeddelande från oss.</li>
            </ul>
          </WarningBox>

          <WarningBox variant="yellow">
            <strong style={{ color: "#ffd740" }}>💡 Kostnad för Appen</strong>
            <p style={{ marginTop: 8, marginBottom: 0 }}>
              IPTVX är en premium-app och kan erbjuda en gratis provperiod. Efter provperioden kan app-användarens kräva en engångsavgift (Exempelvis: 89 kr). Denna betalning görs direkt i App Store och är separat från ditt IPTV-abonnemang hos oss.
            </p>
          </WarningBox>

          <MethodBadge label="Steg 1: Installera Appen &quot;IPTVX&quot;" variant="orange" />

          <Step num={1} title="Installera IPTVX från App Store">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Starta din Apple TV och öppna <strong style={{ color: "#f0f6ff" }}>App Store</strong>.</li>
              <li>• Använd sökfunktionen för att söka efter <strong style={{ color: "#f0f6ff" }}>&quot;IPTV&quot;</strong>.</li>
              <li>• Välj appen från sökresultaten och klicka på <strong style={{ color: "#f0f6ff" }}>&quot;Skaffa&quot; (Get)</strong> för att installera den.</li>
            </ul>
          </Step>

          <SectionDivider />

          <MethodBadge label="Steg 2: Öppna Appen med ett Log På Din Spellist" variant="blue" />

          <Step num={2} title="Öppna appen och lägg till din prenumeration">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• När installationen är klar, öppna IPTVX-appen.</li>
              <li>• Du kommer att mötas av en välkomstskärm. Klicka på <strong style={{ color: "#f0f6ff" }}>&quot;+&quot;</strong> eller <strong style={{ color: "#f0f6ff" }}>&quot;Add Playlist&quot;</strong> för att lägga till ditt abonnemang.</li>
            </ul>
          </Step>

          <SectionDivider />

          <MethodBadge label="Steg 3: Ange Dina Abonnemangsuppgifter" variant="orange" />

          <Step num={3} title="Ange abonnemangsuppgifter">
            <p style={{ marginBottom: 10 }}>Detta är det viktigaste steget. Fyll i exakt som du fick dem i e-postmeddelandet från oss:</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• <strong style={{ color: "#f0f6ff" }}>Playlist Name (Namn):</strong> Ditt val av namn du vill se, t.ex. NordIcIPTVtv.</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>Username (Användarnamn):</strong> Ditt användarnamn från oss.</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>Password (Lösenord):</strong> Ditt lösenord från oss.</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>URL:</strong> Ange din server URL, inklusive http/https. Exempel: <span style={{ color: "#ff6b35" }}>http://line.example.com</span></li>
              <li>• Klicka på <strong style={{ color: "#f0f6ff" }}>&quot;Save&quot;</strong> eller <strong style={{ color: "#f0f6ff" }}>&quot;Add Playlist&quot;</strong>.</li>
            </ul>
          </Step>

          <SectionDivider />

          <MethodBadge label="Steg 4: Starta Titta!" variant="green" />

          <Step num={4} title="Börja titta">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Grattis! IPTV kommer nu att ladda och organisera alla kanaler, filmer och serier. Det kan ta en stund första gången.</li>
              <li>• När det är klart kan du enkelt navigera mellan Live TV, Filmer och Serier.</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>TV-guiden (EPG)</strong> laddas automatiskt och ger dig en översikt av en tv-tablå.</li>
            </ul>
          </Step>

          <FAQ items={FAQS} />

          <div style={{ marginTop: 32, padding: "16px 20px", background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", borderRadius: 8, fontSize: 14, color: "#7a90a8" }}>
            Om du behöver hjälp, kontakta vår support och inkludera information om att du är en <strong style={{ color: "#b8cad8" }}>Apple TV med IPTVX</strong> samt ditt <strong style={{ color: "#b8cad8" }}>ordernummer</strong> så hjälper vi dig.
          </div>

          <RelatedDevices currentHref="/installationsguide/apple-tv-tvos" />

        </div>
      </section>
    </GuideLayout>
  );
}