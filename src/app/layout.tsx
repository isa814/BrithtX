import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrithtonX — Full-Stack Developer & Graphic Designer | Portfolio",
  description:
    "Full-stack web developer and graphic designer specializing in SaaS development, e-commerce, Web3, and high-converting digital products. Building with React, Node.js, MongoDB, Shopify & more.",
  keywords: [
    "full-stack developer",
    "web developer",
    "graphic designer",
    "SaaS builder",
    "React",
    "Next.js",
    "Shopify",
    "e-commerce",
    "Web3",
    "freelance",
    "portfolio",
  ],
  openGraph: {
    title: "BrithtonX — Full-Stack Developer & Graphic Designer",
    description:
      "Building scalable SaaS, modern web platforms & high-converting e-commerce systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrithtonX — Full-Stack Developer & Graphic Designer",
    description:
      "Building scalable SaaS, modern web platforms & high-converting e-commerce systems.",
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
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
