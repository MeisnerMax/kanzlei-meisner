import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Medizinrecht",
  description:
    "Medizinrechtliche Beratung, Konfliktlösung im Gesundheitswesen und Vertretung in medizinrechtlichen Streitigkeiten – mit direkter Verbindung zum Arbeitskreis Medizinrecht."
};

export default function Page() {
  return (
    <>
      <Section
        variant="subtle"
        as="h1"
        title="Medizinrecht"
        intro="Medizinrechtliche Beratung mit klarem Prozess: Dokumentation sichern, medizinische Fragen präzise stellen, Ergebnisse konsequent durchsetzen."
      >
        <div className="grid items-start gap-10 xl:gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5 text-white/85 leading-relaxed">
            <p>
              Ob Behandlungsfehler, unvollständige Aufklärung oder Streit um Gutachten – ich steuere den Ablauf, halte medizinische Details verständlich und bereite Fristen, Nachfragen und Vergleiche sauber vor.
            </p>
            <p>
              Die Verbindung zum Arbeitskreis Medizinrecht sichert aktuelle Entwicklungen und belastbare Argumentation. Berufserfahrung und Netzwerke werden für Ihr Verfahren direkt nutzbar gemacht.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex min-h-[140px] flex-col gap-1.5 rounded-xl border border-[#1f3358] bg-[#0f1e35] px-4 py-4">
                <h3 className="text-white font-semibold">Medizinrechtliche Beratung</h3>
                <p className="text-sm text-white/70">Sachverhaltsanalyse, Aufklärungspflichten, Dokumentationssicherung.</p>
              </div>
              <div className="flex min-h-[140px] flex-col gap-1.5 rounded-xl border border-[#1f3358] bg-[#0f1e35] px-4 py-4">
                <h3 className="text-white font-semibold">Konfliktlösung</h3>
                <p className="text-sm text-white/70">Gutachten steuern, Vergleichsoptionen prüfen, Mediation oder Prozess klar vorbereiten.</p>
              </div>
              <div className="flex flex-col gap-1.5 rounded-xl border border-[#1f3358] bg-[#0f1e35] px-4 py-4 sm:col-span-2 lg:col-span-3">
                <h3 className="text-white font-semibold">Rechtsvertretung</h3>
                <p className="text-sm text-white/70">Streitigkeiten im Medizinrecht – mit 30+ Jahren Erfahrung und Vorsitz im Arbeitskreis Medizinrecht.</p>
              </div>
            </div>
          </div>
          <div className="space-y-5 rounded-2xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <div className="rounded-lg border border-[#1f3358] bg-[#10253f] px-4 py-3">
              <div className="text-sm text-white/70">Berufserfahrung</div>
              <div className="text-lg font-semibold text-white">30+ Jahre · Vorsitz Arbeitskreis Medizinrecht</div>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white">Erstkontakt im Medizinrecht</h3>
            <p className="text-white/80">
              Wir sichten Unterlagen, klären Fristen und entwickeln einen Fahrplan – vom Gutachtenauftrag bis zur Anspruchsdurchsetzung.
            </p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Strukturierte Sichtung von Behandlungsunterlagen und Dokumentation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Abstimmung mit Haftpflichtversicherern und Medizin-Sachverständigen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Klare Strategie für Vergleich, Mediation oder gerichtliche Durchsetzung</span>
              </li>
            </ul>
            <div>
              <Link href="/kontakt" className="no-underline" aria-label="Termin im Medizinrecht vereinbaren">
                <Button className="w-full">Termin vereinbaren</Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="pattern" title="Leistungen im Medizinrecht" align="center">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Behandlungsfehler & Arzthaftung"
            text="Prüfung von Diagnose- und Behandlungsfehlern, Aufklärungsdokumentation und Haftungsvoraussetzungen."
          />
          <Card
            title="Gutachten & Zweitmeinungen"
            text="Begleitung von Gutachten, strukturierte Fragenkataloge, Einholung von Zweitgutachten."
          />
          <Card
            title="Schmerzensgeld & Schadensersatz"
            text="Geltendmachung materieller und immaterieller Schäden, Renten- und Zukunftsschäden realistisch kalkulieren."
          />
          <Card
            title="Patientenrechte & Einsicht"
            text="Einsicht in Behandlungsunterlagen, Schweigepflichtsentbindung, Datenschutz und Dokumentationspflichten."
          />
          <Card
            title="Praxis & Vertrag"
            text="Praxisübernahme, Kooperationen, Honorarvereinbarungen sowie Haftung bei Delegation und Organisation."
          />
          <Card
            title="Versicherungen & Kostenträger"
            text="Abstimmung mit Haftpflicht- und Krankenversicherern, Regress und Erstattungsansprüche."
          />
        </div>
      </Section>

      <Section
        variant="contrast"
        title="Komplexe aus der Berufserfahrung"
        intro="Fallgestaltungen, die besondere Tiefe erfordern – mit sauberer Vorbereitung und klaren Prioritäten."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <h3 className="font-semibold text-white">Langwierige Arzthaftungsverfahren</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Steuerung mehrjähriger Verfahren mit mehreren Gutachten, engen Fristen und parallelen Vergleichsverhandlungen.
            </p>
          </div>
          <div className="rounded-2xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <h3 className="font-semibold text-white">Geburtshilfliche und neurologische Schäden</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Aufarbeitung komplexer Medizin, Sicherung von Beweisen und Berechnung lebenslanger Bedarfe für Pflege und Therapie.
            </p>
          </div>
          <div className="rounded-2xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <h3 className="font-semibold text-white">Organisations- und Aufklärungsmängel</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Dokumentationslücken, fehlerhafte Praxisabläufe oder fehlende Aufklärung konsequent sichtbar machen und rechtlich bewerten.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
