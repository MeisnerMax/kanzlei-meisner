import Section from "@/components/Section";
import Card from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Überblick über die Beratung im Familien- und Erbrecht: Trennung, Scheidung, Unterhalt, Sorgerecht, Testament, Pflichtteil, Erbengemeinschaft."
};

export default function Page() {
  return (
    <Section variant="subtle" as="h1" title="Leistungen" intro="Überblick über die Beratung im Familien- und Erbrecht.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Familienrecht"
          text="Trennung, Scheidung, Unterhalt, Sorgerecht, Umgang, Zugewinnausgleich."
          href="/familienrecht"
        />
        <Card
          title="Erbrecht"
          text="Testament, gesetzliche Erbfolge, Pflichtteil, Erbengemeinschaft, Nachlass."
          href="/erbrecht"
        />
        <Card
          title="Erstberatung"
          text="Strukturiert und klar: Wir besprechen Ziele, Optionen und nächste Schritte."
          href="/kontakt"
        />
      </div>
    </Section>
  );
}
