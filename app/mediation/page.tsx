import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

const iconClass = "h-10 w-10 text-primary-300";

const IconHeart = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 21s-7-4.5-7-10a5 5 0 0 1 9-2.6A5 5 0 0 1 19 11c0 5.5-7 10-7 10Z" />
  </svg>
);

const IconHome = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="m4 10 8-6 8 6" />
    <path d="M6 9v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9" />
    <path d="M10 19v-4h4v4" />
  </svg>
);

const IconPeople = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="8" cy="7" r="2.7" />
    <circle cx="16" cy="9" r="2.7" />
    <path d="M4 18c0-2.2 1.8-4 4-4h1c2.2 0 4 1.8 4 4" />
    <path d="M12 17c.5-.6 1.3-1 2.2-1H16c1.9 0 3.5 1.6 3.5 3.5" />
  </svg>
);

export const metadata: Metadata = {
  title: "Mediation",
  description:
    "Strukturierte Mediation im Familien- und Zivilrecht: Interessen sichtbar machen, Optionen entwickeln und tragfähige Vereinbarungen festhalten."
};

export default function Page() {
  return (
    <>
      <Section
        variant="subtle"
        as="h1"
        title="Mediation"
        intro="Konflikte lösen, bevor sie eskalieren: schlanker Prozess, klare Regeln, dokumentierte Ergebnisse."
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-6 text-white/85 leading-relaxed">
            <p>
              Ich moderiere die Sitzungen, halte Interessen und Optionen fest und sorge dafür, dass Ergebnisse tragfähig dokumentiert
              werden. Weniger Eskalation, klarer Fahrplan, nachvollziehbare Kosten.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-5 rounded bg-primary-400" aria-hidden />
                <span>Gemeinsame Regeln, Themenliste und Zeitplan zu Beginn fixieren</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-5 rounded bg-primary-400" aria-hidden />
                <span>Sitzungen moderieren, Optionen und Folgen klar machen</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-5 rounded bg-primary-400" aria-hidden />
                <span>Ergebnisse schriftlich sichern: Vereinbarungen, Verantwortlichkeiten, Termine</span>
              </li>
            </ul>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-4">
                <h3 className="text-white font-semibold">Strukturiert</h3>
                <p className="text-sm text-white/70">Kick-off, Phasenplan und Protokoll pro Sitzung.</p>
              </div>
              <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-4">
                <h3 className="text-white font-semibold">Rechtlich belastbar</h3>
                <p className="text-sm text-white/70">Vereinbarungen verständlich einordnen und sauber formulieren.</p>
              </div>
            </div>
          </div>
          <div className="space-y-5 rounded-2xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <div className="rounded-lg border border-[#1f3358] bg-[#10253f] px-4 py-3">
              <div className="text-sm text-white/70">Ausrichtung</div>
              <div className="text-lg font-semibold text-white">Familien- und Zivilrecht</div>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white">Ablauf der Mediation</h3>
            <p className="text-white/80">
              Kick-off, Themenliste, gemeinsame Regeln, dann moderierte Sitzungen mit klaren Protokollen und Abschlussvereinbarung.
            </p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Vorbereitung: Ziele, Rahmenbedingungen und Zeitplan abstimmen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Sitzungen moderieren, Optionen erarbeiten, Deadlocks auflösen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Ergebnisse dokumentieren, Umsetzungsschritte und Kontrollen vereinbaren</span>
              </li>
            </ul>
            <div>
              <Link href="/kontakt" className="no-underline" aria-label="Mediation anfragen">
                <Button className="w-full">Mediation anfragen</Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="pattern" title="Einsatzfelder der Mediation" align="center">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Familie & Trennung"
            text="Umgang, Unterhalt, Vermögen und Kommunikation strukturiert klären."
            icon={<IconHeart />}
          />
          <Card
            title="Erbengemeinschaft"
            text="Nachlass, Immobiliennutzung und Ausgleichszahlungen verständlich regeln."
            icon={<IconPeople />}
          />
          <Card
            title="Nachbarschaft & Eigentum"
            text="Lärm, Wegerecht, Grenzen und Nutzung mit klaren Zusagen entschärfen."
            icon={<IconHome />}
          />
        </div>
      </Section>

      <Section
        variant="contrast"
        title="Was eine gute Mediation ausmacht"
        intro="Weniger Druck, mehr Verbindlichkeit: nachvollziehbarer Prozess, klare Ergebnisse, realistische Umsetzung."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <h3 className="font-semibold text-white">Transparenter Prozess</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Fahrplan, Zeitbedarf und Kosten vorab klären. Jede Sitzung liefert ein kurzes Protokoll.
            </p>
          </div>
          <div className="rounded-2xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <h3 className="font-semibold text-white">Verbindliche Ergebnisse</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Vereinbarungen konkret, prüfbar und umsetzbar formulieren - mit Verantwortlichkeiten und Terminen.
            </p>
          </div>
          <div className="rounded-2xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <h3 className="font-semibold text-white">Eskalationsbremse</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Konflikte früh kanalisieren, damit Klage oder Vollstreckung nur als letzte Option dienen müssen.
            </p>
          </div>
        </div>
      </Section>

      <Section variant="contrast" align="center" title="Nächster Schritt">
        <div className="max-w-2xl mx-auto space-y-4 text-white/85">
          <p>Wir klären Ziele, Themen und Zeitplan - und starten mit einem strukturierten Kick-off.</p>
          <Link href="/kontakt" className="no-underline inline-flex">
            <Button size="lg">Kontakt aufnehmen</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
