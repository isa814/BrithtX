import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrithtonX | Graphic Design & Website Design Portfolio",
  description:
    "Explore BrithtonX graphic design and website design work, then request logo, flyer, brand identity, portfolio website, business website, Shopify, Wix, or SaaS website services.",
  keywords: [
    "BrithtonX",
    "graphic design portfolio",
    "website design portfolio",
    "graphic design",
    "website design",
    "logo design",
    "flyer design",
    "brand identity",
    "Shopify website",
    "Wix website",
    "SaaS website",
  ],
  openGraph: {
    title: "BrithtonX | Graphic Design & Website Design Portfolio",
    description:
      "View BrithtonX graphic design and website design work, then start a client request.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrithtonX | Graphic Design & Website Design Portfolio",
    description:
      "View BrithtonX graphic design and website design work, then start a client request.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-surface-950 text-surface-200 antialiased"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
