import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-white/10 via-transparent to-transparent with-blob">
      <div className="absolute inset-0 bg-grid opacity-10 [mask-image:linear-gradient(to_bottom,white,transparent_80%)]"></div>
      <div className="container-max py-24 sm:py-32 grid gap-12 md:grid-cols-2 md:items-center relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl sm:text-6xl font-semibold tracking-tight text-white">
            Volljuristin für Familien- und Erbrecht in Haßfurt
          </h1>
          <p className="mt-6 text-xl text-white/80 leading-relaxed">
            Klar, zuverlässig, auf Ihrer Seite: Unterstützung bei Trennung, Scheidung, Unterhalt,
            Sorgerecht sowie bei Testament, Pflichtteil und Erbengemeinschaft.
          </p>
          <div className="mt-10 flex gap-4">
            <Link href="/kontakt" className="no-underline" aria-label="Termin vereinbaren">
              <Button size="lg">Jetzt Beratung anfragen</Button>
            </Link>
            <Link href="/kontakt#rueckruf" className="no-underline" aria-label="Rückruf anfordern">
              <Button variant="secondary" size="lg">Rückruf anfordern</Button>
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/40 bg-white/80 backdrop-blur-md p-4 shadow-md">
              <div className="text-2xl font-semibold text-white">30+ Jahre</div>
              <div className="text-sm text-white/70">Erfahrung als Juristin</div>
            </div>
            <div className="rounded-xl border border-white/40 bg-white/80 backdrop-blur-md p-4 shadow-md">
              <div className="text-2xl font-semibold text-white">Mitglied</div>
              <div className="text-sm text-white/70">Anwaltsverein, AG Familien-/Erbrecht</div>
            </div>
            <div className="rounded-xl border border-white/40 bg-white/80 backdrop-blur-md p-4 shadow-md">
              <div className="text-2xl font-semibold text-white">Bewertungen</div>
              <div className="text-sm text-white/70">★★★★★ (Platzhalter)</div>
            </div>
          </div>
        </div>
        <div className="relative h-64 sm:h-80 md:h-96">
          <div className="absolute -inset-3 rounded-2xl bg-white/10 border border-white/60 shadow-xl-soft"></div>
          <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAACXBIWXMAAAsSAAALEgHS3X78AAAAGXRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4yLjGq5PkAAABYSURBVHic7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK4BG1AAAX5r8xkAAAAASUVORK5CYII=" alt="Symbolfoto Beratung" fill priority sizes="(min-width: 768px) 40vw, 90vw" className="rounded-xl ring-1 ring-black/5 object-cover" />
        </div>
      </div>
    </section>
  );
}
