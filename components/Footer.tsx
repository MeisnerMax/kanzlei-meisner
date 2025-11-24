import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-transparent text-white dark-footer">
      <div className="absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      <div className="container-max py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-primary-700 text-white font-bold">M</span>
            <span className="font-serif text-lg font-semibold text-white">Volljuristin Meisner in der Kanzlei Haßfurt Fischer</span>
          </div>
          <p className="text-white/70">Kanzlei Fischer in Haßfurt und Ebern.</p>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">Kontakt</h3>
          <ul className="space-y-1 text-white/70">
            <li>Telefon: <a href="tel:+499512000000" className="no-underline">+49 9512 000000</a></li>
            <li>E-Mail: <a href="mailto:kanzlei@example.com" className="no-underline">kanzlei@example.com</a></li>
            <li>Adresse: Musterstraße 12, 97437 Haßfurt</li>
            <li>Weitere Geschäftsstelle: Ebern</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">Leistungen</h3>
          <ul className="space-y-1 text-white/70">
            <li><Link href="/familienrecht" className="no-underline">Familienrecht</Link></li>
            <li><Link href="/erbrecht" className="no-underline">Erbrecht</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">Rechtliches</h3>
          <ul className="space-y-1 text-white/70">
            <li><Link href="/impressum" className="no-underline">Impressum</Link></li>
            <li><Link href="/datenschutz" className="no-underline">Datenschutz</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Volljuristin Meisner in der Kanzlei Haßfurt Fischer. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
