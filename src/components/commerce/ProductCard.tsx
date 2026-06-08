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
    <article className="flex h-full flex-col rounded-[1.9rem] border border-border/80 bg-porcelain p-4 shadow-[var(--shadow-card)] sm:p-5">
      <div className="relative">
        <ResponsiveImagePlaceholder
          caption={product.imageDescriptor.note}
          detail={product.category}
          label={product.imageDescriptor.label}
          ratio="portrait"
          tone={product.imageDescriptor.tone}
        />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          {product.badge ? <Badge tone="accent">{product.badge}</Badge> : null}
          {!available ? <Badge tone="deep">Sold Out</Badge> : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                {product.category}
              </p>
              <h3 className="mt-2 font-display text-[1.55rem] leading-none tracking-[-0.03em] text-espresso">
                {product.title}
              </h3>
            </div>
            <Price
              amount={product.price}
              className="text-base font-semibold text-espresso"
              currencyCode={product.currencyCode}
            />
          </div>
          <p className="text-sm leading-7 text-muted">{product.shortDescription}</p>
          {product.shadeSummary ? (
            <p className="text-sm font-medium text-berry">{product.shadeSummary}</p>
          ) : null}
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {available ? "Available in mock catalog" : "Unavailable in mock catalog"}
          </p>
        </div>

        <div className="mt-6 border-t border-border/80 pt-4">
          <ProductCardActions available={available} />
        </div>
      </div>
    </article>
  );
}
