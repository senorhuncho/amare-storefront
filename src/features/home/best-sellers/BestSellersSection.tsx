import { ProductCard } from "@/components/commerce/ProductCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Product } from "@/lib/commerce";

type BestSellersSectionProps = {
  products: Product[];
};

export function BestSellersSection({
  products,
}: Readonly<BestSellersSectionProps>) {
  return (
    <section className="pb-14 pt-8 sm:pb-18 sm:pt-10 lg:pb-24 lg:pt-14" id="best-sellers">
      <Container>
        <SectionHeader
          action={<Button href="/shop?collection=best-sellers" variant="secondary">Preview Shop</Button>}
          description="A first look at typed mock products rendered through reusable commerce components, with interaction states ready for the later Shopify milestone."
          eyebrow="BEST SELLERS"
          title="Your next lip obsession"
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
