import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  tone?: "neutral" | "accent" | "deep";
};

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  neutral: "bg-porcelain text-muted",
  accent: "bg-blush text-berry",
  deep: "bg-berry text-porcelain",
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
        "inline-flex items-center rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em]",
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
