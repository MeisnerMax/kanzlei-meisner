"use client";
import { useState } from "react";

export type FAQ = { q: string; a: string };

export default function FAQAccordion({
  items,
  tone = "light"
}: {
  items: FAQ[];
  tone?: "light" | "dark";
}) {
  const [open, setOpen] = useState<number | null>(0);
  const dark = tone === "dark";

  return (
    <div
      className={`divide-y overflow-hidden rounded-[1.75rem] border ${
        dark
          ? "divide-white/10 border-white/15 bg-white/[0.04]"
          : "divide-ink/10 border-ink/10 bg-white/60 shadow-soft"
      }`}
    >
      {items.map((item, idx) => {
        const isOpen = open === idx;
        const buttonId = `faq-button-${idx}`;
        const panelId = `faq-panel-${idx}`;
        return (
          <div key={item.q}>
            <button
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : idx)}
              className={`flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-clay sm:px-7 ${
                dark ? "hover:bg-white/5" : "hover:bg-sage-wash/60"
              }`}
            >
              <span className={`font-semibold ${dark ? "text-white" : "text-ink"}`}>{item.q}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xl ${
                  dark ? "border-white/15 text-sage-light" : "border-ink/10 text-clay"
                }`}
                aria-hidden
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={`px-5 pb-6 pr-16 leading-7 sm:px-7 ${
                dark ? "text-white/70" : "text-ink/65"
              }`}
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
