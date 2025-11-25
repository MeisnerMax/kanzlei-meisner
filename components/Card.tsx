import { ReactNode } from "react";
import Link from "next/link";

export default function Card({ title, text, href, icon }: { title: string; text: string; href?: string; icon?: ReactNode }) {
  const inner = (
    <div className="h-full rounded-2xl border border-[#1f3358] bg-[#0f1e35] p-6 md:p-8 shadow-soft hover:shadow-elevated transition duration-200 will-change-transform hover:-translate-y-0.5">
      {icon ? <div className="mb-3 text-[#cdd6e8]">{icon}</div> : null}
      <h3 className="font-serif text-xl font-semibold text-[#e8edf5]">{title}</h3>
      <p className="mt-3 text-[#c6cede] leading-relaxed">{text}</p>
      {href ? (
        <span className="mt-6 inline-block font-semibold text-[#e8edf5]">Mehr erfahren →</span>
      ) : null}
    </div>
  );
  return href ? <Link href={href} className="block no-underline">{inner}</Link> : inner;
}
