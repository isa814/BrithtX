"use client";

import { useEffect, useState } from "react";
import { BriefcaseBusiness, Home, Images, Mail, ShoppingBag } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Service", href: "#services", icon: BriefcaseBusiness },
  { label: "Portfolio", href: "#portfolio", icon: Images },
  { label: "Order", href: "#orders", icon: ShoppingBag },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function BottomNav() {
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveSection = () => {
      const current = sections.reduce(
        (closest, section) => {
          const offset = Math.abs(section.getBoundingClientRect().top - 96);
          return offset < closest.offset ? { id: section.id, offset } : closest;
        },
        { id: "home", offset: Number.POSITIVE_INFINITY }
      );

      setActiveHash(`#${current.id}`);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  return (
    <nav
      className="fixed bottom-3 left-3 right-3 z-40 rounded-[24px] border border-white/15 bg-surface-950/78 px-2 py-2 shadow-2xl shadow-black/40 backdrop-blur-2xl md:hidden"
      aria-label="Mobile navigation"
      style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}
    >
      <div className="grid grid-cols-5 gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeHash === item.href;

          return (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl px-1.5 py-2 text-[10px] font-bold transition ${
                isActive
                  ? "bg-white text-surface-950 shadow-lg shadow-accent-500/10"
                  : "text-surface-200/58 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
