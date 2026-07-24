import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import { Lora, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MobileContactBar } from "@/components/MobileContactBar";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stephaniemeisner.de"),
  title: {
    default: "Stephanie Meisner | Mediation & Konfliktklärung",
    template: "%s | Stephanie Meisner"
  },
  description:
    "Vertrauliche Mediation und strukturierte Konfliktklärung für Familie, Trennung, Erbe, Gesundheit und private Konflikte – persönlich und online.",
  keywords: [
    "Mediatorin",
    "Mediation",
    "Familienmediation",
    "Erbmediation",
    "Konfliktklärung",
    "Ebern",
    "Bamberg",
    "Haßfurt",
    "Online-Mediation"
  ],
  authors: [{ name: "Stephanie Meisner" }],
  creator: "Stephanie Meisner",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Stephanie Meisner – Mediation & Konfliktklärung",
    title: "Aus festgefahren wird verhandelbar.",
    description:
      "Mediation für Familie, Erbe, Gesundheit und private Konflikte – klar, neutral und vertraulich.",
    url: "/"
  },
  twitter: {
    card: "summary_large_image",
    title: "Stephanie Meisner – Mediation & Konfliktklärung",
    description: "Aus festgefahren wird verhandelbar."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className={`${manrope.variable} ${lora.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}



