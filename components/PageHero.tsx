import type { ReactNode } from "react";
import { ButtonLink } from "@/components/Button";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  cta = true
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
  cta?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-24 text-ivory sm:pb-28 sm:pt-32">
      <div className="absolute -right-24 top-2 h-80 w-80 rounded-full border border-white/10" />
      <div className="absolute -right-2 top-24 h-52 w-52 rounded-full border border-white/10" />
      <div className="container-max relative">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-sage-light">{eyebrow}</p>
        <h1 className="display-balance mt-6 max-w-5xl font-serif text-5xl font-medium leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="body-balance mt-7 max-w-2xl text-lg leading-8 text-ivory/68 sm:text-xl">
          {intro}
        </p>
        {children ? <div className="mt-9">{children}</div> : null}
        {cta ? (
          <div className="mt-10">
            <ButtonLink
              href="/kontakt"
              size="lg"
              className="bg-clay text-white hover:bg-[#b8674b]"
            >
              Orientierungsgespräch anfragen
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function ClosingCTA({
  title = "Ein erster Schritt darf klein sein.",
  text = "Schildern Sie kurz, worum es geht. Vertraulich, unverbindlich und ohne ausführliche Falldetails."
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-clay py-20 text-white sm:py-24">
      <div className="container-max grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <h2 className="max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-[-0.035em] sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">{text}</p>
        </div>
        <ButtonLink
          href="/kontakt"
          variant="secondary"
          size="lg"
          className="border-white/40 bg-white text-ink hover:border-white hover:bg-ivory"
        >
          Vertraulich Kontakt aufnehmen
        </ButtonLink>
      </div>
    </section>
  );
}
