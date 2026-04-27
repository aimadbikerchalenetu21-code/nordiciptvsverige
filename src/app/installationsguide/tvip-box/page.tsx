import type { Metadata } from "next";
import GuideLayout, {
  Step, MethodBadge, WarningBox, DeviceIntro, FAQ, RelatedDevices,
} from "@/components/nordic/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import { guideBreadcrumb, guideArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "IPTV på TVIP Box – Installationsguide 2026 | Nordic IPTV Sverige",
  description: "Komplett guide för att installera IPTV på TVIP Box. Portal-baserad installation med MAC-adressregistrering. Snabb och stabil konfiguration.",
};

const FAQS = [
  { q: "Portal error – vad ska jag göra?", a: "Om du kan skärm felet med 'Portal error', prova följande: 1) Kontrollera att Portal-URL:en är 100% korrekt. Gå tillbaka till Steg 3 och kontrollera att varje tecken är korrekt inskrivet. 2) Din IP-adress kan vara blockerad. Koppla in en router om och starta TVIP-boxen igen." },
  { q: "Felmeddelande 'Kontakta Oss'", a: "Om det finns ett meddelande om att du ska kontakta oss, betyder det att din MAC-adress inte är aktiverad. Kontakta vår support med din MAC-adress och ditt ordernummer." },
  { q: "Jag kommer inte in i 'System Settings'?", a: "Tänk om att, om boxen är tom, sätter du in ett lösenord och börjar trycka upprepade gånger på knappen 'SET' eller 'MENU' så fort du ser den första bilden på skärmen." },
  { q: "Dubbelklick att Portal-URL:en är korrekt. Gå tillbaka till Steg 3 och kontrollera att ingen siffra saknas?", a: "Se till att du har angett hela URL-adressen inkl. http:// och eventuell port. Kontakta oss om problemet kvarstår." },
];

export default function TVIPBoxPage() {
  return (
    <GuideLayout>
      <JsonLd data={[
        guideBreadcrumb("tvip-box", "TVIP Box"),
        guideArticleSchema({
          slug: "tvip-box",
          deviceLabel: "TVIP Box",
          headline: "IPTV på TVIP Box – Installationsguide 2026",
          description: "Komplett guide för att installera IPTV på TVIP Box. Portal-baserad installation med MAC-adressregistrering. Snabb och stabil konfiguration.",
        }),
      ]} />
      <section style={{ background: "#07080e", padding: "48px 0 80px" }}>
        <div className="ni-container" style={{ maxWidth: 860 }}>

          <DeviceIntro
            icon="📺"
            title="IPTV på TVIP Box"
            description="Välkommen till vår kompletta guide för TVIP Box! Denna enhet är kraftfull och stabil, och använder en portal-länk för att ge dig tillgång till hela vårt utbud. Följ stegen nedan noggrant för en snabb och problemfri installation."
          />

          <WarningBox variant="orange">
            <strong style={{ color: "#ff6b35" }}>⚠️ VIKTIGT: Skicka Oss Din MAC-Adress Först!</strong>
            <p style={{ marginTop: 10, marginBottom: 4 }}>
              För att vi ska kunna aktivera din TVIP-box-prenumeration måste vi först registrera boxens unika MAC-adress i vårt system. Utan detta steg kan portalen inte fungera.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "flex", flexDirection: "column", gap: 8 }}>
              <li>🔵 <strong style={{ color: "#f0f6ff" }}>Hitta din MAC-adress:</strong> Adressen finns på ett klistermärke under din TVIP Box. Den börjar alltid med: <span style={{ color: "#ff6b35" }}>1A:7F: eller 00:1A:</span> – följt av XX.XX.XX.</li>
              <li>🔵 <strong style={{ color: "#f0f6ff" }}>Du kan även hitta den här:</strong> Starta din TVIP Box och gå till Systeminställningar under &quot;Nätverksinformation&quot;.</li>
              <li>🔵 <strong style={{ color: "#f0f6ff" }}>Skicka adressen till oss:</strong> Svara på ditt orderbekräftelse-mail och skriv in MAC-adressen. Du behöver denna länk för att fortsätta med guiden.</li>
            </ul>
          </WarningBox>

          <MethodBadge label="Steg-för-Steg Installation" variant="orange" />

          <Step num={1} title="Anslut och starta din TVIP Box">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Se till att du har följande redo:</li>
              <li style={{ paddingLeft: 16 }}>– Din TVIP-box, ansluten till TV med en HDMI-kabel.</li>
              <li style={{ paddingLeft: 16 }}>– En stabil internetanslutning (trådbunden kabel rekommenderas starkt).</li>
              <li style={{ paddingLeft: 16 }}>– Din unika Portal-URL (som du fick från oss via e-post).</li>
              <li style={{ paddingLeft: 16 }}>– Fjärrkontrollen till din TVIP Box.</li>
              <li>• Anslut nätverkskabeln till din TVIP Box och en ledig HDMI-port på din TV.</li>
              <li>• Anslut HDMI-kabeln från boxen till en ledig HDMI-port på din TV.</li>
              <li>• Sätt på boxen och din TV. Vänta tills hemskärmen visas.</li>
              <li>• Starta om boxen om det behövs.</li>
            </ul>
          </Step>

          <Step num={2} title="Öppna Systeminställningarna">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Använd fjärrkontrollen för att navigera.</li>
              <li>• Gå till <strong style={{ color: "#f0f6ff" }}>Hem (Main Menu)</strong>.</li>
              <li>• Välj <strong style={{ color: "#f0f6ff" }}>&quot;Settings&quot;</strong> (ofta skrivet som &quot;Inställningar&quot;).</li>
              <li>• Om du använder en äldre box, gå till nätverket och kontrollera att du är ansluten till internet (Wi-Fi eller LAN).</li>
            </ul>
          </Step>

          <Step num={3} title="Konfigurera IPTV-portalen">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• Navigera med piltangenterna.</li>
              <li>1.1 &quot;Settings&quot;, navigera till sektionen &quot;TV Source&quot; (eller &quot;Brandad&quot;).</li>
              <li>2. Under &quot;TV Source&quot;, välj <strong style={{ color: "#f0f6ff" }}>&quot;IPTV&quot;</strong>.</li>
              <li>3. Välj <strong style={{ color: "#f0f6ff" }}>&quot;Portal Settings&quot;</strong> eller <strong style={{ color: "#f0f6ff" }}>&quot;Add Portal&quot;</strong>.</li>
            </ul>
          </Step>

          <Step num={4} title="Ange Dina Portal-uppgifter">
            <p style={{ marginBottom: 10 }}>Ange följande information i fälten. Var mycket noggrann.</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• <strong style={{ color: "#f0f6ff" }}>Portal URL:</strong> Skriv in den URL du fick från oss via e-postmeddelandet. Var uppmärksam på punkter, snedstreck och stavning. Exempel: <span style={{ color: "#ff6b35" }}>http://line.example.com/c</span></li>
              <li>• <strong style={{ color: "#f0f6ff" }}>Portal Name:</strong> Ditt val till något du känner igen, t.ex. NordIcIPTVtv.</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>Use as default:</strong> Sätt till att denna installation är inställd på <strong style={{ color: "#f0f6ff" }}>&quot;ja&quot;</strong>.</li>
              <li>• Tryck på <strong style={{ color: "#f0f6ff" }}>&quot;OK&quot;</strong> för att spara inställningarna.</li>
            </ul>
          </Step>

          <Step num={5} title="Starta om Boxen">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• För att de nya inställningarna ska laddas måste boxen startas om.</li>
              <li>• Gå till huvudmenyn (Hem-inställningarna).</li>
              <li>• Hitta alternativet för att starta om (Reboot/Restart). Du kan även hålla inne strömknappen på fjärrkontrollen och välja &quot;Restart&quot;.</li>
              <li>• Boxen kommer nu att starta om.</li>
            </ul>
          </Step>

          <Step num={6} title="Njut av din IPTV-upplevelse">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• När boxen har startat om kommer den automatiskt att ladda portalen du precis lade till och börja hämta kanallistorna.</li>
              <li>• Du är nu redo att använda din live-kanaler, filmer VOD och serier.</li>
              <li>• Använd fjärrkontrollen för att bläddra mellan kanaler, filmer VOD och serier.</li>
            </ul>
          </Step>

          <FAQ items={FAQS} />

          <div style={{ marginTop: 32, padding: "16px 20px", background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", borderRadius: 8, fontSize: 14, color: "#7a90a8" }}>
            Om det fortfarande inte fungerar, kontakta vår support och inkludera ditt <strong style={{ color: "#b8cad8" }}>ordernummer</strong> och din <strong style={{ color: "#b8cad8" }}>MAC-adress</strong> så hjälper vi dig snabbt.
          </div>

          <RelatedDevices currentHref="/installationsguide/tvip-box" />

        </div>
      </section>
    </GuideLayout>
  );
}