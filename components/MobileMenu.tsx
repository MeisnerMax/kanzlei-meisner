"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";

type Item = { href: string; label: string };

export default function MobileMenu({
  nav,
  currentPath,
}: {
  nav: Item[];
  currentPath: string;
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Fokusfalle & Escape-Handling
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", keyHandler);

    // Fokus auf Panel setzen
    panelRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", keyHandler);
    };
  }, [open]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        aria-label="Mobiles Menü öffnen"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white 
                   text-gray-700 hover:bg-gray-100 transition focus:outline-none focus-visible:ring-2 
                   focus-visible:ring-primary-600"
      >
        <span aria-hidden className="text-xl">☰</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Sliding Panel */}
          <div
            ref={panelRef}
            tabIndex={-1}
            className="relative ml-auto h-full w-[85%] max-w-sm bg-white shadow-2xl 
                       px-6 py-6 flex flex-col gap-6 animate-slide-in
                       focus:outline-none"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2
                id="mobile-menu-title"
                className="font-serif text-xl font-semibold text-gray-900 tracking-tight"
              >
                Menü
              </h2>
              <button
                aria-label="Menü schließen"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 
                           bg-white text-gray-700 hover:bg-gray-100 transition focus:outline-none 
                           focus-visible:ring-2 focus-visible:ring-primary-600"
              >
                ✕
              </button>
            </div>

            {/* CTA */}
            <Link href="/kontakt" onClick={() => setOpen(false)}>
              <Button size="md" className="w-full">
                Jetzt Beratung anfragen
              </Button>
            </Link>

            {/* NAVIGATION */}
            <nav className="mt-2 grid gap-1.5" aria-label="Mobiles Hauptmenü">
              {nav.map((n) => {
                const active = currentPath === n.href;
                return (
                  <Link
                    key={n.href}
                    href={n.href as any}
                    onClick={() => setOpen(false)}
                    className={[
                      "block rounded-lg px-4 py-3 text-lg transition",
                      active
                        ? "bg-primary-50 text-primary-700 font-semibold"
                        : "text-gray-900 hover:bg-gray-100"
                    ].join(" ")}
                  >
                    {n.label}
                  </Link>
                );
              })}
            </nav>

            {/* Footer Inside Menu (optional) */}
            <div className="mt-auto pt-4 border-t border-gray-200 text-sm text-gray-500">
              © {new Date().getFullYear()} Kanzlei Haßfurt
            </div>
          </div>
        </div>
      )}

      {/* Styles for slide animation */}
      <style jsx>{`
        .animate-slide-in {
          animation: slideIn 0.28s ease-out;
        }
        @keyframes slideIn {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
