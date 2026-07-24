import type { Metadata } from "next";
import Section from "@/components/Section";
import { ClosingCTA, PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Mediation",
  description:
    "Was Mediation leistet, welche Grundsätze gelten und wann ein strukturiertes Konfliktverfahren sinnvoll sein kann.",
  alternates: { canonical: "/mediation" }
};

const principles = [
  ["Freiwillig", "Alle Beteiligten entscheiden selbst, ob sie beginnen, fortfahren und einer Lösung zustimmen."],
  ["Allparteilich", "Jede Perspektive wird gehört. Ich unterstütze das Verfahren, nicht eine Seite."],
  ["Vertraulich", "Gespräche und Unterlagen bleiben in einem gemeinsam vereinbarten geschützten Rahmen."],
  ["Ergebnisoffen", "Die Lösung steht nicht vorher fest. Sie wird von den Beteiligten selbst entwickelt und geprüft."]
] as const;

export default function MediationPage() {
  return (
    <>
      <PageHero
        eyebrow="Mediation"
        title="Ein geschützter Raum für Entscheidungen, die wirklich tragen."
        intro="Mediation macht Konflikte besprechbar, ohne Verantwortung abzugeben. Sie verbindet klare Struktur mit der Freiheit, eine eigene und faire Lösung zu entwickeln."
      />

      <Section
        eyebrow="Der Unterschied"
        title="Nicht gewinnen oder verlieren. Verstehen, verhandeln, vereinbaren."
        intro="Ein Gerichtsverfahren entscheidet einen rechtlichen Streit. Mediation schafft einen Rahmen, in dem neben rechtlichen Fragen auch Beziehungen, Interessen und Zukunft berücksichtigt werden können."
        variant="ivory"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {principles.map(([title, text], index) => (
            <article key={title} className="rounded-[2rem] border border-ink/10 bg-white/60 p-7 sm:p-9">
              <span className="text-xs font-bold tracking-[0.22em] text-clay">0{index + 1}</span>
              <h2 className="mt-7 font-serif text-3xl font-medium">{title}</h2>
              <p className="mt-4 leading-7 text-ink/65">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Wann Mediation passt"
        title="Wenn es mehr zu klären gibt als eine einzelne Rechtsfrage."
        variant="sage"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-medium">Mediation kann sinnvoll sein, wenn …</h2>
            <ul className="mt-6 space-y-4 text-lg leading-8 text-ink/68">
              {[
                "Sie künftig weiter miteinander zu tun haben.",
                "Gespräche festgefahren sind, aber eine Einigung noch möglich erscheint.",
                "Vertraulichkeit und ein kontrollierbarer Rahmen wichtig sind.",
                "mehrere Themen oder Personen miteinander verbunden sind.",
                "Sie Entscheidungen nicht vollständig an Dritte abgeben möchten."
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-3 h-2 w-2 shrink-0 rounded-full bg-clay" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] bg-ink p-8 text-ivory sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sage-light">Wichtig</p>
            <h2 className="mt-5 font-serif text-3xl font-medium">Mediation ersetzt keine einseitige Rechtsberatung.</h2>
            <p className="mt-5 leading-7 text-ivory/68">
              Ich begleite das Verfahren als neutrale Mediatorin. Ich entscheide
              den Konflikt nicht und berate keine Partei gegen die andere. Vor einer abschließenden
              Vereinbarung kann unabhängiger rechtlicher Rat sinnvoll sein.
            </p>
          </div>
        </div>
      </Section>

      <ClosingCTA
        title="Ob Mediation passt, lässt sich klären, bevor Sie sich festlegen."
        text="In einem ersten Orientierungsgespräch betrachten wir Situation, Beteiligte und möglichen Rahmen."
      />
    </>
  );
}
