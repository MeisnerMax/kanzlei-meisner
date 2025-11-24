import Link from "next/link";
import { AnchorHTMLAttributes, forwardRef, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "nav" | "button";

type NextLinkProps = ComponentProps<typeof Link>;

export interface AppLinkProps extends Omit<NextLinkProps, "className">, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> {
  variant?: Variant;
  active?: boolean;
  className?: string;
}

function classes(variant: Variant, active?: boolean) {
  if (variant === "nav") {
    return cn(
      "px-3 py-2 rounded-md text-sm font-medium no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
      active ? "text-white bg-white/10" : "text-white/80 hover:text-white hover:bg-white/10"
    );
  }
  if (variant === "button") {
    return "inline-flex items-center rounded-md bg-primary-700 px-5 py-3 text-white font-medium shadow-sm hover:bg-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600";
  }
  return "underline underline-offset-4 text-white hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50";
}

const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(function AppLink(
  { className, variant = "default", active, ...props },
  ref
) {
  return <Link ref={ref} className={cn(classes(variant, active), className)} {...props} />;
});

export default AppLink;
