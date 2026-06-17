"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AppShell from "./app-shell/AppShell";
import AuthScreen from "./auth/AuthScreen";
import WelcomeScreen from "./auth/WelcomeScreen";

export default function BrithtonXApp() {
  const [screen, setScreen] = useState<"intro" | "login" | "signup" | "app">("intro");
  const [entryTarget, setEntryTarget] = useState("#home");
  const [pendingTarget, setPendingTarget] = useState("#home");
  const entered = screen === "app";

  useEffect(() => {
    if (!entered || entryTarget === "#home") return;

    const scrollToTarget = () => {
      document.querySelector(entryTarget)?.scrollIntoView({ block: "start" });
    };

    const frame = window.requestAnimationFrame(scrollToTarget);
    const settleTimer = window.setTimeout(scrollToTarget, 420);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(settleTimer);
    };
  }, [entered, entryTarget]);

  const handleEnter = (target = "#home") => {
    setEntryTarget(target);
    setScreen("app");
  };

  const handleAuth = (mode: "login" | "signup", target = "#home") => {
    setPendingTarget(target);
    setScreen(mode);
  };

  return (
    <AnimatePresence mode="wait">
      {screen === "app" ? (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <AppShell />
        </motion.div>
      ) : screen === "intro" ? (
        <motion.div
          key="welcome"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.35 }}
        >
          <WelcomeScreen
            onAuth={handleAuth}
          />
        </motion.div>
      ) : (
        <motion.div
          key={screen}
          initial={{ opacity: 0, x: screen === "login" ? 24 : -24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: screen === "login" ? -24 : 24 }}
          transition={{ duration: 0.28 }}
        >
          <AuthScreen
            mode={screen}
            target={pendingTarget}
            onBack={() => setScreen("intro")}
            onEnter={handleEnter}
            onModeChange={(mode) => setScreen(mode)}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
