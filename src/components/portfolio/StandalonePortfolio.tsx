"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Palette, PanelTop, Wrench } from "lucide-react";
import { showcaseWorks, type ShowcaseWork } from "@/lib/portfolio-data";
import { fadeUp, staggerContainer } from "@/lib/motion";

const portfolioGroups: Array<{
  title: ShowcaseWork["discipline"];
  description: string;
  categories: string[];
  icon: typeof Palette;
}> = [
  {
    title: "Graphic Design",
    description: "Logos, flyers, social media visuals, and brand identity work.",
    categories: ["Logo Design", "Flyer Design", "Social Media Design", "Brand Identity"],
    icon: Palette,
  },
  {
    title: "Website Design",
    description: "Portfolio, business, Shopify, Wix, and SaaS website work.",
    categories: [
      "Portfolio Websites",
      "Business Websites",
      "Shopify Stores",
      "Wix Websites",
      "SaaS Websites",
    ],
    icon: PanelTop,
  },
];

export default function StandalonePortfolio() {
  const [activeDiscipline, setActiveDiscipline] =
    useState<ShowcaseWork["discipline"]>("Graphic Design");

  const activeWorks = useMemo(
    () => showcaseWorks.filter((work) => work.discipline === activeDiscipline),
    [activeDiscipline]
  );

  return (
    <section
      id="portfolio"
      className="relative border-y border-white/10 bg-surface-900/35 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="mb-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-[0.24em] text-accent-300"
            >
              Portfolio
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Selected graphic design and website design work.
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            className="max-w-3xl text-sm leading-7 text-surface-200/64 sm:text-base sm:leading-8"
          >
            This section is only for a clean work showcase. Client requests,
            pricing, service categories, and order flows stay in the app
            dashboard below.
          </motion.p>
        </motion.div>

        <div className="mb-8 grid gap-3 md:grid-cols-2">
          {portfolioGroups.map((group) => {
            const Icon = group.icon;
            const isActive = activeDiscipline === group.title;

            return (
              <button
                key={group.title}
                type="button"
                onClick={() => setActiveDiscipline(group.title)}
                className={`rounded-[24px] border p-4 text-left backdrop-blur-xl transition sm:p-5 ${
                  isActive
                    ? "border-accent-300/60 bg-accent-300/12 shadow-lg shadow-accent-500/10"
                    : "border-white/10 bg-white/[0.05] hover:bg-white/[0.08]"
                }`}
                aria-pressed={isActive}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${
                      isActive ? "bg-white text-surface-950" : "bg-white/10 text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">{group.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-surface-200/58">
                      {group.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-surface-200/70"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-300 sm:text-xs sm:tracking-[0.24em]">
              {activeDiscipline}
            </p>
            <h3 className="mt-2 text-2xl font-black text-white">
              {activeDiscipline === "Graphic Design"
                ? "Graphic design previews"
                : "Website design previews"}
            </h3>
          </div>
          <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-surface-200/60 sm:inline-flex">
            {activeWorks.length} works
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activeWorks.map((work) => (
            <motion.article
              key={work.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.28 }}
              className="group overflow-hidden rounded-[24px] border border-white/10 bg-surface-950/70 shadow-xl shadow-black/20 backdrop-blur-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={work.image}
                  alt={`${work.title} preview`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-black text-white backdrop-blur">
                  {work.discipline}
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="min-w-0 rounded-full bg-accent-300/10 px-3 py-1.5 text-xs font-bold text-accent-200">
                    {work.category}
                  </p>
                  <a
                    href={work.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-white/10 bg-white/5 px-3 text-xs font-black text-white transition hover:bg-white hover:text-surface-950"
                    aria-label={`View ${work.title}`}
                  >
                    View
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <h3 className="text-lg font-black leading-snug text-white">
                  {work.title}
                </h3>

                <div className="mt-4 flex items-start gap-2 rounded-2xl bg-white/[0.04] px-3 py-3 text-sm text-surface-200/68">
                  <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
                  <span>
                    <span className="font-bold text-surface-100">Tools:</span>{" "}
                    {work.tools.join(", ")}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
