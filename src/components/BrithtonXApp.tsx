"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AppShell from "./app-shell/AppShell";
import WelcomeScreen from "./auth/WelcomeScreen";

export default function BrithtonXApp() {
  const [entered, setEntered] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {entered ? (
        <motion.div
          key="dashboard"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <AppShell />
        </motion.div>
      ) : (
        <motion.div
          key="welcome"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.35 }}
        >
          <WelcomeScreen onEnter={() => setEntered(true)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
