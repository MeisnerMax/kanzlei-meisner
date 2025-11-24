"use client";
import { useState } from "react";

export type FAQ = { q: string; a: string };

export default function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/15 bg-white/5 shadow-soft">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        const buttonId = `faq-button-${idx}`;
        const panelId = `faq-panel-${idx}`;
        return (
          <div key={idx}>
            <button
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : idx)}
              className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
            >
              <span className="font-medium text-white">{item.q}</span>
              <span className="text-white/60" aria-hidden>
                {isOpen ? "–" : "+"}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-4 pb-4 text-white/80"
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
