import Section from "@/components/Section";
import Link from "next/link";
import Button from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kanzlei",
  description:
    "Kanzleiphilosophie, Mandatsaufnahme, Kontakt und Öffnungszeiten - Volljuristin Meisner in der Kanzlei Fischer (Standorte Haßfurt und Ebern)."
};

export default function Page() {
  return (
    <>
      <Section
        variant="contrast"
        as="h1"
        title="Kanzleiphilosophie"
        intro="Sachlich, klar, verlässlich. Wir arbeiten lösungsorientiert - mit Augenmaß, solider Dokumentation und konsequenter Fristenkontrolle."
      >
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <h3 className="font-semibold text-white">Transparenz</h3>
            <p className="mt-2 text-white/80">Verständliche Einschätzungen, nachvollziehbare Schritte, klare Kosten.</p>
          </div>
          <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <h3 className="font-semibold text-white">Struktur</h3>
            <p className="mt-2 text-white/80">Sauberes Vorgehen, dokumentierte Entscheidungen, verbindliche Rückmeldungen.</p>
          </div>
          <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <h3 className="font-semibold text-white">Nähe</h3>
            <p className="mt-2 text-white/80">Persönlich erreichbar in Haßfurt und Ebern - vor Ort oder digital.</p>
          </div>
        </div>
      </Section>

      <Section title="Kanzlei Fischer in Haßfurt / Ebern" intro="Standort, Erreichbarkeit und Sprechzeiten auf einen Blick.">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <h3 className="font-semibold text-white">Adresse & Kontakt</h3>
            <p className="mt-2 text-white/80">Schlesingerstr. 26<br />97437 Haßfurt</p>
            <p className="mt-3 text-white/80">Telefon: <a className="no-underline" href="tel:+499521950460">09521 - 950 460</a></p>
            <p className="text-white/80">Fax: 09521 - 950 461</p>
            <p className="mt-3 text-white/80">
              E-Mail: <a className="no-underline" href="mailto:anwaltskanzlei-fischer@t-online.de">anwaltskanzlei-fischer@t-online.de</a>
            </p>
          </div>
          <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <h3 className="font-semibold text-white">Öffnungszeiten</h3>
            <ul className="mt-3 space-y-2 text-white/80">
              <li>Mo - Fr: 08:00 - 12:00</li>
              <li>Mo - Do: 13:00 - 17:00</li>
              <li>Sprechstunde: nach Vereinbarung</li>
            </ul>
          </div>
          <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <h3 className="font-semibold text-white">Mandatsaufnahme</h3>
            <ol className="mt-3 list-decimal pl-5 text-white/80 space-y-2">
              <li>Kontakt: Telefon, E-Mail oder Kontaktformular</li>
              <li>Erstberatung: Sachverhalt, Ziele, Optionen und Risiken</li>
              <li>Strategie: Außergerichtliche Lösung prüfen, gerichtliche Durchsetzung vorbereiten</li>
            </ol>
          </div>
        </div>
      </Section>

      <Section title="Kosten & Erstberatung">
        <p className="text-white/80">
          Die Vergütung richtet sich regelmäßig nach dem Rechtsanwaltsvergütungsgesetz (RVG). Bei außergerichtlichen Mandaten sind Vergütungsvereinbarungen möglich. Sie erhalten vorab eine klare Einschätzung und Transparenz über Aufwand, Fristen und nächste Schritte.
        </p>
      </Section>

      <Section variant="contrast" align="center" title="Nächster Schritt">
        <div className="max-w-2xl mx-auto space-y-4 text-white/85">
          <p>Wir besprechen kurz Ihr Anliegen und vereinbaren den passenden Termin – vor Ort oder digital.</p>
          <Link href="/kontakt" className="no-underline inline-flex">
            <Button size="lg">Kontakt aufnehmen</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
