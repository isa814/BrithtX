"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-16 text-center"
    >
      <span className="mb-4 inline-block rounded-full bg-primary-500/10 px-4 py-1.5 text-sm font-semibold text-primary-400">
        {label}
      </span>
      <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-lg text-surface-200/70">
          {description}
        </p>
      )}
    </motion.div>
  );
}
