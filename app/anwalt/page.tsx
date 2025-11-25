import Section from "@/components/Section";
import AttorneyProfile from "@/components/AttorneyProfile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meisner",
  description:
    "Profil von Volljuristin Meisner: 30+ Jahre Erfahrung, Ausbildung, Berufserfahrung, Fortbildungen, Mitgliedschaften, Werte und Arbeitsweise."
};

export default function Page() {
  return (
    <Section
      variant="subtle"
      as="h1"
      title="Profil"
      intro="Volljuristin & Mediatorin für Familien-, Erb- und Zivilrecht. 30+ Jahre Erfahrung, strukturierte Vorbereitung und klare Kommunikation."
    >
      <AttorneyProfile />
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <div className="rounded-lg border border-white/15 bg-white/5 p-6">
          <h3 className="font-semibold text-white">Werte</h3>
          <p className="mt-2 text-white/80">Respektvoll, verbindlich, auf Augenhöhe – mit klaren Prioritäten für Ihre Ziele.</p>
        </div>
        <div className="rounded-lg border border-white/15 bg-white/5 p-6">
          <h3 className="font-semibold text-white">Arbeitsweise</h3>
          <p className="mt-2 text-white/80">Gründliche Analyse, saubere Dokumentation, Vergleichsmöglichkeiten ausloten – konsequent vor Gericht, wenn nötig.</p>
        </div>
        <div className="rounded-lg border border-white/15 bg-white/5 p-6">
          <h3 className="font-semibold text-white">Kommunikation</h3>
          <p className="mt-2 text-white/80">Klar, verständlich, ohne Juristendeutsch – mit verlässlichen Rückmeldungen und abgestimmten nächsten Schritten.</p>
        </div>
      </div>
    </Section>
  );
}
