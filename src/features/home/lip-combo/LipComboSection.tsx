import type { Product } from "@/lib/commerce";

import { Container } from "@/components/ui/Container";

import { LipComboBuilder } from "@/features/home/lip-combo/LipComboBuilder";

type LipComboSectionProps = {
  products: Product[];
};

export function LipComboSection({ products }: Readonly<LipComboSectionProps>) {
  return (
    <section className="py-[4.75rem] sm:py-[5.5rem] lg:py-[7rem]" id="lip-combo">
      <Container>
        <div className="rounded-[2.25rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,253,252,0.9),rgba(233,187,183,0.16))] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <LipComboBuilder products={products} />
        </div>
      </Container>
    </section>
  );
}
