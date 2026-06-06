import "./globals.css";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

/* ---------------- FONTS ---------------- */

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

/* ---------------- METADATA ---------------- */

export const metadata: Metadata = {
  title: "Agence Digitale Premium",
  description:
    "Création de sites web haut de gamme, UX/UI design et développement Next.js performant.",
  keywords: [
    "agence web",
    "nextjs",
    "design UI UX",
    "site vitrine",
    "développement web",
  ],
};

/* ---------------- ROOT LAYOUT ---------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={syne.variable}>
      <body className="bg-[#070816] text-white antialiased">
        
        {/* HEADER GLOBAL */}
        <Header />

        {/* MAIN APP */}
        <main>{children}</main>

        {/* FOOTER GLOBAL */}
        <Footer />

      </body>
    </html>
  );
}