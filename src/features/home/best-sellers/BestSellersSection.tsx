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
    <section
      className="pt-4 pb-[4.75rem] sm:pt-6 sm:pb-[5.5rem] lg:pt-8 lg:pb-[7rem]"
      id="best-sellers"
    >
      <Container>
        <SectionHeader
          action={
            <Button href="/shop?collection=best-sellers" variant="secondary">
              Preview Shop
            </Button>
          }
          description="Four AMARÉ essentials chosen for easy layering, everyday shine and effortless gifting."
          divider
          eyebrow="BEST SELLERS"
          title="Your next lip obsession"
        />

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
