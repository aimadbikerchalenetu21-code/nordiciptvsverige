import type { Metadata } from "next";
import GuideLayout, {
  Step, MethodBadge, WarningBox, DeviceIntro, FAQ, RelatedDevices, SectionDivider,
} from "@/components/nordic/GuideLayout";

export const metadata: Metadata = {
  title: "IPTV på MAG Box (Alla Modeller) – Installationsguide 2026 | Nordic IPTV",
  description: "Fullständig guide för att installera IPTV på MAG Box (MAG 254, 322, 420, 524). Konfigurera portal-URL via systemmenyn. Kräver MAC-adressregistrering.",
};

const FAQS = [
  { q: "Felmeddelande 'STB Blocked' eller 'Your STB is blocked'?", a: "Det betyder att din MAC-adress inte är aktiverad hos oss. Dubbelkolla att du har skickat rätt MAC-adress och be oss aktivera den." },
  { q: "Felmeddelande 'Page loading error'?", a: "Din Portal-URL är felstavad. Gå tillbaka till Steg 3 och kontrollera att ingen siffra saknas, att du har rätt domännamn och att det inte finns stavningsfel." },
  { q: "Jag kommer inte in i 'System Settings'?", a: "Tänk på att, om skriven är tom, sätter du in ett lösenord och börjar trycka upprepade gånger på knappen 'MENU' eller 'SET' så fort du ser den första bilden på skärmen." },
  { q: "TV-guiden (EPG) fungerar inte?", a: "De flesta AutoScript-installerare EPG automatiskt. Om inte, kan du behöva installera 'EPG-importer'-pluginet och lägga till källan manuellt. Kontakta vår support för hjälp med detta." },
];

export default function MAGBoxPage() {
  return (
    <GuideLayout>
      <section style={{ background: "#07080e", padding: "48px 0 80px" }}>
        <div className="ni-container" style={{ maxWidth: 860 }}>

          <DeviceIntro
            icon="📦"
            title="IPTV på MAG Box (Alla Modeller)"
            description="Välkommen! Denna guide är designad för alla Inforce MAG-boxar, inklusive populära modeller som MAG 254, 322, 420 och 524. Installationen sker genom att konfigurera boxens inre portal, vilket är en snabb och pålitlig metod. Följ stegen noggrant."
          />

          <WarningBox variant="orange">
            <strong style={{ color: "#ff6b35" }}>⚠️ VIKTIGT: Skicka Oss Din MAC-Adress Först!</strong>
            <p style={{ marginTop: 10, marginBottom: 4 }}>
              För att vi ska kunna aktivera din MAG Box-prenumeration måste vi först registrera boxens unika MAC-adress i vårt system. Utan detta steg kan portalen inte fungera och du kommer att möta ett felmeddelande.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "flex", flexDirection: "column", gap: 8 }}>
              <li>▶ <strong style={{ color: "#f0f6ff" }}>Hitta din MAC-adress:</strong> Adressen sitter på ett klistermärke på undersidan av din MAG-box. Den börjar alltid med: <span style={{ color: "#ff6b35" }}>1A:7F: eller 00:1A:79:</span> – följt av XX:XX:XX.</li>
              <li>▶ <strong style={{ color: "#f0f6ff" }}>Skicka adressen till oss:</strong> Svara på det orderbekräftelse-mail och skriv in din fullständiga MAC-adress.</li>
              <li>▶ <strong style={{ color: "#f0f6ff" }}>Vänta på din Portal-URL:</strong> När vi har registrerat din MAC-adress skickar vi ett nytt e-postmeddelande till dig med din personliga Portal-URL. Du behöver denna länk för att kunna fortsätta med guiden.</li>
            </ul>
          </WarningBox>

          <MethodBadge label="Steg-för-Steg Installation" variant="orange" />

          <Step num={1} title="Anslut och Starta Din MAG Box">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Se till att du har följande redo:</li>
              <li style={{ paddingLeft: 16 }}>– Din MAG-box, ansluten till TV med en HDMI-kabel.</li>
              <li style={{ paddingLeft: 16 }}>– En stabil internetanslutning (trådbunden kabel direkt till routern rekommenderas starkt).</li>
              <li style={{ paddingLeft: 16 }}>– Din unika Portal-URL (som du fick från oss via e-post).</li>
              <li style={{ paddingLeft: 16 }}>– Fjärrkontrollen till din MAG Box.</li>
            </ul>
          </Step>

          <Step num={2} title="Öppna Din Portalen (Systeminställningar)">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Starta din MAG-box.</li>
              <li>• Nu är du i en enkel portal, starta om boxen och håll inne knappen under omstart.</li>
              <li>• Navigera till <strong style={{ color: "#f0f6ff" }}>Systeminställningar</strong>:</li>
              <li style={{ paddingLeft: 16 }}>– Tryck på <strong style={{ color: "#f0f6ff" }}>SET</strong> eller <strong style={{ color: "#f0f6ff" }}>MENU</strong>-knappen på fjärrkontrollen i flera sekunder för att komma in i den inre portalen (System Settings).</li>
            </ul>
          </Step>

          <Step num={3} title="Konfigurera Serverinställningar">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Navigera med piltangenterna på din fjärrkontroll.</li>
              <li>1. Välj <strong style={{ color: "#f0f6ff" }}>&quot;Servers and Portals&quot;</strong> (eller &quot;Servers&quot;).</li>
              <li>2. Välj <strong style={{ color: "#f0f6ff" }}>&quot;Portals&quot;</strong>.</li>
            </ul>
          </Step>

          <Step num={4} title="Ange Dina Portal-uppgifter">
            <p style={{ marginBottom: 10 }}>Detta är det viktigaste steget. Var mycket noggrann.</p>
            <p style={{ marginBottom: 8 }}>Du kommer att se fält för &quot;Portal 1&quot; och &quot;Portal 2&quot;. Konfigurera &quot;Portal 1&quot; så här:</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• <strong style={{ color: "#f0f6ff" }}>Portal Name:</strong> Ditt val (vi rekommenderar ett namn du känner igen, t.ex. Sverige IPTV).</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>Portal URL:</strong> Skriv in den URL du fick från oss via e-postmeddelandet. Var uppmärksam på alla tecken (http://, punkter, snedstreck och stavning). Exempel: <span style={{ color: "#ff6b35" }}>http://line.example.com/c</span></li>
              <li>• 1. När du har fyllt i dessa fält, tryck på &quot;OK&quot; för att spara.</li>
              <li>• 2. Tryck sedan på &quot;EXIT&quot;-knappen på fjärrkontrollen för att gå tillbaka till föregående meny (&quot;Servers and Portals&quot;).</li>
            </ul>
          </Step>

          <Step num={5} title="Spara och Starta Om">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Nu måste du spara alla ändringar och starta om enheten.</li>
              <li>• 1. Tryck på &quot;EXIT&quot;-knappen för att komma till &quot;System Settings&quot;.</li>
              <li>• 2. Välj alternativet &quot;Reboot device&quot; och tryck på &quot;OK&quot;.</li>
              <li>• 3. Bekräfta att du vill starta om genom att välja &quot;OK&quot; igen.</li>
            </ul>
          </Step>

          <Step num={6} title="Njut av din Underhållning!">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Din MAG-box kommer nu att starta om och automatiskt ladda portalen du precis lade till. Om din MAC-adress är korrekt aktiverad hos oss, kommer kanalerna att visas. Detta kan ta en minut att färre gånger.</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>Password (Lösenord):</strong> Ditt lösenord.</li>
              <li>• Klicka på <strong style={{ color: "#f0f6ff" }}>&quot;Next&quot;</strong> (Nästa).</li>
              <li>• Appen kommer nu att anslutas och starta om spelistan. Du är nu redo att börja titta!</li>
            </ul>
          </Step>

          <SectionDivider />

          <FAQ items={FAQS} />

          <div style={{ marginTop: 32, padding: "16px 20px", background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", borderRadius: 8, fontSize: 14, color: "#7a90a8" }}>
            Om du behöver hjälp, kontakta vår support och inkludera ditt <strong style={{ color: "#b8cad8" }}>ordernummer</strong> och din <strong style={{ color: "#b8cad8" }}>MAC-adress</strong> så hjälper vi dig snabbt.
          </div>

          <RelatedDevices currentHref="/installationsguide/mag-box" />

        </div>
      </section>
    </GuideLayout>
  );
}