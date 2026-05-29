"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, React.ReactNode> = {
  layout: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  server: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
    </svg>
  ),
  database: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
  wrench: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.3 5.3a2.121 2.121 0 11-3-3l5.3-5.3m0 0l1.06-1.06a3.5 3.5 0 014.95 0l.707.707m-6.717.343l6.717-.343m-6.717.343L8.48 21.36m9.54-9.54L21.36 8.48" />
    </svg>
  ),
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative bg-surface-900 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-primary-600/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-accent-500/5 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="My Technical Arsenal"
          description="Technologies and tools I use to bring ideas to life"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {skillsData.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              className="glass-light group rounded-2xl p-6 transition-all hover:border-primary-500/20 lg:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400">
                  {iconMap[cat.icon]}
                </div>
                <h3 className="text-lg font-bold text-white">{cat.category}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm font-medium text-surface-200">
                        {skill.name}
                      </span>
                      <span className="text-xs font-semibold text-primary-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-surface-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: catIdx * 0.15 + i * 0.08,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
