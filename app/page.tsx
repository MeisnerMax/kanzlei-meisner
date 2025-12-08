import Script from "next/script";
import type { Metadata } from "next";
import Link from "next/link";

import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

const iconClass = "h-10 w-10 text-primary-300";

function IconFamily() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="7" cy="7" r="2.6" />
      <circle cx="17" cy="7" r="2.6" />
      <path d="M3.5 20v-1.5c0-2.2 1.8-4 4-4h1c2.2 0 4 1.8 4 4V20" />
      <path d="M11.5 15.5c.7-.9 1.8-1.5 3-1.5h1c2.2 0 4 1.8 4 4V20" />
    </svg>
  );
}

function IconLaw() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7 20h10" />
      <path d="M12 4 5 8l7 4 7-4-7-4Z" />
      <path d="M5 12v2c0 1 1.5 3 4 3s4-2 4-3v-2" />
      <path d="M13 10v4c0 1 1.5 3 4 3s4-2 4-3v-4" />
    </svg>
  );
}

function IconContract() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="5" y="3" width="10" height="18" rx="2" />
      <path d="M9 7h4M9 11h4M9 15h2" />
      <path d="m15 8 4 4-4 4" />
    </svg>
  );
}

function IconMediation() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="6.5" cy="7" r="2.4" />
      <circle cx="17.5" cy="7" r="2.4" />
      <path d="M4 14c0-1.7 1.4-3 3.1-3h2.3C11.1 11 12 12 12 13.2V20" />
      <path d="M20 14c0-1.7-1.4-3-3.1-3h-2.3c-1.7 0-2.6 1-2.6 2.2" />
      <path d="M7 18h4" />
      <path d="M13 15h4" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Volljuristin Meisner - Kanzlei Haßfurt Fischer",
  description:
    "Beratung in Familien-, Erb- und Zivilrecht in Haßfurt und Ebern: Trennung, Scheidung, Unterhalt, Sorgerecht, Testament, Pflichtteil und Erbengemeinschaft.",
  openGraph: {
    title: "Volljuristin Meisner - Kanzlei Haßfurt Fischer",
    description:
      "Beratung in Familien-, Erb- und Zivilrecht in Haßfurt und Ebern: Trennung, Scheidung, Unterhalt, Sorgerecht, Testament, Pflichtteil und Erbengemeinschaft.",
    type: "website",
    url: "https://example.com/",
    images: [
      { url: "/hero-illustration.svg", width: 1200, height: 630, alt: "Kanzlei Haßfurt Fischer" }
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
            name: 'Volljuristin Meisner in der Kanzlei Haßfurt Fischer',
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
            areaServed: 'Haßfurt und Ebern'
          })
        }}
      />
      <HeroSection />
      <Section variant="pattern" title="Schwerpunkte" intro="Kompetente Unterstützung im Familien-, Erb- und Zivilrecht." align="center">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Trennung & Scheidung"
            text="Scheidungscoaching, Unterhalt, Zugewinnausgleich, Vermögensaufteilung."
            href="/familienrecht"
            icon={<IconFamily />}
          />
          <Card
            title="Sorgerecht & Umgang"
            text="Kindeswohl im Fokus: Umgangsregelungen, Sorgerechtsfragen."
            href="/familienrecht"
            icon={<IconFamily />}
          />
          <Card
            title="Testament & Erbfolge"
            text="Gemeinsame Gestaltung von Testamenten, Erbfolge, Pflichtteilsrechten."
            href="/erbrecht"
            icon={<IconLaw />}
          />
          <Card
            title="Erbengemeinschaft"
            text="Besprechung von Nachlässen, Herausarbeiten von Ansprüchen, Konfliktlösung."
            href="/erbrecht"
            icon={<IconLaw />}
          />
          <Card
            title="Zivilrechtliche Ansprüche"
            text="Vertragsgestaltung und Überprüfung, Herausarbeiten von Ansprüchen."
            href="/zivilrecht"
            icon={<IconContract />}
          />
          <Card
            title="Medizinrecht"
            text="Konflikte strukturiert lösen, Optionen entwickeln und tragfähige Vereinbarungen sichern."
            href="/mediation"
            icon={<IconMediation />}
          />
        </div>
      </Section>
      <Section
        variant="subtle"
        title="Mediation als Abkürzung"
        intro="Konflikte früh kanalisieren: strukturierter Ablauf, klare Dokumentation und umsetzbare Vereinbarungen."
        align="center"
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-4 text-white/85 leading-relaxed">
            <p>
              Ich moderiere Sitzungen, halte Interessen und Optionen fest und sorge dafür, dass Ergebnisse schriftlich tragfähig
              werden. So sparen Sie Zeit, Kosten und vermeiden Eskalationen.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-4">
                <h3 className="text-white font-semibold">Strukturierter Prozess</h3>
                <p className="text-sm text-white/70">Kick-off, Themenliste, moderierte Sitzungen mit Protokoll.</p>
              </div>
              <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-4">
                <h3 className="text-white font-semibold">Verbindliche Ergebnisse</h3>
                <p className="text-sm text-white/70">Vereinbarungen konkret formulieren, Verantwortlichkeiten festlegen.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-[#1f3358] bg-[#0f1e35] p-6 shadow-soft space-y-4">
            <h3 className="font-serif text-2xl font-semibold text-white">Mediation anfragen</h3>
            <p className="text-white/80">
              Geeignet für Familien-, Erb-, Nachbarschafts- und Vertragskonflikte. Ich kläre Ziele, Zeitplan und Kosten im Erstgespräch.
            </p>
            <div className="grid gap-3 text-white/80 text-sm">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Gemeinsame Regeln und Themenliste aufsetzen</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Sitzungen moderieren, Optionen entwickeln, Deadlocks auflösen</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-400" aria-hidden />
                <span>Abschlussvereinbarung mit Umsetzungsschritten sichern</span>
              </div>
            </div>
            <div className="pt-2">
              <Link href="/mediation" className="no-underline" aria-label="Mehr zur Mediation">
                <Button className="w-full">Mehr zur Mediation</Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
      <Section variant="contrast" title="Hier sind Sie richtig!" align="center">
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#1f3358] bg-[#0f1e35] p-6 md:p-8 shadow-soft">
            <div className="mb-3 text-primary-200">
              <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 21c5-2.5 8-5.5 8-10a8 8 0 1 0-16 0c0 4.5 3 7.5 8 10Z" />
                <path d="M9.5 12.5 11 14l3.5-4" />
              </svg>
            </div>
            <h3 className="font-semibold text-white">Spezialisierung</h3>
            <p className="mt-3 text-white/80 leading-relaxed">Fokus auf Familien-, Erb- und Zivilrecht - täglich gelebte Praxis.</p>
          </div>
          <div className="rounded-2xl border border-[#1f3358] bg-[#0f1e35] p-6 md:p-8 shadow-soft">
            <div className="mb-3 text-primary-200">
              <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 3 3 8l9 5 9-5-9-5Z" />
                <path d="M5 10v4c0 1 1 2 3 3l4 2 4-2c2-.9 3-2 3-3v-4" />
                <path d="M12 12.5 6 9.5" />
                <path d="m12 12.5 6-3" />
              </svg>
            </div>
            <h3 className="font-semibold text-white">Verlässlichkeit</h3>
            <p className="mt-3 text-white/80 leading-relaxed">Klare Einschätzungen, transparente Kommunikation, strukturierter Ablauf.</p>
          </div>
          <div className="rounded-2xl border border-[#1f3358] bg-[#0f1e35] p-6 md:p-8 shadow-soft">
            <div className="mb-3 text-primary-200">
              <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 21s7-5.2 7-10.4C19 6.2 15.9 3 12 3S5 6.2 5 10.6C5 15.8 12 21 12 21Z" />
                <circle cx="12" cy="10.5" r="2.5" />
              </svg>
            </div>
            <h3 className="font-semibold text-white">Nähe</h3>
            <p className="mt-3 text-white/80 leading-relaxed">Persönlich erreichbar in Haßfurt - vor Ort und digital.</p>
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
