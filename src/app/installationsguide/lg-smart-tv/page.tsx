import type { Metadata } from "next";
import GuideLayout, {
  Step, MethodBadge, WarningBox, DeviceIntro, FAQ, RelatedDevices, SectionDivider,
} from "@/components/nordic/GuideLayout";

export const metadata: Metadata = {
  title: "IPTV på LG Smart TV (webOS) – Installationsguide 2026 | Nordic IPTV",
  description: "Komplett guide för att installera IPTV på LG Smart TV med webOS. Tre metoder: Net Player via hotplayer.app (rekommenderas), Smart IPTV och Filo IPTV.",
};

const FAQS = [
  { q: "Felmeddelande i TiviMate: 'Error processing playlist'?", a: "Det betyder att en eller alla av dina inloggningsuppgifter är felstavade. Gå tillbaka och dubbelkolla att server-adress, användarnamnet och lösenordet är 100% korrekta." },
  { q: "Kan jag installera appen via webbutiken?", a: "Nej, det enklaste och säkraste sättet att använda IPTV på Chromecast med Google TV är att använda Google Play Store. För manuell installation av en apk-filer krävs 'Downloader', vilket är mer komplicerat för Android TV-guider." },
  { q: "Det buffrar eller bilden fryser?", a: "Google TV-apparaten kräver ett snabbt nätverksanslutning. Använd ett 50Mbit Wi-Fi-nätverk och se till att du har stark signal. För bästa resultat, anslut via USB-C-hub med Ethernet-port för en trådbunden anslutning." },
  { q: "IPTV kan du oftast välja undertexter direkt i videospelaren. Leta efter en textnings-ikon eller i inställningarna.", a: "Välj Textning och sedan önskat språk." },
];

export default function LGSmartTVPage() {
  return (
    <GuideLayout>
      <section style={{ background: "#07080e", padding: "48px 0 80px" }}>
        <div className="ni-container" style={{ maxWidth: 860 }}>

          <DeviceIntro
            icon="📺"
            title="IPTV på LG Smart TV (webOS)"
            description="Välkommen! Den här guiden är utformad för att hjälpa dig att installera IPTV på din LG Smart TV med webOS-operativsystem. Vi rekommenderar att du börjar med Metod A för snabbast och enklast resultat."
          />

          <WarningBox variant="orange">
            <strong style={{ color: "#ff6b35" }}>Metod A: Installationsguide för Net Player (Rekommenderas)</strong>
            <p style={{ marginTop: 8, marginBottom: 0 }}>
              Detta är den enklaste och mest stabila metoden för att komma igång på de flesta Smart TV-apparater (Samsung, LG, etc.), Android-enheter och Windows.
            </p>
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
              <li>• På startskärmen kommer du att se din unika MAC-adress. Den ser ut ungefär som: <strong style={{ color: "#ff6b35" }}>XX:XX:XX:XX:XX:XX</strong></li>
              <li>• Skriv ner eller kopiera denna adress.</li>
            </ul>
          </Step>

          <Step num={3} title="Ladda upp din spelista">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Öppna en webbläsare på din dator eller mobil och gå till: <strong style={{ color: "#ff6b35" }}>https://hotplayer.app/upload</strong></li>
              <li>• I fältet <strong style={{ color: "#f0f6ff" }}>&quot;MAC&quot;</strong>, klistra in MAC-adressen från din TV.</li>
              <li>• I fältet <strong style={{ color: "#f0f6ff" }}>&quot;Link&quot;</strong>, klistra in den M3U-länk som du fick från oss i ditt välkomstmail.</li>
              <li>• Ge spelistan ett namn, t.ex. <strong style={{ color: "#f0f6ff" }}>&quot;NordIcIPTVtv&quot;</strong>.</li>
              <li>• Klicka på <strong style={{ color: "#f0f6ff" }}>&quot;Save&quot;</strong> (Spara).</li>
            </ul>
          </Step>

          <Step num={4} title="Starta om och börja titta">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Gå tillbaka till din LG TV och klicka på knappen <strong style={{ color: "#f0f6ff" }}>&quot;Refresh&quot;</strong> (Uppdatera) i Hot Player-appen.</li>
              <li>• Dina kanaler kommer nu att laddas in. Du är redo att börja titta!</li>
            </ul>
          </Step>

          <WarningBox variant="green">
            <strong style={{ color: "#00e676" }}>✅ Grattis!</strong>
            <p style={{ marginBottom: 0, marginTop: 6 }}>
              Du är nu redo att använda din LG Smart TV med Nordic IPTV. Välj dina kanaler, filmer och serier på marknaden. Ordensföljden jämförses om en traditionell digitalbox med en smalare och smart TV-upplevelse (EPG).
            </p>
          </WarningBox>

          <SectionDivider />

          <MethodBadge label="Metod B: Alternativ installation via Smart IPTV" variant="blue" />

          <Step num={1} title="Installera appen Smart IPTV">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Gå till LG Content Store.</li>
              <li>• Sök efter och installera <strong style={{ color: "#f0f6ff" }}>IPTV Smarters Lite</strong> eller <strong style={{ color: "#f0f6ff" }}>Smarters Player Lite</strong>.</li>
            </ul>
          </Step>

          <Step num={2} title="Öppna och logga in">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Öppna och logga in: Öppna appen och välj <strong style={{ color: "#f0f6ff" }}>&quot;Login with Xtream Codes API&quot;</strong>.</li>
              <li>• Ange din användarnamn, lösenord och server-URL.</li>
              <li>• Klicka på <strong style={{ color: "#f0f6ff" }}>&quot;Add User&quot;</strong> och börja titta!</li>
            </ul>
          </Step>

          <SectionDivider />

          <MethodBadge label="Metod C: Filo IPTV (Alternativ utan kostnad)" variant="green" />

          <Step num={1} title="Installera Filo IPTV">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Gå till LG Content Store och sök efter <strong style={{ color: "#f0f6ff" }}>Filo IPTV</strong>.</li>
              <li>• Installera appen och öppna den.</li>
            </ul>
          </Step>

          <Step num={2} title="Konfigurera spelistan">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Tryck på <strong style={{ color: "#f0f6ff" }}>Menu</strong> i appen.</li>
              <li>• Välj <strong style={{ color: "#f0f6ff" }}>&quot;Lägg till spelista&quot;</strong> och ange din M3U-länk.</li>
              <li>• Klicka på <strong style={{ color: "#f0f6ff" }}>&quot;Spara&quot;</strong>. Dina kanaler laddas automatiskt.</li>
            </ul>
          </Step>

          <FAQ items={FAQS} />

          <div style={{ marginTop: 32, padding: "16px 20px", background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", borderRadius: 8, fontSize: 14, color: "#7a90a8" }}>
            Om du behöver mer hjälp, kontakta vår support och inkludera information om <strong style={{ color: "#b8cad8" }}>vilken app du använder</strong>, din <strong style={{ color: "#b8cad8" }}>TV-modell</strong> och ditt <strong style={{ color: "#b8cad8" }}>ordernummer</strong>.
          </div>

          <RelatedDevices currentHref="/installationsguide/lg-smart-tv" />

        </div>
      </section>
    </GuideLayout>
  );
}