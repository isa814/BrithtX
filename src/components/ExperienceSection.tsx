"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative bg-surface-950 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary-600/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="My Journey"
          description="A timeline of my professional career and achievements"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-500/30 to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {experienceData.map((exp, i) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-80px" }}
                className={`relative flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-0 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
                  <div className="h-3 w-3 rounded-full bg-primary-500 ring-4 ring-surface-950" />
                </div>

                {/* Card */}
                <div
                  className={`ml-10 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:pr-0 md:mr-auto" : "md:pl-0 md:ml-auto"
                  }`}
                >
                  <div className="glass-light rounded-2xl p-6 transition-all hover:border-primary-500/20">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-primary-500/10 px-3 py-0.5 text-xs font-semibold text-primary-400">
                        {exp.period}
                      </span>
                      {exp.type === "freelance" && (
                        <span className="rounded-full bg-accent-500/10 px-3 py-0.5 text-xs font-semibold text-accent-400">
                          Freelance
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-white">
                      {exp.title}
                    </h3>
                    <p className="mb-3 text-sm font-medium text-primary-300">
                      {exp.company}
                    </p>
                    <p className="mb-4 text-sm text-surface-200/60">
                      {exp.description}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-start gap-2 text-sm text-surface-200/70"
                        >
                          <svg
                            className="mt-0.5 h-4 w-4 shrink-0 text-primary-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
