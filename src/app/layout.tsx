import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrithtonX | Premium Design & Development Portfolio App",
  description:
    "A premium app-like portfolio for BrithtonX services across graphic design, websites, app development, templates, marketing tools, and Web3 design.",
  keywords: [
    "BrithtonX",
    "portfolio app",
    "graphic design",
    "website design",
    "app development",
    "website templates",
    "marketing tools",
    "Web3 design",
  ],
  openGraph: {
    title: "BrithtonX | Premium Design & Development Portfolio App",
    description:
      "Explore BrithtonX services through a futuristic mobile-first portfolio dashboard.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrithtonX | Premium Design & Development Portfolio App",
    description:
      "Explore BrithtonX services through a futuristic mobile-first portfolio dashboard.",
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
