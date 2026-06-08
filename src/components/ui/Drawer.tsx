"use client";

import type { ReactNode } from "react";
import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

type DrawerProps = {
  children: ReactNode;
  className?: string;
  onClose: () => void;
  open: boolean;
  title: string;
};

export function Drawer({
  children,
  className,
  onClose,
  open,
  title,
}: Readonly<DrawerProps>) {
  const reduceMotion = useReducedMotion();
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const previousActiveElement =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      previousActiveElement?.focus();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open]);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50">
          <motion.button
            animate={{ opacity: 1 }}
            aria-label="Close navigation overlay"
            className="absolute inset-0 bg-espresso/24"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={onClose}
            transition={{ duration: reduceMotion ? 0 : 0.18 }}
            type="button"
          />
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            aria-labelledby={titleId}
            aria-modal="true"
            className={cn(
              "absolute left-0 top-0 flex h-full w-[min(86vw,24rem)] flex-col border-r border-border/70 bg-ivory px-5 py-6 shadow-[var(--shadow-soft)]",
              className,
            )}
            exit={{ opacity: 0, x: reduceMotion ? 0 : -24 }}
            initial={{ opacity: 0, x: reduceMotion ? 0 : -24 }}
            role="dialog"
            transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between gap-4">
              <h2
                className="font-display text-[1.9rem] leading-none tracking-[-0.03em] text-espresso"
                id={titleId}
              >
                {title}
              </h2>
              <button
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-porcelain/70 text-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/20"
                onClick={onClose}
                ref={closeButtonRef}
                type="button"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-8 flex-1 overflow-y-auto">{children}</div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
