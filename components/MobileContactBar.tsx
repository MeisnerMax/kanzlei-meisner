import Link from "next/link";

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 lg:hidden">
      <Link
        href="/kontakt"
        className="flex min-h-14 items-center justify-center rounded-full bg-clay px-6 font-semibold text-white no-underline shadow-[0_18px_50px_rgba(25,37,34,0.24)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
      >
        Orientierungsgespräch anfragen
      </Link>
    </div>
  );
}
