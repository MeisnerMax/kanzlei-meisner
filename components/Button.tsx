import Link from "next/link";
import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "quiet";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  ariaLabel?: string;
}

export function buttonStyles(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md"
) {
  const base =
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full font-semibold no-underline transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4 focus-visible:ring-offset-ivory disabled:cursor-not-allowed disabled:opacity-50";
  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-ink text-ivory shadow-[0_16px_40px_rgba(25,37,34,0.18)] hover:-translate-y-0.5 hover:bg-ink-soft hover:text-white",
    secondary:
      "border border-ink/25 bg-white/55 text-ink backdrop-blur hover:-translate-y-0.5 hover:border-ink hover:bg-white hover:text-ink",
    quiet: "text-ink hover:bg-sage/15 hover:text-ink"
  };
  const sizes: Record<ButtonSize, string> = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-7 py-3.5 text-base"
  };
  return cn(base, variants[variant], sizes[size]);
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", size = "md", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(buttonStyles(variant, size), className)}
      {...props}
    />
  );
});

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
  ariaLabel
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(buttonStyles(variant, size), className)}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        ↗
      </span>
    </Link>
  );
}

export default Button;
