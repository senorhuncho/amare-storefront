import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { ResponsiveImagePlaceholder } from "@/components/ui/ResponsiveImagePlaceholder";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const categoryCards = [
  {
    accent: "Glass finish",
    className: "xl:col-span-5 xl:row-span-2",
    href: "/shop?mood=glass-shine",
    label: "Glass Shine",
    phrase: "Mirror-like finish",
    placeholderLabel: "Reflective gloss cue",
    placeholderNote: "Mock art styled to suggest a polished, luminous finish.",
    ratio: "portrait" as const,
    tone: "champagne" as const,
  },
  {
    accent: "Soft edit",
    className: "xl:col-span-3",
    href: "/shop?mood=soft-nude",
    label: "Soft Nude",
    phrase: "Everyday neutral tones",
    placeholderLabel: "Warm nude palette cue",
    placeholderNote: "A quiet, tonal placeholder composition.",
    ratio: "square" as const,
    tone: "ivory" as const,
  },
  {
    accent: "Statement",
    className: "xl:col-span-4",
    href: "/shop?mood=high-pigment",
    label: "High Pigment",
    phrase: "Color that holds attention",
    placeholderLabel: "Bold finish cue",
    placeholderNote: "Deep berry styling for a richer mood.",
    ratio: "square" as const,
    tone: "wine" as const,
  },
  {
    accent: "Care ritual",
    className: "xl:col-span-4",
    href: "/shop?mood=lip-care",
    label: "Lip Care",
    phrase: "Prep, smooth and soften",
    placeholderLabel: "Prep and polish cue",
    placeholderNote: "Routine-led placeholder art for care-first moments.",
    ratio: "landscape" as const,
    tone: "blush" as const,
  },
  {
    accent: "Giftable",
    className: "xl:col-span-3",
    href: "/shop?mood=everyday-sets",
    label: "Everyday Sets",
    phrase: "Your routine, already paired",
    placeholderLabel: "Curated set cue",
    placeholderNote: "Merchandising mock art for gift-ready edits.",
    ratio: "landscape" as const,
    tone: "rose" as const,
  },
] as const;

export function CategoryNavigationSection() {
  return (
    <section
      className="bg-porcelain/45 pt-4 pb-[4.75rem] sm:pt-6 sm:pb-[5.5rem] lg:pt-8 lg:pb-[7rem]"
      id="category-discovery"
    >
      <Container>
        <SectionHeader
          description="Explore finish, mood, and routine-first shopping cues through a more editorial discovery pass."
          eyebrow="DISCOVER"
          title="Find your lip mood"
        />

        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 hide-scrollbar md:hidden">
          {categoryCards.map((card, index) => (
            <Link
              className={cn(
                "group min-w-[17.5rem] snap-start rounded-[1.85rem] border border-border/70 bg-porcelain/84 p-4",
                index === 0 && "min-w-[19.5rem]",
              )}
              href={card.href}
              key={card.label}
            >
              <ResponsiveImagePlaceholder
                caption={card.placeholderNote}
                detail={card.accent}
                label={card.placeholderLabel}
                ratio={card.ratio}
                tone={card.tone}
              />
              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <Badge tone="accent">{card.accent}</Badge>
                  <h3 className="mt-4 font-display text-[1.9rem] leading-[0.96] tracking-[-0.04em] text-espresso">
                    {card.label}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{card.phrase}</p>
                </div>
                <ArrowUpRight aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-wine" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-12">
          {categoryCards.map((card) => (
            <Link
              className={cn(
                "group flex h-full flex-col rounded-[2rem] border border-border/70 bg-porcelain/72 p-5 hover:-translate-y-0.5 hover:border-rose/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/20",
                card.className,
              )}
              href={card.href}
              key={card.label}
            >
              <ResponsiveImagePlaceholder
                caption={card.placeholderNote}
                className="transition-transform duration-500 group-hover:scale-[1.01]"
                detail={card.accent}
                label={card.placeholderLabel}
                ratio={card.ratio}
                tone={card.tone}
              />

              <div className="mt-5 flex flex-1 items-start justify-between gap-4">
                <div>
                  <Badge tone="accent">{card.accent}</Badge>
                  <h3 className="mt-4 font-display text-[2rem] leading-[0.96] tracking-[-0.04em] text-espresso">
                    {card.label}
                  </h3>
                  <p className="mt-3 max-w-sm text-[0.98rem] leading-7 text-muted">{card.phrase}</p>
                </div>
                <ArrowUpRight aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-wine" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
