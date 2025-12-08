import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

const iconClass = "h-10 w-10 text-primary-300";

const IconCross = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 4v16M4 12h16" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

const IconClipboard = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="6" y="5" width="12" height="14" rx="2" />
    <path d="M9 5V3h6v2M9 9h6M9 12h6M9 15h4" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 21c5-2.5 8-5.5 8-10V6.5L12 3 4 6.5V11c0 4.5 3 7.5 8 10Z" />
    <path d="m9.5 12.5 1.5 1.5 3.5-4" />
  </svg>
);

const IconPeople = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="8" cy="7" r="2.7" />
    <circle cx="16" cy="9" r="2.7" />
    <path d="M4 18c0-2.2 1.8-4 4-4h1c2.2 0 4 1.8 4 4" />
    <path d="M12 17c.5-.6 1.3-1 2.2-1H16c1.9 0 3.5 1.6 3.5 3.5" />
  </svg>
);

const IconContract = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="5" y="3" width="10" height="18" rx="2" />
    <path d="M9 7h4M9 11h4M9 15h2" />
    <path d="m15 8 4 4-4 4" />
  </svg>
);

const IconMoney = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="7" width="18" height="10" rx="2" />
    <path d="M7 12h10" />
    <path d="M7 9h0.01M17 15h0.01" />
  </svg>
);

export const metadata: Metadata = {
  title: "Medizinrecht",
  description:
    "Medizinrechtliche Beratung, Konfliktlösung im Gesundheitswesen und Vertretung in medizinrechtlichen Streitigkeiten - mit direkter Verbindung zum Arbeitskreis Medizinrecht."
};

export default function Page() {
  return (
    <>
      <Section
        variant="subtle"
        as="h1"
        title="Medizinrecht"
        intro="Dokumentation sichern, medizinische Fragen präzise stellen, Ergebnisse konsequent auflisten."
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-6 text-white/85 leading-relaxed">
            <p>
              Ob Behandlungsfehler, unvollständige Aufklärung oder Streit um Gutachten: Ich halte medizinische Details verständlich
             und bereite nächste Schritte strukturiert vor.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-4">
                <h3 className="text-white font-semibold">Dokumentation</h3>
                <p className="text-sm text-white/70">Befunde, Aufklärung und Verläufe sichern, Lücken sichtbar machen.</p>
              </div>
              <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-4">
                <h3 className="text-white font-semibold">Gutachten steuern</h3>
                <p className="text-sm text-white/70">Fragenkataloge präzisieren, Zweitmeinungen und Vergleichsoptionen prüfen.</p>
              </div>
              <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-4">
                <h3 className="text-white font-semibold">Durchsetzen</h3>
                <p className="text-sm text-white/70">Ansprüche beziffern, Versicherer einbinden, Vereinbarung treffen.</p>
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
              Unterlagen sichten, Fristen klären, Fahrplan erstellen.
            </p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Dokumentation und medizinische Fragen strukturieren</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Abstimmung mit Versicherern und Sachverständigen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Strategie für einen Vergleich.</span>
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
            text="Diagnose- und Behandlungsfehler prüfen, Aufklärung und Dokumentation sichern."
            icon={<IconCross />}
          />
          <Card
            title="Gutachten & Zweitmeinungen"
            text="Fragenkataloge entwickeln, Zweitgutachten einholen, Ergebnisse einordnen."
            icon={<IconClipboard />}
          />
          <Card
            title="Schmerzensgeld & Schadensersatz"
            text="Materielle und immaterielle Schäden realistisch beziffern und thematisieren."
            icon={<IconMoney />}
          />
          <Card
            title="Patientenrechte & Einsicht"
            text="Einsicht, Schweigepflicht, Datenschutz und Dokumentationspflichten klären."
            icon={<IconShield />}
          />
          <Card
            title="Praxis & Vertrag"
            text="Praxisübernahme, Kooperationen."
            icon={<IconContract />}
          />
          <Card
            title="Versicherungen & Kostenträger"
            text="Abstimmung mit Haftpflicht- und Krankenversicherern."
            icon={<IconPeople />}
          />
        </div>
      </Section>

      <Section
        variant="contrast"
        title="Typische Situationen"
        intro="Erfahrung aus langjähriger Praxis und Netzwerk im Arbeitskreis Medizinrecht."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <h3 className="font-semibold text-white">Langwierige Verfahren</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Mehrere Gutachten, enge Fristen und parallele Vergleichsverhandlungen strukturiert steuern.
            </p>
          </div>

          <div className="rounded-2xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <h3 className="font-semibold text-white">Organisationsmängel</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Dokumentationslücken, fehlerhafte Abläufe oder fehlende Aufklärung sichtbar machen und rechtlich bewerten.
            </p>
          </div>
        </div>
      </Section>

      <Section variant="contrast" align="center" title="Nächster Schritt">
        <div className="max-w-2xl mx-auto space-y-4 text-white/85">
          <p>Ich sichte Ihre Unterlagen, sichere Fristen und legen den Fahrplan fest.</p>
          <Link href="/kontakt" className="no-underline inline-flex">
            <Button size="lg">Kontakt aufnehmen</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
