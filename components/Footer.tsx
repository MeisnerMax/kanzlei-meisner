import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-ivory">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-ivory/10" />
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-ivory/10" />
      <div className="container-max relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-md">
          <div className="mb-5 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ivory text-xs font-bold tracking-wider text-ink">
              SM
            </span>
            <span className="font-serif text-2xl font-semibold">Stephanie Meisner</span>
          </div>
          <p className="text-lg leading-8 text-ivory/65">
            Mediation & Konfliktklärung für Familie, Erbe, Gesundheit und private
            Konflikte.
          </p>
          <a
            href="mailto:Meisner.bamberg@freenet.de"
            className="mt-6 inline-block font-semibold text-ivory underline decoration-clay underline-offset-8"
          >
            Meisner.bamberg@freenet.de
          </a>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-sage-light">
            Orientierung
          </h3>
          <ul className="space-y-3 text-ivory/65">
            <li><Link href="/mediation">Was ist Mediation?</Link></li>
            <li><Link href="/konfliktfelder">Konfliktfelder</Link></li>
            <li><Link href="/ablauf-kosten">Ablauf & Kosten</Link></li>
            <li><Link href="/wissen">Wissen & FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-sage-light">
            Weiter
          </h3>
          <ul className="space-y-3 text-ivory/65">
            <li><Link href="/stephanie-meisner">Über mich</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li>
            <li><Link href="/impressum">Impressum</Link></li>
            <li><Link href="/datenschutz">Datenschutz</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="container-max flex flex-col gap-2 py-5 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Stephanie Meisner</span>
          <span>Volljuristin · Mediatorin · Vertrauliche Konfliktklärung</span>
        </div>
      </div>
    </footer>
  );
}
