import { ProductCardActions } from "@/components/commerce/ProductCardActions";
import { Price } from "@/components/commerce/Price";
import { Badge } from "@/components/ui/Badge";
import { ResponsiveImagePlaceholder } from "@/components/ui/ResponsiveImagePlaceholder";
import type { Product } from "@/lib/commerce";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: Readonly<ProductCardProps>) {
  const available = product.availability === "in-stock";

  return (
    <article className="group flex h-full flex-col rounded-[1.55rem] border border-border/70 bg-porcelain/84 p-3.5 sm:p-4">
      <div className="relative">
        <ResponsiveImagePlaceholder
          caption={product.imageDescriptor.note}
          className="transition-transform duration-500 group-hover:scale-[1.015]"
          detail={product.category}
          label={product.imageDescriptor.label}
          ratio="portrait"
          tone={product.imageDescriptor.tone}
        />
        <div className="absolute left-3 top-3 flex flex-wrap items-center gap-2">
          {product.badge ? <Badge tone="accent">{product.badge}</Badge> : null}
          {!available ? <Badge tone="deep">Sold Out</Badge> : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-muted">
              {product.category}
            </p>
            <Price
              amount={product.price}
              className="text-[1rem] font-semibold tracking-[-0.03em] text-espresso sm:text-[1.08rem]"
              currencyCode={product.currencyCode}
            />
          </div>
          <div>
            <h3 className="font-display text-[1.38rem] leading-[0.98] tracking-[-0.04em] text-espresso sm:text-[1.58rem]">
              {product.title}
            </h3>
            <p className="mt-3 text-[0.92rem] leading-7 text-muted">{product.shortDescription}</p>
          </div>
          <div className="flex min-h-10 flex-wrap items-center gap-2 text-[0.72rem] uppercase tracking-[0.18em] text-muted">
            {product.shadeSummary ? <span>{product.shadeSummary}</span> : null}
            <span>{available ? "Available in mock catalog" : "Unavailable in mock catalog"}</span>
          </div>
        </div>

        <div className="mt-5 border-t border-border/70 pt-4">
          <ProductCardActions available={available} />
        </div>
      </div>
    </article>
  );
}
