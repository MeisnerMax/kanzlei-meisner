"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "@/components/NavLink";
import Button from "@/components/Button";
import MobileMenu from "@/components/MobileMenu";

const nav = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/familienrecht", label: "Familienrecht" },
  { href: "/erbrecht", label: "Erbrecht" },
  { href: "/kanzlei", label: "Kanzlei" },
  { href: "/anwalt", label: "Anwältin" },
  { href: "/kontakt", label: "Kontakt" }
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="container-max h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-primary-700 text-white font-bold">M</span>
          <span className="font-serif text-lg font-semibold text-gray-900">Kanzlei Meisner</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1" aria-label="Hauptnavigation">
          {nav.map((n) => (
            <NavLink key={n.href} href={n.href} active={pathname === n.href}>
              {n.label}
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
