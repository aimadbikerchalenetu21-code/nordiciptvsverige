import type { Metadata } from "next";
import GuideLayout, {
  Step, MethodBadge, WarningBox, DeviceIntro, FAQ, RelatedDevices,
} from "@/components/nordic/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import { guideBreadcrumb, guideArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "IPTV på Android TV / Box – Installationsguide 2026 | Nordic IPTV Sverige",
  description: "Komplett guide för att installera IPTV på Android TV och Android Box. IPTV Smarters Pro från Google Play rekommenderas. Fungerar på alla Android TV-enheter.",
};

const FAQS = [
  { q: "Appen installeras inte eller finns inte i Play Store?", a: "Kontrollera att din Android TV-enhet har Google Play Store installerat. Om inte, kan du ladda ner IPTV Smarters Pro direkt som APK-fil. Kontakta vår support för hjälp." },
  { q: "Ogiltigt användarnamn/lösenord?", a: "Dubbelkolla att du har kopierat alla uppgifter exakt rätt – inga extra mellanslag, rätt store/versaler, och korrekt server-URL inklusive port om angiven." },
  { q: "Buffring eller frysning?", a: "Kontrollera din internetanslutning. För bästa prestanda rekommenderas en trådbunden Ethernet-anslutning. Testa att byta videoserver i appinställningarna om problemet kvarstår." },
];

export default function AndroidTVPage() {
  return (
    <GuideLayout>
      <JsonLd data={[
        guideBreadcrumb("android-tv", "Android TV / Box"),
        guideArticleSchema({
          slug: "android-tv",
          deviceLabel: "Android TV / Box",
          headline: "IPTV på Android TV / Box – Installationsguide 2026",
          description: "Komplett guide för att installera IPTV på Android TV och Android Box. IPTV Smarters Pro från Google Play rekommenderas. Fungerar på alla Android TV-enheter.",
        }),
      ]} />
      <section style={{ background: "#07080e", padding: "48px 0 80px" }}>
        <div className="ni-container" style={{ maxWidth: 860 }}>

          <DeviceIntro
            icon="🤖"
            title="IPTV på Android TV / Box"
            description="Välkommen! Android TV och Android Box-enheter är perfekta för IPTV-streaming. IPTV Smarters Pro är vår rekommenderade app och finns direkt i Google Play Store. Följ stegen nedan för att komma igång på några minuter."
          />

          <WarningBox variant="orange">
            Se till att du har följande redo:
            <ul style={{ listStyle: "none", padding: 0, margin: "10px 0 0", display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Din Android TV eller Android Box, ansluten till TV och till internet.</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>Dina abonnemangsuppgifter</strong> (Användarnamn, Lösenord och Server-URL) från ditt välkomstmail.</li>
            </ul>
          </WarningBox>

          <MethodBadge label="Installera IPTV Smarters Pro" variant="orange" />

          <Step num={1} title="Öppna Google Play Store">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Navigera till Google Play Store på din Android TV/Box.</li>
              <li>• Sök efter <strong style={{ color: "#f0f6ff" }}>&quot;IPTV Smarters Pro&quot;</strong>.</li>
              <li>• Klicka på <strong style={{ color: "#f0f6ff" }}>&quot;Installera&quot;</strong>.</li>
            </ul>
          </Step>

          <Step num={2} title="Öppna appen och välj inloggningsmetod">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Öppna IPTV Smarters Pro när installationen är klar.</li>
              <li>• Välj <strong style={{ color: "#f0f6ff" }}>&quot;Login with Xtream Codes API&quot;</strong>.</li>
            </ul>
          </Step>

          <Step num={3} title="Ange dina abonnemangsuppgifter">
            <p style={{ marginBottom: 8 }}>Fyll i fälten exakt som de finns i ditt välkomstmail:</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• <strong style={{ color: "#f0f6ff" }}>Any Name:</strong> Valfritt namn, t.ex. NordicIPTV.</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>Username:</strong> Ditt användarnamn.</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>Password:</strong> Ditt lösenord.</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>URL/Server:</strong> Din server-URL.</li>
              <li>• Klicka på <strong style={{ color: "#ff6b35" }}>&quot;Add User&quot;</strong>.</li>
            </ul>
          </Step>

          <Step num={4} title="Börja titta!">
            <p>Grattis! Alla kanaler, filmer och serier laddas nu automatiskt. Navigera till Live TV, VOD eller Serier och välj vad du vill titta på.</p>
          </Step>

          <FAQ items={FAQS} />

          <div style={{ marginTop: 32, padding: "16px 20px", background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", borderRadius: 8, fontSize: 14, color: "#7a90a8" }}>
            Kontakta vår support med ditt <strong style={{ color: "#b8cad8" }}>ordernummer</strong> och vilken <strong style={{ color: "#b8cad8" }}>Android-enhet</strong> du använder om du behöver hjälp.
          </div>

          <RelatedDevices currentHref="/installationsguide/android-tv" />

        </div>
      </section>
    </GuideLayout>
  );
}