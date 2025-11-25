import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: {
    default: "Volljuristin Meisner in der Kanzlei Haßfurt Fischer - Familienrecht & Erbrecht",
    template: "%s | Volljuristin Meisner - Kanzlei Haßfurt Fischer"
  },
  description:
    "Beratung im Familien- und Erbrecht in Haßfurt und Ebern. Volljuristin, Mediatorin - klar, zuverlässig, verbindlich.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: ReactNode }) {
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
