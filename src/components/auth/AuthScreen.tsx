"use client";

import { ArrowLeft, ShieldCheck } from "lucide-react";
import AuthPanel from "./AuthPanel";
import GlassCard from "@/components/shared/GlassCard";

type AuthScreenProps = {
  mode: "login" | "signup";
  onBack: () => void;
  onEnter: (target?: string) => void;
  onModeChange: (mode: "login" | "signup") => void;
};

export default function AuthScreen({
  mode,
  onBack,
  onEnter,
  onModeChange,
}: AuthScreenProps) {
  return (
    <section className="relative min-h-dvh overflow-hidden px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-140px] top-[-100px] h-[360px] w-[360px] rounded-full bg-primary-500/20 blur-[110px]" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[360px] w-[360px] rounded-full bg-accent-500/18 blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:44px_44px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-40px)] w-full max-w-md flex-col">
        <header className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            aria-label="Back to intro"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-surface-200/70">
            <ShieldCheck className="h-3.5 w-3.5 text-accent-300" />
            Client Access
          </div>
        </header>

        <div className="flex flex-1 items-center">
          <GlassCard className="w-full rounded-[30px] p-4 sm:p-5">
            <div className="mb-5">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent-300">
                BrithtonX
              </p>
              <h1 className="mt-2 text-3xl font-black tracking-tight text-white">
                {mode === "login" ? "Welcome back" : "Create your workspace"}
              </h1>
              <p className="mt-2 text-sm leading-6 text-surface-200/60">
                {mode === "login"
                  ? "Sign in to continue to your client workspace."
                  : "Set up a client profile for project requests and order tracking."}
              </p>
            </div>

            <AuthPanel
              mode={mode}
              onModeChange={onModeChange}
              onEnter={onEnter}
              compact
            />
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
