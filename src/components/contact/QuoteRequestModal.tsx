"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Loader2, X } from "lucide-react";
import type {
  PortfolioCategory,
  PortfolioProject,
  PortfolioSubcategory,
} from "@/lib/portfolio-data";

type QuoteRequestModalProps = {
  category: PortfolioCategory;
  subcategory: PortfolioSubcategory;
  project: PortfolioProject;
  onClose: () => void;
};

export default function QuoteRequestModal({
  category,
  subcategory,
  project,
  onClose,
}: QuoteRequestModalProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    budget: project.priceLabel,
    timeline: project.timeline,
    details: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          category: category.title,
          subcategory: subcategory.title,
          projectTitle: project.title,
          requestType: project.requestType,
          budget: formState.budget,
          timeline: formState.timeline,
          details: formState.details,
        }),
      });

      if (!response.ok) {
        throw new Error("Order request failed");
      }

      setStatus("success");
      setFormState({
        name: "",
        email: "",
        phone: "",
        budget: project.priceLabel,
        timeline: project.timeline,
        details: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-end bg-black/75 px-3 py-4 backdrop-blur-md sm:items-center sm:justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[30px] border border-white/10 bg-surface-950/95 p-5 shadow-2xl shadow-black/50 sm:p-7"
          initial={{ opacity: 0, y: 44, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 44, scale: 0.98 }}
          transition={{ duration: 0.28 }}
        >
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-400">
                Quote request
              </p>
              <h2 className="mt-2 text-2xl font-black text-white">{project.title}</h2>
              <p className="mt-1 text-sm text-surface-200/60">
                {category.title} / {subcategory.title} / {project.requestType}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-surface-200 transition hover:bg-white/10 hover:text-white"
              aria-label="Close quote request"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-surface-200">Name</span>
                <input
                  required
                  value={formState.name}
                  onChange={(event) => setFormState({ ...formState, name: event.target.value })}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-accent-400/60"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-surface-200">Email</span>
                <input
                  required
                  type="email"
                  value={formState.email}
                  onChange={(event) => setFormState({ ...formState, email: event.target.value })}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-accent-400/60"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-medium text-surface-200">Phone or WhatsApp</span>
              <input
                value={formState.phone}
                onChange={(event) => setFormState({ ...formState, phone: event.target.value })}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-accent-400/60"
                placeholder="+234..."
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-surface-200">Budget</span>
                <select
                  value={formState.budget}
                  onChange={(event) => setFormState({ ...formState, budget: event.target.value })}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-accent-400/60"
                >
                  <option className="bg-surface-950" value={project.priceLabel}>
                    {project.priceLabel}
                  </option>
                  <option className="bg-surface-950" value="Under $150">
                    Under $150
                  </option>
                  <option className="bg-surface-950" value="$150-$500">
                    $150-$500
                  </option>
                  <option className="bg-surface-950" value="$500-$1,500">
                    $500-$1,500
                  </option>
                  <option className="bg-surface-950" value="$1,500+">
                    $1,500+
                  </option>
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-medium text-surface-200">Timeline</span>
                <select
                  value={formState.timeline}
                  onChange={(event) =>
                    setFormState({ ...formState, timeline: event.target.value })
                  }
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-accent-400/60"
                >
                  <option className="bg-surface-950" value={project.timeline}>
                    {project.timeline}
                  </option>
                  <option className="bg-surface-950" value="ASAP">
                    ASAP
                  </option>
                  <option className="bg-surface-950" value="This week">
                    This week
                  </option>
                  <option className="bg-surface-950" value="This month">
                    This month
                  </option>
                  <option className="bg-surface-950" value="Flexible">
                    Flexible
                  </option>
                </select>
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-medium text-surface-200">Project details</span>
              <textarea
                required
                rows={5}
                value={formState.details}
                onChange={(event) => setFormState({ ...formState, details: event.target.value })}
                className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-accent-400/60"
                placeholder="Tell me what you want, the style, deliverables, and deadline..."
              />
            </label>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-black text-surface-950 transition hover:bg-accent-100 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === "success" && <Check className="h-4 w-4" />}
              {status === "idle" && "Save order request"}
              {status === "loading" && "Saving request"}
              {status === "success" && "Order saved"}
              {status === "error" && "Try again"}
              {status !== "loading" && status !== "success" && <ArrowRight className="h-4 w-4" />}
            </button>

            {status === "success" && (
              <p className="text-center text-sm text-emerald-300">
                Your quote request has been saved. I will review it from the admin dashboard.
              </p>
            )}

            {status === "error" && (
              <p className="text-center text-sm text-red-300">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
