import Section from "@/components/Section";
import Link from "next/link";
import Button from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Erbrecht",
  description:
    "Testament und gesetzliche Erbfolge, Pflichtteil, Erbengemeinschaft und Nachlassabwicklung – rechtssicher gestalten und durchsetzen."
};

export default function Page() {
  return (
    <Section
      variant="subtle"
      as="h1"
      title="Erbrecht"
      intro="Gestaltung und Durchsetzung von Erbrechten – klar, vorausschauend und konfliktvermeidend."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Testament und Erbvertrag: Gestaltung, Auslegung, Anfechtung</li>
          <li>Gesetzliche Erbfolge und Enterbung</li>
          <li>Pflichtteilsrechte: Anspruch, Höhe, Durchsetzung</li>
          <li>Erbengemeinschaft: Verwaltung, Auseinandersetzung, Erbauseinandersetzungsvertrag</li>
          <li>Nachlassabwicklung und Erbschein</li>
        </ul>
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="font-semibold text-gray-900">Vorgehen</h3>
          <p className="mt-2 text-gray-700">
            Wir prüfen die Rechtslage, sichern Fristen und verhandeln konsequent. Ziel ist eine
            tragfähige Lösung – notfalls mit gerichtlicher Durchsetzung.
          </p>
          <div className="mt-4">
            <Link href="/kontakt" className="no-underline" aria-label="Jetzt Kontakt aufnehmen">
              <Button>Jetzt Kontakt aufnehmen</Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
