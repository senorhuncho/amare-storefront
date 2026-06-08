import { Price } from "@/components/commerce/Price";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ResponsiveImagePlaceholder } from "@/components/ui/ResponsiveImagePlaceholder";
import type { Product } from "@/lib/commerce";

type GiftFeatureCardProps = {
  product: Product;
  compact?: boolean;
  ctaHref: string;
};

export function GiftFeatureCard({
  product,
  compact = false,
  ctaHref,
}: Readonly<GiftFeatureCardProps>) {
  return (
    <article className="flex h-full flex-col rounded-[1.8rem] border border-border/70 bg-porcelain/84 p-4 sm:p-5">
      <ResponsiveImagePlaceholder
        caption={product.imageDescriptor.note}
        detail={product.category}
        label={product.imageDescriptor.label}
        ratio={compact ? "landscape" : "portrait"}
        tone={product.imageDescriptor.tone}
      />
      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            {product.badge ? <Badge tone="accent">{product.badge}</Badge> : null}
            <h3 className="mt-3 font-display text-[1.7rem] leading-[0.96] tracking-[-0.04em] text-espresso">
              {product.title}
            </h3>
          </div>
          <Price
            amount={product.price}
            className="shrink-0 text-[1.05rem] font-semibold tracking-[-0.03em] text-espresso"
            currencyCode={product.currencyCode}
          />
        </div>
        <p className="mt-4 text-sm leading-7 text-muted">{product.shortDescription}</p>
        <div className="mt-5">
          <Button href={ctaHref} size="sm" variant="secondary">
            View gift idea
          </Button>
        </div>
      </div>
    </article>
  );
}
