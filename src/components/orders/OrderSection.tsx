"use client";

import { useMemo, useState } from "react";
import GlassCard from "@/components/shared/GlassCard";
import OrderModal from "@/components/dashboard/OrderModal";
import {
  portfolioCategories,
  type PortfolioCategory,
  type PortfolioProject,
  type PortfolioSubcategory,
} from "@/lib/portfolio-data";

type ActiveOrder = {
  category: PortfolioCategory;
  subcategory: PortfolioSubcategory;
  project?: PortfolioProject;
};

export default function OrderSection() {
  const defaultOrder = useMemo<ActiveOrder>(() => {
    const category = portfolioCategories[0];
    const subcategory = category.subcategories[0];

    return {
      category,
      subcategory,
      project: subcategory.projects[0],
    };
  }, []);
  const [activeOrder, setActiveOrder] = useState<ActiveOrder | null>(null);

  return (
    <section
      id="orders"
      className="scroll-mt-24 border-b border-white/10 bg-surface-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <GlassCard className="rounded-[28px] p-5 text-center sm:rounded-[34px] sm:p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-300 sm:text-xs sm:tracking-[0.24em]">
            Order
          </p>
          <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
            Ready to start your project?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-surface-200/60">
            Send a custom request after viewing the portfolio. Pick a starting point,
            describe what you need, and I will follow up with the right direction.
          </p>
          <button
            type="button"
            onClick={() => setActiveOrder(defaultOrder)}
            className="mt-6 min-h-12 rounded-2xl bg-white px-6 py-3.5 text-sm font-black text-surface-950 transition hover:bg-accent-100"
          >
            Request Project
          </button>
        </GlassCard>
      </div>

      {activeOrder && (
        <OrderModal
          category={activeOrder.category}
          subcategory={activeOrder.subcategory}
          project={activeOrder.project}
          onClose={() => setActiveOrder(null)}
        />
      )}
    </section>
  );
}
