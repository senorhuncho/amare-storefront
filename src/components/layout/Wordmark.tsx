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
        "font-display text-[2.1rem] leading-none tracking-[0.22em] text-espresso transition-colors hover:text-wine sm:text-[2.25rem]",
        className,
      )}
      href="/"
    >
      AMARÉ
    </Link>
  );
}
