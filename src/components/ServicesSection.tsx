"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Globe2,
  Palette,
  Rocket,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import { servicesData } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const serviceIcons: Record<string, LucideIcon> = {
  globe: Globe2,
  palette: Palette,
  rocket: Rocket,
  "shopping-cart": ShoppingCart,
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0c0f14] py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px] opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="What I Offer"
          description="Focused service lanes for SaaS products, online stores, brand systems, and custom web apps."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {servicesData.map((service, i) => {
            const Icon = serviceIcons[service.icon] ?? Globe2;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                viewport={{ once: true, margin: "-80px" }}
                className="group flex min-h-[520px] flex-col overflow-hidden rounded-lg border border-white/10 bg-[#171a21] shadow-[0_18px_48px_rgba(0,0,0,0.24)] transition-colors hover:border-primary-400/35 hover:bg-[#1b2029]"
              >
                <div className="p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.06] text-primary-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="rounded-md border border-white/10 bg-black/20 px-2 py-1 text-[11px] font-semibold text-surface-200/55">
                      Service {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-black leading-snug text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-surface-200/62">
                    {service.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/[0.045] px-2 py-1 text-[11px] font-semibold text-surface-200/65"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-md border border-white/10 bg-black/30">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171a21]/80 via-transparent to-transparent" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col border-t border-white/[0.07] px-4 pb-4 pt-4">
                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm leading-5 text-surface-200/72"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent-400"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/10 bg-white px-3 py-2.5 text-sm font-black text-[#0c0f14] transition hover:bg-accent-100 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-[#171a21]"
                  >
                    Get Started
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
