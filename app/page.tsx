import Image from "next/image";
import Script from "next/script";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import { ConflictNavigator } from "@/components/ConflictNavigator";
import { ButtonLink } from "@/components/Button";
import FAQAccordion from "@/components/FAQAccordion";
import { mediationFaqs } from "@/lib/data";

const conflictFields = [
  {
    id: "familie",
    number: "01",
    title: "Familie & Trennung",
    text: "Wenn Elternschaft, Vermögen und persönliche Verletzungen gleichzeitig geklärt werden müssen.",
    tone: "bg-ink text-ivory lg:col-span-2"
  },
  {
    id: "erbe",
    number: "02",
    title: "Erbe & Nachlass",
    text: "Wenn ein Nachlass nicht nur Werte verteilt, sondern alte Rollen und Erwartungen berührt.",
    tone: "bg-sage-wash text-ink"
  },
  {
    id: "gesundheit",
    number: "03",
    title: "Gesundheit",
    text: "Wenn medizinische Erfahrungen, Kommunikation und Vertrauen aufgearbeitet werden sollen.",
    tone: "bg-sand/70 text-ink"
  },
  {
    id: "privat",
    number: "04",
    title: "Private Konflikte",
    text: "Wenn Nachbarschaft, Eigentum oder Vereinbarungen eine tragfähige neue Ordnung brauchen.",
    tone: "bg-white text-ink lg:col-span-2"
  }
] as const;

const processSteps = [
  {
    number: "01",
    title: "Orientieren",
    text: "Wir klären vertraulich, worum es geht, wer beteiligt ist und ob Mediation der passende Rahmen sein kann."
  },
  {
    number: "02",
    title: "Verstehen",
    text: "Positionen werden nicht bewertet, sondern auf Interessen, Bedürfnisse und tatsächliche Hindernisse zurückgeführt."
  },
  {
    number: "03",
    title: "Entwickeln",
    text: "Aus verschiedenen Optionen entsteht eine Lösung, die von allen Beteiligten geprüft und mitgetragen werden kann."
  },
  {
    number: "04",
    title: "Vereinbaren",
    text: "Ergebnisse, Verantwortlichkeiten und nächste Schritte werden klar und nachvollziehbar festgehalten."
  }
] as const;

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Stephanie Meisner – Mediation & Konfliktklärung",
    url: "https://www.stephaniemeisner.de",
    image: "https://www.stephaniemeisner.de/stephanie-meisner-portrait.webp",
    email: "mailto:Meisner.bamberg@freenet.de",
    description:
      "Mediation und strukturierte Konfliktklärung für Familie, Erbe, Gesundheit und private Konflikte.",
    founder: {
      "@type": "Person",
      name: "Stephanie Meisner",
      jobTitle: "Volljuristin und Mediatorin"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ebern",
      addressCountry: "DE"
    },
    areaServed: ["Ebern", "Bamberg", "Haßfurt", "Deutschland – online"],
    serviceType: [
      "Mediation",
      "Familienmediation",
      "Erbmediation",
      "Konfliktklärung",
      "Online-Mediation"
    ]
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <HeroSection />

      <section className="relative overflow-hidden bg-ink py-20 text-ivory sm:py-28">
        <div className="container-max relative">
          <div className="absolute right-0 top-1/2 hidden h-px w-1/4 bg-ivory/15 lg:block" />
          <p className="max-w-5xl font-serif text-3xl font-medium leading-[1.25] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
            Sie müssen heute noch keine gemeinsame Lösung kennen.
            <span className="mt-3 block italic text-sage-light">
              Es genügt, wenn ein nächster Schritt denkbar ist.
            </span>
          </p>
        </div>
      </section>

      <Section
        eyebrow="Erste Orientierung"
        title="Könnte Mediation zu Ihrer Situation passen?"
        intro="Ohne Anmeldung, ohne Datenspeicherung und ohne sensible Details. Drei Fragen geben Ihnen eine erste Orientierung."
        variant="sage"
        id="orientierung"
      >
        <div id="konflikt-navigator">
          <ConflictNavigator />
        </div>
      </Section>

      <Section
        eyebrow="Konfliktfelder"
        title="Nicht jeder Konflikt braucht ein Urteil. Aber jeder braucht einen klaren Rahmen."
        intro="Mediation setzt dort an, wo Beziehungen, wirtschaftliche Fragen und persönliche Geschichte miteinander verwoben sind."
        variant="ivory"
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {conflictFields.map((field) => (
            <article
              key={field.id}
              className={`group relative min-h-[20rem] overflow-hidden rounded-[2rem] border border-ink/10 p-7 transition duration-500 hover:-translate-y-1 sm:p-9 ${field.tone}`}
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold tracking-[0.22em] opacity-50">
                  {field.number}
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-current/15 text-xl transition-transform duration-500 group-hover:rotate-45"
                >
                  ↗
                </span>
              </div>
              <div className="absolute bottom-8 left-7 right-7 sm:left-9 sm:right-9">
                <h3 className="font-serif text-3xl font-medium tracking-[-0.025em] sm:text-4xl">
                  {field.title}
                </h3>
                <p className="mt-4 max-w-2xl leading-7 opacity-65">{field.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/konfliktfelder" variant="secondary">
            Alle Konfliktfelder verstehen
          </ButtonLink>
        </div>
      </Section>

      <Section
        eyebrow="Der Prozess"
        title="Von zwei Positionen zu einer tragfähigen Vereinbarung."
        intro="Mediation ist kein loses Gespräch. Sie folgt einem nachvollziehbaren Prozess, der Sicherheit schafft und Entscheidungen ermöglicht."
        variant="white"
      >
        <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-ink/12 lg:block" />
          {processSteps.map((step) => (
            <article key={step.number} className="relative">
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-ink/15 bg-white font-serif text-lg font-semibold text-clay">
                {step.number}
              </div>
              <h3 className="mt-7 font-serif text-3xl font-medium text-ink">{step.title}</h3>
              <p className="mt-4 leading-7 text-ink/62">{step.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <ButtonLink href="/ablauf-kosten">Ablauf und Kosten ansehen</ButtonLink>
        </div>
      </Section>

      <Section variant="sand" className="!py-0">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[34rem] overflow-hidden lg:min-h-[46rem]">
            <Image
              src="/stephanie-meisner-gespraech.webp"
              alt="Stephanie Meisner in einem vertraulichen Mediationsgespräch"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="flex items-center px-7 py-16 sm:px-12 lg:px-16 lg:py-24">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-clay">
                Haltung & Erfahrung
              </p>
              <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl">
                Klar in der Struktur. Offen für das, was zwischen den Zeilen liegt.
              </h2>
              <p className="mt-7 text-lg leading-8 text-ink/67">
                Als Volljuristin und langjährig tätige Mediatorin verbinde ich
                analytische Präzision mit einem Blick für die menschliche Dynamik
                hinter einem Konflikt.
              </p>
              <blockquote className="mt-8 border-l-2 border-clay pl-6 font-serif text-2xl leading-9 text-ink">
                „Meine Aufgabe ist nicht, eine Lösung vorzugeben. Meine Aufgabe ist,
                den Raum zu schaffen, in dem eine eigene Lösung wieder möglich wird.“
              </blockquote>
              <div className="mt-9">
                <ButtonLink href="/stephanie-meisner" variant="secondary">
                  Mehr über mich
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Was Sie erwarten dürfen"
        title="Neutralität ist keine Distanz. Sie ist die Grundlage für ein faires Verfahren."
        variant="ink"
      >
        <div className="grid gap-px overflow-hidden rounded-[2rem] bg-ivory/12 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Allparteilich", "Ich gebe jeder Perspektive den Raum, den sie zum Verstandenwerden braucht."],
            ["Vertraulich", "Ich gestalte das Verfahren in einem geschützten und diskreten Rahmen."],
            ["Transparent", "Ich halte Ablauf, Rollen, Kosten und nächste Schritte jederzeit nachvollziehbar."],
            ["Eigenverantwortlich", "Sie entscheiden über das Ergebnis – nicht ich."]
          ].map(([title, text]) => (
            <article key={title} className="bg-ink p-7 sm:p-9">
              <span className="mb-8 block h-2.5 w-2.5 rounded-full bg-clay" />
              <h3 className="font-serif text-2xl font-medium text-ivory">{title}</h3>
              <p className="mt-4 leading-7 text-ivory/58">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Häufige Fragen"
        title="Mediation darf verständlich beginnen."
        intro="Die wichtigsten Fragen zu Voraussetzungen, Ablauf, Kosten und Vertraulichkeit."
        variant="sage"
      >
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="max-w-sm text-lg leading-8 text-ink/65">
              Ihre Situation ist individueller als jede FAQ. Für eine erste
              persönliche Orientierung genügt eine kurze Anfrage.
            </p>
            <div className="mt-8">
              <ButtonLink href="/wissen" variant="secondary">
                Alle Fragen ansehen
              </ButtonLink>
            </div>
          </div>
          <FAQAccordion items={mediationFaqs.slice(0, 5)} />
        </div>
      </Section>

      <section className="relative overflow-hidden bg-clay py-20 text-white sm:py-28">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/20" />
        <div className="absolute -right-6 -top-6 h-52 w-52 rounded-full border border-white/20" />
        <div className="container-max relative">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/65">
                Der nächste Schritt
              </p>
              <h2 className="mt-5 max-w-4xl font-serif text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-6xl">
                Ein Konflikt muss nicht vollständig eskalieren, bevor Veränderung
                möglich wird.
              </h2>
            </div>
            <div className="lg:text-right">
              <ButtonLink
                href="/kontakt"
                variant="secondary"
                size="lg"
                className="border-white/40 bg-white text-ink hover:border-white hover:bg-ivory"
              >
                Vertraulich Kontakt aufnehmen
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
