"use client";

import { Grid2X2, Home, Mail, Sparkles } from "lucide-react";

const navItems = [
  { label: "Home", href: "#dashboard", icon: Home },
  { label: "Categories", href: "#categories", icon: Grid2X2 },
  { label: "Featured", href: "#featured", icon: Sparkles },
  { label: "Request", href: "#request", icon: Mail },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-3 left-3 right-3 z-40 rounded-[24px] border border-white/10 bg-surface-950/85 px-2 py-2 shadow-2xl shadow-black/40 backdrop-blur-2xl md:hidden">
      <div className="grid grid-cols-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-1 rounded-2xl px-2 py-2 text-[11px] font-semibold text-surface-200/60 transition hover:bg-white/10 hover:text-white"
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
