import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, {
  Step, MethodBadge, WarningBox, DeviceIntro, FAQ, RelatedDevices, SectionDivider,
} from "@/components/nordic/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import { guideBreadcrumb, guideArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "IPTV på Samsung Smart TV – Komplett Installationsguide 2026 | Nordic IPTV",
  description: "Steg-för-steg guide för att installera IPTV på Samsung Smart TV. Tre metoder: Net Player (rekommenderas), IPTV Smarters Player och SmartOne IPTV. Fungerar på alla Samsung-modeller.",
};

const FAQS = [
  { q: "Appen kan inte installeras / Ingen tillgång?", a: "Om du inte hittar Net Player i Samsung App Store saknar du troligen en kompatibel firmwareversion. Gå till Inställningar → Support → Programvaruuppdatering och installera senaste firmware. Prova sedan att installera appen igen." },
  { q: "Ogiltigt Användarnamn/Lösenord eller Login failed?", a: "Det är det vanligaste felet. Dubbelkolla att du har skrivit in ditt användarnamn, lösenord och server-URL 100% korrekt – varje tecken spelar roll, inklusive https:// och eventuell port." },
  { q: "Det buffrar eller bilden fryser?", a: "Samsung Smart TV är känsliga för svag Wi-Fi-signal. Se till att din TV är nära routern. För bästa prestanda, anslut via Ethernet-kabel. Du kan även prova att byta server-URL i appinställningarna." },
  { q: "Kan jag installera IPTV Smarters Player direkt från Samsung Smart TV?", a: "Ja, IPTV Smarters Player finns i Samsung Apps Store på nyare modeller (2019+). Sök efter IPTV Smarters. På äldre modeller måste du använda Net Player eller SmartOne IPTV." },
];

export default function SamsungSmartTVPage() {
  return (
    <GuideLayout>
      <JsonLd data={[
        guideBreadcrumb("samsung-smart-tv", "Samsung Smart TV"),
        guideArticleSchema({
          slug: "samsung-smart-tv",
          deviceLabel: "Samsung Smart TV",
          headline: "IPTV på Samsung Smart TV – Komplett Installationsguide 2026",
          description: "Steg-för-steg guide för att installera IPTV på Samsung Smart TV. Tre metoder: Net Player (rekommenderas), IPTV Smarters Player och SmartOne IPTV. Fungerar på alla Samsung-modeller.",
        }),
      ]} />
      <section style={{ background: "#07080e", padding: "48px 0 80px" }}>
        <div className="ni-container" style={{ maxWidth: 860 }}>

          <DeviceIntro
            icon="🖥️"
            title="IPTV på Samsung Smart TV"
            description="Välkommen! Vi installerar IPTV på din moderna Samsung Smart TV på tre sätt. Vi rekommenderar alltid att du börjar med Method A. Följ stegen nedan för att komma igång."
          />

          <WarningBox variant="orange">
            <strong style={{ color: "#ff6b35" }}>Installationsguide för Net Player (Rekommenderas)</strong>
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
              <li>• På startskärmen kommer du att se din unika MAC-adress. Den ser ut ungefär så här: <strong style={{ color: "#ff6b35" }}>XX:XX:XX:XX:XX:XX</strong>.</li>
              <li>• Skriv ner eller kopiera denna adress.</li>
            </ul>
          </Step>

          <Step num={3} title="Ladda upp din spelista">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Öppna en webbläsare på din dator eller mobil och gå till följande adress: <strong style={{ color: "#ff6b35" }}>https://hotplayer.app/upload</strong></li>
              <li>• Fyll i formuläret på sidan:</li>
              <li style={{ paddingLeft: 16 }}>– I fältet <strong style={{ color: "#f0f6ff" }}>&quot;MAC&quot;</strong>, klistra in MAC-adressen från din TV.</li>
              <li style={{ paddingLeft: 16 }}>– I fältet <strong style={{ color: "#f0f6ff" }}>&quot;Link&quot;</strong>, klistra in den M3U-länk som du fick från oss i ditt välkomstmail.</li>
              <li style={{ paddingLeft: 16 }}>– Ge spelistan ett namn, t.ex. <strong style={{ color: "#f0f6ff" }}>&quot;NordIcIPTVtv&quot;</strong>.</li>
              <li>• Klicka på <strong style={{ color: "#f0f6ff" }}>&quot;Save&quot;</strong> (Spara).</li>
            </ul>
          </Step>

          <Step num={4} title="Starta om och titta">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Gå tillbaka till din Samsung TV och tryck på knappen <strong style={{ color: "#f0f6ff" }}>&quot;Refresh&quot;</strong> (Uppdatera) i Hot Player-appen.</li>
              <li>• Klicka på knappen <strong style={{ color: "#f0f6ff" }}>&quot;Nästa&quot;</strong> eller &quot;Installera&quot;.</li>
              <li>• Dina kanaler kommer nu att laddas in. Du är redo att börja titta!</li>
            </ul>
          </Step>

          <SectionDivider />

          <MethodBadge label="Metod B: Installera IPTV Smarters Player" variant="blue" />

          <Step num={1} title="Installera appen">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Starta din Samsung TV och tryck på <strong style={{ color: "#f0f6ff" }}>Smart Hub-knappen</strong> på fjärrkontrollen.</li>
              <li>• Navigera till <strong style={{ color: "#f0f6ff" }}>&quot;Apps&quot;</strong> (Appar).</li>
              <li>• Välj sök-ikonen (Förstoringsglaset) och sök efter <strong style={{ color: "#f0f6ff" }}>&quot;IPTV Smarters Player&quot;</strong>.</li>
              <li>• Välj appen från sökresultaten och klicka på <strong style={{ color: "#f0f6ff" }}>&quot;Installera&quot;</strong>.</li>
            </ul>
          </Step>

          <Step num={2} title="Öppna appen och välj inloggningsmetod">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• När installationen är klar, öppna appen.</li>
              <li>• Du kommer att presenteras med en välkomstskärm. Välj det rekommenderade alternativet: <strong style={{ color: "#f0f6ff" }}>&quot;Login with Xtream Codes API&quot;</strong>.</li>
            </ul>
          </Step>

          <Step num={3} title="Ange dina abonnemangsuppgifter">
            <p style={{ marginBottom: 8 }}>Det är det viktigaste steget. Fyll i fälten exakt som du fick dem i e-postmeddelandet från oss:</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• <strong style={{ color: "#f0f6ff" }}>Any Name:</strong> Ditt val av namn, t.ex. NordicIPTVtv.</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>Username (Användarnamn):</strong> Ditt användarnamn från oss.</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>Password (Lösenord):</strong> Ditt lösenord från oss.</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>URL/Server:</strong> Din server-URL.</li>
            </ul>
            <p style={{ marginTop: 8 }}>Klicka på <strong style={{ color: "#ff6b35" }}>&quot;Add User&quot;</strong>.</p>
          </Step>

          <Step num={4} title="Starta och börja titta">
            <p>Gratulerar! Appen kommer nu att ladda dina kanaler, filmer och serier. Du är redo att börja titta!</p>
          </Step>

          <SectionDivider />

          <MethodBadge label="Metod C: SmartOne IPTV (Alternativ)" variant="green" />

          <WarningBox variant="yellow">
            <strong style={{ color: "#ffd740" }}>Kostnad för Appen</strong>
            <p style={{ marginBottom: 0, marginTop: 6 }}>
              SmartOne IPTV erbjuder en 7-dagars gratis provperiod. Efter provperioden kan app-användaren kräva en engångsavgift för att låsa upp alla funktioner permanent. Denna betalning görs direkt i Samsung Galaxy Store och är separata från ditt IPTV-abonnemang hos oss.
            </p>
          </WarningBox>

          <Step num={1} title="Installera appen SmartOne IPTV">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Gå till din Samsung Galaxy Store.</li>
              <li>• Sök efter och installera <strong style={{ color: "#f0f6ff" }}>SmartOne IPTV</strong>.</li>
            </ul>
          </Step>

          <Step num={2} title="Öppna appen och logga in">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Öppna appen och välj <strong style={{ color: "#f0f6ff" }}>&quot;Login with Xtream Codes API&quot;</strong>.</li>
              <li>• Fyll i användarnamn, lösenord och server-URL från oss.</li>
              <li>• Klicka på <strong style={{ color: "#f0f6ff" }}>&quot;Add User&quot;</strong> och börja titta!</li>
            </ul>
          </Step>

          <FAQ items={FAQS} />

          <div style={{ marginTop: 32, padding: "16px 20px", background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", borderRadius: 8, fontSize: 14, color: "#7a90a8" }}>
            Om du behöver hjälp, kontakta vår support och inkludera information om <strong style={{ color: "#b8cad8" }}>vilken app du använder</strong>, din <strong style={{ color: "#b8cad8" }}>TV-modell</strong> och ditt <strong style={{ color: "#b8cad8" }}>ordernummer</strong> så hjälper vi dig.
          </div>

          <RelatedDevices currentHref="/installationsguide/samsung-smart-tv" />

        </div>
      </section>
    </GuideLayout>
  );
}