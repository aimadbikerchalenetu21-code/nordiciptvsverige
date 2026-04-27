import type { Metadata } from "next";
import GuideLayout, {
  Step, MethodBadge, WarningBox, DeviceIntro, FAQ, RelatedDevices,
} from "@/components/nordic/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import { guideBreadcrumb, guideArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "IPTV på Formuler med MyTVOnline 2 – Installationsguide 2026 | Nordic IPTV",
  description: "Komplett guide för att installera IPTV på Formuler-box med MyTVOnline 2-appen. Portal-baserad installation via MAC-adress. Alla Formuler-modeller stöds.",
};

const FAQS = [
  { q: "Felmeddelande 'STB Blocked' eller 'Device Not Authorized'?", a: "Det betyder att din Formuler-box MAC-adress inte är aktiverad hos oss. Dubbelkolla att du har skickat rätt adress (som visas i appen med 'B') och kontakta oss för att aktivera den." },
  { q: "Inga kanaler laddas eller det tar för lång tid?", a: "Starta om din Formuler-box och routern. Vänta 30 sekunder och starta om all. Kontrollera även din internetanslutning. Gå till fliken Anslutning i MyTVOnline 2 och kontrollera din nätverksanslutning." },
  { q: "Hur uppdaterar jag kanallistorna?", a: "Gå till huvudmenyn i MyTVOnline 2 > Connections > Välj din portal > Klicka på 'Refresh'." },
  { q: "TV-guiden (EPG) är tom?", a: "EPG-guiden kan ta upp till 10 minuter att ladda första gången. Om den fortfarande är tom efter det, kontakta vår support." },
];

export default function FormulerPage() {
  return (
    <GuideLayout>
      <JsonLd data={[
        guideBreadcrumb("formuler-mytvonline-2", "Formuler-MyTVOnline 2"),
        guideArticleSchema({
          slug: "formuler-mytvonline-2",
          deviceLabel: "Formuler med MyTVOnline 2",
          headline: "IPTV på Formuler med MyTVOnline 2 – Installationsguide 2026",
          description: "Komplett guide för att installera IPTV på Formuler-box med MyTVOnline 2-appen. Portal-baserad installation via MAC-adress. Alla Formuler-modeller stöds.",
        }),
      ]} />
      <section style={{ background: "#07080e", padding: "48px 0 80px" }}>
        <div className="ni-container" style={{ maxWidth: 860 }}>

          <DeviceIntro
            icon="📡"
            title="IPTV på Formuler med MyTVOnline 2"
            description="Välkommen till vår kompletta guide för Formuler Box! Denna enhet är kraftfull och stabil, och använder en portal-länk för att ge dig tillgång till hela vårt utbud. Följ stegen nedan noggrant för en snabb och problemfri installation."
          />

          <WarningBox variant="orange">
            <strong style={{ color: "#ff6b35" }}>⚠️ VIKTIGT: Skicka Oss Din MAC-Adress Först!</strong>
            <p style={{ marginTop: 10, marginBottom: 4 }}>
              För att vi ska kunna aktivera ditt abonnemang för din Formuler-box måste vi först registrera boxens unika MAC-adress i vårt system. Utan detta steg kan portalen inte fungera och du kommer till ett felmeddelande.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "flex", flexDirection: "column", gap: 8 }}>
              <li>🔵 <strong style={{ color: "#f0f6ff" }}>Starta MyTVOnline 2</strong> på din Formuler-box.</li>
              <li>🔵 <strong style={{ color: "#f0f6ff" }}>Lägg till en ny Portal:</strong> På startskärmen, tryck på <strong style={{ color: "#f0f6ff" }}>+ Add Portal</strong>.</li>
              <li>🔵 <strong style={{ color: "#f0f6ff" }}>Hitta din MAC-adress:</strong> På denna sida ser du din unika ID-adress, med formatet: <span style={{ color: "#ff6b35" }}>XX:XX:XX:XX:XX:XX</span></li>
              <li>🔵 <strong style={{ color: "#f0f6ff" }}>Skicka adressen till oss:</strong> Svara på ditt orderbekräftelse-mail och skriv in MAC-adressen.</li>
            </ul>
          </WarningBox>

          <MethodBadge label="Steg-för-Steg Installation" variant="orange" />

          <Step num={1} title="Öppna MyTVOnline 2">
            <p>När du har fått din Portal-URL från oss är du redo att börja. Gå till fliken <strong style={{ color: "#f0f6ff" }}>Connections</strong> och välj sedan <strong style={{ color: "#f0f6ff" }}>+ Add Portal</strong>.</p>
          </Step>

          <Step num={2} title="Lägg till en ny Portal">
            <p style={{ marginBottom: 10 }}>Om du inte har en portal ännu, väljer du att lägga till en portal. Använd fjärrkontrollen för att navigera.</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>1. Om det är första gången du använder appen, kommer du direkt till ett nytt portalformulär.</li>
              <li>2. Om du redan har en portal, gå till huvudmenyn och välj <strong style={{ color: "#f0f6ff" }}>&quot;Connections&quot;</strong> och sedan <strong style={{ color: "#f0f6ff" }}>&quot;+ Add Portal&quot;</strong>.</li>
            </ul>
          </Step>

          <Step num={3} title="Ange Dina Portal-uppgifter">
            <p style={{ marginBottom: 10 }}>Detta är det viktigaste steget. Var mycket noggrann.</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• <strong style={{ color: "#f0f6ff" }}>Portal Nickname:</strong> Ditt val till något du känner igen, t.ex. Sverige IPTV.</li>
              <li>• <strong style={{ color: "#f0f6ff" }}>Portal URL:</strong> Skriv in den URL du fick från oss via e-postmeddelandet. Var uppmärksam på punkter, snedstreck och stavning. Exempel: <span style={{ color: "#ff6b35" }}>http://line.example.com/c</span></li>
              <li>Du behöver INTE ange ett användarnamn eller ett lösenord för en portal-anslutning.</li>
            </ul>
          </Step>

          <Step num={4} title="Anslut">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>• När du har fyllt i uppgifterna korrekt, klicka på den gröna knappen <strong style={{ color: "#00e676" }}>&quot;Connect&quot;</strong>.</li>
              <li>• Appen kommer nu att ansluta till servern och hämta alla dina börja laddas kanaler, filmer och serier. Det kan ta några minuter första gången. Klart!</li>
            </ul>
          </Step>

          <FAQ items={FAQS} />

          <div style={{ marginTop: 32, padding: "16px 20px", background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", borderRadius: 8, fontSize: 14, color: "#7a90a8" }}>
            Om du behöver hjälp, kontakta vår support och inkludera ditt <strong style={{ color: "#b8cad8" }}>ordernummer</strong> och din <strong style={{ color: "#b8cad8" }}>MAC-adress (ID)</strong> så hjälper vi dig snabbt.
          </div>

          <RelatedDevices currentHref="/installationsguide/formuler-mytvonline-2" />

        </div>
      </section>
    </GuideLayout>
  );
}