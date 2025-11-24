import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: {
    default: "Kanzlei Meisner – Familienrecht & Erbrecht in Haßfurt",
    template: "%s | Kanzlei Meisner"
  },
  description:
    "Rechtsanwältin für Familienrecht und Erbrecht in Haßfurt. Kompetenz, Klarheit und Verlässlichkeit. Jetzt Termin vereinbaren.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

