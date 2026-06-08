import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  action?: ReactNode;
  align?: "left" | "center";
  description?: string;
  eyebrow?: string;
  title: string;
};

export function SectionHeader({
  action,
  align = "left",
  description,
  eyebrow,
  title,
}: Readonly<SectionHeaderProps>) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 border-b border-border/80 pb-6 md:flex-row md:items-end md:justify-between",
        align === "center" && "items-center text-center md:flex-col md:items-center",
      )}
    >
      <div className={cn("max-w-2xl space-y-3", align === "center" && "mx-auto")}>
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-display text-[2.2rem] leading-none tracking-[-0.03em] text-espresso sm:text-[2.8rem]">
          {title}
        </h2>
        {description ? (
          <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
