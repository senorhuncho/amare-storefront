import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

import { BrandStoryVisual } from "@/features/home/brand-story/BrandStoryVisual";

// Provisional brand-direction copy pending client-confirmed founder story, mission details, and brand history.
export function BrandStorySection() {
  return (
    <section className="bg-porcelain/42 py-[4.75rem] sm:py-[5.5rem] lg:py-[7rem]" id="brand-story">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div className="order-2 lg:order-1">
            <BrandStoryVisual />
          </div>

          <div className="order-1 space-y-6 lg:order-2">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-muted">
              ABOUT AMARÉ
            </p>
            <h2 className="max-w-[12ch] font-display text-[2.8rem] leading-[0.92] tracking-[-0.05em] text-espresso sm:text-[3.7rem]">
              Beauty that feels considered.
            </h2>
            <div className="space-y-4 text-[1rem] leading-8 text-muted">
              <p>
                AMARÉ is being shaped around a simple idea: everyday beauty should feel expressive, easy to wear and thoughtfully presented. From lip essentials to giftable sets, every touchpoint is designed to make the routine feel more personal.
              </p>
              <p>
                This concept site presents a refined direction for the brand while the final founder story, product philosophy and brand history are confirmed.
              </p>
            </div>
            <blockquote className="border-l border-champagne pl-4 font-display text-[1.4rem] leading-[1.1] tracking-[-0.03em] text-berry sm:text-[1.65rem]">
              Made to turn the everyday finishing touch into something worth remembering.
            </blockquote>
            <div>
              <Button href="/about" size="lg">
                Discover the AMARÉ story
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
