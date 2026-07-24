import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: true }
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliche Informationen"
        title="Datenschutzerklärung"
        intro="Informationen zur Verarbeitung personenbezogener Daten auf dieser Website."
        cta={false}
      />
      <section className="bg-ivory py-16 sm:py-20">
        <div className="container-max">
          <div className="prose-legal max-w-4xl rounded-[2rem] border border-ink/10 bg-white/65 p-7 sm:p-10">
            <h2>1. Verantwortliche</h2>
            <p>
              Stephanie Meisner<br />
              Loßbergstraße 12<br />
              96106 Ebern<br />
              E-Mail:{" "}
              <a href="mailto:Meisner.bamberg@freenet.de">Meisner.bamberg@freenet.de</a>
            </p>

            <h2>2. Hosting und Server-Protokolle</h2>
            <p>
              Diese Website wird über Vercel bereitgestellt. Beim Aufruf können technisch
              erforderliche Daten verarbeitet werden, insbesondere IP-Adresse, Datum und Uhrzeit
              des Zugriffs, angeforderte Datei, Referrer, Browser- und Betriebssystemangaben.
              Die Verarbeitung erfolgt zur sicheren und stabilen Bereitstellung der Website auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p>
              Anbieter ist Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. Soweit
              Daten in Drittländer übermittelt werden, erfolgt dies auf Grundlage der hierfür
              vorgesehenen datenschutzrechtlichen Garantien des Anbieters.
            </p>

            <h2>3. Kontaktaufnahme</h2>
            <p>
              Wenn Sie per E-Mail oder Kontaktformular anfragen, werden Ihre Angaben zur
              Bearbeitung der Anfrage und für mögliche Anschlussfragen verarbeitet. Grundlage
              ist Art. 6 Abs. 1 lit. b DSGVO bei vorvertraglicher Kommunikation oder Art. 6
              Abs. 1 lit. f DSGVO bei sonstigen Anfragen.
            </p>
            <p>
              Für den Formularversand kann der Dienst Resend, Resend Inc., 2261 Market Street
              #5039, San Francisco, CA 94114, USA, eingesetzt werden. Ist dieser Dienst nicht
              aktiviert, weist das Formular auf die direkte Kontaktaufnahme per E-Mail hin.
            </p>
            <p>
              Bitte übermitteln Sie über das Formular keine Gesundheitsdaten, umfangreichen
              Fallunterlagen oder nicht erforderlichen Informationen über andere Personen.
            </p>

            <h2>4. Speicherdauer</h2>
            <p>
              Personenbezogene Daten werden nur so lange gespeichert, wie dies zur Bearbeitung
              Ihrer Anfrage oder zur Erfüllung gesetzlicher Aufbewahrungspflichten erforderlich
              ist. Danach werden sie gelöscht oder gesperrt.
            </p>

            <h2>5. Cookies, Analyse und externe Medien</h2>
            <p>
              Diese Website setzt derzeit keine optionalen Analyse- oder Marketing-Cookies ein.
              Es werden keine externen Karten, Videos oder Social-Media-Inhalte automatisch
              geladen.
            </p>

            <h2>6. Ihre Rechte</h2>
            <p>Sie haben nach Maßgabe der gesetzlichen Voraussetzungen insbesondere das Recht auf:</p>
            <ul>
              <li>Auskunft über verarbeitete personenbezogene Daten,</li>
              <li>Berichtigung unrichtiger Daten,</li>
              <li>Löschung oder Einschränkung der Verarbeitung,</li>
              <li>Datenübertragbarkeit,</li>
              <li>Widerspruch gegen bestimmte Verarbeitungen sowie</li>
              <li>Widerruf einer Einwilligung mit Wirkung für die Zukunft.</li>
            </ul>

            <h2>7. Beschwerderecht</h2>
            <p>
              Sie können sich bei einer Datenschutzaufsichtsbehörde beschweren. Zuständig kann
              insbesondere das Bayerische Landesamt für Datenschutzaufsicht, Promenade 18,
              91522 Ansbach, sein.
            </p>

            <h2>8. Stand</h2>
            <p>Stand dieser Datenschutzerklärung: Juli 2026.</p>
          </div>
        </div>
      </section>
    </>
  );
}
