"use client";

import { Mail, ShieldCheck, Sparkles } from "lucide-react";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-surface-950/75 px-4 py-3 backdrop-blur-2xl sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#dashboard" className="text-lg font-black tracking-tight text-white">
          Brithton<span className="text-accent-400">X</span>
        </a>
        <div className="hidden items-center gap-2 sm:flex">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-surface-200/70">
            <Sparkles className="h-3.5 w-3.5 text-accent-300" />
            Premium build menu
          </div>
          <a
            href="/admin"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-surface-200/70 transition hover:bg-white/10 hover:text-white"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-accent-300" />
            Admin
          </a>
        </div>
        <a
          href="#request"
          className="grid h-10 w-10 place-items-center rounded-full bg-white text-surface-950 transition hover:bg-accent-100"
          aria-label="Request a project"
        >
          <Mail className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
