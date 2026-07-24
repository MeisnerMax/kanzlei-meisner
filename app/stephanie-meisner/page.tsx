import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import { ClosingCTA, PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Stephanie Meisner",
  description: "Stephanie Meisner – Volljuristin und Mediatorin für strukturierte, vertrauliche Konfliktklärung.",
  alternates: { canonical: "/stephanie-meisner" }
};

export default function StephanieMeisnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Stephanie Meisner"
        title="Juristische Klarheit. Menschliche Zugewandtheit. Eine unabhängige Haltung."
        intro="Als Volljuristin und Mediatorin begleitet Stephanie Meisner Menschen, die eine belastbare Vereinbarung suchen, ohne den eigenen Blick auf den Konflikt zu verlieren."
      />

      <Section variant="sand" className="!py-0">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[38rem] lg:min-h-[50rem]">
            <Image
              src="/stephanie-meisner-portrait.webp"
              alt="Stephanie Meisner, Volljuristin und Mediatorin"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[center_24%]"
            />
          </div>
          <div className="flex items-center px-7 py-16 sm:px-12 lg:px-16 lg:py-24">
            <div>
              <p className="font-serif text-3xl leading-[1.35] text-ink sm:text-4xl">
                „Eine tragfähige Lösung entsteht selten durch Druck. Sie entsteht, wenn
                Menschen wieder klar sehen, was ihnen wichtig ist und was möglich wird.“
              </p>
              <p className="mt-8 leading-8 text-ink/66">
                Die juristische Ausbildung schärft den Blick für Struktur, Konsequenzen und
                präzise Vereinbarungen. Die Mediation ergänzt ihn um eine entscheidende
                Perspektive: Nicht nur die Positionen, sondern auch Interessen,
                Beziehungsebenen und Zukunftsfähigkeit gehören an den Tisch.
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

      <ClosingCTA title="Vertrauen beginnt nicht mit einer Lösung, sondern mit einem Gespräch." />
    </>
  );
}
