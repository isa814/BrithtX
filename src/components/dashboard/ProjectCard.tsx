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
      className="group overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.06] shadow-xl shadow-black/20 backdrop-blur-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/10 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-black/35 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-black text-white">{project.title}</h3>
        <p className="mt-2 min-h-[60px] text-sm leading-6 text-surface-200/62">
          {project.description}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-semibold text-surface-200/65">
          <div className="flex items-center gap-2 rounded-2xl bg-white/5 px-3 py-2">
            <Clock className="h-3.5 w-3.5 text-accent-300" />
            {project.timeline}
          </div>
          <div className="flex items-center gap-2 rounded-2xl bg-white/5 px-3 py-2">
            <WalletCards className="h-3.5 w-3.5 text-accent-300" />
            {project.priceLabel}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-[0.9fr_1.1fr] gap-2">
          <button
            type="button"
            onClick={onPreview}
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            <Maximize2 className="h-4 w-4" />
            Preview
          </button>
          <button
            type="button"
            onClick={onRequest}
            className="flex items-center justify-center gap-2 rounded-2xl bg-white px-3 py-3 text-sm font-black text-surface-950 transition hover:bg-accent-100"
          >
            Quote
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
