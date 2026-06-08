import { Price } from "@/components/commerce/Price";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { Product } from "@/lib/commerce";

import type { ShadeStory } from "@/features/home/shade-story/shadeStoryData";

type ShadeStoryCardProps = {
  product: Product;
  shade: ShadeStory;
};

export function ShadeStoryCard({ product, shade }: Readonly<ShadeStoryCardProps>) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(68,23,34,0.98),rgba(36,24,25,0.98))] p-5 text-porcelain sm:p-7">
      <div
        aria-hidden="true"
        className="absolute left-[9%] top-[16%] h-[16rem] w-[16rem] rounded-full opacity-80 blur-3xl"
        style={{ backgroundColor: shade.surfaceColor }}
      />
      <div
        aria-hidden="true"
        className="absolute right-[10%] top-[18%] h-[9rem] w-[9rem] rounded-full blur-2xl"
        style={{ backgroundColor: `${shade.swatchColor}66` }}
      />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="bg-white/10 text-white/80" tone="deep">
              {shade.family}
            </Badge>
            <span className="text-[0.68rem] uppercase tracking-[0.24em] text-white/58">
              Provisional shade story
            </span>
          </div>

          <div>
            <h3 className="font-display text-[2.5rem] leading-[0.92] tracking-[-0.05em] text-porcelain sm:text-[3.35rem]">
              {shade.title}
            </h3>
            <p className="mt-4 max-w-[32rem] text-[1rem] leading-8 text-white/76">
              {shade.story}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-white/58">Mood</p>
              <p className="mt-2 text-sm leading-7 text-white/82">{shade.mood}</p>
            </div>
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-white/58">
                Suggested finish
              </p>
              <p className="mt-2 text-sm leading-7 text-white/82">{shade.finishLabel}</p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/6 p-5">
            <div
              aria-hidden="true"
              className="absolute left-[12%] top-[18%] h-[26%] w-[55%] rounded-full"
              style={{ backgroundColor: `${shade.swatchColor}D9` }}
            />
            <div
              aria-hidden="true"
              className="absolute left-[18%] top-[44%] h-[42%] w-[46%] rounded-[45%] border border-white/16"
              style={{ backgroundColor: `${shade.surfaceColor}3D` }}
            />
            <div
              aria-hidden="true"
              className="absolute right-[16%] top-[24%] h-[38%] w-[20%] rounded-[1.8rem] border border-white/32"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.58), rgba(255,255,255,0.12) 38%, rgba(233,187,183,0.45) 100%)",
              }}
            />
            <div
              aria-hidden="true"
              className="absolute right-[19.5%] top-[18%] h-[8%] w-[13%] rounded-t-[0.95rem]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(194,160,107,0.96), rgba(236,216,180,0.82))",
              }}
            />
            <div className="relative z-10 min-h-[17rem]">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-white/58">
                Conceptual swatch
              </p>
              <div className="mt-24 max-w-[14rem] rounded-[1.15rem] border border-white/12 bg-white/8 p-4 backdrop-blur">
                <p className="font-display text-[1.55rem] leading-none tracking-[-0.04em] text-porcelain">
                  {shade.selectorLabel}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/72">
                  Screen colors are illustrative. Final product shades may vary.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.45rem] border border-white/10 bg-white/6 p-5">
            <p className="text-[0.62rem] uppercase tracking-[0.22em] text-white/58">
              Suggested discovery pick
            </p>
            <div className="mt-3 flex items-end justify-between gap-4">
              <div>
                <p className="font-display text-[1.65rem] leading-[0.96] tracking-[-0.04em] text-porcelain">
                  {product.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-white/74">{product.shortDescription}</p>
              </div>
              <Price
                amount={product.price}
                className="shrink-0 text-[1.05rem] font-semibold tracking-[-0.03em] text-porcelain"
                currencyCode={product.currencyCode}
              />
            </div>
            <div className="mt-4">
              <Button href="/shop?discover=shades" size="sm">
                Explore lip shades
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
