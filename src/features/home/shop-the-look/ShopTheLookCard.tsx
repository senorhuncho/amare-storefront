import { Price } from "@/components/commerce/Price";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { Product } from "@/lib/commerce";

import type { ShopTheLookOption } from "@/features/home/shop-the-look/shopTheLookData";

type ShopTheLookCardProps = {
  look: ShopTheLookOption;
  products: Product[];
  totalPrice: number;
};

export function ShopTheLookCard({
  look,
  products,
  totalPrice,
}: Readonly<ShopTheLookCardProps>) {
  return (
    <div className="relative overflow-hidden rounded-[2.1rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,253,252,0.92),rgba(248,243,237,0.98))] p-5 sm:p-7">
      <div
        aria-hidden="true"
        className="absolute left-[7%] top-[10%] h-[68%] w-[42%] rounded-[2rem] border border-white/50 bg-porcelain/82"
      />
      <div
        aria-hidden="true"
        className="absolute left-[18%] top-[18%] h-[8%] w-[30%] rounded-full opacity-85"
        style={{ backgroundColor: look.swatchColor }}
      />
      <div
        aria-hidden="true"
        className="absolute left-[22%] top-[36%] h-[36%] w-[10%] rounded-[1rem] bg-berry/82"
      />
      <div
        aria-hidden="true"
        className="absolute left-[30%] top-[28%] h-[46%] w-[18%] rounded-[1.6rem] border border-white/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(255,255,255,0.12)_40%,rgba(233,187,183,0.48)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[35%] top-[22%] h-[8%] w-[8%] rounded-t-[0.8rem] bg-[linear-gradient(180deg,rgba(194,160,107,0.94),rgba(236,216,180,0.8))]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[18%] left-[12%] h-[8%] w-[40%] rounded-full bg-black/10 blur-xl"
      />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[0.94fr_1.06fr]">
        <div className="min-h-[22rem] rounded-[1.75rem] border border-white/45 bg-white/38 p-5 backdrop-blur">
          <div className="flex items-center justify-between gap-3">
            <Badge tone="accent">Featured look</Badge>
            <span className="text-[0.64rem] uppercase tracking-[0.22em] text-muted">
              {look.mediaNote}
            </span>
          </div>
          <div className="mt-28 max-w-[14rem] rounded-[1.2rem] border border-white/60 bg-white/65 p-4">
            <p className="text-[0.62rem] uppercase tracking-[0.22em] text-muted">
              {look.finishLabel}
            </p>
            <p className="mt-2 font-display text-[1.8rem] leading-[0.96] tracking-[-0.04em] text-espresso">
              {look.title}
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted">
              Look pairing
            </p>
            <h3 className="mt-3 font-display text-[2.5rem] leading-[0.92] tracking-[-0.05em] text-espresso">
              {look.title}
            </h3>
            <p className="mt-4 max-w-[32rem] text-[1rem] leading-8 text-muted">
              {look.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-muted">
                Suggested pairing
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-espresso">
                {look.pairing.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-muted">
                Included products
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-espresso">
                {products.map((product) => (
                  <li key={product.handle}>{product.title}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-end justify-between gap-4 rounded-[1.4rem] border border-border/70 bg-porcelain/78 p-4">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-muted">
                Provisional price
              </p>
              <p className="mt-2 text-sm leading-7 text-muted">
                {products.length} product{products.length === 1 ? "" : "s"} matched from the mock catalog.
              </p>
            </div>
            <Price
              amount={totalPrice}
              className="text-[1.2rem] font-semibold tracking-[-0.03em] text-espresso"
              currencyCode={products[0]?.currencyCode ?? "USD"}
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={`/shop?look=${look.routeSlug}`} size="lg">
              Shop this look
            </Button>
            <Button href="/shop?collection=lips" size="lg" variant="secondary">
              Explore all lip products
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
