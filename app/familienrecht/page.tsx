import Section from "@/components/Section";
import Link from "next/link";
import Button from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Familienrecht",
  description:
    "Begleitung bei Trennung und Scheidung, Unterhalt, Sorgerecht, Umgangsrecht und Zugewinnausgleich – sachlich und lösungsorientiert."
};

export default function Page() {
  return (
    <Section
      variant="subtle"
      as="h1"
      title="Familienrecht"
      intro="Sorgfältige Begleitung bei Trennung und Scheidung – mit Blick auf praktikable Lösungen und das Kindeswohl."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Trennung und Scheidung: Ablauf, Voraussetzungen, einvernehmliche Lösungen</li>
          <li>Unterhalt: Kindes- und Ehegattenunterhalt, Düsseldorfer Tabelle</li>
          <li>Sorgerecht und Umgangsrecht: Regelungen, Durchsetzung, Mediation</li>
          <li>Zugewinnausgleich und Vermögensaufteilung</li>
          <li>Wohnungszuweisung und Hausratsteilung</li>
        </ul>
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="font-semibold text-gray-900">Vorgehen</h3>
          <p className="mt-2 text-gray-700">
            In der Erstberatung klären wir Ihre Situation, Prioritäten und Fristen. Anschließend
            entwickeln wir eine Strategie – außergerichtlich, wenn möglich; bestimmt vor Gericht,
            wenn nötig.
          </p>
          <div className="mt-4">
            <Link href="/kontakt" className="no-underline" aria-label="Termin vereinbaren">
              <Button>Termin vereinbaren</Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
