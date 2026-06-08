"use client";

import { useId, useState } from "react";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Price } from "@/components/commerce/Price";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/commerce";

import { RoutineProductVisual } from "@/features/home/lip-routine/RoutineProductVisual";

type RoutineStepCardProps = {
  defaultProductHandle: Product["handle"];
  description: string;
  featured?: boolean;
  products: Product[];
  stepNumber: string;
  title: string;
};

export function RoutineStepCard({
  defaultProductHandle,
  description,
  featured = false,
  products,
  stepNumber,
  title,
}: Readonly<RoutineStepCardProps>) {
  const reduceMotion = useReducedMotion();
  const selectorId = useId();
  const [selectedHandle, setSelectedHandle] = useState<Product["handle"]>(defaultProductHandle);

  const selectedProduct =
    products.find((product) => product.handle === selectedHandle) ?? products[0];

  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-[1.9rem] border border-border/70 bg-porcelain/76 p-5 sm:p-6",
        featured && "bg-[linear-gradient(180deg,rgba(255,253,252,0.94),rgba(233,187,183,0.22))]",
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/80 bg-ivory font-semibold tracking-[0.12em] text-espresso">
          {stepNumber}
        </div>
        <div className="space-y-3">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted">
            {title}
          </p>
          <p className="max-w-[30rem] text-sm leading-7 text-muted">{description}</p>
        </div>
      </div>

      {products.length > 1 ? (
        <div aria-labelledby={selectorId} className="mt-5" role="radiogroup">
          <p
            className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted"
            id={selectorId}
          >
            Select a product
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {products.map((product) => {
              const selected = product.handle === selectedHandle;

              return (
                <button
                  aria-checked={selected}
                  className={cn(
                    "rounded-full border px-3 py-2 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/20",
                    selected
                      ? "border-wine bg-wine text-porcelain"
                      : "border-border/80 bg-porcelain/90 text-espresso hover:bg-ivory",
                  )}
                  key={product.handle}
                  onClick={() => setSelectedHandle(product.handle)}
                  role="radio"
                  type="button"
                >
                  {product.title}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      <div className="mt-6">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
            key={selectedProduct.handle}
            transition={{ duration: reduceMotion ? 0 : 0.24, ease: "easeOut" }}
          >
            <RoutineProductVisual featured={featured} product={selectedProduct} />

            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-[1.65rem] leading-[0.96] tracking-[-0.04em] text-espresso">
                  {selectedProduct.title}
                </h3>
                <p className="mt-3 max-w-[32rem] text-sm leading-7 text-muted">
                  {selectedProduct.shortDescription}
                </p>
              </div>
              <Price
                amount={selectedProduct.price}
                className="shrink-0 text-[1.05rem] font-semibold tracking-[-0.03em] text-espresso"
                currencyCode={selectedProduct.currencyCode}
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 border-t border-border/70 pt-4">
              <div className="text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                {selectedProduct.shadeSummary ?? "Mock discovery detail pending verification"}
              </div>
              <Button href={`/shop?highlight=${selectedProduct.handle}`} size="sm" variant="secondary">
                Shop this pick
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </article>
  );
}
