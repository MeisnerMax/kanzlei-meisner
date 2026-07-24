import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import Section from "@/components/Section";
import { ClosingCTA, PageHero } from "@/components/PageHero";
import { mediationFaqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Wissen & Fragen",
  description: "Antworten auf häufige Fragen zu Mediation, Freiwilligkeit, Vertraulichkeit, Kosten und Ablauf.",
  alternates: { canonical: "/wissen" }
};

export default function WissenPage() {
  return (
    <>
      <PageHero
        eyebrow="Wissen & Fragen"
        title="Je verständlicher der Rahmen, desto freier die Entscheidung."
        intro="Die wichtigsten Antworten zu Mediation, Rollen, Vertraulichkeit, Ablauf und Kosten – klar und ohne Fachsprache."
      />

      <Section eyebrow="Häufige Fragen" title="Was Sie vor dem ersten Gespräch wissen möchten." variant="sage">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="text-lg leading-8 text-ink/65">
              Mediation ist kein Standardverfahren von der Stange. Diese Antworten geben
              Orientierung, ersetzen aber nicht den kurzen Blick auf Ihre konkrete Situation.
            </p>
          </div>
          <FAQAccordion items={mediationFaqs} />
        </div>
      </Section>

      <Section
        eyebrow="Rollenklärung"
        title="Mediatorin, Rechtsberatung und Therapie sind verschiedene Aufgaben."
        variant="ivory"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Mediation", "Strukturiert den Dialog und unterstützt alle Beteiligten dabei, eigene tragfähige Lösungen zu entwickeln."],
            ["Rechtsberatung", "Bewertet die individuelle Rechtsposition und vertritt die Interessen einer bestimmten Person."],
            ["Therapie", "Arbeitet an psychischen Belastungen, Mustern oder Heilungsprozessen. Das ist nicht Aufgabe der Mediation."]
          ].map(([title, text]) => (
            <article key={title} className="rounded-[1.75rem] border border-ink/10 bg-white/60 p-7">
              <h2 className="font-serif text-2xl font-medium">{title}</h2>
              <p className="mt-4 leading-7 text-ink/64">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <ClosingCTA title="Ihre Frage ist nicht dabei?" />
    </>
  );
}
