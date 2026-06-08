import { Badge } from "@/components/ui/Badge";
import { ResponsiveImagePlaceholder } from "@/components/ui/ResponsiveImagePlaceholder";

type CustomerStoryPlaceholderProps = {
  description: string;
  label: string;
  ratio: "portrait" | "square" | "landscape";
  title: string;
  tone: "ivory" | "blush" | "rose" | "wine" | "champagne";
};

export function CustomerStoryPlaceholder({
  description,
  label,
  ratio,
  title,
  tone,
}: Readonly<CustomerStoryPlaceholderProps>) {
  return (
    <article className="flex h-full flex-col rounded-[1.7rem] border border-border/70 bg-porcelain/84 p-4">
      <ResponsiveImagePlaceholder
        caption="Official customer content coming soon"
        detail={label}
        label={title}
        ratio={ratio}
        tone={tone}
      />
      <div className="mt-4 space-y-3">
        <Badge tone="accent">{label}</Badge>
        <p className="font-display text-[1.55rem] leading-[0.98] tracking-[-0.04em] text-espresso">
          {title}
        </p>
        <p className="text-sm leading-7 text-muted">{description}</p>
        <p className="text-[0.68rem] uppercase tracking-[0.22em] text-muted">
          Official customer content coming soon
        </p>
      </div>
    </article>
  );
}
