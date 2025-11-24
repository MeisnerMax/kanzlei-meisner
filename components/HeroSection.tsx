import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary-50 via-white to-white with-blob">
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:linear-gradient(to_bottom,white,transparent_80%)]"></div>
      <div className="container-max py-24 sm:py-32 grid gap-12 md:grid-cols-2 md:items-center relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl sm:text-6xl font-semibold tracking-tight text-gray-900">
            Rechtsanwältin für Familien- und Erbrecht in Haßfurt
          </h1>
          <p className="mt-6 text-xl text-gray-700 leading-relaxed">
            Klar, zuverlässig, auf Ihrer Seite: Unterstützung bei Trennung, Scheidung, Unterhalt,
            Sorgerecht sowie bei Testament, Pflichtteil und Erbengemeinschaft.
          </p>
          <div className="mt-10 flex gap-4">
            <Link href="/kontakt" className="no-underline" aria-label="Termin vereinbaren">
              <Button size="lg">Jetzt Beratung anfragen</Button>
            </Link>
            <Link href="/leistungen" className="no-underline" aria-label="Leistungen entdecken">
              <Button variant="secondary" size="lg">Leistungen ansehen</Button>
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/40 bg-white/80 backdrop-blur-md p-4 shadow-md">
              <div className="text-2xl font-semibold text-gray-900">10+ Jahre</div>
              <div className="text-sm text-gray-600">Erfahrung im Zivilrecht</div>
            </div>
            <div className="rounded-xl border border-white/40 bg-white/80 backdrop-blur-md p-4 shadow-md">
              <div className="text-2xl font-semibold text-gray-900">Mitglied</div>
              <div className="text-sm text-gray-600">Anwaltsverein, AG Familien-/Erbrecht</div>
            </div>
            <div className="rounded-xl border border-white/40 bg-white/80 backdrop-blur-md p-4 shadow-md">
              <div className="text-2xl font-semibold text-gray-900">Bewertungen</div>
              <div className="text-sm text-gray-600">★★★★★ (Platzhalter)</div>
            </div>
          </div>
        </div>
        <div className="relative h-64 sm:h-80 md:h-96">
          <div className="absolute -inset-3 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60 shadow-xl-soft"></div>
          <Image src="/hero-illustration.svg" alt="Symbolbild Recht und Beratung" fill priority sizes="(min-width: 768px) 40vw, 90vw" className="rounded-xl ring-1 ring-black/5" />
        </div>
      </div>
    </section>
  );
}
