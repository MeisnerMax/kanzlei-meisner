import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#050d1a] via-[#050915] to-transparent with-blob">
      <div className="absolute inset-0 bg-grid opacity-10 [mask-image:linear-gradient(to_bottom,white,transparent_80%)]"></div>
      <div className="container-max relative z-10 grid gap-12 py-24 sm:py-32 md:grid-cols-2 md:items-center">
        <div className="max-w-3xl hero-fly-left">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Stephanie Meisner
          </h1>
          <p className="mt-6 text-xl text-white/90 leading-relaxed">
            Juristin & Mediatorin für Familien-, Erb- und Zivilrecht. Klar strukturiert, mit 30+ Jahren Erfahrung und verlässlicher Kommunikation.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/kontakt" className="no-underline" aria-label="Termin vereinbaren">
              <Button size="lg" className="w-full sm:w-auto">Jetzt Beratung anfragen</Button>
            </Link>
            <Link href="/kontakt#rueckruf" className="no-underline" aria-label="Rückruf anfordern">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto border-white text-white bg-transparent hover:bg-white/10"
              >
                Rückruf anfordern
              </Button>
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-4 shadow-md">
              <div className="text-2xl font-semibold text-[#e8edf5]">30+ Jahre</div>
              <div className="text-sm text-[#c6cede]">Erfahrung als Juristin</div>
            </div>
            <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-4 shadow-md">
              <div className="text-2xl font-semibold text-[#e8edf5]">20+ Jahre</div>
              <div className="text-sm text-[#c6cede]">Mediatorin</div>
            </div>
            <div className="rounded-xl border border-[#1f3358] bg-[#0f1e35] p-4 shadow-md">
              <div className="text-2xl font-semibold text-[#e8edf5]">500+</div>
              <div className="text-sm text-[#c6cede]">Zufriedene Kunden</div>
            </div>
          </div>
        </div>
        <div className="relative h-64 sm:h-80 md:h-96 hero-fly-right">
          <div className="absolute -inset-3 rounded-2xl border border-white/60 bg-white/10 shadow-xl-soft"></div>
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <Image
              src="/Justicia.jpg"
              alt="Symbolfoto Beratung"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="rounded-xl object-cover ring-1 ring-black/5 hero-kenburns"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

