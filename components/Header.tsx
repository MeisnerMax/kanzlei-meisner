"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "@/components/NavLink";
import Button from "@/components/Button";
import MobileMenu from "@/components/MobileMenu";

const nav = [
  { href: "/", label: "Start" },
  { href: "/familienrecht", label: "Familienrecht" },
  { href: "/erbrecht", label: "Erbrecht" },
  { href: "/zivilrecht", label: "Zivilrecht" },
  { href: "/medizinrecht", label: "Medizinrecht" },
  { href: "/mediation", label: "Mediation" },
  { href: "/anwalt", label: "Anwältin" },
  { href: "/kontakt", label: "Kontakt" }
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-gradient-to-b from-[#050d1a]/95 via-[#050915]/90 to-transparent backdrop-blur-sm border-b border-white/5 text-white">
      <div className="container-max h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-primary-700 text-white font-bold">SM</span>
          <span className="font-serif text-lg font-semibold text-white">Stephanie Meisner</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1" aria-label="Hauptnavigation">
          {nav.map((n) => (
            <NavLink key={n.href} href={n.href} active={pathname === n.href}>
              {n.href === "/anwalt" ? "Meisner" : n.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link href="/kontakt" className="no-underline" aria-label="Jetzt Beratung anfragen">
            <Button size="md">Jetzt Beratung anfragen</Button>
          </Link>
        </div>
        <div className="md:hidden">
          <MobileMenu nav={nav} currentPath={pathname || "/"} />
        </div>
      </div>
    </header>
  );
}



