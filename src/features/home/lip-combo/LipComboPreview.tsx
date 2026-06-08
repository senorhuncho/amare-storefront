"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Price } from "@/components/commerce/Price";
import { Badge } from "@/components/ui/Badge";
import type { Product } from "@/lib/commerce";

import type { LipMoodOption } from "@/features/home/lip-combo/lipComboData";

type LipComboPreviewProps = {
  finishProduct: Product;
  linerProduct: Product;
  mood: LipMoodOption;
  totalPrice: number;
};

export function LipComboPreview({
  finishProduct,
  linerProduct,
  mood,
  totalPrice,
}: Readonly<LipComboPreviewProps>) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-live="polite"
      className={`relative overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br ${mood.surfaceClass} p-5 sm:p-7`}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          key={mood.id}
          transition={{ duration: reduceMotion ? 0 : 0.24, ease: "easeOut" }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="accent">{mood.title}</Badge>
            <span className="text-[0.68rem] uppercase tracking-[0.22em] text-muted">
              Full combo builder coming with the connected store.
            </span>
          </div>

          <div className="mt-6 grid items-end gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[20rem] overflow-hidden rounded-[1.7rem] border border-border/60 bg-porcelain/70 p-5">
              <div aria-hidden="true" className={`absolute left-[12%] top-[18%] h-8 w-[46%] rounded-full ${mood.swatchClass} opacity-85`} />
              <div aria-hidden="true" className="absolute left-[18%] top-[43%] h-[2px] w-[36%] rounded-full bg-berry/70" />
              <div aria-hidden="true" className="absolute left-[45%] top-[30%] h-[44%] w-[22%] rounded-[1.8rem] border border-white/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(255,255,255,0.1)_38%,rgba(233,187,183,0.5)_100%)]" />
              <div aria-hidden="true" className="absolute left-[51%] top-[24%] h-[9%] w-[10%] rounded-t-[0.9rem] bg-[linear-gradient(180deg,rgba(194,160,107,0.96),rgba(236,216,180,0.82))]" />
              <div aria-hidden="true" className="absolute left-[20%] top-[36%] h-[34%] w-[12%] rounded-[1rem] bg-berry/80" />
              <div aria-hidden="true" className="absolute left-[23%] top-[32%] h-[3%] w-[20%] rounded-full bg-berry/55" />
              <div aria-hidden="true" className="absolute bottom-6 left-[12%] h-5 w-[62%] rounded-full bg-black/10 blur-xl" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-muted">
                    Styling station
                  </p>
                  <h3 className="mt-3 font-display text-[2.2rem] leading-[0.94] tracking-[-0.05em] text-espresso">
                    {mood.title}
                  </h3>
                </div>
                <div className="max-w-[18rem] rounded-[1.2rem] border border-white/55 bg-white/70 p-4 backdrop-blur">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted">
                    Mood preview
                  </p>
                  <p className="mt-2 text-sm leading-7 text-espresso">{mood.previewSummary}</p>
                </div>
              </div>
            </div>

            <div className="space-y-5 rounded-[1.7rem] border border-border/60 bg-porcelain/76 p-5">
              <div>
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-muted">
                  Recommended pairing
                </p>
                <p className="mt-3 font-display text-[1.9rem] leading-[0.96] tracking-[-0.04em] text-espresso">
                  {mood.linerFamily} + {mood.finishLabel}
                </p>
              </div>

              <div className="space-y-4 border-t border-border/70 pt-4 text-sm leading-7 text-muted">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[0.62rem] uppercase tracking-[0.22em] text-muted">
                      Liner
                    </p>
                    <p className="mt-1 font-medium text-espresso">{linerProduct.title}</p>
                  </div>
                  <Price amount={linerProduct.price} currencyCode={linerProduct.currencyCode} />
                </div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[0.62rem] uppercase tracking-[0.22em] text-muted">
                      Finish
                    </p>
                    <p className="mt-1 font-medium text-espresso">{finishProduct.title}</p>
                  </div>
                  <Price amount={finishProduct.price} currencyCode={finishProduct.currencyCode} />
                </div>
                <div className="flex items-end justify-between gap-3 border-t border-border/70 pt-4">
                  <div>
                    <p className="text-[0.62rem] uppercase tracking-[0.22em] text-muted">
                      Provisional total
                    </p>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      Computed from current mock pricing and pending Shopify verification.
                    </p>
                  </div>
                  <Price
                    amount={totalPrice}
                    className="text-[1.15rem] font-semibold tracking-[-0.03em] text-espresso"
                    currencyCode={linerProduct.currencyCode}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
