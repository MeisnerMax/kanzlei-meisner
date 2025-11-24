import { ReactNode } from "react";

export default function Section({
  title,
  intro,
  variant = "default",
  as = "h2",
  align = "left",
  eyebrow,
  children
}: {
  title?: string;
  intro?: string;
  variant?: "default" | "subtle" | "contrast" | "pattern";
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  eyebrow?: string;
  children: ReactNode;
}) {
  const wrapClasses = (() => {
    switch (variant) {
      case "subtle":
        return "relative bg-gray-50/60";
      case "contrast":
        return "relative bg-gradient-to-b from-primary-50 to-white with-blob";
      case "pattern":
        return "relative bg-white bg-grid/50";
      default:
        return "relative";
    }
  })();
  const headAlign = align === "center" ? "text-center mx-auto" : "";
  return (
    <section className={`py-16 sm:py-20 ${wrapClasses}`}>
      <div className="container-max relative z-10">
        {title ? (
          <div className={`max-w-3xl mb-10 ${headAlign}`}>
            {eyebrow ? (
              <p className="text-xs tracking-widest uppercase text-primary-700/80">{eyebrow}</p>
            ) : null}
            {as === "h1" ? (
              <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-gray-900">{title}</h1>
            ) : as === "h3" ? (
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-gray-900">{title}</h3>
            ) : (
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-gray-900">{title}</h2>
            )}
            {intro ? <p className="mt-4 text-gray-700 leading-relaxed">{intro}</p> : null}
            <div className={`after:block after:h-0.5 after:w-16 after:bg-primary-700 after:mt-6 ${align === "center" ? "after:mx-auto" : ""}`} />
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
