import Image from "next/image";
import { ButtonLink } from "@/components/Button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ivory pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="absolute left-[-14rem] top-[-18rem] h-[36rem] w-[36rem] rounded-full border border-sage/20" />
      <div className="absolute left-[-8rem] top-[-12rem] h-[26rem] w-[26rem] rounded-full border border-sage/25" />
      <div className="container-max relative z-10 grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-clay">
            <span className="h-px w-10 bg-clay" />
            Mediation & Konfliktklärung
          </p>
          <h1 className="font-serif text-[clamp(3.4rem,7.3vw,7.1rem)] font-medium leading-[0.92] tracking-[-0.055em] text-ink">
            Aus festgefahren
            <span className="block italic text-sage-dark">wird verhandelbar.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/68 sm:text-xl sm:leading-9">
            Ich schaffe einen neutralen Rahmen, in dem wir Konflikte sortieren,
            Interessen verstehen und tragfähige Vereinbarungen entwickeln können.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/kontakt" size="lg" className="w-full sm:w-auto">
              Orientierungsgespräch anfragen
            </ButtonLink>
            <ButtonLink
              href="/#konflikt-navigator"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Passt Mediation zu uns?
            </ButtonLink>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-3 border-y border-ink/12 py-5">
            <div className="pr-4">
              <div className="font-serif text-2xl font-semibold text-ink sm:text-3xl">30+</div>
              <div className="mt-1 text-xs leading-5 text-ink/50">Jahre juristische Erfahrung</div>
            </div>
            <div className="border-l border-ink/12 px-4">
              <div className="font-serif text-2xl font-semibold text-ink sm:text-3xl">20+</div>
              <div className="mt-1 text-xs leading-5 text-ink/50">Jahre als Mediatorin</div>
            </div>
            <div className="border-l border-ink/12 pl-4">
              <div className="font-serif text-2xl font-semibold text-ink sm:text-3xl">1:1</div>
              <div className="mt-1 text-xs leading-5 text-ink/50">persönlich und vertraulich</div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem]">
          <div className="absolute -right-6 -top-6 h-full w-full rounded-[2.5rem] border border-sage/35" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-sand shadow-[0_30px_80px_rgba(25,37,34,0.16)]">
            <Image
              src="/stephanie-meisner-portrait.webp"
              alt="Stephanie Meisner, Volljuristin und Mediatorin"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="object-cover object-[center_28%]"
            />
          </div>
          <div className="absolute -bottom-7 -left-4 max-w-[17rem] rounded-3xl border border-white/70 bg-white/88 p-5 shadow-[0_18px_50px_rgba(25,37,34,0.14)] backdrop-blur sm:-left-10 sm:p-6">
            <p className="font-serif text-xl leading-7 text-ink">
              „Ich entscheide nicht, wer recht hat. Ich sorge dafür, dass wieder
              verhandelt werden kann.“
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
