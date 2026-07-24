import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import { ClosingCTA, PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Stephanie Meisner",
  description: "Stephanie Meisner – Volljuristin und Mediatorin für strukturierte, vertrauliche Konfliktklärung.",
  alternates: { canonical: "/stephanie-meisner" }
};

const career = [
  {
    period: "seit 11/2025",
    title: "Kanzlei Tilman Fischer",
    text: "Juristische Tätigkeit mit Bezügen zum Familien-, Erb- und Zivilrecht."
  },
  {
    period: "Vorsitz",
    title: "Arbeitskreis Medizinrecht",
    text: "Fachlicher Austausch und Beschäftigung mit aktuellen Entwicklungen im Medizinrecht."
  },
  {
    period: "seit 04/2009",
    title: "Medizinrecht",
    text: "Langjährige vertiefte Tätigkeit in medizinrechtlichen Fragestellungen."
  },
  {
    period: "seit 05/2006",
    title: "Volljuristin & Mediatorin",
    text: "Strukturierte Verhandlungsführung und außergerichtliche Konfliktklärung."
  },
  {
    period: "09/1994 – 04/2006",
    title: "Inhaberin einer Rechtsanwaltskanzlei",
    text: "Selbstständige juristische Tätigkeit mit Schwerpunkten im Familien- und Erbrecht."
  },
  {
    period: "1993 – 1994",
    title: "Rechtsamtsleiterin",
    text: "Juristische Verantwortung an der Schnittstelle von Recht und Verwaltung."
  },
  {
    period: "03/1989 – 08/1989",
    title: "Juristin am EIPA Maastricht",
    text: "Tätigkeit am European Institute of Public Administration."
  }
] as const;

export default function StephanieMeisnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Stephanie Meisner"
        title="Juristische Klarheit. Menschliche Zugewandtheit. Eine unabhängige Haltung."
        intro="Als Volljuristin und Mediatorin begleite ich Menschen, die eine belastbare Vereinbarung suchen, ohne den eigenen Blick auf den Konflikt zu verlieren."
      />

      <Section variant="sand" className="!py-0">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[38rem] lg:min-h-[50rem]">
            <Image
              src="/stephanie-meisner-profil.webp"
              alt="Stephanie Meisner, Volljuristin und Mediatorin"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="flex items-center px-7 py-16 sm:px-12 lg:px-16 lg:py-24">
            <div>
              <p className="font-serif text-3xl leading-[1.35] text-ink sm:text-4xl">
                „Eine tragfähige Lösung entsteht selten durch Druck. Sie entsteht, wenn
                Menschen wieder klar sehen, was ihnen wichtig ist und was möglich wird.“
              </p>
              <p className="mt-8 leading-8 text-ink/66">
                Meine juristische Ausbildung schärft meinen Blick für Struktur,
                Konsequenzen und präzise Vereinbarungen. Die Mediation ergänzt ihn um
                eine entscheidende Perspektive: Nicht nur die Positionen, sondern auch
                Interessen, Beziehungsebenen und Zukunftsfähigkeit gehören an den Tisch.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Die Arbeitsweise"
        title="Präsenz, Präzision und die Ruhe, nicht vorschnell zu vereinfachen."
        variant="ivory"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Klar strukturierend", "Komplexe Themen werden geordnet, ohne ihre menschliche Dimension zu verkürzen."],
            ["Aufmerksam zuhörend", "Auch das, was noch nicht gut formuliert werden kann, erhält einen angemessenen Raum."],
            ["Konsequent allparteilich", "Jede Seite wird ernst genommen. Keine Perspektive wird zur vorgegebenen Wahrheit erklärt."]
          ].map(([title, text]) => (
            <article key={title} className="rounded-[1.75rem] border border-ink/10 bg-white/60 p-7">
              <span aria-hidden className="mb-7 block h-2.5 w-2.5 rounded-full bg-clay" />
              <h2 className="font-serif text-2xl font-medium">{title}</h2>
              <p className="mt-4 leading-7 text-ink/64">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 max-w-3xl border-l-2 border-clay pl-6 text-sm leading-7 text-ink/58">
          <p>
            Im Mediationsverfahren erfolgt keine einseitige anwaltliche Vertretung oder
            Rechtsberatung. Bei rechtlich weitreichenden Vereinbarungen wird eine unabhängige
            rechtliche Prüfung empfohlen.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Qualifikation & Erfahrung"
        title="Mehr als drei Jahrzehnte juristische Praxis – heute fokussiert auf Mediation."
        intro="Fundierte Rechtskenntnis, langjährige Verhandlungserfahrung und meine kontinuierliche Beschäftigung mit Mediation und Medizinrecht prägen meine Arbeit."
        variant="sage"
      >
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-white/70">
            <div className="flex flex-col gap-3 border-b border-ink/10 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
              <h2 className="font-serif text-3xl font-medium">Beruflicher Weg</h2>
              <span className="self-start rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-ivory sm:self-auto">
                30+ Jahre Erfahrung
              </span>
            </div>
            <div className="divide-y divide-ink/10">
              {career.map((entry) => (
                <article
                  key={`${entry.period}-${entry.title}`}
                  className="grid gap-3 p-7 sm:grid-cols-[10rem_1fr] sm:gap-7 sm:p-9"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-clay">
                    {entry.period}
                  </p>
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-ink">{entry.title}</h3>
                    <p className="mt-2 leading-7 text-ink/64">{entry.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <article className="rounded-[1.75rem] bg-ink p-7 text-ivory sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sage-light">Ausbildung</p>
              <h2 className="mt-5 font-serif text-2xl font-medium">Studium der Rechtswissenschaften</h2>
              <p className="mt-4 leading-7 text-ivory/68">
                Universitäten Bonn, Köln, Münster und Bayreuth
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-ink/10 bg-white/70 p-7 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Fortbildungen</p>
              <ul className="mt-5 space-y-3 font-serif text-2xl">
                <li>Mediation</li>
                <li>Medizinrecht</li>
              </ul>
            </article>

            <article className="rounded-[1.75rem] border border-ink/10 bg-sand/70 p-7 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Fachliche Einbindung</p>
              <ul className="mt-5 space-y-4 leading-7 text-ink/68">
                <li className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-clay" />
                  Arbeitskreis Familien- und Erbrecht
                </li>
                <li className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-clay" />
                  Arbeitskreis Medizinrecht
                </li>
              </ul>
            </article>
          </aside>
        </div>
      </Section>

      <ClosingCTA title="Vertrauen beginnt nicht mit einer Lösung, sondern mit einem Gespräch." />
    </>
  );
}
