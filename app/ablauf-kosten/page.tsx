import type { Metadata } from "next";
import Section from "@/components/Section";
import { ClosingCTA, PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Ablauf & Kosten",
  description: "Transparenter Ablauf einer Mediation – vom Orientierungsgespräch bis zur Vereinbarung.",
  alternates: { canonical: "/ablauf-kosten" }
};

const steps = [
  ["01", "Orientierungsgespräch", "Wir klären kurz und vertraulich Anlass, Beteiligte und Erwartungen. Sie erfahren, ob und in welchem Rahmen eine Mediation sinnvoll erscheinen kann."],
  ["02", "Auftragsklärung", "Alle Beteiligten verständigen sich über Themen, Regeln, Vertraulichkeit, Vergütung und organisatorischen Rahmen."],
  ["03", "Themen & Interessen", "Wir strukturieren die Konfliktthemen und arbeiten heraus, was hinter den unterschiedlichen Positionen tatsächlich wichtig ist."],
  ["04", "Optionen & Verhandlung", "Mögliche Lösungen werden entwickelt, verglichen, auf Folgen geprüft und schrittweise konkretisiert."],
  ["05", "Vereinbarung", "Tragfähige Ergebnisse werden klar dokumentiert. Bei Bedarf erfolgt vor Unterzeichnung eine unabhängige rechtliche Prüfung."]
] as const;

export default function AblaufKostenPage() {
  return (
    <>
      <PageHero
        eyebrow="Ablauf & Kosten"
        title="Klarheit über den Prozess schafft Ruhe für das Wesentliche."
        intro="Sie wissen von Beginn an, welche Schritte folgen, welche Rolle ich als Mediatorin übernehme und wie wir den finanziellen Rahmen vereinbaren."
      />

      <Section eyebrow="Der Weg" title="Fünf Phasen, ein nachvollziehbarer Prozess." variant="white">
        <div className="space-y-4">
          {steps.map(([number, title, text]) => (
            <article key={number} className="grid gap-5 rounded-[1.75rem] border border-ink/10 bg-ivory p-6 sm:grid-cols-[5rem_0.5fr_1fr] sm:items-start sm:p-8">
              <span className="font-serif text-2xl text-clay">{number}</span>
              <h2 className="font-serif text-2xl font-medium">{title}</h2>
              <p className="leading-7 text-ink/65">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Vergütung"
        title="Transparent vereinbart, bevor die Mediation beginnt."
        intro="Mediation wird in der Regel nach Zeitaufwand vergütet. Der konkrete Stundensatz, Vor- und Nachbereitung sowie mögliche Auslagen werden im persönlichen Orientierungsgespräch offen besprochen und anschließend schriftlich festgehalten."
        variant="sage"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Kostenteilung", "Die Beteiligten entscheiden gemeinsam, wie die Kosten untereinander verteilt werden."],
            ["Planbarkeit", "Rhythmus und Länge der Sitzungen werden passend zur Situation vereinbart."],
            ["Keine Überraschungen", "Zusätzlicher Aufwand wird nicht stillschweigend vorausgesetzt, sondern vorher abgestimmt."]
          ].map(([title, text]) => (
            <article key={title} className="rounded-[1.75rem] bg-white/65 p-7">
              <h2 className="font-serif text-2xl font-medium">{title}</h2>
              <p className="mt-4 leading-7 text-ink/65">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-6 text-ink/55">
          Ein belastbares Honorarangebot setzt eine kurze Kenntnis der Situation und des
          gewünschten Rahmens voraus. Deshalb wird hier bewusst kein pauschaler Preis genannt.
        </p>
      </Section>

      <ClosingCTA
        title="Sie sollen wissen, worauf Sie sich einlassen."
        text="Fragen zu Ablauf, Format und Kosten klären wir vor einer Beauftragung transparent und ohne Verpflichtung."
      />
    </>
  );
}
