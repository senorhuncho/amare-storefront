import { Container } from "@/components/ui/Container";

import { NewsletterSignup } from "@/components/layout/NewsletterSignup";

export function NewsletterSection() {
  return (
    <section className="py-[4.75rem] sm:py-[5.5rem] lg:py-[7rem]" id="newsletter">
      <Container>
        <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(68,23,34,0.98),rgba(103,41,54,0.96))] px-5 py-8 text-porcelain sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-white/64">
                THE GLOSS LIST
              </p>
              <h2 className="max-w-[12ch] font-display text-[3rem] leading-[0.9] tracking-[-0.06em] text-porcelain sm:text-[4rem] lg:text-[4.6rem]">
                Be first to know what shines next.
              </h2>
              <p className="max-w-[34rem] text-[1rem] leading-8 text-white/76">
                Get early access to new shades, limited sets, launch updates and AMARÉ-only offers.
              </p>
            </div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full border border-white/12"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-6 top-6 h-24 w-24 rounded-full bg-white/8 blur-2xl"
              />
              <div className="relative rounded-[1.7rem] border border-white/10 bg-white/6 p-5 sm:p-6">
                <NewsletterSignup tone="dark" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
