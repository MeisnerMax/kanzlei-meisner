import { ReactNode } from "react";
import AppLink from "@/components/AppLink";

export default function NavLink({ href, children, active }: { href: string; children: ReactNode; active?: boolean }) {
  return (
    <AppLink href={href} variant="nav" active={active} aria-current={active ? "page" : undefined}>
      {children}
    </AppLink>
  );
}
