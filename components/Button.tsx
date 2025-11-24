import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "tertiary";
type Size = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

function styles(variant: Variant, size: Size) {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";
  const variants: Record<Variant, string> = {
    primary: "bg-primary-700 text-white hover:bg-primary-800",
    secondary: "border-2 border-primary-700 text-primary-700 bg-transparent hover:bg-primary-50",
    tertiary: "bg-transparent text-primary-700 hover:bg-primary-50"
  };
  const sizes: Record<Size, string> = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-6",
    lg: "h-12 px-7 text-lg"
  };
  return cn(base, variants[variant], sizes[size]);
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", size = "md", ...props },
  ref
) {
  return <button ref={ref} className={cn(styles(variant, size), className)} {...props} />;
});

export default Button;
