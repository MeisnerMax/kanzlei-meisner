import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

const iconClass = "h-10 w-10 text-primary-300";

const IconContract = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="5" y="3" width="10" height="18" rx="2" />
    <path d="M9 7h4M9 11h4M9 15h2" />
    <path d="m15 8 4 4-4 4" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 21c5-2.5 8-5.5 8-10V6.5L12 3 4 6.5V11c0 4.5 3 7.5 8 10Z" />
    <path d="m9.5 12.5 1.5 1.5 3.5-4" />
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
  title: "Zivilrecht",
  description:
    "Vertragsprüfung, Gewährleistung, Schadensersatz und Forderungseinzug - pragmatische Durchsetzung zivilrechtlicher Ansprüche."
};

export default function Page() {
  return (
    <>
      <Section
        variant="subtle"
        as="h1"
        title="Zivilrecht"
        intro="Zuverlässige Begleitung bei zivilrechtlichen Angelegenheiten - klarer Ablauf, saubere Dokumentation, realistische Optionen."
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-6 text-white/85 leading-relaxed">
            <p>
              Ich ordne Ihren Sachverhalt, strukturiere die Schritte im Verfahren und dokumentiere alle Absprachen sowie relevanten Informationen nachvollziehbar. So entstehen klare Grundlagen, um Interessen transparent darzustellen, Missverständnisse früh zu erkennen und gemeinsame Lösungen zu erleichtern.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-4">
                <h3 className="text-white font-semibold">Vertrag</h3>
                <p className="text-sm text-white/70">Kauf-, Werk- und Dienstverträge prüfen und besprechen.</p>
              </div>
              <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-4">
                <h3 className="text-white font-semibold">Haftung</h3>
                <p className="text-sm text-white/70">Schaden beziffern, Nachweise sammeln, Vergleichschancen und Risiken klären.</p>
              </div>
              <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-4">
                <h3 className="text-white font-semibold">Vereinbarung</h3>
                <p className="text-sm text-white/70">Ich strukturiere, dokumentiere klar und schaffe  gemeinsame Lösungen.</p>
              </div>
            </div>
          </div>
          <div className="space-y-5 rounded-2xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft">
            <div className="rounded-lg border border-[#1f3358] bg-[#10253f] px-4 py-3">
              <div className="text-sm text-white/70">Schwerpunkt</div>
              <div className="text-lg font-semibold text-white">Vertrag, Vereinbarung</div>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white">Erstberatung im Zivilrecht</h3>
            <p className="text-white/80">
              Unterlagen sichten, Risiken und Kosten besprechen, Fahrplan festlegen.
            </p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Vertrag, Schriftverkehr und Fristen strukturiert sammeln</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Risiken, Kosten und Vergleichschancen transparent besprechen</span>
              </li>

            </ul>
            <div>
              <Link href="/kontakt" className="no-underline" aria-label="Termin im Zivilrecht vereinbaren">
                <Button className="w-full">Termin vereinbaren</Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="contrast" align="center" title="Nächster Schritt">
        <div className="max-w-2xl mx-auto space-y-4 text-white/85">
          <p>Kurze Einschätzung zu Vertrag, Fristen und Risiken - und ein klarer Plan für das Mediationsverfahren.</p>
          <Link href="/kontakt" className="no-underline inline-flex">
            <Button size="lg">Kontakt aufnehmen</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
