"use client";

import { Mail, ShieldCheck } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Orders", href: "#orders" },
  { label: "Contact", href: "#contact" },
];

export default function TopBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-surface-950/75 px-4 py-3 backdrop-blur-2xl sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#home" className="text-lg font-black tracking-tight text-white">
          Brithton<span className="text-accent-400">X</span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-bold text-surface-200/62 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 sm:flex">
          <a
            href="/admin"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-surface-200/70 transition hover:bg-white/10 hover:text-white"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-accent-300" />
            Admin
          </a>
        </div>
        <a
          href="#orders"
          className="grid h-10 w-10 place-items-center rounded-full bg-white text-surface-950 transition hover:bg-accent-100"
          aria-label="Start an order"
        >
          <Mail className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
