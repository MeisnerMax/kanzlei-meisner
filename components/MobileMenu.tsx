"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";

type Item = { href: string; label: string };

export default function MobileMenu({ nav, currentPath }: { nav: Item[]; currentPath: string }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
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
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white hover:bg-white/20 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
      >
        <span aria-hidden className="text-xl">☰</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex" role="dialog" aria-modal="true" aria-labelledby="mobile-menu-title">
          <div className="absolute inset-0 bg-black" aria-hidden onClick={() => setOpen(false)} />
          <div
            ref={panelRef}
            tabIndex={-1}
            className="relative ml-auto h-full w-[85%] max-w-sm bg-[#051323] text-white shadow-2xl border border-white/10 px-6 py-6 flex flex-col gap-6 animate-slide-in focus:outline-none"
          >
            <div className="flex items-center justify-between">
              <h2 id="mobile-menu-title" className="font-serif text-xl font-semibold text-white tracking-tight">
                Menü
              </h2>
              <button
                aria-label="Menü schließen"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white hover:bg-white/20 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
              >
                ✕
              </button>
            </div>

            <Link href="/kontakt" onClick={() => setOpen(false)}>
              <Button size="md" className="w-full">Jetzt Beratung anfragen</Button>
            </Link>

            <nav className="mt-2 grid gap-2" aria-label="Mobiles Hauptmenü">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href as any}
                  onClick={() => setOpen(false)}
                  className={`no-underline rounded-lg px-3 py-3 text-lg ${currentPath === n.href ? "bg-primary-50 text-primary-700" : "text-white hover:bg-gray-100"}`}
                >
                  {n.href === "/anwalt" ? "Meisner" : n.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-4 border-t border-white/10 text-sm text-white/60">
              © {new Date().getFullYear()} Volljuristin Meisner in der Kanzlei Haßfurt Fischer
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-slide-in { animation: slideIn 0.28s ease-out; }
        @keyframes slideIn { 0% { transform: translateX(100%);} 100% { transform: translateX(0);} }
      `}</style>
    </>
  );
}

