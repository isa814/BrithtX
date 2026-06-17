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
  onAuth: (mode: "login" | "signup", target?: string) => void;
};

const entryStats = [
  { label: "Design Focus", value: "2" },
  { label: "Portfolio Areas", value: "9" },
  { label: "Client Paths", value: "3" },
];

export default function WelcomeScreen({ onAuth }: WelcomeScreenProps) {
  return (
    <section className="relative min-h-dvh overflow-hidden bg-surface-950 px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 sm:hidden">
        <div
          className="welcome-mobile-bg absolute inset-[-5%] bg-cover"
          style={{ backgroundImage: "url('/images/welcome-creative-bg.png')" }}
        />
        <div className="absolute inset-0 bg-black/35" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 20%, rgba(129, 140, 248, 0.18), transparent 34%), linear-gradient(to bottom, rgba(2, 6, 23, 0.56), rgba(2, 6, 23, 0.22) 34%, rgba(2, 6, 23, 0.78) 70%, #020617 100%)",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        <div className="absolute left-1/2 top-[-140px] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-primary-500/25 blur-[100px]" />
        <div className="absolute bottom-[-120px] right-[-80px] h-[360px] w-[360px] rounded-full bg-accent-500/20 blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:100%_100%,48px_48px,48px_48px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-40px)] w-full max-w-6xl flex-col justify-end gap-6 pb-[calc(1rem+env(safe-area-inset-bottom))] sm:justify-center sm:pb-0 lg:grid lg:min-h-[calc(100dvh-48px)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="rounded-[28px] border border-white/10 bg-surface-950/28 p-4 shadow-2xl shadow-black/30 backdrop-blur-[2px] sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-0 sm:pt-8 lg:pt-0"
        >
          <motion.div
            variants={fadeUp}
            className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-200 shadow-lg shadow-black/15 sm:mb-6 sm:bg-white/5 sm:text-xs sm:text-accent-300 sm:tracking-[0.24em]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Graphic design and website design
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-3xl text-4xl font-black tracking-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.75)] sm:text-5xl sm:drop-shadow-none lg:text-7xl"
          >
            Welcome to{" "}
            <span className="bg-gradient-to-r from-white via-accent-200 to-primary-300 bg-clip-text text-transparent">
              BrithtonX
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-sm font-medium leading-7 text-surface-100/86 drop-shadow-[0_4px_18px_rgba(0,0,0,0.8)] sm:mt-5 sm:text-lg sm:font-normal sm:leading-8 sm:text-surface-200/68 sm:drop-shadow-none"
          >
            Turning Ideas Into Impactful Designs. High engagement creatives
            for modern brands.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => onAuth("login", "#portfolio")}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-black text-surface-950 transition hover:bg-accent-100 sm:py-4"
            >
              <Images className="h-4 w-4" />
              View Portfolio
            </button>
            <button
              type="button"
              onClick={() => onAuth("login", "#orders")}
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
              className="flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 text-xs font-black text-white shadow-lg shadow-black/10 transition hover:bg-white/[0.12]"
            >
              <LogIn className="h-3.5 w-3.5" />
              Client Sign In
            </button>
            <button
              type="button"
              onClick={() => onAuth("signup")}
              className="flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 text-xs font-black text-white shadow-lg shadow-black/10 transition hover:bg-white/[0.12]"
            >
              <BadgeCheck className="h-3.5 w-3.5" />
              Create Client Profile
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 hidden grid-cols-3 gap-2 sm:mt-8 sm:grid sm:gap-3">
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
          className="hidden w-full sm:block"
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
