import type { Metadata } from "next";
import "./globals.css";
import { RootProviders } from "./providers";

export const metadata: Metadata = {
  title: "Automatik - Solutions d'Automatisation",
  description:
    "Automatik offre des solutions complètes en direction, développement web, automatisation et formations pour les entreprises",
  authors: [{ name: "Automatik" }],
  keywords: ["automatisation", "web", "formation", "direction", "développement"],
  openGraph: {
    title: "Automatik - Solutions d'Automatisation",
    description:
      "Automatik offre des solutions complètes en direction, développement web, automatisation et formations",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <RootProviders>
          <div id="root">{children}</div>
        </RootProviders>
      </body>
    </html>
  );
}
