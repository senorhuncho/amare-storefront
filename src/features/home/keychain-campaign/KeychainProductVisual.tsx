"use client";

import { motion, useReducedMotion } from "motion/react";

// Temporary CSS-based Keychain Lip Oil campaign art pending official client photography and logo assets.
export function KeychainProductVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-label="Conceptual Keychain Lip Oil campaign art built from CSS shapes while official product photography is pending."
      className="relative mx-auto w-full max-w-[34rem]"
      role="img"
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(68,23,34,0.98),rgba(36,24,25,0.96))]">
        <div aria-hidden="true" className="aspect-[5/6] sm:aspect-[4/3] lg:aspect-[5/6]" />
        <div aria-hidden="true" className="absolute left-[10%] top-[12%] h-[26%] w-[30%] rounded-full bg-champagne/12 blur-3xl" />
        <div aria-hidden="true" className="absolute right-[6%] top-[10%] h-[34%] w-[28%] rounded-full bg-white/8 blur-3xl" />
        <div aria-hidden="true" className="absolute bottom-[8%] left-[16%] h-[16%] w-[52%] rounded-full bg-black/25 blur-2xl" />

        <div className="absolute left-5 top-5 rounded-full border border-white/14 bg-white/6 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-white/70">
          Temp campaign art
        </div>

        <div aria-hidden="true" className="absolute left-[16%] top-[16%] h-[18%] w-[18%] rounded-full border border-champagne/70" />
        <div aria-hidden="true" className="absolute left-[31%] top-[25%] h-[2px] w-[17%] rounded-full bg-champagne/70" />
        <div aria-hidden="true" className="absolute left-[46%] top-[26%] h-[10%] w-[3px] rounded-full bg-champagne/70" />

        <motion.div
          animate={reduceMotion ? { y: 0 } : { y: [0, -6, 0] }}
          className="absolute left-[28%] top-[22%] h-[56%] w-[34%]"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
          }
        >
          <div className="absolute left-[22%] top-[2%] h-[14%] w-[56%] rounded-t-[1rem] border border-champagne/75 bg-[linear-gradient(180deg,rgba(194,160,107,0.95),rgba(235,218,186,0.78))]" />
          <div className="absolute left-[33%] top-[14%] h-[6%] w-[34%] rounded-b-[0.95rem] border-x border-b border-white/28 bg-white/16" />
          <div className="absolute left-[6%] top-[19%] h-[70%] w-[88%] rounded-[1.7rem] border border-white/34 bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(255,255,255,0.18)_38%,rgba(201,130,132,0.32)_100%)] backdrop-blur-[3px]" />
          <div className="absolute left-[12%] top-[54%] h-[28%] w-[76%] rounded-b-[1.45rem] bg-[linear-gradient(180deg,rgba(233,187,183,0.15),rgba(201,130,132,0.66))]" />
          <div className="absolute left-[50%] top-[34%] -translate-x-1/2 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-white/84">
            AMARÉ
          </div>
        </motion.div>

        <motion.div
          animate={reduceMotion ? { rotate: 0, x: 0 } : { rotate: [3, 7, 3], x: [0, 3, 0] }}
          className="absolute left-[58%] top-[31%] flex gap-[5px]"
          initial={{ opacity: 0, x: reduceMotion ? 0 : 10 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 4.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
          }
        >
          <span className="mt-2 h-20 w-[2px] rounded-full bg-champagne/72" />
          <span className="h-16 w-[2px] rounded-full bg-white/56" />
          <span className="mt-4 h-12 w-[2px] rounded-full bg-rose/72" />
        </motion.div>

        <div className="absolute right-5 top-[22%] rounded-[1rem] border border-white/12 bg-white/6 px-4 py-3 text-right backdrop-blur">
          <p className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-white/62">
            Carry it
          </p>
          <p className="mt-2 font-display text-[1.4rem] leading-none tracking-[-0.04em] text-porcelain">
            Gloss anywhere
          </p>
        </div>

        <div className="absolute bottom-6 left-6 rounded-[1.25rem] border border-white/12 bg-white/6 px-4 py-3 backdrop-blur">
          <p className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-white/62">
            Keychain Lip Oil
          </p>
          <p className="mt-2 text-sm leading-6 text-white/74">
            Styled concept art while official product photography is pending.
          </p>
        </div>
      </div>
    </div>
  );
}
