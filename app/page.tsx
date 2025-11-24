import Script from "next/script";
import type { Metadata } from "next";
import Link from "next/link";

import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Kanzlei Meisner – Familienrecht & Erbrecht in Haßfurt",
  description:
    "Rechtsanwältin für Familienrecht und Erbrecht in Haßfurt: Trennung, Scheidung, Unterhalt, Sorgerecht, Testament, Pflichtteil und Erbengemeinschaft.",
  openGraph: {
    title: "Kanzlei Meisner – Familienrecht & Erbrecht in Haßfurt",
    description:
      "Rechtsanwältin für Familienrecht und Erbrecht in Haßfurt: Trennung, Scheidung, Unterhalt, Sorgerecht, Testament, Pflichtteil und Erbengemeinschaft.",
    type: "website",
    url: "https://example.com/",
    images: [
      { url: "/hero-illustration.svg", width: 1200, height: 630, alt: "Kanzlei Meisner" }
    ]
  }
};

export default function Page() {
  return (
    <>
      <Script id="ld-json-legal" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LegalService',
            name: 'Kanzlei Meisner',
            image: 'https://example.com/hero-illustration.svg',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Musterstraße 12',
              postalCode: '97437',
              addressLocality: 'Haßfurt',
              addressCountry: 'DE'
            },
            url: 'https://example.com',
            telephone: '+49 9512 000000',
            areaServed: 'Haßfurt'
          })
        }}
      />
      <HeroSection />
      <Section variant="pattern" title="Schwerpunkte" intro="Kompetente Unterstützung im Familien- und Erbrecht." align="center">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Trennung & Scheidung"
            text="Begleitung durch das Scheidungsverfahren, Unterhalt, Zugewinnausgleich, Vermögensaufteilung."
            href="/familienrecht"
          />
          <Card
            title="Sorgerecht & Umgang"
            text="Kindeswohl im Fokus: Umgangsregelungen, Sorgerechtsfragen, Mediation."
            href="/familienrecht"
          />
          <Card
            title="Testament & Erbfolge"
            text="Gestaltung von Testamenten, gesetzliche Erbfolge, Pflichtteilsrechte."
            href="/erbrecht"
          />
          <Card
            title="Erbengemeinschaft"
            text="Auseinandersetzung von Nachlässen, Durchsetzung von Ansprüchen, Konfliktlösung."
            href="/erbrecht"
          />
          <Card
            title="Erstberatung"
            text="Strukturiert, transparent, lösungsorientiert – klärt die nächsten Schritte."
            href="/kontakt"
          />
        </div>
      </Section>
      <Section variant="contrast" title="Warum Kanzlei Meisner?" align="center">
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6 md:p-8 bg-white shadow-soft">
            <h3 className="font-semibold text-gray-900">Spezialisierung</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">Fokus auf Familienrecht und Erbrecht – täglich gelebte Praxis.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 md:p-8 bg-white shadow-soft">
            <h3 className="font-semibold text-gray-900">Verlässlichkeit</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">Klare Einschätzungen, transparente Kommunikation, strukturierter Ablauf.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 md:p-8 bg-white shadow-soft">
            <h3 className="font-semibold text-gray-900">Nähe</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">Persönlich erreichbar in Haßfurt – vor Ort und digital.</p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/kontakt" className="no-underline" aria-label="Jetzt Kontakt aufnehmen">
            <Button size="lg">Jetzt Kontakt aufnehmen</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
