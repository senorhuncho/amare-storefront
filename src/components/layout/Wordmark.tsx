import Link from "next/link";

import { cn } from "@/lib/utils";

type WordmarkProps = {
  className?: string;
};

export function Wordmark({ className }: Readonly<WordmarkProps>) {
  return (
    <Link
      aria-label="AMARÉ homepage"
      className={cn(
        "font-display text-[1.9rem] leading-none tracking-[0.18em] text-espresso transition-colors hover:text-wine",
        className,
      )}
      href="/"
    >
      AMARÉ
    </Link>
  );
}
