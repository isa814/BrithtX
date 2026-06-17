"use client";

import { motion } from "framer-motion";
import type { PortfolioCategory } from "@/lib/portfolio-data";

type CategoryRailProps = {
  categories: PortfolioCategory[];
  activeId: string;
  onSelect: (id: string) => void;
};

export default function CategoryRail({ categories, activeId, onSelect }: CategoryRailProps) {
  return (
    <div id="categories" className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
      <div className="flex min-w-max gap-3 sm:grid sm:min-w-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {categories.map((category) => {
          const Icon = category.icon;
          const active = category.id === activeId;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelect(category.id)}
              className={`relative flex min-h-16 items-center gap-3 rounded-2xl border px-4 py-3 text-left transition sm:w-full ${
                active
                  ? "border-white/20 bg-white text-surface-950"
                  : "border-white/10 bg-white/[0.06] text-surface-200 hover:bg-white/10 hover:text-white"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-2xl"
                  transition={{ type: "spring", stiffness: 360, damping: 34 }}
                />
              )}
              <Icon className="relative h-5 w-5" />
              <span className="relative whitespace-nowrap text-sm font-bold">
                {category.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
