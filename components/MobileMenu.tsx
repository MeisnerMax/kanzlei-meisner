"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";

type Item = { href: string; label: string };

export default function MobileMenu({ nav, currentPath }: { nav: Item[]; currentPath: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mounted]);

  const handleOpen = () => {
    setMounted(true);
    requestAnimationFrame(() => setOpen(true));
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setMounted(false), 260);
  };

  return (
    <>
      <button
        aria-label="Mobiles Menü öffnen"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={handleOpen}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white hover:bg-white/20 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
      >
        <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {mounted && (
        <div className="fixed inset-0 z-[60] flex bg-[#031a38]" role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title">
          <div
            className={`absolute inset-0 bg-[#031a38] transition-opacity duration-250 ${open ? "opacity-100" : "opacity-0"}`}
            aria-hidden
            onClick={handleClose}
          />
          <div
            ref={panelRef}
            tabIndex={-1}
            className={`relative ml-auto flex h-full w-[85%] max-w-sm flex-col gap-6 border border-white/10 bg-[#06284d] px-6 py-6 text-white shadow-2xl duration-250 ease-out transition-all ${open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
          >
            <div className="flex items-center justify-between">
              <h2 id="mobile-menu-title" className="font-serif text-xl font-semibold text-white tracking-tight">
                Menü
              </h2>
              <button
                aria-label="Menü schließen"
                onClick={handleClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white hover:bg-white/20 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6">
                  <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <Link href="/kontakt" onClick={handleClose}>
              <Button size="md" variant="secondary" className="w-full !bg-white !text-[#0a2240] !hover:bg-white/90 !border-0">
                Jetzt Beratung anfragen
              </Button>
            </Link>

            <nav className="mt-2 grid gap-3" aria-label="Mobiles Hauptmenü">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href as any}
                  onClick={handleClose}
                  className={`no-underline rounded-xl px-4 py-3 text-lg border transition ${
                    currentPath === n.href
                      ? "bg-white text-[#0b2443] border-white shadow-soft"
                      : "text-white/90 border-white/5 bg-white/5 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  {n.href === "/anwalt" ? "Meisner" : n.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto border-t border-white/10 pt-4 text-sm text-white/60">
              © {new Date().getFullYear()} Volljuristin Meisner in der Kanzlei Haßfurt Fischer
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .duration-250 { transition-duration: 250ms; }
      `}</style>
    </>
  );
}
