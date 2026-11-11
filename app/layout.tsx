import type { Metadata } from "next";

import { Manrope, JetBrains_Mono } from "next/font/google";

import "./globals.css";



const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });



export const metadata: Metadata = {

  title: "BuildFlux | Custom websites that turn visitors into revenue",

  description:

    "High-converting custom websites built with Next.js. No unnecessary discovery calls: send a brief, get working previews, launch fast.",

};



export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (

    <html lang="en" className={`${sans.variable} ${mono.variable}`}>

      <body className="bg-zinc-950 font-[family-name:var(--font-sans)] text-zinc-100 antialiased">

        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">

          <div className="bg-code-grid absolute inset-0" />

          <div className="bg-noise absolute inset-0 opacity-[0.04] mix-blend-overlay" />

        </div>

        {children}

      </body>

    </html>

  );

} 