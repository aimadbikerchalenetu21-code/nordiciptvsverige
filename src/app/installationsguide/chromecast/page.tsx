import type { Metadata } from "next";
import GuideLayout, {
  Step, MethodBadge, WarningBox, DeviceIntro, FAQ, RelatedDevices, SectionDivider,
} from "@/components/nordic/GuideLayout";

export const metadata: Metadata = {
  title: "IPTV på Chromecast med Google TV – Installationsguide 2026 | Nordic IPTV",
  description: "Steg-för-steg guide för att installera IPTV på Chromecast med Google TV. Net Player (rekommenderas) eller IPTV Smarters Pro via Google Play Store.",
};

const FAQS = [
  { q: "Felmeddelande 'Error processing playlist'?", a: "Det betyder att en eller alla av dina inloggningsuppgifter är felstavade. Gå tillbaka och dubbelkolla att server-adress, användarnamnet och lösenordet är 100% korrekta." },
  { q: "Kan jag installera appen via webbutiken?", a: "Nej, det enklaste och säkraste sättet att använda IPTV på Chromecast med Google TV är att använda Google Play Store. För manuell installation av apk-filer krävs mer komplicerade steg." },
  { q: "Det buffrar eller bilden fryser?", a: "Google TV-apparaten kräver ett snabbt nätverksanslutning. Använd ett 50Mbit Wi-Fi-nätverk och se till att du har stark signal. För bästa resultat, anslut via USB-C-hub med Ethernet-port." },
  { q: "Visa filmer/serier saknar svensk text?", a: "IPTV kan du oftast välja undertexter direkt i videospelaren. Leta efter en textnings-ikon eller i inställningarna och välj önskat språk." },
];

export default function ChromecastPage() {
  return (
    <GuideLayout>
      <section style={{ background: "#07080e", padding: "48px 0 80px" }}>
        <div className="ni-container" style={{ maxWidth: 860 }}>

          <DeviceIntro
            icon="🔄"
            title="IPTV på Chromecast med Google TV"
            description="Välkommen! Chromecast med Google TV är en fantastisk enhet för att strömma IPTV tack vare dess kraftfulla prestanda och tillgång till Google Play Store. Denna guide visar hur du installerar IPTV med vår rekommenderade app, TiviMate, direkt från butiken."
          />

          <WarningBox variant="orange">
            Detta är den enklaste och mest stabila metoden för att komma igång på de flesta Smart TV-apparater (Samsung, LG, etc.), Android-enheter och Windows.
          </WarningBox>

          <MethodBadge label="Metod A: Installationsguide för Net Player (Rekommenderas)" variant="orange" />

          <Step num={1} title="Installera appen">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Gå till appbutiken på din enhet (t.ex. Samsung App Store, Google Play Store).</li>
              <li>• Sök efter och installera appen <strong style={{ color: "#f0f6ff" }}>&quot;Net Player&quot;</strong>.</li>
            </ul>
          </Step>

          <Step num={2} title="Hitta din MAC-adress">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Öppna Hot Player-appen på din TV.</li>
              <li>• På startskärmen kommer du att se din unika MAC-adress: <strong style={{ color: "#ff6b35" }}>XX:XX:XX:XX:XX:XX</strong></li>
              <li>• Skriv ner eller kopiera denna adress.</li>
            </ul>
          </Step>

          <Step num={3} title="Ladda upp din spelista">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Öppna en webbläsare på din dator eller mobil och gå till: <strong style={{ color: "#ff6b35" }}>https://hotplayer.app/upload</strong></li>
              <li>• I fältet &quot;MAC&quot;, klistra in MAC-adressen från din TV.</li>
              <li>• I fältet &quot;Link&quot;, klistra in den M3U-länk du fick från oss.</li>
              <li>• Ge spelistan ett namn, t.ex. <strong style={{ color: "#f0f6ff" }}>&quot;NordIcIPTVtv&quot;</strong>.</li>
              <li>• Klicka på <strong style={{ color: "#f0f6ff" }}>&quot;Save&quot;</strong>.</li>
            </ul>
          </Step>

          <Step num={4} title="Starta om och börja titta">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Tryck på <strong style={{ color: "#f0f6ff" }}>&quot;Refresh&quot;</strong> i Net Player-appen för att ladda dina kanaler.</li>
              <li>• Du är nu redo att njuta av din Nordic IPTV-tjänst!</li>
            </ul>
          </Step>

          <WarningBox variant="green">
            <strong style={{ color: "#00e676" }}>✅ Grattis!</strong>
            <p style={{ marginBottom: 0, marginTop: 6 }}>
              Du är nu redo att använda alla dina bästa IPTV-appar på marknaden. Ordensföljden jämförses om en traditionell digitalbox med en smart och enkel TV-upplevelse (EPG).
            </p>
          </WarningBox>

          <SectionDivider />

          <MethodBadge label="Metod B: Alternativ installation via IPTV Smarters Pro" variant="blue" />

          <Step num={1} title="Installera IPTV Smarters Pro">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Gå till din Firestick-hemskärm, navigera till ditt app-lista och öppna <strong style={{ color: "#f0f6ff" }}>IPTV Smarters Pro</strong>.</li>
              <li>• Acceptera användarvillkoren.</li>
              <li>• Välj <strong style={{ color: "#f0f6ff" }}>&quot;Login with Xtream Codes API&quot;</strong>.</li>
            </ul>
          </Step>

          <Step num={2} title="Ange dina abonnemangsuppgifter">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Fyll i fält med informationen från ditt e-postmeddelande:</li>
              <li style={{ paddingLeft: 16 }}>– Any Name: Ditt val, t.ex. NordicIPTVtv.</li>
              <li style={{ paddingLeft: 16 }}>– Username: Ditt användarnamn.</li>
              <li style={{ paddingLeft: 16 }}>– Password: Ditt lösenord.</li>
              <li style={{ paddingLeft: 16 }}>– URL/Server: Din server-URL.</li>
              <li>• Klicka på <strong style={{ color: "#f0f6ff" }}>&quot;Add User&quot;</strong>.</li>
              <li>• Grattis! Appen kommer nu att ladda dina kanaler, filmer och serier.</li>
            </ul>
          </Step>

          <FAQ items={FAQS} />

          <div style={{ marginTop: 32, padding: "16px 20px", background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", borderRadius: 8, fontSize: 14, color: "#7a90a8" }}>
            Om du behöver mer hjälp, kontakta vår support och inkludera information om <strong style={{ color: "#b8cad8" }}>vilken app du använder</strong> samt ditt <strong style={{ color: "#b8cad8" }}>ordernummer</strong>.
          </div>

          <RelatedDevices currentHref="/installationsguide/chromecast" />

        </div>
      </section>
    </GuideLayout>
  );
}