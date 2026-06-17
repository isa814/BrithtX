"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowRight, Check, Loader2, X } from "lucide-react";
import type {
  PortfolioCategory,
  PortfolioProject,
  PortfolioSubcategory,
} from "@/lib/portfolio-data";

type OrderModalProps = {
  category: PortfolioCategory;
  subcategory: PortfolioSubcategory;
  project?: PortfolioProject;
  onClose: () => void;
};

type OrderFormState = {
  name: string;
  email: string;
  whatsapp: string;
  category: string;
  subcategory: string;
  budget: string;
  description: string;
};

type OrderErrors = Partial<Record<keyof OrderFormState, string>>;

const budgetRanges = [
  "Under $150",
  "$150-$500",
  "$500-$1,500",
  "$1,500+",
  "Not sure yet",
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function OrderModal({
  category,
  subcategory,
  project,
  onClose,
}: OrderModalProps) {
  const [formState, setFormState] = useState<OrderFormState>({
    name: "",
    email: "",
    whatsapp: "",
    category: category.title,
    subcategory: subcategory.title,
    budget: project?.priceLabel ?? budgetRanges[0],
    description: project
      ? `I am interested in ${project.title}. `
      : `I am interested in ${subcategory.title}. `,
  });
  const [errors, setErrors] = useState<OrderErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const updateField = (field: keyof OrderFormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;

      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const validate = () => {
    const nextErrors: OrderErrors = {};

    if (!formState.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!formState.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formState.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formState.whatsapp.trim()) {
      nextErrors.whatsapp = "Please enter your WhatsApp number.";
    }
    if (!formState.category.trim()) {
      nextErrors.category = "Please choose a service category.";
    }
    if (!formState.subcategory.trim()) {
      nextErrors.subcategory = "Please choose a subcategory.";
    }
    if (!formState.budget.trim()) {
      nextErrors.budget = "Please choose a budget range.";
    }
    if (!formState.description.trim()) {
      nextErrors.description = "Please describe what you want built.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitMessage("");

    if (!validate()) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const payload = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(payload.error ?? "Order request failed");
      }

      setStatus("success");
      setSubmitMessage(
        payload.message ?? "Your project request has been submitted successfully."
      );
    } catch (error) {
      setStatus("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  const fieldClass =
    "mt-2 min-h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition placeholder:text-surface-200/35 focus:border-accent-400/60 focus:bg-white/[0.08] sm:text-sm";
  const errorClass = "mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-200";

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-end bg-black/75 px-3 py-4 backdrop-blur-md sm:items-center sm:justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="max-h-[92dvh] w-full max-w-2xl overflow-y-auto rounded-[30px] border border-white/10 bg-surface-950/95 p-5 shadow-2xl shadow-black/50 sm:p-7"
          initial={{ opacity: 0, y: 44, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 44, scale: 0.98 }}
          transition={{ duration: 0.28 }}
        >
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-400">
                Project request
              </p>
              <h2 className="mt-2 text-2xl font-black text-white">Request Project</h2>
              <p className="mt-1 text-sm text-surface-200/60">
                {category.title} / {subcategory.title}
                {project ? ` / ${project.title}` : ""}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-surface-200 transition hover:bg-white/10 hover:text-white"
              aria-label="Close project request"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-surface-200">Full name</span>
                <input
                  value={formState.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className={fieldClass}
                  placeholder="Your full name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && (
                  <p className={errorClass} role="alert">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.name}
                  </p>
                )}
              </label>

              <label className="block">
                <span className="text-sm font-medium text-surface-200">Email</span>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className={fieldClass}
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && (
                  <p className={errorClass} role="alert">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.email}
                  </p>
                )}
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-medium text-surface-200">WhatsApp number</span>
              <input
                value={formState.whatsapp}
                onChange={(event) => updateField("whatsapp", event.target.value)}
                className={fieldClass}
                placeholder="+234..."
                autoComplete="tel"
                aria-invalid={Boolean(errors.whatsapp)}
              />
              {errors.whatsapp && (
                <p className={errorClass} role="alert">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.whatsapp}
                </p>
              )}
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-surface-200">Service category</span>
                <input
                  value={formState.category}
                  onChange={(event) => updateField("category", event.target.value)}
                  className={fieldClass}
                  aria-invalid={Boolean(errors.category)}
                />
                {errors.category && (
                  <p className={errorClass} role="alert">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.category}
                  </p>
                )}
              </label>

              <label className="block">
                <span className="text-sm font-medium text-surface-200">Subcategory</span>
                <input
                  value={formState.subcategory}
                  onChange={(event) => updateField("subcategory", event.target.value)}
                  className={fieldClass}
                  aria-invalid={Boolean(errors.subcategory)}
                />
                {errors.subcategory && (
                  <p className={errorClass} role="alert">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.subcategory}
                  </p>
                )}
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-medium text-surface-200">Budget range</span>
              <select
                value={formState.budget}
                onChange={(event) => updateField("budget", event.target.value)}
                className={fieldClass}
                aria-invalid={Boolean(errors.budget)}
              >
                {project && (
                  <option className="bg-surface-950" value={project.priceLabel}>
                    {project.priceLabel}
                  </option>
                )}
                {budgetRanges.map((budget) => (
                  <option className="bg-surface-950" key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
              {errors.budget && (
                <p className={errorClass} role="alert">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.budget}
                </p>
              )}
            </label>

            <label className="block">
              <span className="text-sm font-medium text-surface-200">
                Project description
              </span>
              <textarea
                rows={5}
                value={formState.description}
                onChange={(event) => updateField("description", event.target.value)}
                className={`${fieldClass} resize-none leading-6`}
                placeholder="Tell us what you want, the style, pages/features, and deadline..."
                aria-invalid={Boolean(errors.description)}
              />
              {errors.description && (
                <p className={errorClass} role="alert">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errors.description}
                </p>
              )}
            </label>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-black text-surface-950 transition hover:bg-accent-100 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === "success" && <Check className="h-4 w-4" />}
              {status === "idle" && "Submit project request"}
              {status === "loading" && "Submitting request"}
              {status === "success" && "Request submitted"}
              {status === "error" && "Try again"}
              {status !== "loading" && status !== "success" && <ArrowRight className="h-4 w-4" />}
            </button>

            {submitMessage && (
              <p
                className={`text-center text-sm ${
                  status === "success" ? "text-emerald-300" : "text-red-300"
                }`}
                role="status"
              >
                {submitMessage}
              </p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
