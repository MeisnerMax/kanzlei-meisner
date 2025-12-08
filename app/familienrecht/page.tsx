import Section from "@/components/Section";
import Card from "@/components/Card";
import Link from "next/link";
import Button from "@/components/Button";
import type { Metadata } from "next";

const iconClass = "h-10 w-10 text-primary-300";

const IconBalance = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 3v18" />
    <path d="M6 6h12" />
    <path d="m7.5 6-3 7h6l-3-7Z" />
    <path d="m19.5 6-3 7h6l-3-7Z" />
    <path d="M3 13c0 2 2 4 4.5 4s4.5-2 4.5-4" />
    <path d="M12 13c0 2 2 4 4.5 4s4.5-2 4.5-4" />
  </svg>
);

const IconHeart = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 21s-7-4.5-7-10a5 5 0 0 1 9-2.6A5 5 0 0 1 19 11c0 5.5-7 10-7 10Z" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 21c5-2.5 8-5.5 8-10V6.5L12 3 4 6.5V11c0 4.5 3 7.5 8 10Z" />
    <path d="m9.5 12.5 1.5 1.5 3.5-4" />
  </svg>
);

const IconHome = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="m4 10 8-6 8 6" />
    <path d="M6 9v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9" />
    <path d="M10 19v-4h4v4" />
  </svg>
);

const IconHandshake = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="m3 12 4-4 5 5" />
    <path d="m21 12-4-4-5 5" />
    <path d="M7 16.5 9.5 14" />
    <path d="M17 16.5 14.5 14" />
    <path d="M9.5 14 12 16.5 14.5 14" />
  </svg>
);

export const metadata: Metadata = {
  title: "Familienrecht",
  description:
    "Begleitung bei Trennung und Scheidung, Unterhalt, Sorgerecht, Umgangsrecht und Zugewinnausgleich - sachlich und lösungsorientiert."
};

export default function Page() {
  return (
    <>
      <Section
        variant="subtle"
        as="h1"
        title="Familienrecht"
        intro="Sorgfältige Begleitung bei Trennung und Scheidung – mit Blick auf praktikable Lösungen und das Kindeswohl."
      >
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div className="space-y-4 text-white/85 leading-relaxed">
            <p>
              Ich strukturiere Ihren Sachverhalt, sichere Fristen und spreche Klartext zu Unterhalt, Vermögen und Umgang. Ziel ist eine
              tragfähige Lösung – einvernehmlich, wenn möglich; bestimmt vor Gericht, wenn nötig.
            </p>
            <ul className="space-y-3 text-white/85">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-5 rounded bg-primary-400" aria-hidden />
                <span>Trennung & Scheidung: Ablauf, Voraussetzungen, Vergleichsmöglichkeiten</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-5 rounded bg-primary-400" aria-hidden />
                <span>Unterhalt: Kindes- und Ehegattenunterhalt, Düsseldorfer Tabelle</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-5 rounded bg-primary-400" aria-hidden />
                <span>Sorgerecht & Umgang: Regelungen, Durchsetzung, Mediation</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-5 rounded bg-primary-400" aria-hidden />
                <span>Zugewinnausgleich und Vermögensaufteilung</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-5 rounded bg-primary-400" aria-hidden />
                <span>Wohnungszuweisung und Hausratsteilung</span>
              </li>
            </ul>
          </div>

          <div className="space-y-5 rounded-2xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <div className="rounded-lg border border-[#1f3358] bg-[#10253f] px-4 py-3">
              <div className="text-sm text-white/70">Erstkontakt</div>
              <div className="text-lg font-semibold text-white">Klare Schritte & Fristen</div>
            </div>
            <p className="text-white/80">
              Ich kläre Prioritäten, erforderliche Unterlagen und Optionen – inklusive Kosten und Chancen. Danach erhalten Sie einen
              Fahrplan für das Mediationsverfahren.
            </p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Unterlagen-Check: Verträge, Bescheide, Nachweise</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Optionen abwägen: Vergleich, Einigung, Durchsetzung</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Verbindliche nächste Schritte mit Zeitplan festlegen</span>
              </li>
            </ul>
            <div>
              <Link href="/kontakt" className="no-underline" aria-label="Termin im Familienrecht vereinbaren">
                <Button className="w-full">Termin vereinbaren</Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="pattern" title="Schwerpunkte im Familienrecht" align="center">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Trennung & Scheidung" text="Ablauf, Versorgungsausgleich, Zugewinnausgleich und Kosten im Blick." icon={<IconBalance />} />
          <Card title="Unterhalt" text="Kindes- und Ehegattenunterhalt berechnen, anpassen und durchsetzen." icon={<IconBalance />} />
          <Card title="Sorgerecht & Umgang" text="Regelungen treffen, umsetzen und bei Bedarf gerichtlich sichern." icon={<IconHeart />} />
          <Card title="Vermögen & Zugewinn" text="Vermögensaufstellung, Stichtage, Ausgleich berechnen und verhandeln." icon={<IconShield />} />
          <Card title="Hausrat & Wohnung" text="Wohnungszuweisung, Hausratsteilung und Übergaben strukturieren." icon={<IconHome />} />
          <Card title="Mediationsvereinbarung" text="Konflikte deeskalieren, Optionen entwickeln, Vereinbarungen dokumentieren." icon={<IconHandshake />} />
        </div>
      </Section>

      <Section variant="contrast" align="center" title="Nächster Schritt">
        <div className="max-w-2xl mx-auto space-y-4 text-white/85">
          <p>Kurze Erstabstimmung, welche Unterlagen wichtig sind und welcher Ablauf für Sie passt.</p>
          <Link href="/kontakt" className="no-underline inline-flex">
            <Button size="lg">Kontakt aufnehmen</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
