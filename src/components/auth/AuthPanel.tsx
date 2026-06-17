"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowRight, LockKeyhole, Mail, UserRound } from "lucide-react";

type AuthMode = "login" | "signup";

type AuthPanelProps = {
  mode: AuthMode;
  onModeChange: (mode: AuthMode) => void;
  onEnter: (target?: string) => void;
};

type FormErrors = Partial<Record<"name" | "email" | "password" | "confirmPassword", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function AuthPanel({ mode, onModeChange, onEnter }: AuthPanelProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [errors, setErrors] = useState<FormErrors>({});

  const title = mode === "login" ? "Sign in to BrithtonX" : "Create your BrithtonX account";
  const subtitle =
    mode === "login"
      ? "Use your email and password to enter the client workspace."
      : "Create a preview client profile for future orders.";

  const clearModeErrors = (nextMode: AuthMode) => {
    setErrors({});
    onModeChange(nextMode);
  };

  const validate = () => {
    const nextErrors: FormErrors = {};
    const trimmedEmail = email.trim();

    if (mode === "signup" && !name.trim()) {
      nextErrors.name = "Please enter your full name.";
    }

    if (!trimmedEmail) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(trimmedEmail)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      nextErrors.password = "Please enter your password.";
    }

    if (mode === "signup") {
      if (!confirmPassword) {
        nextErrors.confirmPassword = "Please confirm your password.";
      } else if (password !== confirmPassword) {
        nextErrors.confirmPassword = "Passwords do not match yet.";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validate()) {
      onEnter();
    }
  };

  const clearError = (field: keyof FormErrors) => {
    setErrors((current) => {
      if (!current[field]) return current;

      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const inputClass =
    "min-h-12 w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-base text-white outline-none transition placeholder:text-surface-200/35 focus:border-accent-400/60 focus:bg-white/[0.08] sm:text-sm";

  const errorClass = "mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-200";

  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.07] p-3.5 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:rounded-[28px] sm:p-5">
      <div className="mb-4 grid grid-cols-2 rounded-2xl bg-black/20 p-1">
        {(["login", "signup"] as AuthMode[]).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => clearModeErrors(item)}
            className={`min-h-11 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
              mode === item
                ? "bg-white text-surface-950"
                : "text-surface-200/60 hover:text-white"
            }`}
          >
            {item === "login" ? "Sign In" : "Sign Up"}
          </button>
        ))}
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-black text-white sm:text-2xl">{title}</h2>
        <p className="mt-1 text-xs leading-5 text-surface-200/52 sm:text-sm">
          {subtitle}
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.form
          key={mode}
          initial={{ opacity: 0, x: mode === "login" ? -16 : 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: mode === "login" ? 16 : -16 }}
          transition={{ duration: 0.22 }}
          className="space-y-3"
          onSubmit={handleSubmit}
          noValidate
        >
          {mode === "signup" && (
            <div>
              <label htmlFor="full-name" className="mb-1.5 block text-xs font-bold text-surface-200/70">
                Full name
              </label>
              <div className="relative">
                <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-200/40" />
                <input
                  id="full-name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    clearError("name");
                  }}
                  className={inputClass}
                  placeholder="Your full name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                />
              </div>
              {errors.name && (
                <p className={errorClass} role="alert">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.name}
                </p>
              )}
            </div>
          )}

          <div>
            <label htmlFor={`${mode}-email`} className="mb-1.5 block text-xs font-bold text-surface-200/70">
              Email address
            </label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-200/40" />
              <input
                id={`${mode}-email`}
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  clearError("email");
                }}
                className={inputClass}
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
              />
            </div>
            {errors.email && (
              <p className={errorClass} role="alert">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={`${mode}-password`} className="mb-1.5 block text-xs font-bold text-surface-200/70">
              Password
            </label>
            <div className="relative">
              <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-200/40" />
              <input
                id={`${mode}-password`}
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  clearError("password");
                }}
                className={inputClass}
                placeholder="Enter your password"
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                aria-invalid={Boolean(errors.password)}
              />
            </div>
            {errors.password && (
              <p className={errorClass} role="alert">
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.password}
              </p>
            )}
          </div>

          {mode === "signup" && (
            <div>
              <label htmlFor="confirm-password" className="mb-1.5 block text-xs font-bold text-surface-200/70">
                Confirm password
              </label>
              <div className="relative">
                <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-200/40" />
                <input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                    clearError("confirmPassword");
                  }}
                  className={inputClass}
                  placeholder="Re-enter your password"
                  autoComplete="new-password"
                  aria-invalid={Boolean(errors.confirmPassword)}
                />
              </div>
              {errors.confirmPassword && (
                <p className={errorClass} role="alert">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          )}

          {mode === "login" && (
            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
              <label className="flex min-h-6 cursor-pointer items-center gap-2 text-xs font-semibold text-surface-200/62">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                  className="h-4 w-4 rounded border-white/20 bg-white/10 accent-accent-400"
                />
                Remember me
              </label>
              <a
                href="#forgot-password"
                className="text-xs font-bold text-accent-300 transition hover:text-accent-200"
              >
                Forgot password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-primary-500 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-primary-400"
          >
            {mode === "login" ? "Sign In" : "Sign Up"}
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => onEnter("#portfolio")}
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
          >
            View Portfolio as Guest
          </button>

          <p className="pt-1 text-center text-xs leading-relaxed text-surface-200/55">
            {mode === "login" ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={() => clearModeErrors(mode === "login" ? "signup" : "login")}
              className="font-bold text-accent-300 transition hover:text-accent-200"
            >
              {mode === "login" ? "Sign up" : "Sign in"}
            </button>
          </p>
        </motion.form>
      </AnimatePresence>
    </div>
  );
}
