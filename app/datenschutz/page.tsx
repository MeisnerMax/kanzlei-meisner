import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Informationen zur Verarbeitung personenbezogener Daten auf dieser Website."
};

export default function Page() {
  return (
    <section className="py-14 sm:py-16">
      <div className="container-max max-w-3xl prose-legal">
        <h1 className="font-serif text-3xl font-semibold text-gray-900">Datenschutzerklärung</h1>
        <h2>Allgemeine Hinweise</h2>
        <p>
          Der Schutz Ihrer Daten ist uns wichtig. Personenbezogene Daten werden gemäß DSGVO und BDSG
          verarbeitet.
        </p>
        <h3>Verantwortliche Stelle</h3>
        <p>
          Kanzlei Meisner, Musterstraße 12, 97437 Haßfurt, E-Mail: kanzlei@example.com
        </p>
        <h3>Server-Logfiles</h3>
        <p>
          Beim Aufruf der Website werden technische Daten (IP-Adresse, Zeitstempel, Browser) erfasst
          und nach kurzer Zeit gelöscht.
        </p>
        <h3>Kontakt</h3>
        <p>
          Wenn Sie uns per Formular kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage
          gespeichert.
        </p>
        <h3>Ihre Rechte</h3>
        <ul>
          <li>Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung</li>
          <li>Widerspruch gegen die Verarbeitung</li>
          <li>Datenübertragbarkeit</li>
        </ul>
      </div>
    </section>
  );
}
