import type { Metadata } from "next";
import GuideLayout, {
  Step, MethodBadge, WarningBox, DeviceIntro, FAQ, RelatedDevices, SectionDivider,
} from "@/components/nordic/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import { guideBreadcrumb, guideArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "IPTV på Amazon Fire TV Stick – Installationsguide 2026 | Nordic IPTV",
  description: "Fullständig guide för att installera IPTV på Amazon Fire TV Stick. IPTV Smarters Pro rekommenderas. Två metoder: direkt från Amazon Store eller via Downloader-appen.",
};

const FAQS = [
  { q: "'App not Installed' / Appen installeras inte?", a: "Gå till Fire TV Steg 1 och se till att 'Appar från okända källor' verkligen är PÅ. Se också till att du har tillräckligt med ledigt lagringsutrymme på din Firestick." },
  { q: "Ogiltigt Användarnamn/Password eller Login failed?", a: "Det är det vanligaste felet. Dubbelkolla att du har skrivit in ditt användarnamn, lösenord och server-URL 100% korrekt." },
  { q: "Det buffrar eller bilden fryser?", a: "Fire TV Stick tar med ett snabbt nätverksanslutning. Anslut ett 50MHz Wi-Fi-nätverk och se till att du har stark signal. För bästa resultat, anslut via Ethernet-adapter." },
];

export default function AmazonFireTVPage() {
  return (
    <GuideLayout>
      <JsonLd data={[
        guideBreadcrumb("amazon-fire-tv-stick", "Amazon Fire TV Stick"),
        guideArticleSchema({
          slug: "amazon-fire-tv-stick",
          deviceLabel: "Amazon Fire TV Stick",
          headline: "IPTV på Amazon Fire TV Stick – Installationsguide 2026",
          description: "Fullständig guide för att installera IPTV på Amazon Fire TV Stick. IPTV Smarters Pro rekommenderas. Två metoder: direkt från Amazon Store eller via Downloader-appen.",
        }),
      ]} />
      <section style={{ background: "#07080e", padding: "48px 0 80px" }}>
        <div className="ni-container" style={{ maxWidth: 860 }}>

          <DeviceIntro
            icon="🔥"
            title="IPTV på Amazon Fire TV Stick"
            description="Välkommen! Amazon Fire TV Stick är ett kraftfullt och prisvärt alternativ för att strömma IPTV. Eftersoms vår rekommenderade app, IPTV Smarters Pro, inte finns i Amazons egna app-butik, måste vi installera den manuellt. Processen är enkel om du är redo för att följa stegen noggrant."
          />

          <WarningBox variant="orange">
            Se till att du har följande redo:
            <ul style={{ listStyle: "none", padding: 0, margin: "10px 0 0", display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Din Amazon Firestick, ansluten till TV och till ett stabil Wi-Fi-nätverk.</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>Dina abonnemangsuppgifter</strong> (Användarnamn, Lösenord och Server-URL) som du fick i ett e-postmeddelande från oss.</li>
            </ul>
          </WarningBox>

          <MethodBadge label="Metod 1: Från Hemskärmen (Rekommenderas)" variant="orange" />

          <Step num={1} title="Förbered din Firestick">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• På hemskärmen, navigera till <strong style={{ color: "#f0f6ff" }}>Inställningar</strong> (kugghjulsikonen uppe till höger).</li>
              <li>• Gå till <strong style={{ color: "#f0f6ff" }}>Min Fire TV</strong> → <strong style={{ color: "#f0f6ff" }}>Utvecklaralternativ</strong> (Developer Options).</li>
              <li>• (Ser du inte detta val? Gå till &quot;Om&quot; → Klicka på &quot;Fire TV Stick&quot; 7 gånger till ett meddelande visas. Gå sedan tillbaka och välj &quot;Utvecklaralternativ&quot; (ditt).</li>
              <li>• Aktivera både <strong style={{ color: "#f0f6ff" }}>ADB-debugging</strong> och <strong style={{ color: "#f0f6ff" }}>Appar från okända källor</strong> (Apps from Unknown Sources) så att de båda är som &quot;ÅR&quot;.</li>
            </ul>
          </Step>

          <Step num={2} title="Installera Downloader">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Downloader är ett verktyg som gör det möjligt att ladda ner filer direkt till din Firestick.</li>
              <li>1. Gå tillbaka till hemskärmen och välj <strong style={{ color: "#f0f6ff" }}>Sök-funktionen</strong> (Förstoringsglaset 🔍).</li>
              <li>2. Sök på &quot;Downloader&quot;. Välj appen (den har en orange ikon) och välj sökresultaten.</li>
              <li>3. Klicka på &quot;Hämta&quot; eller &quot;Installera&quot;.</li>
            </ul>
          </Step>

          <Step num={3} title="Ladda ner och installera IPTV Smarters Pro">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Nu använder vi Downloader för att installera vår IPTV-app.</li>
              <li>1. Öppna Downloader-appen, godkänn eventuella behörigheter (&apos;Allow&apos;).</li>
              <li>2. I rutan i appen, skriv in (eller klistra in) URL:en: <strong style={{ color: "#ff6b35" }}>https://iptvsmarters.com/smarters.apk</strong></li>
              <li>3. Klicka på &quot;Hämta&quot; (den har en orange ikon). Appen laddas ner.</li>
            </ul>
          </Step>

          <Step num={4} title="Logga in och börja titta">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Nu ansluter du IPTV Smarters Pro till dina kanaler, filmer och serier.</li>
              <li>• Gå till din Firestick-hemskärmen, navigera till ditt app-lista och öppna <strong style={{ color: "#f0f6ff" }}>IPTV Smarters Pro</strong>.</li>
              <li>• Acceptera användarvillkoren.</li>
              <li>• Välj <strong style={{ color: "#f0f6ff" }}>&quot;Login with Xtream Codes API&quot;</strong></li>
              <li>• Fyll i fältet med informationen från ditt e-postmeddelande:</li>
              <li style={{ paddingLeft: 16 }}>– <strong style={{ color: "#f0f6ff" }}>Any Name:</strong> Ditt val av namn, t.ex. NordicIPTVtv.</li>
              <li style={{ paddingLeft: 16 }}>– <strong style={{ color: "#f0f6ff" }}>Username:</strong> Ditt användarnamn.</li>
              <li style={{ paddingLeft: 16 }}>– <strong style={{ color: "#f0f6ff" }}>Password:</strong> Ditt lösenord.</li>
              <li style={{ paddingLeft: 16 }}>– <strong style={{ color: "#f0f6ff" }}>URL/Server:</strong> Din server-URL.</li>
              <li>• Klicka på <strong style={{ color: "#ff6b35" }}>&quot;Add User&quot;</strong>.</li>
              <li>• Grattis! Appen kommer nu att ladda dina kanaler, filmer och serier. Du är redo att börja titta!</li>
            </ul>
          </Step>

          <SectionDivider />

          <MethodBadge label="Metod 2: Logga in och börja Titta" variant="blue" />

          <Step num={1} title="Logga in med Xtream Codes API">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Gå till din Firestick-hemskärmen, navigera till ditt app-lista och öppna <strong style={{ color: "#f0f6ff" }}>IPTV Smarters Pro</strong>.</li>
              <li>• Acceptera användarvillkoren.</li>
              <li>• Välj <strong style={{ color: "#f0f6ff" }}>&quot;Login with Xtream Codes API&quot;</strong></li>
              <li>• Fyll i fält med informationen från ditt e-postmeddelande:</li>
              <li style={{ paddingLeft: 16 }}>– Any Name: Ditt val, t.ex. NordicIPTVtv.</li>
              <li style={{ paddingLeft: 16 }}>– Username: Ditt användarnamn.</li>
              <li style={{ paddingLeft: 16 }}>– Password: Ditt lösenord.</li>
              <li style={{ paddingLeft: 16 }}>– URL/Server: Din server-URL.</li>
              <li>• Klicka på <strong style={{ color: "#f0f6ff" }}>&quot;Add User&quot;</strong>.</li>
              <li>• Grattis! Appen kommer nu att ladda dina kanaler, filmer och serier. Du är redo att börja titta!</li>
            </ul>
          </Step>

          <FAQ items={FAQS} />

          <div style={{ marginTop: 32, padding: "16px 20px", background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", borderRadius: 8, fontSize: 14, color: "#7a90a8" }}>
            Om du behöver hjälp, kontakta vår support och inkludera information om <strong style={{ color: "#b8cad8" }}>vilken app du använder</strong> samt ditt <strong style={{ color: "#b8cad8" }}>ordernummer</strong> och din <strong style={{ color: "#b8cad8" }}>enhet</strong>.
          </div>

          <RelatedDevices currentHref="/installationsguide/amazon-fire-tv-stick" />

        </div>
      </section>
    </GuideLayout>
  );
}