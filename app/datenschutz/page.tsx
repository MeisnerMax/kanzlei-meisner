import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Informationen zur Verarbeitung personenbezogener Daten – Kanzlei Haßfurt Fischer (Volljuristin Meisner)."
};

export default function Page() {
  return (
    <Section variant="subtle" as="h1" title="Datenschutzerklärung">
      <div className="max-w-3xl prose-legal">
        <h2>Allgemeine Hinweise</h2>
        <p>
          Der Schutz Ihrer Daten ist uns wichtig. Personenbezogene Daten werden gemäß DSGVO und BDSG
          verarbeitet.
        </p>
        <h3>Verantwortliche Stelle</h3>
        <p>
          Volljuristin Meisner in der Kanzlei Haßfurt Fischer, Musterstraße 12, 97437 Haßfurt, E-Mail: kanzlei@example.com
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
    </Section>
  );
}
