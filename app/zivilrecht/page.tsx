import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

const iconClass = "h-10 w-10 text-primary-300";

const IconContract = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="5" y="3" width="10" height="18" rx="2" />
    <path d="M9 7h4M9 11h4M9 15h2" />
    <path d="m15 8 4 4-4 4" />
  </svg>
);

const IconScale = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 3v18" />
    <path d="M6 6h12" />
    <path d="m7.5 6-3 7h6l-3-7Z" />
    <path d="m19.5 6-3 7h6l-3-7Z" />
    <path d="M3 13c0 2 2 4 4.5 4s4.5-2 4.5-4" />
    <path d="M12 13c0 2 2 4 4.5 4s4.5-2 4.5-4" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 21c5-2.5 8-5.5 8-10V6.5L12 3 4 6.5V11c0 4.5 3 7.5 8 10Z" />
    <path d="m9.5 12.5 1.5 1.5 3.5-4" />
  </svg>
);

const IconMoney = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="7" width="18" height="10" rx="2" />
    <path d="M7 12h10" />
    <path d="M7 9h0.01M17 15h0.01" />
  </svg>
);

export const metadata: Metadata = {
  title: "Zivilrecht",
  description:
    "Vertragsprüfung, Gewährleistung, Schadensersatz und Forderungseinzug - pragmatische Durchsetzung zivilrechtlicher Ansprüche."
};

export default function Page() {
  return (
    <>
      <Section
        variant="subtle"
        as="h1"
        title="Zivilrecht"
        intro="Zuverlässige Begleitung bei zivilrechtlichen Streitigkeiten - klarer Ablauf, saubere Dokumentation, realistische Optionen."
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-6 text-white/85 leading-relaxed">
            <p>
              Ich ordne Ihren Sachverhalt, sichere Fristen und halte Schriftverkehr und Nachweise strukturiert fest. So lassen sich
              Ansprüche fundiert begründen und Gegenargumente früh abfangen.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-4">
                <h3 className="text-white font-semibold">Vertrag</h3>
                <p className="text-sm text-white/70">Kauf-, Werk- und Dienstverträge prüfen, Mängel und Verzug sauber adressieren.</p>
              </div>
              <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-4">
                <h3 className="text-white font-semibold">Haftung</h3>
                <p className="text-sm text-white/70">Schaden beziffern, Nachweise sammeln, Vergleichschancen und Risiken klären.</p>
              </div>
              <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-4">
                <h3 className="text-white font-semibold">Forderung</h3>
                <p className="text-sm text-white/70">Mahnung, Verzug, gerichtliches Mahnverfahren und Vollstreckung koordinieren.</p>
              </div>
            </div>
          </div>
          <div className="space-y-5 rounded-2xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <div className="rounded-lg border border-[#1f3358] bg-[#10253f] px-4 py-3">
              <div className="text-sm text-white/70">Schwerpunkt</div>
              <div className="text-lg font-semibold text-white">Vertrag, Haftung, Forderung</div>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white">Erstberatung im Zivilrecht</h3>
            <p className="text-white/80">
              Unterlagen sichten, Risiken und Kosten besprechen, Fahrplan festlegen: Aufforderung, Vergleich oder gerichtliche Schritte.
            </p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Vertrag, Schriftverkehr und Fristen strukturiert sammeln</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Risiken, Kosten und Vergleichschancen transparent besprechen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Nächste Schritte: Aufforderung, Vergleich, Mahn- oder Klageverfahren</span>
              </li>
            </ul>
            <div>
              <Link href="/kontakt" className="no-underline" aria-label="Termin im Zivilrecht vereinbaren">
                <Button className="w-full">Termin vereinbaren</Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="pattern" title="Schwerpunkte im Zivilrecht" align="center">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            title="Kaufvertrag & Gewährleistung"
            text="Mängel dokumentieren, Nacherfüllung, Minderung oder Rücktritt durchsetzen."
            icon={<IconContract />}
          />
          <Card
            title="Dienst- und Werkvertrag"
            text="Leistungsstörungen, Verzug, Abnahme und Nachbesserung klar ordnen."
            icon={<IconContract />}
          />
          <Card
            title="Schadensersatz & Haftung"
            text="Ansprüche beziffern, Nutzungsausfall und Verdienstausfall verhandeln."
            icon={<IconShield />}
          />
          <Card
            title="Forderungsmanagement"
            text="Mahnung, Verzugsschaden, gerichtliches Mahnverfahren und Vollstreckung steuern."
            icon={<IconMoney />}
          />
        </div>
      </Section>

      <Section
        variant="contrast"
        title="Typische Situationen"
        intro="Klarer Fahrplan für Streitigkeiten im Alltag - mit belastbarer Dokumentation und konsequenter Umsetzung."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <h3 className="font-semibold text-white">Fehlgeschlagene Lieferung</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Mängel dokumentieren, Fristen setzen, Nacherfüllung oder Rücktritt absichern, Kostenersatz beziffern.
            </p>
          </div>
          <div className="rounded-2xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <h3 className="font-semibold text-white">Haftung nach Schaden</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Schriftwechsel mit Versicherern strukturieren, Gutachten beiziehen und Vergleichsmöglichkeiten ausloten.
            </p>
          </div>
          <div className="rounded-2xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <h3 className="font-semibold text-white">Offene Forderung</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Anspruch prüfen, sichere Mahnung erstellen, gerichtliches Mahnverfahren oder Klage mit Vollstreckung einleiten.
            </p>
          </div>
        </div>
      </Section>

      <Section variant="contrast" align="center" title="Nächster Schritt">
        <div className="max-w-2xl mx-auto space-y-4 text-white/85">
          <p>Kurze Einschätzung zu Vertrag, Fristen und Risiken - und ein klarer Plan für Aufforderung, Vergleich oder Klage.</p>
          <Link href="/kontakt" className="no-underline inline-flex">
            <Button size="lg">Kontakt aufnehmen</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
