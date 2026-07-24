import { type ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

export default function Section({
  title,
  intro,
  variant = "ivory",
  as = "h2",
  align = "left",
  eyebrow,
  id,
  className,
  children
}: {
  title?: string;
  intro?: string;
  variant?: "ivory" | "white" | "ink" | "sage" | "sand";
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  eyebrow?: string;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const variants = {
    ivory: "bg-ivory text-ink",
    white: "bg-white text-ink",
    ink: "bg-ink text-ivory",
    sage: "bg-sage-wash text-ink",
    sand: "bg-sand/70 text-ink"
  } as const;
  const headAlign = align === "center" ? "text-center mx-auto" : "";
  const isDark = variant === "ink";
  const Heading = as;

  return (
    <section id={id} className={cn("relative overflow-hidden py-20 sm:py-28", variants[variant], className)}>
      <div className="container-max relative z-10">
        {title ? (
          <div className={cn("mb-12 max-w-3xl sm:mb-16", headAlign)}>
            {eyebrow ? (
              <p
                className={cn(
                  "mb-5 text-xs font-bold uppercase tracking-[0.24em]",
                  isDark ? "text-sage-light" : "text-clay"
                )}
              >
                {eyebrow}
              </p>
            ) : null}
            <Heading
              className={cn(
                "font-serif font-medium leading-[1.06] tracking-[-0.035em]",
                as === "h1"
                  ? "text-5xl sm:text-6xl lg:text-7xl"
                  : as === "h3"
                    ? "text-3xl sm:text-4xl"
                    : "text-4xl sm:text-5xl lg:text-6xl",
                isDark ? "text-ivory" : "text-ink"
              )}
            >
              {title}
            </Heading>
            {intro ? (
              <p
                className={cn(
                  "mt-6 max-w-2xl text-lg leading-8",
                  align === "center" && "mx-auto",
                  isDark ? "text-ivory/70" : "text-ink/65"
                )}
              >
                {intro}
              </p>
            ) : null}
          </div>
        ) : null}
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
