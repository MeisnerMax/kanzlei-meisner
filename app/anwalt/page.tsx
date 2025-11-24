import Section from "@/components/Section";
import AttorneyProfile from "@/components/AttorneyProfile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anwältin",
  description:
    "Profil von Rechtsanwältin Meisner: Ausbildung, Berufserfahrung, Fortbildungen, Mitgliedschaften, Werte und Arbeitsweise."
};

export default function Page() {
  return (
    <Section variant="subtle" as="h1" title="Profil" intro="Juristische Kompetenz und klare Kommunikation – für tragfähige Ergebnisse.">
      <AttorneyProfile />
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="font-semibold text-gray-900">Werte</h3>
          <p className="mt-2 text-gray-700">Respekt, Vertraulichkeit, und eine sachliche Herangehensweise.</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="font-semibold text-gray-900">Arbeitsweise</h3>
          <p className="mt-2 text-gray-700">Strukturiert, gut vorbereitet, zielorientiert verhandeln.</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="font-semibold text-gray-900">Kommunikation</h3>
          <p className="mt-2 text-gray-700">Klar und verständlich – ohne unnötige Komplexität.</p>
        </div>
      </div>
    </Section>
  );
}
