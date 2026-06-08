import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { ResponsiveImagePlaceholder } from "@/components/ui/ResponsiveImagePlaceholder";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const categoryCards = [
  {
    badge: "Glass finish",
    caption: "Reflective shine and high-polish lips for glossy moods.",
    className: "xl:col-span-2 xl:row-span-2",
    href: "/shop?mood=glass-shine",
    label: "Glass Shine",
    placeholderLabel: "Reflective gloss cue",
    placeholderNote: "Placeholder composition",
    ratio: "portrait" as const,
    tone: "champagne" as const,
  },
  {
    badge: "Soft edit",
    caption: "Neutral tones and understated definition for an everyday look.",
    className: "",
    href: "/shop?mood=soft-nude",
    label: "Soft Nude",
    placeholderLabel: "Warm nude palette cue",
    placeholderNote: "Mock mood board",
    ratio: "square" as const,
    tone: "ivory" as const,
  },
  {
    badge: "Statement",
    caption: "Deeper payoff and richer tones when you want more presence.",
    className: "",
    href: "/shop?mood=high-pigment",
    label: "High Pigment",
    placeholderLabel: "Bold finish cue",
    placeholderNote: "Editorial placeholder",
    ratio: "square" as const,
    tone: "wine" as const,
  },
  {
    badge: "Care ritual",
    caption: "Prep-focused picks for soft lips and polished layering.",
    className: "md:col-span-2 xl:col-span-1",
    href: "/shop?mood=lip-care",
    label: "Lip Care",
    placeholderLabel: "Prep and polish cue",
    placeholderNote: "Mock routine frame",
    ratio: "landscape" as const,
    tone: "blush" as const,
  },
  {
    badge: "Giftable",
    caption: "Easy bundles for someone else, or for your future self.",
    className: "md:col-span-2 xl:col-span-1",
    href: "/shop?mood=everyday-sets",
    label: "Everyday Sets",
    placeholderLabel: "Curated set cue",
    placeholderNote: "Placeholder gift edit",
    ratio: "landscape" as const,
    tone: "rose" as const,
  },
] as const;

export function CategoryNavigationSection() {
  return (
    <section className="py-8 sm:py-10 lg:py-14" id="category-discovery">
      <Container>
        <SectionHeader
          description="Explore the catalog through finish, feeling, and routine-first shopping cues while the full navigation system is still being expanded."
          eyebrow="DISCOVER"
          title="Find your lip mood"
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categoryCards.map((card) => (
            <Link
              className={cn(
                "group flex h-full flex-col rounded-[2rem] border border-border/80 bg-porcelain p-4 shadow-[var(--shadow-card)] hover:-translate-y-0.5 hover:border-rose/60 hover:shadow-[var(--shadow-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/20 sm:p-5",
                card.className,
              )}
              href={card.href}
              key={card.label}
            >
              <ResponsiveImagePlaceholder
                caption={card.placeholderNote}
                detail={card.badge}
                label={card.placeholderLabel}
                ratio={card.ratio}
                tone={card.tone}
              />
              <div className="mt-5 flex flex-1 flex-col justify-between gap-4">
                <div>
                  <Badge tone="accent">{card.badge}</Badge>
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-[1.9rem] leading-none tracking-[-0.04em] text-espresso">
                        {card.label}
                      </h3>
                      <p className="mt-3 max-w-sm text-sm leading-7 text-muted">{card.caption}</p>
                    </div>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-wine" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
