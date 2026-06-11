import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type GlassCardProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export default function GlassCard<T extends ElementType = "div">({
  as,
  children,
  className = "",
  ...props
}: GlassCardProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={`border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/20 backdrop-blur-2xl ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
