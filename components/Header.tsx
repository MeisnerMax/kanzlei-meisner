"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/MobileMenu";
import { cn } from "@/lib/utils";

export const navigation = [
  { href: "/mediation", label: "Mediation" },
  { href: "/konfliktfelder", label: "Konfliktfelder" },
  { href: "/ablauf-kosten", label: "Ablauf & Kosten" },
  { href: "/stephanie-meisner", label: "Über mich" }
] as const;

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-ink/10 bg-ivory/90 px-4 shadow-[0_12px_40px_rgba(25,37,34,0.08)] backdrop-blur-xl sm:px-5">
        <Link
          href="/"
          className="group flex items-center gap-3 no-underline"
          aria-label="Stephanie Meisner – Startseite"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-ink text-xs font-bold tracking-wider text-ivory">
            SM
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ivory bg-clay" />
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-lg font-semibold text-ink">
              Stephanie Meisner
            </span>
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-ink/45 sm:block">
              Mediation & Konfliktklärung
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold no-underline transition hover:bg-sage/15 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-clay",
                pathname === item.href ? "bg-sage/20 text-ink" : "text-ink/65"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/kontakt"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-ivory no-underline transition hover:-translate-y-0.5 hover:bg-ink-soft hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-clay"
          >
            Gespräch anfragen
          </Link>
        </div>

        <div className="lg:hidden">
          <MobileMenu nav={navigation} currentPath={pathname || "/"} />
        </div>
      </div>
    </header>
  );
}
