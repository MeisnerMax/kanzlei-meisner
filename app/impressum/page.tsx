import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Gesetzliche Anbieterkennzeichnung – Stephanie Meisner, Juristin."
};

export default function Page() {
  return (
    <Section variant="subtle" as="h1" title="Impressum">
      <div className="max-w-3xl prose-legal">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Stephanie Meisner
          <br /> Loßbergstraße 12
          <br /> 96106 Ebern
        </p>
        <h3>Kontakt</h3>
        <p>
          Telefon: 0176 - 44413255
          
        </p>
        <h3>Berufsbezeichnung und zuständige Kammer</h3>
        <p>
          Berufsbezeichnung: Volljuristin & Mediatorin
          
        </p>
        <h3>Umsatzsteuer-ID</h3>
        <p>Angabe folgt.</p>
        <h3>Haftungsausschluss</h3>
        <p>
          Die Inhalte dieser Website stellen keine Rechtsberatung dar und können diese nicht
          ersetzen.
        </p>
      </div>
    </Section>
  );
}
