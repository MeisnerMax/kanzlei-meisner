import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Gesetzliche Anbieterkennzeichnung der Kanzlei Meisner in Haßfurt."
};

export default function Page() {
  return (
    <section className="py-14 sm:py-16">
      <div className="container-max max-w-3xl prose-legal">
        <h1 className="font-serif text-3xl font-semibold text-gray-900">Impressum</h1>
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Kanzlei Meisner
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
    </section>
  );
}
