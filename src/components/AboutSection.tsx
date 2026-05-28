"use client";

import { motion } from "framer-motion";
import { aboutData, siteConfig } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const techIcons = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Shopify",
  "Wix",
  "Git",
  "Figma",
  "Web3",
  "Postman",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-surface-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Developer, Designer & Builder"
          description="Combining code and creativity to build products that are business-focused and monetizable"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 via-surface-900 to-accent-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Profile circle with initials */}
                  <div className="gradient-border flex h-64 w-64 items-center justify-center overflow-hidden rounded-full bg-surface-800 sm:h-72 sm:w-72">
                    <div className="text-center">
                      <div className="text-6xl font-extrabold sm:text-7xl">
                        <span className="gradient-text">B</span>
                        <span className="text-accent-400">X</span>
                      </div>
                      <div className="mt-2 text-xs font-semibold tracking-[0.3em] text-surface-200/50 uppercase">
                        {siteConfig.logoText}
                      </div>
                    </div>
                  </div>
                  {/* Floating badge */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="glass absolute -bottom-4 -right-4 rounded-2xl px-4 py-3 shadow-xl"
                  >
                    <div className="text-sm font-semibold text-white">
                      🎯 50+ Projects
                    </div>
                    <div className="text-xs text-surface-200/60">
                      Delivered
                    </div>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                    className="glass absolute -left-4 -top-4 rounded-2xl px-4 py-3 shadow-xl"
                  >
                    <div className="text-sm font-semibold text-white">
                      🎨 Design + Code
                    </div>
                    <div className="text-xs text-surface-200/60">Dual Skills</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="mb-8 text-lg leading-relaxed text-surface-200/70">
              {aboutData.story}
            </p>

            <div className="mb-8">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Tech Stack & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {techIcons.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04 }}
                    viewport={{ once: true }}
                    className="rounded-lg border border-surface-700 bg-surface-800/50 px-3 py-1.5 text-sm text-surface-200 transition-colors hover:border-primary-500/30 hover:text-primary-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-500 hover:shadow-lg hover:shadow-primary-600/25"
              >
                Get In Touch
              </a>
              <a
                href="#experience"
                className="rounded-full border border-surface-700 px-6 py-3 text-sm font-semibold text-surface-200 transition-all hover:border-primary-500/30 hover:bg-surface-800"
              >
                View My Journey
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
