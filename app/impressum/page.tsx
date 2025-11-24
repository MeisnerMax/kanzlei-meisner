import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Gesetzliche Anbieterkennzeichnung – Volljuristin Meisner in der Kanzlei Haßfurt Fischer (Standorte Haßfurt und Ebern)."
};

export default function Page() {
  return (
    <Section variant="subtle" as="h1" title="Impressum">
      <div className="max-w-3xl prose-legal">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Volljuristin Meisner in der Kanzlei Haßfurt Fischer
          <br /> Musterstraße 12
          <br /> 97437 Haßfurt
        </p>
        <h3>Kontakt</h3>
        <p>
          Telefon: +49 9512 000000
          <br /> E-Mail: kanzlei@example.com
        </p>
        <h3>Berufsbezeichnung und zuständige Kammer</h3>
        <p>
          Berufsbezeichnung: Rechtsanwältin (Deutschland)
          <br /> Zuständige Rechtsanwaltskammer: Rechtsanwaltskammer Bamberg
        </p>
        <h3>Berufsrechtliche Regelungen</h3>
        <p>
          Es gelten die BRAO, BORA, FAO, RVG. Die Regelungen sind einsehbar auf den Seiten der
          Bundesrechtsanwaltskammer.
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
