"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Images,
  LogIn,
  Palette,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import GlassCard from "@/components/shared/GlassCard";
import { fadeUp, staggerContainer } from "@/lib/motion";

type WelcomeScreenProps = {
  onEnter: (target?: string) => void;
  onAuth: (mode: "login" | "signup") => void;
};

const entryStats = [
  { label: "Design Focus", value: "2" },
  { label: "Portfolio Areas", value: "9" },
  { label: "Client Paths", value: "3" },
];

export default function WelcomeScreen({ onEnter, onAuth }: WelcomeScreenProps) {
  return (
    <section className="relative min-h-dvh overflow-hidden px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-140px] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-primary-500/25 blur-[100px]" />
        <div className="absolute bottom-[-120px] right-[-80px] h-[360px] w-[360px] rounded-full bg-accent-500/20 blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:100%_100%,48px_48px,48px_48px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-40px)] w-full max-w-6xl flex-col justify-center gap-6 lg:grid lg:min-h-[calc(100dvh-48px)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="pt-4 sm:pt-8 lg:pt-0"
        >
          <motion.div
            variants={fadeUp}
            className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-300 sm:mb-6 sm:text-xs sm:tracking-[0.24em]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Graphic design and website design
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            BrithtonX builds visuals and websites that look ready to sell.
            {" "}
            <span className="bg-gradient-to-r from-white via-accent-200 to-primary-300 bg-clip-text text-transparent">
              Start with the work.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-sm leading-7 text-surface-200/68 sm:mt-5 sm:text-lg sm:leading-8"
          >
            A polished creative workspace for viewing my design work,
            choosing the right service, and starting a client request with
            clarity.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3">
            <button
              type="button"
              onClick={() => onEnter("#portfolio")}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-black text-surface-950 transition hover:bg-accent-100 sm:py-4"
            >
              <Images className="h-4 w-4" />
              View Portfolio
            </button>
            <button
              type="button"
              onClick={() => onEnter("#services")}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 sm:px-6 sm:py-4"
            >
              <BriefcaseBusiness className="h-4 w-4" />
              Browse Services
            </button>
            <button
              type="button"
              onClick={() => onEnter("#orders")}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 sm:py-4"
            >
              Start an Order
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => onAuth("login")}
              className="flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-xs font-bold text-surface-200/70 transition hover:bg-white/10 hover:text-white"
            >
              <LogIn className="h-3.5 w-3.5" />
              Client Sign In
            </button>
            <button
              type="button"
              onClick={() => onAuth("signup")}
              className="flex min-h-10 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-xs font-bold text-surface-200/70 transition hover:bg-white/10 hover:text-white"
            >
              <BadgeCheck className="h-3.5 w-3.5" />
              Create Client Profile
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-3">
            {entryStats.map((stat) => (
              <GlassCard key={stat.label} className="rounded-2xl px-2 py-3 text-center sm:px-3 sm:py-4">
                <div className="text-lg font-black text-white sm:text-xl">{stat.value}</div>
                <div className="mt-1 text-[10px] font-medium leading-4 text-surface-200/50 sm:text-[11px]">
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
          className="w-full"
        >
          <GlassCard className="mx-auto w-full max-w-[460px] rounded-[28px] p-4 sm:rounded-[34px] sm:p-6 lg:max-w-none">
            <div className="rounded-[22px] border border-white/10 bg-black/20 p-4 sm:rounded-[26px] sm:p-5">
              <div className="mb-4 flex items-center justify-between sm:mb-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-surface-200/45 sm:text-xs sm:tracking-[0.24em]">
                    BrithtonX
                  </p>
                  <h2 className="mt-1 text-xl font-black text-white sm:text-2xl">Client Workspace</h2>
                </div>
                <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.8)]" />
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {[
                  { label: "Graphic Design", icon: Palette },
                  { label: "Websites", icon: Images },
                  { label: "Services", icon: BriefcaseBusiness },
                  { label: "Orders", icon: ShoppingBag },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-3 text-xs font-bold text-white sm:p-4 sm:text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-accent-300" />
                      <span>{item.label}</span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-gradient-to-r from-accent-400 to-primary-400 sm:mt-3" />
                  </div>
                  );
                })}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
