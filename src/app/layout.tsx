import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://perfect-transfer.com.ar"),
  title: "Perfect Transfer SRL",
  description:
    "Perfect Transfer SRL, empresa argentina de venta mayorista de insumos gráficos como ser: vinilos, lonas, papeles, tintas, etc. para impresoras de gran formato.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://perfect-transfer.com.ar",
    siteName: "Perfect Transfer SRL",
    images: [
      {
        url: "/meta-logo.png",
        width: 1200,
        height: 630,
        alt: "Perfect-Transfer logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es_AR" className="scroll-smooth">
      <head>
        <meta property="og:image" content="/meta-logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Perfect-Transfer logo" />
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
