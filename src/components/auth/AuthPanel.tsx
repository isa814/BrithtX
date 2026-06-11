"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, LockKeyhole, Mail, UserRound } from "lucide-react";

type AuthMode = "login" | "signup";

type AuthPanelProps = {
  mode: AuthMode;
  onModeChange: (mode: AuthMode) => void;
  onEnter: () => void;
};

export default function AuthPanel({ mode, onModeChange, onEnter }: AuthPanelProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.07] p-4 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-5">
      <div className="mb-4 grid grid-cols-2 rounded-2xl bg-black/20 p-1">
        {(["login", "signup"] as AuthMode[]).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onModeChange(item)}
            className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
              mode === item
                ? "bg-white text-surface-950"
                : "text-surface-200/60 hover:text-white"
            }`}
          >
            {item === "login" ? "Login" : "Sign Up"}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, x: mode === "login" ? -16 : 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: mode === "login" ? 16 : -16 }}
          transition={{ duration: 0.22 }}
          className="space-y-3"
        >
          {mode === "signup" && (
            <label className="relative block">
              <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-200/40" />
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white outline-none transition focus:border-accent-400/60"
                placeholder="Your name"
              />
            </label>
          )}
          <label className="relative block">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-200/40" />
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white outline-none transition focus:border-accent-400/60"
              placeholder="Email address"
            />
          </label>
          <label className="relative block">
            <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-200/40" />
            <input
              type="password"
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white outline-none transition focus:border-accent-400/60"
              placeholder="Password"
            />
          </label>

          <button
            type="button"
            onClick={onEnter}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-500 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-primary-400"
          >
            {mode === "login" ? "Enter dashboard" : "Create visual account"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </AnimatePresence>

      <p className="mt-4 text-center text-xs leading-relaxed text-surface-200/45">
        Auth is a polished preview for this phase. Guest access opens the full portfolio.
      </p>
    </div>
  );
}
