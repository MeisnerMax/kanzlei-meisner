import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-transparent text-white dark-footer">
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-white/10 to-transparent" />
      <div className="container-max grid gap-8 py-12 text-sm sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-primary-700 text-white font-bold">M</span>
            <span className="font-serif text-lg font-semibold text-white">Stephanie Meisner</span>
          </div>
          <p className="text-white/70">Juristin & Mediatorin</p>
        </div>
        <div>
          <h3 className="mb-2 font-semibold text-white">Kontakt</h3>
          <ul className="space-y-1 text-white/70">
            
            <li>E-Mail: <a href="mailto:kontakt@stephanie-meisner.de" className="no-underline">kontakt@stephanie-meisner.de</a></li>
            
            <li>Termine in Ebern nach Vereinbarung</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-semibold text-white">Leistungen</h3>
          <ul className="space-y-1 text-white/70">
            <li><Link href="/familienrecht" className="no-underline">Familienrecht</Link></li>
            <li><Link href="/erbrecht" className="no-underline">Erbrecht</Link></li>
            <li><Link href="/zivilrecht" className="no-underline">Zivilrecht</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-semibold text-white">Rechtliches</h3>
          <ul className="space-y-1 text-white/70">
            <li><Link href="/impressum" className="no-underline">Impressum</Link></li>
            <li><Link href="/datenschutz" className="no-underline">Datenschutz</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Volljuristin Meisner. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
