"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import type {
  PortfolioCategory,
  PortfolioProject,
  PortfolioSubcategory,
} from "@/lib/portfolio-data";

type SubcategoryCarouselProps = {
  category: PortfolioCategory;
  subcategory: PortfolioSubcategory;
  onRequest: (
    category: PortfolioCategory,
    subcategory: PortfolioSubcategory,
    project: PortfolioProject
  ) => void;
  onPreview: (
    category: PortfolioCategory,
    subcategory: PortfolioSubcategory,
    project: PortfolioProject
  ) => void;
};

export default function SubcategoryCarousel({
  category,
  subcategory,
  onRequest,
  onPreview,
}: SubcategoryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeProject = subcategory.projects[activeIndex];

  useEffect(() => {
    setActiveIndex(0);
  }, [subcategory.id]);

  useEffect(() => {
    if (reduceMotion || subcategory.projects.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % subcategory.projects.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [reduceMotion, subcategory.projects.length]);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? subcategory.projects.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % subcategory.projects.length);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 70 || info.velocity.x > 450) {
      showPrevious();
    }

    if (info.offset.x < -70 || info.velocity.x < -450) {
      showNext();
    }
  };

  return (
    <section className="rounded-[30px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl sm:p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-black text-white">{subcategory.title}</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-surface-200/58">
            {subcategory.description}
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={showPrevious}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            aria-label={`Previous ${subcategory.title} project`}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={showNext}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            aria-label={`Next ${subcategory.title} project`}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            drag={subcategory.projects.length > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.28 }}
            className="cursor-grab active:cursor-grabbing"
          >
            <ProjectCard
              project={activeProject}
              onRequest={() => onRequest(category, subcategory, activeProject)}
              onPreview={() => onPreview(category, subcategory, activeProject)}
            />
          </motion.div>
        </AnimatePresence>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {subcategory.projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-2xl border p-4 text-left transition ${
                activeIndex === index
                  ? "border-accent-300/50 bg-accent-300/10"
                  : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-black text-white">{project.title}</span>
                <span className="text-xs font-bold text-accent-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-2 line-clamp-2 text-xs leading-5 text-surface-200/55">
                {project.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
