"use client";

import { useMemo, useState } from "react";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/commerce";

import { ShopTheLookCard } from "@/features/home/shop-the-look/ShopTheLookCard";
import { shopTheLookData } from "@/features/home/shop-the-look/shopTheLookData";

type ShopTheLookSectionProps = {
  products: Product[];
};

export function ShopTheLookSection({ products }: Readonly<ShopTheLookSectionProps>) {
  const reduceMotion = useReducedMotion();
  const [activeLookId, setActiveLookId] = useState<(typeof shopTheLookData)[number]["id"]>(
    shopTheLookData[0].id,
  );

  const productMap = useMemo(
    () => new Map(products.map((product) => [product.handle, product])),
    [products],
  );

  const activeLook =
    shopTheLookData.find((look) => look.id === activeLookId) ?? shopTheLookData[0];
  const activeProducts = activeLook.productHandles
    .map((handle) => productMap.get(handle))
    .filter((product): product is Product => Boolean(product));
  const totalPrice = activeProducts.reduce((sum, product) => sum + product.price, 0);

  return (
    <section className="py-[4.75rem] sm:py-[5.5rem] lg:py-[7rem]" id="shop-the-look">
      <Container>
        <SectionHeader
          description="Discover ready-made pairings built around color, definition and the level of shine you want to wear."
          eyebrow="STYLE THE FINISH"
          title="Shop the look."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="space-y-4">
            <div className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-2 hide-scrollbar lg:hidden">
              {shopTheLookData.map((look) => {
                const selected = look.id === activeLook.id;

                return (
                  <button
                    aria-pressed={selected}
                    className={cn(
                      "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/20",
                      selected
                        ? "border-wine bg-wine text-porcelain"
                        : "border-border/70 bg-porcelain/82 text-espresso hover:bg-ivory",
                    )}
                    key={look.id}
                    onClick={() => setActiveLookId(look.id)}
                    type="button"
                  >
                    {look.title}
                  </button>
                );
              })}
            </div>

            <div className="hidden space-y-3 lg:block">
              {shopTheLookData.map((look) => {
                const selected = look.id === activeLook.id;

                return (
                  <button
                    aria-pressed={selected}
                    className={cn(
                      "w-full rounded-[1.45rem] border px-4 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/20",
                      selected
                        ? "border-wine bg-wine text-porcelain"
                        : "border-border/70 bg-porcelain/78 text-espresso hover:bg-ivory",
                    )}
                    key={look.id}
                    onClick={() => setActiveLookId(look.id)}
                    type="button"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-display text-[1.65rem] leading-none tracking-[-0.03em]">
                          {look.title}
                        </p>
                        <p
                          className={cn(
                            "mt-2 text-sm leading-7",
                            selected ? "text-porcelain/82" : "text-muted",
                          )}
                        >
                          {look.description}
                        </p>
                      </div>
                      <span
                        className={cn(
                          "text-[0.62rem] uppercase tracking-[0.22em]",
                          selected ? "text-porcelain/64" : "text-muted",
                        )}
                      >
                        {selected ? "Selected" : "View look"}
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
              key={activeLook.id}
              transition={{ duration: reduceMotion ? 0 : 0.24, ease: "easeOut" }}
            >
              <ShopTheLookCard
                look={activeLook}
                products={activeProducts}
                totalPrice={totalPrice}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
