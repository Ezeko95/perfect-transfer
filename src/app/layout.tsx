import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Perfect Transfer SRL",
  description: "Hecho por Gianluca Cianchi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src={`https://cdn-cookieyes.com/client_data/a3e743aa4204cc4a0e49eeb5/script.js`}
          strategy="beforeInteractive"
        ></Script>
        <link rel="icon" href="/logo-miniatura.png" sizes="logo" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:ital@0;1&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;1,400;1,500&family=Montserrat:ital,wght@0,400;1,300&family=Tinos:ital@1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
