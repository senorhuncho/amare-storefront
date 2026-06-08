import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

import { CustomerStoryPlaceholder } from "@/features/home/customer-stories/CustomerStoryPlaceholder";

const customerStoryFrames = [
  {
    description: "A concept frame for how real AMARÉ package reveals and gifting moments may be presented once available.",
    label: "Unboxing moment",
    ratio: "portrait" as const,
    title: "The first reveal",
    tone: "champagne" as const,
  },
  {
    description: "A placeholder for real customer routine content, styled to show daily combinations without inventing a testimonial.",
    label: "Everyday lip routine",
    ratio: "landscape" as const,
    title: "Routine in motion",
    tone: "ivory" as const,
  },
  {
    description: "A concept frame for real on-the-go AMARÉ styling, especially future Keychain Lip Oil customer content.",
    label: "Keychain Lip Oil on the go",
    ratio: "portrait" as const,
    title: "Beyond the vanity",
    tone: "rose" as const,
  },
] as const;

export function CustomerStoriesSection() {
  return (
    <section className="py-[4.75rem] sm:py-[5.5rem] lg:py-[7rem]" id="customer-stories">
      <Container>
        <SectionHeader
          description="Customer photos, verified reviews and real AMARÉ routines will live here once connected to the official store."
          eyebrow="SEEN IN AMARÉ"
          title="Your look, your shine."
        />

        <div className="-mx-5 mt-10 flex gap-4 overflow-x-auto px-5 pb-2 hide-scrollbar lg:hidden">
          {customerStoryFrames.map((frame) => (
            <div className="min-w-[17.5rem]" key={frame.title}>
              <CustomerStoryPlaceholder {...frame} />
            </div>
          ))}
        </div>

        <div className="mt-10 hidden gap-5 lg:grid lg:grid-cols-[1fr_1.2fr_0.95fr]">
          {customerStoryFrames.map((frame) => (
            <CustomerStoryPlaceholder key={frame.title} {...frame} />
          ))}
        </div>

        <p className="mt-6 text-sm leading-7 text-muted">
          Real customer content will replace these concept frames before launch.
        </p>
      </Container>
    </section>
  );
}
