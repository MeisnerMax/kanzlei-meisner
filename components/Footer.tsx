import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-100 bg-white">
      <div className="absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-primary-50/60 to-transparent pointer-events-none" />
      <div className="container-max py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-primary-700 text-white font-bold">M</span>
            <span className="font-serif text-lg font-semibold text-gray-900">Kanzlei Meisner</span>
          </div>
          <p className="text-gray-600">Familienrecht & Erbrecht in Haßfurt.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Kontakt</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Telefon: <a href="tel:+499512000000" className="no-underline">+49 9512 000000</a></li>
            <li>E-Mail: <a href="mailto:kanzlei@example.com" className="no-underline">kanzlei@example.com</a></li>
            <li>Adresse: Musterstraße 12, 97437 Haßfurt</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Leistungen</h3>
          <ul className="space-y-1 text-gray-600">
            <li><Link href="/familienrecht" className="no-underline">Familienrecht</Link></li>
            <li><Link href="/erbrecht" className="no-underline">Erbrecht</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Rechtliches</h3>
          <ul className="space-y-1 text-gray-600">
            <li><Link href="/impressum" className="no-underline">Impressum</Link></li>
            <li><Link href="/datenschutz" className="no-underline">Datenschutz</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Kanzlei Meisner. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
