"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Price } from "@/components/commerce/Price";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Product } from "@/lib/commerce";

import { HeroCampaignVisual } from "@/features/home/hero/HeroCampaignVisual";

type HomeHeroProps = {
  featuredProduct: Product;
};

const trustPoints = ["Everyday essentials", "Giftable sets", "Made for your lip mood"];

export function HomeHero({ featuredProduct }: Readonly<HomeHeroProps>) {
  const reduceMotion = useReducedMotion();
  const itemTransition = { duration: reduceMotion ? 0 : 0.45, ease: "easeOut" as const };

  return (
    <section
      className="overflow-hidden pt-5 pb-[4.75rem] sm:pt-8 sm:pb-[5.5rem] lg:pt-10 lg:pb-[7rem]"
      id="new"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[2.35rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,253,252,0.86),rgba(248,243,237,0.98))] px-5 py-7 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div aria-hidden="true" className="pointer-events-none absolute left-[58%] top-[7%] h-[18rem] w-[18rem] rounded-full border border-rose/20" />
          <div aria-hidden="true" className="pointer-events-none absolute left-[54%] top-[11%] h-[12rem] w-[12rem] rounded-full border border-rose/14" />
          <div aria-hidden="true" className="pointer-events-none absolute -left-12 top-8 h-28 w-28 rounded-full bg-blush/35 blur-3xl" />

          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-14">
            <div className="relative z-10">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                transition={itemTransition}
              >
                <Badge tone="accent">The Everyday Lip Edit</Badge>
              </motion.div>

              <motion.h1
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 max-w-[12ch] font-display text-[3rem] leading-[0.9] tracking-[-0.06em] text-espresso sm:text-[4rem] md:text-[4.6rem] lg:text-[5.2rem] xl:text-[5.7rem]"
                initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                transition={{ ...itemTransition, delay: reduceMotion ? 0 : 0.05 }}
              >
                Soft shine.
                <br />
                Strong presence.
              </motion.h1>

              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 max-w-[34rem] text-[1rem] leading-8 text-muted sm:text-[1.08rem]"
                initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                transition={{ ...itemTransition, delay: reduceMotion ? 0 : 0.1 }}
              >
                Everyday lip essentials made for the moments you want to feel polished,
                confident and completely yourself.
              </motion.p>

              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
                initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                transition={{ ...itemTransition, delay: reduceMotion ? 0 : 0.15 }}
              >
                <Button href="/shop?collection=best-sellers" size="lg">
                  Shop Best Sellers
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  className="justify-start sm:justify-center"
                  href="/shop?curation=build-your-lip-combo"
                  size="lg"
                  variant="secondary"
                >
                  Build Your Lip Combo
                </Button>
              </motion.div>

              <motion.ul
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 grid gap-4 border-t border-border/70 pt-5 sm:grid-cols-3"
                initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                transition={{ ...itemTransition, delay: reduceMotion ? 0 : 0.2 }}
              >
                {trustPoints.map((point, index) => (
                  <li key={point}>
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-muted">
                      0{index + 1}
                    </span>
                    <p className="mt-2 text-sm font-medium leading-6 text-espresso">{point}</p>
                  </li>
                ))}
              </motion.ul>
            </div>

            <div className="relative">
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                className="relative z-10"
                initial={{ opacity: 0, x: reduceMotion ? 0 : 18 }}
                transition={{ ...itemTransition, delay: reduceMotion ? 0 : 0.08 }}
              >
                <HeroCampaignVisual />
              </motion.div>

              <motion.aside
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 mt-4 max-w-sm rounded-[1.7rem] border border-border/75 bg-porcelain/94 p-5 sm:mt-5 lg:absolute lg:bottom-6 lg:left-[-1.5rem]"
                initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                transition={{ ...itemTransition, delay: reduceMotion ? 0 : 0.2 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted">
                      Featured mock product
                    </p>
                    <h2 className="mt-3 font-display text-[2rem] leading-[0.96] tracking-[-0.04em] text-espresso">
                      {featuredProduct.title}
                    </h2>
                  </div>
                  <Sparkles aria-hidden="true" className="mt-1 h-5 w-5 text-champagne" />
                </div>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {featuredProduct.shortDescription}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  {featuredProduct.badge ? <Badge tone="accent">{featuredProduct.badge}</Badge> : null}
                  {featuredProduct.shadeSummary ? <Badge>{featuredProduct.shadeSummary}</Badge> : null}
                </div>
                <div className="mt-5 flex items-end justify-between gap-4 border-t border-border/70 pt-4">
                  <div>
                    <p className="text-[0.66rem] uppercase tracking-[0.24em] text-muted">Mock price</p>
                    <Price
                      amount={featuredProduct.price}
                      className="mt-1 text-[1.15rem] font-semibold tracking-[-0.03em] text-espresso"
                      currencyCode={featuredProduct.currencyCode}
                    />
                  </div>
                  <p className="max-w-[11rem] text-right text-[0.68rem] leading-5 text-muted">
                    Campaign art and product details remain placeholder content until verified Shopify assets are connected.
                  </p>
                </div>
              </motion.aside>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
