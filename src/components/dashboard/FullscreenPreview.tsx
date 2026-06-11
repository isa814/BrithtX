"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Clock, WalletCards, X } from "lucide-react";
import type {
  PortfolioCategory,
  PortfolioProject,
  PortfolioSubcategory,
} from "@/lib/portfolio-data";

type FullscreenPreviewProps = {
  category: PortfolioCategory;
  subcategory: PortfolioSubcategory;
  project: PortfolioProject;
  onClose: () => void;
  onRequest: () => void;
};

export default function FullscreenPreview({
  category,
  subcategory,
  project,
  onClose,
  onRequest,
}: FullscreenPreviewProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-surface-950/95 p-3 backdrop-blur-2xl sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="mx-auto flex h-full max-w-7xl flex-col">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent-300">
                Fullscreen preview
              </p>
              <h2 className="mt-1 text-xl font-black text-white sm:text-3xl">
                {project.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              aria-label="Close fullscreen preview"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-[1fr_360px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.28 }}
              className="min-h-0 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="h-full min-h-[360px] w-full object-cover"
              />
            </motion.div>

            <aside className="rounded-[30px] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl">
              <p className="text-sm font-semibold text-accent-300">
                {category.title} / {subcategory.title}
              </p>
              <p className="mt-4 text-sm leading-7 text-surface-200/65">
                {project.description}
              </p>

              <div className="mt-5 grid gap-3 text-sm font-semibold text-surface-200/70">
                <div className="flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-3">
                  <Clock className="h-4 w-4 text-accent-300" />
                  {project.timeline}
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-3">
                  <WalletCards className="h-4 w-4 text-accent-300" />
                  {project.priceLabel}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-xs font-bold text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={onRequest}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-black text-surface-950 transition hover:bg-accent-100"
              >
                Request quote
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </aside>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
