import Section from "@/components/Section";
import AttorneyProfile from "@/components/AttorneyProfile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meisner",
  description:
    "Profil von Volljuristin Meisner: Ausbildung, Berufserfahrung, Fortbildungen, Mitgliedschaften, Werte und Arbeitsweise."
};

export default function Page() {
  return (
    <Section variant="subtle" as="h1" title="Profil" intro="Juristische Kompetenz und klare Kommunikation – für tragfähige Ergebnisse.">
      <AttorneyProfile />
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <div className="rounded-lg border border-white/15 bg-white/5 p-6">
          <h3 className="font-semibold text-white">Werte</h3>
          <p className="mt-2 text-white/80">Respekt, Vertraulichkeit, und eine sachliche Herangehensweise.</p>
        </div>
        <div className="rounded-lg border border-white/15 bg-white/5 p-6">
          <h3 className="font-semibold text-white">Arbeitsweise</h3>
          <p className="mt-2 text-white/80">Strukturiert, gut vorbereitet, zielorientiert verhandeln.</p>
        </div>
        <div className="rounded-lg border border-white/15 bg-white/5 p-6">
          <h3 className="font-semibold text-white">Kommunikation</h3>
          <p className="mt-2 text-white/80">Klar und verständlich – ohne unnötige Komplexität.</p>
        </div>
      </div>
    </Section>
  );
}
