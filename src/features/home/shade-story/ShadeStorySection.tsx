"use client";

import { useState } from "react";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/commerce";

import { ShadeStoryCard } from "@/features/home/shade-story/ShadeStoryCard";
import { shadeStoryData } from "@/features/home/shade-story/shadeStoryData";

type ShadeStorySectionProps = {
  products: Product[];
};

export function ShadeStorySection({ products }: Readonly<ShadeStorySectionProps>) {
  const reduceMotion = useReducedMotion();
  const [activeShadeId, setActiveShadeId] = useState<(typeof shadeStoryData)[number]["id"]>(
    shadeStoryData[0].id,
  );

  const productMap = new Map(products.map((product) => [product.handle, product]));
  const activeShade =
    shadeStoryData.find((shade) => shade.id === activeShadeId) ?? shadeStoryData[0];
  const recommendedProduct =
    productMap.get(activeShade.recommendedHandle) ?? products[0];

  return (
    <section className="bg-[linear-gradient(180deg,rgba(233,187,183,0.08),rgba(68,23,34,0.06))] py-[4.75rem] sm:py-[5.5rem] lg:py-[7rem]" id="shade-story">
      <Container>
        <SectionHeader
          description="Explore color families, finishes and suggested pairings before discovering your final AMARE combination."
          eyebrow="FIND YOUR TONE"
          title="A shade for every lip mood."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="space-y-5">
            <div className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-2 hide-scrollbar lg:hidden">
              {shadeStoryData.map((shade) => {
                const selected = shade.id === activeShade.id;

                return (
                  <button
                    aria-pressed={selected}
                    className={cn(
                      "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/20",
                      selected
                        ? "border-wine bg-wine text-porcelain"
                        : "border-border/70 bg-porcelain/82 text-espresso hover:bg-ivory",
                    )}
                    key={shade.id}
                    onClick={() => setActiveShadeId(shade.id)}
                    type="button"
                  >
                    {shade.selectorLabel}
                  </button>
                );
              })}
            </div>

            <div className="hidden space-y-3 lg:block">
              {shadeStoryData.map((shade) => {
                const selected = shade.id === activeShade.id;

                return (
                  <button
                    aria-pressed={selected}
                    className={cn(
                      "w-full rounded-[1.4rem] border px-4 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/20",
                      selected
                        ? "border-wine bg-wine text-porcelain"
                        : "border-border/70 bg-porcelain/78 text-espresso hover:bg-ivory",
                    )}
                    key={shade.id}
                    onClick={() => setActiveShadeId(shade.id)}
                    type="button"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-display text-[1.6rem] leading-none tracking-[-0.03em]">
                          {shade.selectorLabel}
                        </p>
                        <p className={cn("mt-2 text-sm leading-7", selected ? "text-porcelain/82" : "text-muted")}>
                          {shade.mood}
                        </p>
                      </div>
                      <span className={cn("text-[0.62rem] uppercase tracking-[0.22em]", selected ? "text-porcelain/64" : "text-muted")}>
                        {selected ? "Active" : shade.family}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence initial={false} mode="wait">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              key={activeShade.id}
              transition={{ duration: reduceMotion ? 0 : 0.24, ease: "easeOut" }}
            >
              <ShadeStoryCard product={recommendedProduct} shade={activeShade} />
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
