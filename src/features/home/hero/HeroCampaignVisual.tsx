"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type HeroCampaignVisualProps = {
  className?: string;
};

// Temporary CSS-based campaign art pending official AMARÉ product photography.
export function HeroCampaignVisual({ className }: Readonly<HeroCampaignVisualProps>) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-label="Concept art for the Keychain Lip Oil campaign. Temporary visual placeholder pending official AMARÉ photography."
      className={cn("relative mx-auto w-full max-w-[34rem] lg:max-w-none", className)}
      role="img"
    >
      <div className="relative overflow-hidden rounded-[2.15rem] border border-white/10 bg-[linear-gradient(155deg,rgba(68,23,34,0.98),rgba(103,41,54,0.92))] shadow-[var(--shadow-soft)]">
        <div aria-hidden="true" className="aspect-[5/6] sm:aspect-[4/3] lg:aspect-[9/10]" />
        <div aria-hidden="true" className="absolute left-[6%] top-[8%] h-[32%] w-[32%] rounded-full bg-champagne/12 blur-3xl" />
        <div aria-hidden="true" className="absolute right-[8%] top-[12%] h-[34%] w-[26%] rounded-full bg-white/10 blur-3xl" />
        <div aria-hidden="true" className="absolute bottom-[6%] left-[14%] h-[18%] w-[58%] rounded-full bg-black/15 blur-2xl" />

        <div className="absolute left-5 top-5 rounded-full border border-white/14 bg-white/6 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-white/70 backdrop-blur">
          Temp campaign art
        </div>

        <div
          aria-hidden="true"
          className="absolute right-5 top-8 hidden rounded-full border border-white/14 bg-white/6 px-2 py-3 text-[0.56rem] font-medium uppercase tracking-[0.28em] text-white/65 backdrop-blur lg:block"
          style={{ writingMode: "vertical-rl" }}
        >
          Keychain Lip Oil
        </div>

        <motion.div
          animate={
            reduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 1, y: [0, -4, 0] }
          }
          className="absolute left-[17%] top-[11%] h-[74%] w-[58%]"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 6.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
          }
        >
          <div className="absolute left-[2%] top-[10%] h-[18%] w-[24%] rounded-full border border-champagne/70" />
          <div className="absolute left-[18%] top-[17%] h-[3%] w-[18%] rounded-full bg-champagne/80" />
          <div className="absolute left-[33%] top-[20%] h-[14%] w-[4%] rounded-full bg-champagne/70" />

          <div className="absolute left-[42%] top-[24%] h-[10%] w-[19%] rounded-t-[0.95rem] border border-champagne/70 bg-[linear-gradient(180deg,rgba(194,160,107,0.94),rgba(236,221,194,0.8))]" />
          <div className="absolute left-[45%] top-[32%] h-[5%] w-[13%] rounded-b-[0.85rem] border-x border-b border-white/30 bg-white/20" />
          <div className="absolute left-[37%] top-[36%] h-[47%] w-[29%] rounded-[1.6rem] border border-white/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(255,255,255,0.12)_40%,rgba(233,187,183,0.4)_100%)] backdrop-blur-[3px]" />
          <div className="absolute left-[39%] top-[57%] h-[24%] w-[25%] rounded-b-[1.35rem] bg-[linear-gradient(180deg,rgba(201,130,132,0.18),rgba(201,130,132,0.62))]" />
          <div className="absolute left-[45.5%] top-[41%] text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-white/85">
            AMARÉ
          </div>

          <motion.div
            animate={reduceMotion ? { rotate: 0, x: 0 } : { rotate: [4, 7, 4], x: [0, 2, 0] }}
            className="absolute left-[64%] top-[28%]"
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
            }
          >
            <div className="h-[18%] w-[2px] rounded-full bg-champagne/60" />
            <div className="mt-1 flex gap-[5px]">
              <span className="h-16 w-[2px] rounded-full bg-champagne/70" />
              <span className="mt-2 h-12 w-[2px] rounded-full bg-white/55" />
              <span className="mt-1 h-14 w-[2px] rounded-full bg-rose/70" />
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4 rounded-[1.35rem] border border-white/14 bg-white/7 px-4 py-3 text-white/82 backdrop-blur">
          <div>
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-white/65">
              Everyday lip edit
            </p>
            <p className="mt-2 font-display text-[1.25rem] leading-none tracking-[-0.04em]">
              Clip-on shine concept
            </p>
          </div>
          <p className="max-w-[8rem] text-right text-[0.65rem] leading-5 text-white/70">
            Styled placeholder until official product assets arrive.
          </p>
        </div>
      </div>
    </div>
  );
}
