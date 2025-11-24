import { ReactNode } from "react";
import Link from "next/link";

export default function Card({ title, text, href, icon }: { title: string; text: string; href?: string; icon?: ReactNode }) {
  const inner = (
    <div className="h-full rounded-2xl border border-white/40 bg-white/80 backdrop-blur-md p-6 md:p-8 shadow-md hover:shadow-lg transition duration-200 will-change-transform hover:-translate-y-0.5">
      {icon ? <div className="mb-3 text-primary-700">{icon}</div> : null}
      <h3 className="font-serif text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-gray-700 leading-relaxed">{text}</p>
      {href ? (
        <span className="mt-6 inline-block text-primary-700 font-medium">Mehr erfahren →</span>
      ) : null}
    </div>
  );
  return href ? <Link href={href} className="block no-underline">{inner}</Link> : inner;
}
