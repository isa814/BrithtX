"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, LogIn, Sparkles } from "lucide-react";
import AuthPanel from "./AuthPanel";
import GlassCard from "@/components/shared/GlassCard";
import { dashboardStats } from "@/lib/portfolio-data";
import { fadeUp, staggerContainer } from "@/lib/motion";

type WelcomeScreenProps = {
  onEnter: () => void;
};

export default function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-140px] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-primary-500/25 blur-[100px]" />
        <div className="absolute bottom-[-120px] right-[-80px] h-[360px] w-[360px] rounded-full bg-accent-500/20 blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:100%_100%,48px_48px,48px_48px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-48px)] max-w-6xl flex-col justify-center gap-8 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="pt-10 lg:pt-0"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-accent-300"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Premium portfolio app
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-3xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Welcome to{" "}
            <span className="bg-gradient-to-r from-white via-accent-200 to-primary-300 bg-clip-text text-transparent">
              BrithtonX
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-base leading-8 text-surface-200/68 sm:text-lg"
          >
            Explore a futuristic portfolio dashboard for design, development,
            templates, marketing tools, and Web3 product experiences.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 grid gap-3 sm:grid-cols-3">
            <button
              type="button"
              onClick={() => setMode("login")}
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <LogIn className="h-4 w-4" />
              Login
            </button>
            <button
              type="button"
              onClick={() => setMode("signup")}
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <BadgeCheck className="h-4 w-4" />
              Sign Up
            </button>
            <button
              type="button"
              onClick={onEnter}
              className="flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-black text-surface-950 transition hover:bg-accent-100"
            >
              Continue as Guest
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 grid grid-cols-3 gap-3">
            {dashboardStats.map((stat) => (
              <GlassCard key={stat.label} className="rounded-2xl px-3 py-4 text-center">
                <div className="text-xl font-black text-white">{stat.value}</div>
                <div className="mt-1 text-[11px] font-medium text-surface-200/50">
                  {stat.label}
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.28, duration: 0.5 }}
        >
          <GlassCard className="rounded-[34px] p-4 sm:p-6">
            <div className="mb-5 rounded-[26px] border border-white/10 bg-black/20 p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-surface-200/45">
                    BrithtonX
                  </p>
                  <h2 className="mt-1 text-2xl font-black text-white">Client Portal</h2>
                </div>
                <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.8)]" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["Design", "Code", "Launch", "Scale"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-bold text-white"
                  >
                    {item}
                    <div className="mt-3 h-1.5 rounded-full bg-gradient-to-r from-accent-400 to-primary-400" />
                  </div>
                ))}
              </div>
            </div>

            <AuthPanel mode={mode} onModeChange={setMode} onEnter={onEnter} />
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
