import { Price } from "@/components/commerce/Price";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ResponsiveImagePlaceholder } from "@/components/ui/ResponsiveImagePlaceholder";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Product } from "@/lib/commerce";

import { GiftFeatureCard } from "@/features/home/sets-and-gifting/GiftFeatureCard";

type SetsAndGiftingSectionProps = {
  featuredProduct: Product;
  giftCardProduct: Product;
  supportingProducts: Product[];
};

export function SetsAndGiftingSection({
  featuredProduct,
  giftCardProduct,
  supportingProducts,
}: Readonly<SetsAndGiftingSectionProps>) {
  return (
    <section className="bg-porcelain/48 py-[4.75rem] sm:py-[5.5rem] lg:py-[7rem]" id="sets-and-gifting">
      <Container>
        <SectionHeader
          action={
            <Button href="/shop?category=sets-and-gifts" variant="secondary">
              Shop sets & gifts
            </Button>
          }
          description="From everyday pairings to complete lip collections, discover gifts designed to feel thoughtful before they are even opened."
          eyebrow="MADE TO GIVE"
          title="Sets for every kind of beauty moment."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <article className="overflow-hidden rounded-[2rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,253,252,0.95),rgba(233,187,183,0.18))] p-5 sm:p-7">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <ResponsiveImagePlaceholder
                caption={featuredProduct.imageDescriptor.note}
                detail={featuredProduct.category}
                label={featuredProduct.imageDescriptor.label}
                ratio="portrait"
                tone={featuredProduct.imageDescriptor.tone}
              />

              <div className="flex flex-col justify-between gap-6">
                <div>
                  {featuredProduct.badge ? <Badge tone="accent">{featuredProduct.badge}</Badge> : null}
                  <h3 className="mt-4 font-display text-[2.6rem] leading-[0.92] tracking-[-0.05em] text-espresso">
                    {featuredProduct.title}
                  </h3>
                  <p className="mt-4 max-w-[32rem] text-[1rem] leading-8 text-muted">
                    {featuredProduct.shortDescription}
                  </p>
                </div>

                <div className="space-y-4 border-t border-border/70 pt-4">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[0.62rem] uppercase tracking-[0.22em] text-muted">
                        Provisional price
                      </p>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        Collection details and exact contents remain pending Shopify verification.
                      </p>
                    </div>
                    <Price
                      amount={featuredProduct.price}
                      className="shrink-0 text-[1.2rem] font-semibold tracking-[-0.03em] text-espresso"
                      currencyCode={featuredProduct.currencyCode}
                    />
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button href="/shop?category=sets-and-gifts" size="lg">
                      Shop sets & gifts
                    </Button>
                    <Button href="/shop?highlight=amare-cosmetics-gift-card" size="lg" variant="secondary">
                      Send an AMARÉ gift card
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {supportingProducts.map((product) => (
              <GiftFeatureCard
                compact
                ctaHref={`/shop?highlight=${product.handle}`}
                key={product.handle}
                product={product}
              />
            ))}

            <article className="relative overflow-hidden rounded-[1.85rem] border border-border/70 bg-[linear-gradient(180deg,rgba(103,41,54,0.96),rgba(68,23,34,0.98))] p-5 text-porcelain">
              <div
                aria-hidden="true"
                className="absolute right-6 top-6 h-28 w-44 rounded-[1.3rem] border border-white/14 bg-white/8"
              />
              <div
                aria-hidden="true"
                className="absolute right-10 top-11 h-3 w-20 rounded-full bg-champagne/70"
              />
              <div
                aria-hidden="true"
                className="absolute left-6 top-14 h-20 w-20 rounded-full border border-champagne/40"
              />
              <div className="relative z-10">
                {giftCardProduct.badge ? (
                  <Badge className="bg-white/8 text-white/80" tone="deep">
                    {giftCardProduct.badge}
                  </Badge>
                ) : null}
                <h3 className="mt-4 font-display text-[2rem] leading-[0.94] tracking-[-0.04em] text-porcelain">
                  {giftCardProduct.title}
                </h3>
                <p className="mt-4 max-w-[24rem] text-sm leading-7 text-white/74">
                  {giftCardProduct.shortDescription}
                </p>
                <div className="mt-5 flex items-end justify-between gap-4">
                  <Price
                    amount={giftCardProduct.price}
                    className="text-[1.12rem] font-semibold tracking-[-0.03em] text-porcelain"
                    currencyCode={giftCardProduct.currencyCode}
                  />
                  <Button
                    className="border-white/14 bg-white/8 text-porcelain hover:bg-white/12"
                    href="/shop?highlight=amare-cosmetics-gift-card"
                    size="sm"
                    variant="secondary"
                  >
                    Send a gift card
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
