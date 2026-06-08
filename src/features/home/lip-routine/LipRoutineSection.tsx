import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Product } from "@/lib/commerce";

import { RoutineStepCard } from "@/features/home/lip-routine/RoutineStepCard";

type LipRoutineSectionProps = {
  defineProduct: Product;
  glossProducts: Product[];
  prepProducts: Product[];
};

export function LipRoutineSection({
  defineProduct,
  glossProducts,
  prepProducts,
}: Readonly<LipRoutineSectionProps>) {
  return (
    <section className="bg-ivory/72 py-[4.75rem] sm:py-[5.5rem] lg:py-[7rem]" id="lip-routine">
      <Container>
        <SectionHeader
          action={
            <Button href="/shop?routine=prep-define-gloss" variant="secondary">
              Shop the full routine
            </Button>
          }
          description="A considered routine for smoother-looking prep, a more intentional outline and the finishing shine that brings everything together."
          eyebrow="YOUR THREE-STEP LIP RITUAL"
          title="Prep. Define. Gloss."
        />

        <div className="relative mt-10 sm:mt-12">
          <div aria-hidden="true" className="absolute bottom-6 left-5 top-6 w-px bg-border/70 lg:hidden" />
          <div
            aria-hidden="true"
            className="absolute left-[16%] right-[13%] top-[2.6rem] hidden h-px bg-border/70 lg:block"
          />

          <div className="relative grid gap-6 lg:grid-cols-[0.98fr_0.82fr_1.16fr]">
            <div className="pl-10 lg:pl-0">
              <RoutineStepCard
                defaultProductHandle={prepProducts[0].handle}
                description="Begin with the essentials that help your lips feel ready for color and shine."
                products={prepProducts}
                stepNumber="01"
                title="Prep"
              />
            </div>

            <div className="pl-10 lg:pl-0">
              <RoutineStepCard
                defaultProductHandle={defineProduct.handle}
                description="Shape the look with a liner selected to complement your chosen lip mood."
                products={[defineProduct]}
                stepNumber="02"
                title="Define"
              />
            </div>

            <div className="pl-10 lg:pl-0">
              <RoutineStepCard
                defaultProductHandle={glossProducts[0].handle}
                description="Finish with the texture and level of shine that feels most like you."
                featured
                products={glossProducts}
                stepNumber="03"
                title="Gloss"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
