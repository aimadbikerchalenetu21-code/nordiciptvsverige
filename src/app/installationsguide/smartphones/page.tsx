import type { Metadata } from "next";
import GuideLayout, {
  Step, MethodBadge, WarningBox, DeviceIntro, FAQ, RelatedDevices, SectionDivider,
} from "@/components/nordic/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import { guideBreadcrumb } from "@/lib/schema";

export const metadata: Metadata = {
  title: "IPTV på Smartphones (iOS & Android) – Guide 2026 | Nordic IPTV Sverige",
  description: "Komplett guide för att titta på IPTV på din iPhone, Android-telefon eller surfplatta. IPTV Smarters Pro rekommenderas för både iOS och Android.",
};

const FAQS = [
  { q: "Hittar inte appen i App Store / Play Store?", a: "Sök på 'IPTV Smarters Pro'. Om appen inte visas kan det bero på regionsrestriktioner. Kontakta vår support för alternativa lösningar." },
  { q: "Fel inloggningsuppgifter?", a: "Kopiera uppgifterna direkt från ditt välkomstmail för att undvika stavfel. Kontrollera att server-URL inkluderar rätt protokoll (http:// eller https://)." },
  { q: "Batteriet töms snabbt vid streaming?", a: "Det är normalt vid HD/4K-streaming. Sänk videokvaliteten i appens inställningar eller anslut din telefon till laddaren under tittandet." },
  { q: "Kan jag titta utan Wi-Fi (med mobildata)?", a: "Ja, men tänk på att IPTV förbrukar mycket data. HD-streaming kräver ca 3-4 GB per timme. Se till att du har en obegränsad dataplan." },
];

export default function SmartphonesPage() {
  return (
    <GuideLayout>
      <JsonLd data={guideBreadcrumb("smartphones", "Smartphones (iOS & Android)")} />
      <section style={{ background: "#07080e", padding: "48px 0 80px" }}>
        <div className="ni-container" style={{ maxWidth: 860 }}>

          <DeviceIntro
            icon="📱"
            title="IPTV på Smartphones (iOS & Android)"
            description="Välkommen! Med Nordic IPTV kan du titta på dina favoritkanaler och filmer var som helst med din smartphone eller surfplatta. IPTV Smarters Pro är vår rekommenderade app och fungerar på både iOS och Android."
          />

          <WarningBox variant="orange">
            Se till att du har följande redo:
            <ul style={{ listStyle: "none", padding: 0, margin: "10px 0 0", display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Din iPhone/iPad eller Android-enhet med iOS 13+ eller Android 5+.</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>Dina abonnemangsuppgifter</strong> (Användarnamn, Lösenord, Server-URL) från ditt välkomstmail.</li>
            </ul>
          </WarningBox>

          <MethodBadge label="Steg 1: Installera Appen &quot;IPTV Smarters&quot;" variant="orange" />

          <Step num={1} title="Ladda ner IPTV Smarters Pro">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• <strong style={{ color: "#f0f6ff" }}>iOS (iPhone/iPad):</strong> Öppna App Store och sök efter <strong style={{ color: "#f0f6ff" }}>&quot;IPTV Smarters Pro&quot;</strong>. Tryck på &quot;Hämta&quot; och installera.</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>Android:</strong> Öppna Google Play Store och sök efter <strong style={{ color: "#f0f6ff" }}>&quot;IPTV Smarters Pro&quot;</strong>. Tryck på &quot;Installera&quot;.</li>
            </ul>
          </Step>

          <SectionDivider />

          <MethodBadge label="Steg 2: Öppna Appen och Logga In" variant="blue" />

          <Step num={2} title="Öppna appen och välj inloggningsmetod">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Starta IPTV Smarters Pro och acceptera eventuella behörigheter.</li>
              <li>• Välj <strong style={{ color: "#f0f6ff" }}>&quot;Login with Xtream Codes API&quot;</strong> på välkomstskärmen.</li>
            </ul>
          </Step>

          <SectionDivider />

          <MethodBadge label="Steg 3: Ange Dina Abonnemangsuppgifter" variant="orange" />

          <Step num={3} title="Fyll i dina uppgifter">
            <p style={{ marginBottom: 8 }}>Fyll i fälten exakt som de finns i ditt välkomstmail:</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• <strong style={{ color: "#f0f6ff" }}>Any Name:</strong> Valfritt namn, t.ex. NordicIPTV.</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>Username (Användarnamn):</strong> Ditt användarnamn från oss.</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>Password (Lösenord):</strong> Ditt lösenord från oss.</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>URL/Server:</strong> Din server-URL.</li>
              <li>• Tryck på <strong style={{ color: "#ff6b35" }}>&quot;Add User&quot;</strong>.</li>
            </ul>
          </Step>

          <SectionDivider />

          <MethodBadge label="Steg 4: Starta Titta!" variant="green" />

          <Step num={4} title="Börja titta">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Appen laddar nu alla dina kanaler, filmer och serier automatiskt.</li>
              <li>• Navigera till <strong style={{ color: "#f0f6ff" }}>Live TV</strong>, <strong style={{ color: "#f0f6ff" }}>Movies</strong> eller <strong style={{ color: "#f0f6ff" }}>Series</strong> och välj vad du vill titta på.</li>
              <li>• Du kan även spara favoritkanaler för snabb åtkomst.</li>
            </ul>
          </Step>

          <FAQ items={FAQS} />

          <div style={{ marginTop: 32, padding: "16px 20px", background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", borderRadius: 8, fontSize: 14, color: "#7a90a8" }}>
            Kontakta vår support med ditt <strong style={{ color: "#b8cad8" }}>ordernummer</strong> och vilken <strong style={{ color: "#b8cad8" }}>enhet (iOS/Android)</strong> du använder om du behöver hjälp.
          </div>

          <RelatedDevices currentHref="/installationsguide/smartphones" />

        </div>
      </section>
    </GuideLayout>
  );
}