import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  tone?: "neutral" | "accent" | "deep";
};

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  neutral: "border border-border/80 bg-porcelain/80 text-muted",
  accent: "border border-rose/25 bg-blush/45 text-berry",
  deep: "border border-white/10 bg-berry/92 text-porcelain",
};

export function Badge({
  children,
  className,
  tone = "neutral",
  ...props
}: Readonly<BadgeProps>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-[0.38rem] text-[0.64rem] font-semibold uppercase tracking-[0.24em]",
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
