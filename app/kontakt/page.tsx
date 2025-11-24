import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zur Kanzlei Meisner in Haßfurt: Termin vereinbaren oder Anliegen schildern – telefonisch, per E-Mail oder über das Kontaktformular."
};

export default function Page() {
  return (
    <Section variant="pattern" title="Kontakt" intro="Vereinbaren Sie einen Termin oder schildern Sie kurz Ihr Anliegen.">
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <ContactForm />
        </div>
        <div className="space-y-3 text-gray-700">
          <p>
            Telefon: <a className="no-underline" href="tel:+499512000000">+49 9512 000000</a>
          </p>
          <p>
            E-Mail: <a className="no-underline" href="mailto:kanzlei@example.com">kanzlei@example.com</a>
          </p>
          <p>Adresse: Musterstraße 12, 97437 Haßfurt</p>
          <div className="rounded-lg border border-gray-200 p-3 bg-white text-sm">
            <p className="font-medium text-gray-900">Anfahrt</p>
            <p className="text-gray-700">ÖPNV: Linie X, Haltestelle Musterplatz. Parken in der Nähe möglich.</p>
            <div className="mt-3 h-56 w-full overflow-hidden rounded-md">
              <iframe
                title="Karte: Kanzlei Meisner"
                aria-label="Karte: Kanzlei Meisner in Haßfurt"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.openstreetmap.org/export/embed.html?bbox=10.488%2C49.950%2C10.518%2C49.966&layer=mapnik&marker=49.958%2C10.503"
              />
            </div>
            <p className="mt-2"><a className="underline" href="https://www.openstreetmap.org/?mlat=49.958&mlon=10.503#map=15/49.958/10.503" target="_blank" rel="noreferrer">Größere Karte öffnen</a></p>
          </div>
          <div className="rounded-lg border border-gray-200 p-3 bg-white text-sm">
            <p className="font-medium text-gray-900">Bürozeiten</p>
            <p className="text-gray-700">Mo–Fr 9:00–17:00 Uhr – Termine nach Vereinbarung.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
