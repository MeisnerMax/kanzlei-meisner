import Section from "@/components/Section";
import Card from "@/components/Card";
import Link from "next/link";
import Button from "@/components/Button";
import type { Metadata } from "next";

const iconClass = "h-10 w-10 text-primary-300";

const IconDocument = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M7 3h7l4 4v14H7z" />
    <path d="M14 3v5h5" />
    <path d="M9 12h6M9 16h4" />
  </svg>
);

const IconScale = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 3v18" />
    <path d="M6 6h12" />
    <path d="m7.5 6-3 7h6l-3-7Z" />
    <path d="m19.5 6-3 7h6l-3-7Z" />
    <path d="M3 13c0 2 2 4 4.5 4s4.5-2 4.5-4" />
    <path d="M12 13c0 2 2 4 4.5 4s4.5-2 4.5-4" />
  </svg>
);

const IconHome = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="m4 10 8-6 8 6" />
    <path d="M6 9v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9" />
    <path d="M10 19v-4h4v4" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 21c5-2.5 8-5.5 8-10V6.5L12 3 4 6.5V11c0 4.5 3 7.5 8 10Z" />
    <path d="m9.5 12.5 1.5 1.5 3.5-4" />
  </svg>
);

export const metadata: Metadata = {
  title: "Erbrecht",
  description:
    "Testament und gesetzliche Erbfolge, Pflichtteil, Erbengemeinschaft und Nachlassabwicklung - rechtssicher gestalten und durchsetzen."
};

export default function Page() {
  return (
    <>
      <Section
        variant="subtle"
        as="h1"
        title="Erbrecht"
        intro="Gestaltung und Durchsetzung von Erbrechten - klar, vorausschauend und konfliktvermeidend."
      >
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div className="space-y-4 text-white/85 leading-relaxed">
            <p>
              Ich prüfe Testamente, Erbverträge und Nachlassfragen, sichere Fristen und bereite eine fundierte Strategie vor –
              einvernehmliche Lösungen.
            </p>
            <ul className="space-y-3 text-white/85">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-5 rounded bg-primary-400" aria-hidden />
                <span>Testament & Erbvertrag: Gestaltung, Auslegung, Anfechtung</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-5 rounded bg-primary-400" aria-hidden />
                <span>Gesetzliche Erbfolge und Enterbung</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-5 rounded bg-primary-400" aria-hidden />
                <span>Pflichtteil: Anspruch, Höhe, Durchsetzung</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-5 rounded bg-primary-400" aria-hidden />
                <span>Erbengemeinschaft: Verwaltung, Auseinandersetzung, Verträge</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-5 rounded bg-primary-400" aria-hidden />
                <span>Nachlassabwicklung und Erbschein</span>
              </li>
            </ul>
          </div>

          <div className="space-y-5 rounded-2xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <div className="rounded-lg border border-[#1f3358] bg-[#10253f] px-4 py-3">
              <div className="text-sm text-white/70">Erstkontakt</div>
              <div className="text-lg font-semibold text-white">Fristen & Unterlagen klären</div>
            </div>
            <p className="text-white/80">
              Ich sichte Nachweise, sichere Fristen und verschaffe Transparenz zu Pflichtteil, Erbengemeinschaft und Kosten. Anschließend
              erhalten Sie einen Fahrplan.
            </p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Testament, Erbschein, Konten und Verträge sortieren</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Ansprüche berechnen: Pflichtteil, Ausgleich, Zugehör</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Strategie festlegen: Ausgleich, Vergleich, gerichtliche Schritte</span>
              </li>
            </ul>
            <div>
              <Link href="/kontakt" className="no-underline" aria-label="Termin im Erbrecht vereinbaren">
                <Button className="w-full">Termin vereinbaren</Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="pattern" title="Schwerpunkte im Erbrecht" align="center">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Testament & Erbvertrag" text="Gestalten, auslegen – klar dokumentiert. Vereinbarungen formulieren." icon={<IconDocument />} />
          <Card title="Pflichtteil" text="Ansprüche berechnen, aufklären, Regelungen treffen" icon={<IconScale />} />
          <Card title="Erbengemeinschaft" text="Verwaltung, Auseinandersetzung und einvernehmliche Lösungen." icon={<IconDocument />} />
          <Card title="Nachlassabwicklung" text="Sichten, informieren, Regelungen teffen." icon={<IconShield />} />
          <Card title="Enterbung & Anfechtung" text="Vorraussetzungen prüfen, Streitpunkte früh entschärfen." icon={<IconDocument />} />
          <Card title="Immobilien & Unternehmen" text="Bewertung, Ausgleichszahlungen und Nutzungslösungen vereinbaren." icon={<IconHome />} />
        </div>
      </Section>

      <Section variant="contrast" align="center" title="Nächster Schritt">
        <div className="max-w-2xl mx-auto space-y-4 text-white/85">
          <p>Ich kläre kurz Ihre Situation, benötigte Unterlagen und die Mediation.</p>
          <Link href="/kontakt" className="no-underline inline-flex">
            <Button size="lg">Kontakt aufnehmen</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
