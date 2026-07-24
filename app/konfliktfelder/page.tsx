import type { Metadata } from "next";
import Section from "@/components/Section";
import { ClosingCTA, PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Konfliktfelder",
  description:
    "Mediation bei Trennung und Familie, Erbe und Nachlass, Gesundheit sowie privaten Konflikten.",
  alternates: { canonical: "/konfliktfelder" }
};

const fields = [
  {
    id: "familie",
    number: "01",
    title: "Familie & Trennung",
    intro: "Wenn Beziehung endet, Verantwortung aber bleibt.",
    text: "Trennung, Elternschaft, Vermögen, Wohnen und Kommunikation sind selten voneinander zu trennen. Mediation hilft, die Themen zu ordnen und Vereinbarungen zu entwickeln, die auch im Alltag Bestand haben.",
    examples: ["Elternvereinbarungen und Umgang", "Trennungsfolgen und Vermögen", "Kommunikation in Patchwork-Familien"]
  },
  {
    id: "erbe",
    number: "02",
    title: "Erbe & Nachlass",
    intro: "Wenn ein Nachlass alte Geschichten mitverhandelt.",
    text: "In Erbengemeinschaften treffen wirtschaftliche Interessen auf familiäre Rollen, Erwartungen und Verletzungen. Ein strukturiertes Verfahren kann Blockaden lösen und die gemeinsame Entscheidungsfähigkeit wiederherstellen.",
    examples: ["Erbengemeinschaften", "Verteilung und Nutzung von Vermögen", "Kommunikation zwischen Generationen"]
  },
  {
    id: "gesundheit",
    number: "03",
    title: "Gesundheit & Behandlung",
    intro: "Wenn Vertrauen verloren gegangen ist und Fragen offenbleiben.",
    text: "Medizinische Konflikte sind fachlich und emotional anspruchsvoll. Mediation kann ein Gespräch ermöglichen, in dem Erleben, Kommunikation, Erwartungen und mögliche nächste Schritte sorgfältig geklärt werden.",
    examples: ["Kommunikations- und Vertrauenskonflikte", "Konflikte im Behandlungskontext", "Belastete Zusammenarbeit im Gesundheitswesen"]
  },
  {
    id: "privat",
    number: "04",
    title: "Private Konflikte",
    intro: "Wenn Nähe, Eigentum oder Absprachen zum Dauerkonflikt werden.",
    text: "Nachbarschaft, gemeinsames Eigentum oder private Vereinbarungen können Beziehungen über lange Zeit belasten. Mediation schafft Distanz zur Eskalation und Nähe zu einer praktikablen Regelung.",
    examples: ["Nachbarschaft und Wohnen", "Gemeinsames Eigentum", "Private Vereinbarungen und Zusammenarbeit"]
  }
] as const;

export default function KonfliktfelderPage() {
  return (
    <>
      <PageHero
        eyebrow="Konfliktfelder"
        title="Der Konflikt ist individuell. Der Weg zur Klärung darf strukturiert sein."
        intro="Mediation ist besonders wertvoll, wenn sachliche Fragen und persönliche Beziehungen untrennbar miteinander verbunden sind."
      />

      <Section variant="ivory">
        <div className="space-y-6">
          {fields.map((field, index) => (
            <article
              id={field.id}
              key={field.id}
              className={`scroll-mt-28 rounded-[2rem] border border-ink/10 p-7 sm:p-10 lg:grid lg:grid-cols-[0.58fr_1.42fr] lg:gap-14 ${
                index % 2 === 0 ? "bg-white/60" : "bg-sage-wash"
              }`}
            >
              <div>
                <span className="text-xs font-bold tracking-[0.22em] text-clay">{field.number}</span>
                <h2 className="mt-5 font-serif text-4xl font-medium leading-tight">{field.title}</h2>
                <p className="mt-4 font-serif text-xl italic leading-8 text-ink/58">{field.intro}</p>
              </div>
              <div className="mt-8 lg:mt-0">
                <p className="text-lg leading-8 text-ink/67">{field.text}</p>
                <ul className="mt-7 grid gap-3">
                  {field.examples.map((example) => (
                    <li key={example} className="flex items-center gap-3 border-t border-ink/10 pt-3 font-semibold">
                      <span aria-hidden className="h-2 w-2 rounded-full bg-clay" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <ClosingCTA title="Ihr Konflikt muss in keine Schublade passen." />
    </>
  );
}
