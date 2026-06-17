"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Palette, PanelTop, Wrench } from "lucide-react";
import { showcaseWorks } from "@/lib/portfolio-data";
import { fadeUp, staggerContainer } from "@/lib/motion";

const portfolioCategories = {
  "Graphic Design": [
    "Logo Design",
    "Flyer Design",
    "Social Media Design",
    "Brand Identity",
  ],
  "Website Design": [
    "Portfolio Websites",
    "Business Websites",
    "Shopify Stores",
    "Wix Websites",
    "SaaS Websites",
  ],
} as const;

export default function StandalonePortfolio() {
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
          {Object.entries(portfolioCategories).map(([discipline, categories]) => {
            const Icon = discipline === "Graphic Design" ? Palette : PanelTop;

            return (
              <div
                key={discipline}
                className="rounded-[24px] border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl sm:p-5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-surface-950">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-black text-white">{discipline}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-surface-200/70"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {showcaseWorks.map((work) => (
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
