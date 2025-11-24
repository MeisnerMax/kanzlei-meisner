import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kanzlei",
  description:
    "Philosophie, Ablauf der Mandatsaufnahme sowie Hinweise zu Kosten und Erstberatung der Kanzlei Meisner in Haßfurt."
};

export default function Page() {
  return (
    <>
      <Section
        variant="contrast"
        as="h1"
        title="Kanzleiphilosophie"
        intro="Sachlich, klar, verlässlich. Wir arbeiten lösungsorientiert – mit Augenmaß und Konsequenz."
      >
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="font-semibold text-gray-900">Transparenz</h3>
            <p className="mt-2 text-gray-700">Verständliche Einschätzungen, nachvollziehbare Schritte, klare Kosten.</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="font-semibold text-gray-900">Struktur</h3>
            <p className="mt-2 text-gray-700">Sauberes Vorgehen und konsequente Fristenkontrolle.</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="font-semibold text-gray-900">Verlässlichkeit</h3>
            <p className="mt-2 text-gray-700">Erreichbarkeit und zeitnahe Rückmeldungen.</p>
          </div>
        </div>
      </Section>
      <Section title="Ablauf der Mandatsaufnahme">
        <ol className="list-decimal pl-5 text-gray-700 space-y-2">
          <li>Kontaktaufnahme: Telefonisch, per E-Mail oder Kontaktformular</li>
          <li>Erstberatung: Sachverhalt, Ziele, Optionen und Risiken</li>
          <li>Strategie: Außergerichtlich, sofern sinnvoll; gerichtliche Durchsetzung bei Bedarf</li>
        </ol>
      </Section>
      <Section title="Kosten & Erstberatung">
        <p className="text-gray-700">
          Die Vergütung richtet sich regelmäßig nach dem Rechtsanwaltsvergütungsgesetz (RVG). Für
          außergerichtliche Mandate sind Vergütungsvereinbarungen möglich. Sie erhalten vorab eine
          transparente Einschätzung.
        </p>
      </Section>
    </>
  );
}
