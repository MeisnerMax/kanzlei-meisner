import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zur Kanzlei Fischer in Haßfurt und Ebern: Termin vereinbaren oder Anliegen schildern – telefonisch, per E-Mail oder über das Kontaktformular."
};

export default function Page() {
  return (
    <Section variant="pattern" title="Kontakt" intro="Vereinbaren Sie einen Termin oder schildern Sie kurz Ihr Anliegen.">
      <div className="grid gap-10 sm:grid-cols-2">
        <div id="rueckruf">
          <ContactForm />
        </div>
        <div className="space-y-3 text-white/80">
          <p>
            Telefon: <a className="no-underline" href="tel:+499521950460">09521 - 950 460</a>
          </p>
          <p>
            Fax: <span className="no-underline">09521 - 950 461</span>
          </p>
          <p>
            E-Mail: <a className="no-underline" href="mailto:anwaltskanzlei-fischer@t-online.de">anwaltskanzlei-fischer@t-online.de</a>
          </p>
          <p>Adresse: Schlesingerstr. 26, 97437 Haßfurt</p>
          <div className="rounded-lg border border-white/15 p-3 bg-white/5 text-sm text-white/80">
            <p className="font-medium text-white">Anfahrt</p>
            <p className="text-white/80">ÖPNV und Parken in der Nähe möglich. Termine nach Vereinbarung.</p>
            <div className="mt-3 h-56 w-full overflow-hidden rounded-md">
              <iframe
                title="Karte: Volljuristin Meisner in der Kanzlei Haßfurt Fischer"
                aria-label="Karte: Kanzlei Haßfurt Fischer in Haßfurt"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.openstreetmap.org/export/embed.html?bbox=10.488%2C49.950%2C10.518%2C49.966&layer=mapnik&marker=49.958%2C10.503"
              />
            </div>
            <p className="mt-2"><a className="underline" href="https://www.openstreetmap.org/?mlat=49.958&mlon=10.503#map=15/49.958/10.503" target="_blank" rel="noreferrer">Größere Karte öffnen</a></p>
          </div>
          <div className="rounded-lg border border-white/15 p-3 bg-white/5 text-sm text-white/80">
            <p className="font-medium text-white">Bürozeiten</p>
            <p className="text-white/80">Mo – Fr: 08:00 – 12:00 | Mo – Do: 13:00 – 17:00</p>
            <p className="text-white/80">Sprechstunde nach Vereinbarung.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
