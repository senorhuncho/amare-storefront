"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/commerce";

import { lipComboData } from "@/features/home/lip-combo/lipComboData";
import { LipComboPreview } from "@/features/home/lip-combo/LipComboPreview";

type LipComboBuilderProps = {
  products: Product[];
};

export function LipComboBuilder({ products }: Readonly<LipComboBuilderProps>) {
  const [selectedMoodId, setSelectedMoodId] = useState<(typeof lipComboData)[number]["id"]>(
    lipComboData[0].id,
  );

  const productMap = useMemo(
    () => new Map(products.map((product) => [product.handle, product])),
    [products],
  );

  const selectedMood =
    lipComboData.find((mood) => mood.id === selectedMoodId) ?? lipComboData[0];
  const linerProduct = productMap.get(selectedMood.linerHandle) ?? products[0];
  const finishProduct = productMap.get(selectedMood.finishHandle) ?? products[0];
  const totalPrice = linerProduct.price + finishProduct.price;

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
      <div className="space-y-6">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-muted">
            MAKE IT YOURS
          </p>
          <h2 className="mt-4 font-display text-[2.8rem] leading-[0.92] tracking-[-0.05em] text-espresso sm:text-[3.7rem]">
            Build your lip combo.
          </h2>
          <p className="mt-4 max-w-[34rem] text-[1rem] leading-8 text-muted">
            Choose the mood, pair the liner and finish with your preferred level of shine.
          </p>
        </div>

        <div aria-label="Lip mood selector" className="space-y-3" role="radiogroup">
          {lipComboData.map((mood) => {
            const selected = mood.id === selectedMood.id;

            return (
              <button
                aria-checked={selected}
                className={cn(
                  "w-full rounded-[1.45rem] border px-4 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/20",
                  selected
                    ? "border-wine bg-wine text-porcelain"
                    : "border-border/70 bg-porcelain/78 text-espresso hover:bg-ivory",
                )}
                key={mood.id}
                onClick={() => setSelectedMoodId(mood.id)}
                role="radio"
                type="button"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-[1.55rem] leading-none tracking-[-0.03em]">
                      {mood.title}
                    </p>
                    <p
                      className={cn(
                        "mt-2 text-sm leading-7",
                        selected ? "text-porcelain/84" : "text-muted",
                      )}
                    >
                      {mood.description}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "text-[0.62rem] font-semibold uppercase tracking-[0.24em]",
                      selected ? "text-porcelain/72" : "text-muted",
                    )}
                  >
                    {selected ? "Selected" : "Select"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/shop?builder=lip-combo" size="lg">
            Start your combination
          </Button>
          <Button href="/shop?collection=lips" size="lg" variant="secondary">
            Browse all lip products
          </Button>
        </div>

        <p className="text-[0.74rem] uppercase tracking-[0.22em] text-muted">
          Full combo builder coming with the connected store.
        </p>
      </div>

      <LipComboPreview
        finishProduct={finishProduct}
        linerProduct={linerProduct}
        mood={selectedMood}
        totalPrice={totalPrice}
      />
    </div>
  );
}
