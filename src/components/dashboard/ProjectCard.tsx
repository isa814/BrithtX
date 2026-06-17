"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Maximize2, WalletCards } from "lucide-react";
import type { PortfolioProject } from "@/lib/portfolio-data";

type ProjectCardProps = {
  project: PortfolioProject;
  onRequest: () => void;
  onPreview: () => void;
};

export default function ProjectCard({ project, onRequest, onPreview }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      className="group overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.06] shadow-xl shadow-black/20 backdrop-blur-xl sm:rounded-[24px]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/10 to-transparent" />
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex flex-wrap gap-1.5 sm:bottom-3 sm:left-3 sm:right-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-black/35 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur sm:px-2.5 sm:text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-3.5 sm:p-4">
        <h3 className="text-base font-black leading-snug text-white sm:text-lg">
          {project.title}
        </h3>
        <p className="mt-2 min-h-0 text-xs leading-5 text-surface-200/62 sm:min-h-[54px] sm:text-sm sm:leading-6">
          {project.description}
        </p>

        <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] font-semibold text-surface-200/65 sm:mt-4 sm:text-xs">
          <div className="flex min-w-0 items-center gap-1.5 rounded-2xl bg-white/5 px-2.5 py-2 sm:gap-2 sm:px-3">
            <Clock className="h-3.5 w-3.5 text-accent-300" />
            <span className="truncate">{project.timeline}</span>
          </div>
          <div className="flex min-w-0 items-center gap-1.5 rounded-2xl bg-white/5 px-2.5 py-2 sm:gap-2 sm:px-3">
            <WalletCards className="h-3.5 w-3.5 text-accent-300" />
            <span className="truncate">{project.priceLabel}</span>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:grid-cols-[0.9fr_1.1fr]">
          <button
            type="button"
            onClick={onPreview}
            className="flex min-h-11 items-center justify-center gap-1.5 rounded-2xl border border-white/10 bg-white/5 px-2.5 py-2.5 text-xs font-bold text-white transition hover:bg-white/10 sm:gap-2 sm:px-3 sm:py-3 sm:text-sm"
          >
            <Maximize2 className="h-4 w-4" />
            Preview
          </button>
          <button
            type="button"
            onClick={onRequest}
            className="flex min-h-11 items-center justify-center gap-1.5 rounded-2xl bg-white px-2.5 py-2.5 text-xs font-black text-surface-950 transition hover:bg-accent-100 sm:gap-2 sm:px-3 sm:py-3 sm:text-sm"
          >
            Request Project
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
