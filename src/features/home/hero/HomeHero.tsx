"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Price } from "@/components/commerce/Price";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ResponsiveImagePlaceholder } from "@/components/ui/ResponsiveImagePlaceholder";
import type { Product } from "@/lib/commerce";

type HomeHeroProps = {
  featuredProduct: Product;
};

const trustPoints = ["Everyday essentials", "Giftable sets", "Made for your lip mood"];

export function HomeHero({ featuredProduct }: Readonly<HomeHeroProps>) {
  const reduceMotion = useReducedMotion();
  const transition = { duration: reduceMotion ? 0 : 0.5, ease: "easeOut" as const };

  return (
    <section className="overflow-hidden py-8 sm:py-10 lg:py-14" id="new">
      <Container>
        <div className="relative overflow-hidden rounded-[2.4rem] border border-border/75 bg-ivory px-5 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="pointer-events-none absolute -left-[4.5rem] top-10 h-36 w-36 rounded-full bg-blush/55 blur-3xl" />
          <div className="pointer-events-none absolute right-10 top-8 h-28 w-28 rounded-full bg-champagne/30 blur-3xl" />
          <div className="pointer-events-none absolute bottom-8 right-[-3rem] h-44 w-44 rounded-full bg-rose/16 blur-3xl" />

          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
              transition={transition}
            >
              <Badge tone="accent">The Everyday Lip Edit</Badge>
              <h1 className="mt-6 max-w-xl font-display text-[3.1rem] leading-[0.92] tracking-[-0.06em] text-espresso sm:text-[4.5rem] lg:text-[5.5rem]">
                Soft shine.
                <br />
                Strong presence.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
                Everyday lip essentials made for the moments you want to feel polished,
                confident and completely yourself.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/shop?collection=best-sellers" size="lg">
                  Shop Best Sellers
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/shop?curation=build-your-lip-combo" size="lg" variant="text">
                  Build Your Lip Combo
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {trustPoints.map((point) => (
                  <div
                    className="rounded-[1.35rem] border border-border/80 bg-porcelain/85 px-4 py-4 text-sm font-medium text-espresso shadow-[var(--shadow-card)]"
                    key={point}
                  >
                    <div className="mb-3 h-2.5 w-2.5 rounded-full bg-wine" />
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="relative"
              initial={{ opacity: 0, x: reduceMotion ? 0 : 18 }}
              transition={{ ...transition, delay: reduceMotion ? 0 : 0.1 }}
            >
              <ResponsiveImagePlaceholder
                caption="Mock campaign composition built with CSS surfaces while brand photography is pending."
                className="bg-gradient-to-b from-porcelain/75 to-blush/30"
                detail="Editorial hero placeholder"
                label="Keychain Lip Oil spotlight"
                ratio="hero"
                tone="champagne"
              />

              <motion.aside
                animate={{ opacity: 1, y: 0 }}
                className="relative mt-4 max-w-sm rounded-[1.8rem] border border-border/80 bg-porcelain/92 p-5 shadow-[var(--shadow-soft)] sm:mt-5 lg:absolute lg:-bottom-6 lg:left-[-2rem]"
                initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                transition={{ ...transition, delay: reduceMotion ? 0 : 0.18 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                      Featured mock product
                    </p>
                    <h2 className="mt-3 font-display text-[2rem] leading-none tracking-[-0.04em] text-espresso">
                      {featuredProduct.title}
                    </h2>
                  </div>
                  <Sparkles className="mt-1 h-5 w-5 text-champagne" />
                </div>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {featuredProduct.shortDescription}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {featuredProduct.badge ? <Badge tone="accent">{featuredProduct.badge}</Badge> : null}
                  {featuredProduct.shadeSummary ? <Badge>{featuredProduct.shadeSummary}</Badge> : null}
                </div>
                <div className="mt-5 flex items-center justify-between gap-4 border-t border-border/80 pt-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-muted">Mock price</p>
                    <Price
                      amount={featuredProduct.price}
                      className="mt-1 text-lg font-semibold text-espresso"
                      currencyCode={featuredProduct.currencyCode}
                    />
                  </div>
                  <p className="max-w-[12rem] text-right text-xs leading-5 text-muted">
                    Placeholder copy and pricing must be replaced with verified Shopify data before launch.
                  </p>
                </div>
              </motion.aside>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
