"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Item = { readonly href: string; readonly label: string };

export default function MobileMenu({ nav, currentPath }: { nav: readonly Item[]; currentPath: string }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        aria-label="Mobiles Menü öffnen"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-white/50 text-ink transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-clay"
      >
        <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex bg-ink/30 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          <div
            className="absolute inset-0"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <div
            ref={panelRef}
            tabIndex={-1}
            className="relative ml-auto flex h-full w-[88%] max-w-sm flex-col bg-ivory px-6 py-6 text-ink shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <h2 id="mobile-menu-title" className="font-serif text-2xl font-semibold tracking-tight">
                Orientierung
              </h2>
              <button
                aria-label="Menü schließen"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-white/60 text-ink transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-clay"
              >
                <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6">
                  <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="mt-8 grid gap-3" aria-label="Mobiles Hauptmenü">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={`rounded-2xl border px-4 py-3.5 text-lg font-semibold no-underline transition ${
                  currentPath === "/"
                    ? "border-ink bg-ink text-ivory"
                    : "border-ink/10 bg-white/50 text-ink"
                }`}
              >
                Startseite
              </Link>
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl border px-4 py-3.5 text-lg font-semibold no-underline transition ${
                    currentPath === n.href
                      ? "border-ink bg-ink text-ivory"
                      : "border-ink/10 bg-white/50 text-ink hover:border-sage hover:bg-sage/10"
                  }`}
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto space-y-4 border-t border-ink/10 pt-6">
              <p className="text-sm leading-6 text-ink/60">
                Ein erster Kontakt darf kurz sein. Vertraulich und ohne ausführliche Falldetails.
              </p>
              <Link
                href="/kontakt"
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center justify-center rounded-full bg-clay px-5 py-3 font-semibold text-white no-underline"
              >
                Gespräch anfragen
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
