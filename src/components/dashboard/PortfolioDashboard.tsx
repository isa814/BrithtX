"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Layers3,
  Mail,
  Radar,
  Search,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import GlassCard from "@/components/shared/GlassCard";
import CategoryRail from "./CategoryRail";
import FullscreenPreview from "./FullscreenPreview";
import OrderModal from "./OrderModal";
import ProjectCard from "./ProjectCard";
import SubcategoryCarousel from "./SubcategoryCarousel";
import {
  budgetFilters,
  portfolioItems,
  portfolioCategories,
  type PortfolioCategory,
  type PortfolioItem,
  type PortfolioProject,
  type PortfolioSubcategory,
} from "@/lib/portfolio-data";
import { fadeUp, staggerContainer } from "@/lib/motion";

type ActiveProjectContext = {
  category: PortfolioCategory;
  subcategory: PortfolioSubcategory;
  project?: PortfolioProject;
};

const getPriceNumber = (priceLabel: string) => {
  const [firstNumber] = priceLabel.match(/\d[\d,]*/g) ?? [];
  return firstNumber ? Number(firstNumber.replace(/,/g, "")) : 0;
};

const matchesBudgetFilter = (
  project: PortfolioProject,
  budgetFilter: (typeof budgetFilters)[number]
) => {
  const price = getPriceNumber(project.priceLabel);

  if (budgetFilter === "Under $150") return price < 150;
  if (budgetFilter === "$150-$500") return price >= 150 && price <= 500;
  if (budgetFilter === "$500+") return price > 500;

  return true;
};

const matchesSearch = (item: PortfolioItem, query: string) => {
  if (!query) return true;

  const haystack = [
    item.category.title,
    item.subcategory.title,
    item.project.title,
    item.project.description,
    item.project.requestType,
    ...item.project.tags,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
};

export default function PortfolioDashboard() {
  const [activeCategoryId, setActiveCategoryId] = useState(portfolioCategories[0].id);
  const [activeSubcategoryId, setActiveSubcategoryId] = useState(
    portfolioCategories[0].subcategories[0].id
  );
  const [activeRequest, setActiveRequest] = useState<ActiveProjectContext | null>(null);
  const [activePreview, setActivePreview] = useState<ActiveProjectContext | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategoryId, setFilterCategoryId] = useState("all");
  const [budgetFilter, setBudgetFilter] =
    useState<(typeof budgetFilters)[number]>("All");
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const activeCategory = useMemo(
    () =>
      portfolioCategories.find((category) => category.id === activeCategoryId) ??
      portfolioCategories[0],
    [activeCategoryId]
  );

  const activeSubcategory =
    activeCategory.subcategories.find((subcategory) => subcategory.id === activeSubcategoryId) ??
    activeCategory.subcategories[0];
  const featuredProject = activeCategory.subcategories[0].projects[0];
  const ActiveCategoryIcon = activeCategory.icon;
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const searchIsActive =
    normalizedQuery.length > 0 ||
    filterCategoryId !== "all" ||
    budgetFilter !== "All" ||
    featuredOnly;

  const filteredItems = useMemo(
    () =>
      portfolioItems.filter((item) => {
        const categoryMatch =
          filterCategoryId === "all" || item.category.id === filterCategoryId;
        const budgetMatch = matchesBudgetFilter(item.project, budgetFilter);
        const featuredMatch = !featuredOnly || item.project.featured;

        return (
          categoryMatch &&
          budgetMatch &&
          featuredMatch &&
          matchesSearch(item, normalizedQuery)
        );
      }),
    [budgetFilter, featuredOnly, filterCategoryId, normalizedQuery]
  );

  const handleCategorySelect = (categoryId: string) => {
    const nextCategory =
      portfolioCategories.find((category) => category.id === categoryId) ??
      portfolioCategories[0];

    setActiveCategoryId(nextCategory.id);
    setActiveSubcategoryId(nextCategory.subcategories[0].id);
  };

  return (
    <main id="dashboard" className="relative overflow-hidden px-4 pb-24 pt-5 sm:px-6 sm:pb-28 sm:pt-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-24 h-[360px] w-[360px] rounded-full bg-primary-600/12 blur-[110px]" />
        <div className="absolute right-[-140px] top-1/3 h-[420px] w-[420px] rounded-full bg-accent-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid gap-4 py-5 sm:gap-5 sm:py-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-stretch"
        >
          <GlassCard className="rounded-[28px] p-4 sm:rounded-[34px] sm:p-6 lg:p-7">
            <motion.div
              variants={fadeUp}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-accent-300 sm:mb-6 sm:text-xs sm:tracking-[0.22em]"
            >
              <Radar className="h-3.5 w-3.5" />
              Portfolio dashboard
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Build-ready design and development services inside one premium app.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-3xl text-sm leading-7 text-surface-200/64 sm:mt-5 sm:text-base sm:leading-8"
            >
              Browse categories, explore rotating project samples, and request a client-ready
              build without leaving the dashboard.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
              <a
                href="#categories"
                className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-black text-surface-950 transition hover:bg-accent-100 sm:py-3.5"
              >
                Explore categories
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#request"
                className="flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 sm:py-3.5"
              >
                <Mail className="h-4 w-4" />
                Request custom build
              </a>
            </motion.div>
          </GlassCard>

          <GlassCard id="featured" className="rounded-[28px] p-4 sm:rounded-[34px] sm:p-5">
            <div className="flex h-full flex-col justify-between gap-4 sm:gap-5">
              <div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-surface-950 sm:h-12 sm:w-12">
                  <Sparkles className="h-5 w-5" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-surface-200/45">
                  Featured now
                </p>
                <h2 className="mt-3 text-xl font-black text-white sm:text-2xl">
                  {featuredProject.title}
                </h2>
                <p className="mt-3 text-xs leading-5 text-surface-200/58 sm:text-sm sm:leading-6">
                  {featuredProject.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  setActiveRequest({
                    category: activeCategory,
                    subcategory: activeCategory.subcategories[0],
                    project: featuredProject,
                  })
                }
                className="min-h-11 rounded-2xl bg-primary-500 px-5 py-3 text-sm font-black text-white transition hover:bg-primary-400"
              >
                Request Project
              </button>
            </div>
          </GlassCard>
        </motion.section>

        <GlassCard className="rounded-[26px] p-4 sm:rounded-[30px] sm:p-5">
          <div className="mb-4 flex items-center gap-2 text-sm font-black text-white">
            <SlidersHorizontal className="h-4 w-4 text-accent-300" />
            Search and filter portfolio
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.75fr_0.6fr]">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-surface-200/40" />
              <input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="min-h-12 w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-base text-white outline-none transition placeholder:text-surface-200/35 focus:border-accent-400/60 sm:text-sm"
                placeholder="Search logos, flyers, SaaS, Web3..."
              />
            </label>

            <select
              value={filterCategoryId}
              onChange={(event) => setFilterCategoryId(event.target.value)}
              className="min-h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base font-semibold text-white outline-none transition focus:border-accent-400/60 sm:text-sm"
            >
              <option className="bg-surface-950" value="all">
                All categories
              </option>
              {portfolioCategories.map((category) => (
                <option className="bg-surface-950" key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>

            <select
              value={budgetFilter}
              onChange={(event) =>
                setBudgetFilter(event.target.value as (typeof budgetFilters)[number])
              }
              className="min-h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base font-semibold text-white outline-none transition focus:border-accent-400/60 sm:text-sm"
            >
              {budgetFilters.map((filter) => (
                <option className="bg-surface-950" key={filter} value={filter}>
                  {filter}
                </option>
              ))}
            </select>

            <label className="flex min-h-12 cursor-pointer items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white">
              Featured
              <input
                type="checkbox"
                checked={featuredOnly}
                onChange={(event) => setFeaturedOnly(event.target.checked)}
                className="h-4 w-4 accent-accent-400"
              />
            </label>
          </div>
        </GlassCard>

        {searchIsActive && (
          <section className="py-6">
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-300 sm:text-xs sm:tracking-[0.24em]">
                  Filtered results
                </p>
                <h2 className="mt-2 text-xl font-black text-white sm:text-2xl">
                  {filteredItems.length} matching projects
                </h2>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setFilterCategoryId("all");
                  setBudgetFilter("All");
                  setFeaturedOnly(false);
                }}
                className="min-h-11 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Clear
              </button>
            </div>

            {filteredItems.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:gap-4">
                {filteredItems.map((item) => (
                  <ProjectCard
                    key={`${item.category.id}-${item.subcategory.id}-${item.project.id}`}
                    project={item.project}
                    onRequest={() => setActiveRequest(item)}
                    onPreview={() => setActivePreview(item)}
                  />
                ))}
              </div>
            ) : (
              <GlassCard className="rounded-[24px] p-6 text-center sm:rounded-[28px] sm:p-8">
                <p className="text-sm font-semibold text-surface-200/60">
                  No projects match this search yet.
                </p>
              </GlassCard>
            )}
          </section>
        )}

        <section className="py-5">
          <CategoryRail
            categories={portfolioCategories}
            activeId={activeCategory.id}
            onSelect={handleCategorySelect}
          />
        </section>

        <AnimatePresence mode="wait">
          <motion.section
            key={activeCategory.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.28 }}
            className="py-5"
          >
            <GlassCard className="mb-5 rounded-[28px] p-4 sm:rounded-[34px] sm:p-6">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${activeCategory.accent} text-surface-950 shadow-lg sm:h-14 sm:w-14 sm:rounded-3xl`}
                  >
                    <ActiveCategoryIcon className="h-6 w-6" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-surface-200/45 sm:text-xs sm:tracking-[0.24em]">
                    Active category
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-white sm:text-4xl">
                    {activeCategory.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-surface-200/62">
                    {activeCategory.description}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:min-w-[330px]">
                  <div className="rounded-2xl bg-white/5 p-3 sm:p-4">
                    <div className="text-xl font-black text-white sm:text-2xl">
                      {activeCategory.subcategories.length}
                    </div>
                    <div className="mt-1 text-xs text-surface-200/50">Subcategories</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-3 sm:p-4">
                    <div className="text-xl font-black text-white sm:text-2xl">
                      {activeCategory.subcategories.reduce(
                        (total, item) => total + item.projects.length,
                        0
                      )}
                    </div>
                    <div className="mt-1 text-xs text-surface-200/50">Sample projects</div>
                  </div>
                  <div className="col-span-2 rounded-2xl bg-white/5 p-3 sm:col-span-1 sm:p-4">
                    <div className="flex items-center gap-2 text-xl font-black text-white sm:text-2xl">
                      <Layers3 className="h-5 w-5 text-accent-300" />
                      UI
                    </div>
                    <div className="mt-1 text-xs text-surface-200/50">App-like flow</div>
                  </div>
                </div>
              </div>
            </GlassCard>

            <div className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {activeCategory.subcategories.map((subcategory) => {
                const isActive = subcategory.id === activeSubcategory.id;

                return (
                  <button
                    key={subcategory.id}
                    type="button"
                    onClick={() => setActiveSubcategoryId(subcategory.id)}
                    className={`rounded-[22px] border p-3.5 text-left transition sm:rounded-[24px] sm:p-4 ${
                      isActive
                        ? "border-accent-300/60 bg-accent-300/12 shadow-lg shadow-accent-500/10"
                        : "border-white/10 bg-white/[0.05] hover:bg-white/[0.09]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-sm font-black text-white sm:text-base">
                        {subcategory.title}
                      </h3>
                      <span
                        className={`mt-1 h-2.5 w-2.5 rounded-full ${
                          isActive ? "bg-accent-300" : "bg-white/20"
                        }`}
                      />
                    </div>
                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-surface-200/55">
                      {subcategory.description}
                    </p>
                    <span
                      className="mt-3 inline-flex min-h-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 text-xs font-black text-white"
                      onClick={(event) => {
                        event.stopPropagation();
                        setActiveRequest({
                          category: activeCategory,
                          subcategory,
                          project: subcategory.projects[0],
                        });
                      }}
                    >
                      Request Project
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="space-y-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeCategory.id}-${activeSubcategory.id}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.24 }}
                >
                  <SubcategoryCarousel
                    category={activeCategory}
                    subcategory={activeSubcategory}
                    onRequest={(category, selectedSubcategory, project) =>
                      setActiveRequest({
                        category,
                        subcategory: selectedSubcategory,
                        project,
                      })
                    }
                    onPreview={(category, selectedSubcategory, project) =>
                      setActivePreview({
                        category,
                        subcategory: selectedSubcategory,
                        project,
                      })
                    }
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.section>
        </AnimatePresence>

        <section id="request" className="py-6">
          <GlassCard className="rounded-[28px] p-5 text-center sm:rounded-[34px] sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-300 sm:text-xs sm:tracking-[0.24em]">
              Custom request
            </p>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">Need something specific?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-surface-200/60">
              Choose any sample as a starting point, or send a custom project request through
              the same contact system already connected to this portfolio.
            </p>
            <button
              type="button"
              onClick={() =>
                setActiveRequest({
                  category: activeCategory,
                  subcategory: activeCategory.subcategories[0],
                  project: activeCategory.subcategories[0].projects[0],
                })
              }
              className="mt-6 min-h-12 rounded-2xl bg-white px-6 py-3.5 text-sm font-black text-surface-950 transition hover:bg-accent-100"
            >
              Request Project
            </button>
          </GlassCard>
        </section>
      </div>

      {activeRequest && (
        <OrderModal
          category={activeRequest.category}
          subcategory={activeRequest.subcategory}
          project={activeRequest.project}
          onClose={() => setActiveRequest(null)}
        />
      )}

      {activePreview && (
        <FullscreenPreview
          category={activePreview.category}
          subcategory={activePreview.subcategory}
          project={activePreview.project}
          onClose={() => setActivePreview(null)}
          onRequest={() => {
            setActiveRequest(activePreview);
            setActivePreview(null);
          }}
        />
      )}
    </main>
  );
}
