import type { Metadata } from "next";
import GuideLayout, {
  Step, MethodBadge, WarningBox, DeviceIntro, FAQ, RelatedDevices, SectionDivider,
} from "@/components/nordic/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import { guideBreadcrumb, guideArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "IPTV på Enigma2 (Zgemma, VU+, Dreambox) – Guide 2026 | Nordic IPTV",
  description: "Fullständig guide för att installera IPTV på Enigma2-boxar som Zgemma, VU+ och Dreambox. AutoScript via SSH/Telnet (rekommenderas) eller manuell M3U/FTP-installation.",
};

const FAQS = [
  { q: "Inga kanaler visas efter omstart?", a: "Det vanligaste felet är att AutoScript-körtarna inte har kopierats korrekt. Prova att köra kommandot igen och se till att hela raden, inklusive statusraden, kommer med." },
  { q: "Felmeddelande 'Permission denied' i terminalen?", a: "Det kan hända om skriptet inte har rättigheterna för att köras. Dubbelklicka att kommandot innehåller chmod 777 (eller 755) och att du kör det som root." },
  { q: "TV-guiden (EPG) fungerar inte?", a: "De flesta AutoScript-installerare installerar EPG automatiskt. Om inte, kan du behöva installera 'EPG-importer'-pluginet och lägga till källan manuellt. Kontakta vår support för hjälp med detta." },
];

export default function Enigma2Page() {
  return (
    <GuideLayout>
      <JsonLd data={[
        guideBreadcrumb("enigma2", "Enigma Box"),
        guideArticleSchema({
          slug: "enigma2",
          deviceLabel: "Enigma2 (Zgemma, VU+, Dreambox)",
          headline: "IPTV på Enigma2 (Zgemma, VU+, Dreambox) – Installationsguide 2026",
          description: "Fullständig guide för att installera IPTV på Enigma2-boxar som Zgemma, VU+ och Dreambox. AutoScript via SSH/Telnet (rekommenderas) eller manuell M3U/FTP-installation.",
        }),
      ]} />
      <section style={{ background: "#07080e", padding: "48px 0 80px" }}>
        <div className="ni-container" style={{ maxWidth: 860 }}>

          <DeviceIntro
            icon="⚙️"
            title="IPTV på Enigma2 (Zgemma, VU+, Dreambox)"
            description="Välkommen! Denna guide är avsedd för avancerade enheter som Enigma2, såsom Zgemma, VU+ och Dreambox. Installationen sker oftast genom att köra ett AutoScript via en terminal (Telnet/SSH), vilket automatiserar hela processen."
          />

          <MethodBadge label="Metod A: AutoScript via Terminal (Rekommenderas)" variant="orange" />

          <WarningBox variant="orange">
            <strong style={{ color: "#ff6b35" }}>⚙️ För avancerade användare</strong>
            <p style={{ marginTop: 8, marginBottom: 0 }}>
              Denna metod kräver tillgång till en terminal (SSH/Telnet). Den är snabb men rekommenderas enbart för användare som är bekanta med terminalkommandon. Följ noggrant.
            </p>
          </WarningBox>

          <Step num={1} title="Öppna din terminal">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Anslut till din Enigma2-box via SSH eller Telnet från din dator.</li>
              <li>• Standard inloggning är vanligtvis <strong style={{ color: "#ff6b35" }}>root</strong> utan lösenord.</li>
            </ul>
          </Step>

          <Step num={2} title="Kör AutoScript-kommandot">
            <p style={{ marginBottom: 10 }}>Klistra in hela raden i terminalen och tryck Enter:</p>
            <div style={{ background: "#0a0d15", border: "1px solid rgba(255,107,53,0.3)", borderRadius: 8, padding: "14px 18px", fontFamily: "monospace", fontSize: 13, color: "#ff8c5a", wordBreak: "break-all", marginBottom: 8 }}>
              wget -O /etc/enigma2/iptv.sh &quot;http://line.example.org/get.php?...&quot; &amp;&amp; chmod 777 /etc/enigma2/iptv.sh &amp;&amp; /etc/enigma2/iptv.sh
            </div>
            <p style={{ fontSize: 13, color: "#7a90a8" }}>Obs: Använd den fullständiga URL:en och kommandot som vi skickat till dig via e-post.</p>
          </Step>

          <Step num={3} title="Vänta på installationen">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Skriptet kommer att köras och installera din kanallis. Vänta tills processen är klar (du kommer att tillbaka till en tom kommandorad).</li>
            </ul>
          </Step>

          <Step num={4} title="Starta om din Enigma2-box">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• När den startat, gå till din bouquet (kanal-grupp) med namnet &quot;Sverige IPTV&quot; (eller liknande) som nu innehåller alla dina kanaler.</li>
              <li>• Du ska nu se en ny grupp (bouquet) med ett namn som innehåller ditt abonnemangsnamn.</li>
              <li>• När den har startat, gå till din bouquet. Du ska nu se dina kanaler!</li>
            </ul>
          </Step>

          <SectionDivider />

          <MethodBadge label="Metod B: Manuell Installation med M3U-fil (Avancerat)" variant="blue" />

          <WarningBox variant="yellow">
            <strong style={{ color: "#ffd740" }}>Manuell installation</strong>
            <p style={{ marginTop: 8, marginBottom: 0 }}>
              Denna metod är mer komplicerad och rekommenderas enbart för Enigma2 av någon anledning inte fungera:
            </p>
          </WarningBox>

          <Step num={1} title="Hämta M3U-filen">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Använd ett program som DreamboxEDIT eller ett FTP-klient (t.ex. FileZilla) för att ansluta till din box.</li>
              <li>• Använd ett FTP-klient (t.ex. FileZilla) för att ansluta till din box (om du gör detta från din dator).</li>
              <li>• Ladda ner din konverterade bouquet-filerna och placera dem i mappen <strong style={{ color: "#f0f6ff" }}>/etc/enigma2</strong> på din box.</li>
              <li>• Starta om din box för att ladda dem.</li>
            </ul>
          </Step>

          <Step num={2} title="Kontakta support vid behov">
            <p style={{ color: "#7a90a8" }}>
              Den manuella installationen är avancerad. Kontakta vår support vid behov – vi hjälper dig med stegen.
            </p>
          </Step>

          <FAQ items={FAQS} />

          <div style={{ marginTop: 32, padding: "16px 20px", background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", borderRadius: 8, fontSize: 14, color: "#7a90a8" }}>
            Om du behöver hjälp, kontakta vår support och inkludera din <strong style={{ color: "#b8cad8" }}>box-modell</strong> och ditt <strong style={{ color: "#b8cad8" }}>ordernummer</strong> så hjälper vi dig.
          </div>

          <RelatedDevices currentHref="/installationsguide/enigma2" />

        </div>
      </section>
    </GuideLayout>
  );
}