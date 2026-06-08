import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  action?: ReactNode;
  align?: "left" | "center";
  className?: string;
  description?: string;
  divider?: boolean;
  eyebrow?: string;
  title: string;
};

export function SectionHeader({
  action,
  align = "left",
  className,
  description,
  divider = false,
  eyebrow,
  title,
}: Readonly<SectionHeaderProps>) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8",
        divider && "border-b border-border/70 pb-7",
        align === "center" && "items-center text-center md:flex-col md:items-center",
        className,
      )}
    >
      <div className={cn("max-w-[42rem] space-y-4", align === "center" && "mx-auto")}>
        {eyebrow ? (
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-muted">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-display text-[2.5rem] leading-[0.92] tracking-[-0.04em] text-espresso sm:text-[3.35rem] lg:text-[3.85rem]">
          {title}
        </h2>
        {description ? (
          <p className="max-w-[36rem] text-[0.98rem] leading-8 text-muted sm:text-[1.02rem]">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
