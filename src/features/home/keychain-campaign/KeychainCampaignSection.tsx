import { Price } from "@/components/commerce/Price";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Product } from "@/lib/commerce";

import { KeychainDetails } from "@/features/home/keychain-campaign/KeychainDetails";
import { KeychainProductVisual } from "@/features/home/keychain-campaign/KeychainProductVisual";

type KeychainCampaignSectionProps = {
  product: Product;
};

export function KeychainCampaignSection({
  product,
}: Readonly<KeychainCampaignSectionProps>) {
  return (
    <section
      className="pt-4 pb-[4.75rem] sm:pt-6 sm:pb-[5.5rem] lg:pt-8 lg:pb-[7rem]"
      id="keychain-campaign"
    >
      <Container>
        <div className="overflow-hidden rounded-[2.45rem] border border-white/10 bg-[linear-gradient(180deg,rgba(68,23,34,0.98),rgba(36,24,25,0.98))] px-5 py-8 text-porcelain sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
            <div className="space-y-6">
              <Badge className="bg-white/8 text-white/78" tone="deep">
                AMARÉ ON THE GO
              </Badge>

              <div className="space-y-5">
                <h2 className="max-w-[11ch] font-display text-[3rem] leading-[0.9] tracking-[-0.06em] text-porcelain sm:text-[4rem] lg:text-[4.7rem]">
                  Your gloss goes everywhere.
                </h2>
                <p className="max-w-[34rem] text-[1rem] leading-8 text-white/74 sm:text-[1.05rem]">
                  A beauty essential designed to stay close—ready for your keys, your bag and every moment in between.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {product.badge ? <Badge className="bg-white/8 text-white/78" tone="deep">{product.badge}</Badge> : null}
                <Badge className="bg-white/8 text-white/78" tone="deep">
                  {product.category}
                </Badge>
                <div className="text-sm font-medium text-white/82">
                  <span className="mr-2 text-[0.68rem] uppercase tracking-[0.24em] text-white/58">
                    Mock price
                  </span>
                  <Price amount={product.price} currencyCode={product.currencyCode} />
                </div>
              </div>

              <p className="max-w-[32rem] text-sm leading-7 text-white/68">
                {product.shortDescription} Product media and exact merchandising details remain provisional until verified Shopify data and official campaign assets are supplied.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  className="bg-porcelain text-berry hover:bg-ivory sm:min-w-52"
                  href="/shop?highlight=keychain-lip-oil"
                  size="lg"
                >
                  Shop Keychain Lip Oil
                </Button>
                <Button
                  className="border-white/18 bg-white/6 text-porcelain hover:bg-white/10 sm:min-w-44"
                  href="#keychain-campaign-details"
                  size="lg"
                  variant="secondary"
                >
                  See how it clips
                </Button>
              </div>
            </div>

            <KeychainProductVisual />
          </div>

          <div className="mt-10">
            <KeychainDetails />
          </div>

          <div className="mt-8 border-t border-white/12 pt-5 text-sm uppercase tracking-[0.22em] text-white/58">
            More than a finishing touch.
          </div>
        </div>
      </Container>
    </section>
  );
}
