import { cn } from "@/lib/utils";

type PlaceholderTone = "ivory" | "blush" | "rose" | "wine" | "champagne";
type PlaceholderRatio = "portrait" | "square" | "landscape" | "hero";

type ResponsiveImagePlaceholderProps = {
  caption?: string;
  className?: string;
  detail?: string;
  label: string;
  ratio?: PlaceholderRatio;
  tone?: PlaceholderTone;
};

const toneClasses: Record<PlaceholderTone, string> = {
  ivory: "bg-porcelain text-muted",
  blush: "bg-blush/75 text-berry",
  rose: "bg-rose/30 text-berry",
  wine: "bg-berry text-porcelain",
  champagne: "bg-champagne/25 text-berry",
};

const ratioClasses: Record<PlaceholderRatio, string> = {
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  landscape: "aspect-[16/11]",
  hero: "aspect-[5/6] sm:aspect-[4/3] lg:aspect-[9/10]",
};

export function ResponsiveImagePlaceholder({
  caption,
  className,
  detail,
  label,
  ratio = "square",
  tone = "ivory",
}: Readonly<ResponsiveImagePlaceholderProps>) {
  const accessibleLabel = [label, detail, caption].filter(Boolean).join(". ");

  return (
    <div
      aria-label={accessibleLabel}
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-frame)] border border-border/70",
        ratioClasses[ratio],
        toneClasses[tone],
        className,
      )}
      role="img"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-white/72 via-white/18 to-transparent" />
      <div aria-hidden="true" className="absolute left-[8%] top-[12%] h-[40%] w-[44%] rounded-full bg-white/45 blur-2xl" />
      <div aria-hidden="true" className="absolute right-[11%] top-[18%] h-[24%] w-[28%] rounded-[45%] border border-white/45 bg-white/25" />
      <div aria-hidden="true" className="absolute bottom-[16%] left-[17%] h-[32%] w-[12%] rounded-full border border-white/55 bg-white/30" />
      <div aria-hidden="true" className="absolute bottom-[12%] right-[14%] h-[30%] w-[24%] rounded-[40%] border border-white/40 bg-white/18" />

      <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3 sm:inset-x-5">
        <p className="rounded-full border border-white/55 bg-white/58 px-2.5 py-1 text-[0.56rem] font-semibold uppercase tracking-[0.26em] text-muted backdrop-blur">
          Mock art
        </p>
        {detail ? (
          <span className="rounded-full border border-white/55 bg-white/58 px-2.5 py-1 text-[0.56rem] font-medium uppercase tracking-[0.22em] text-muted backdrop-blur">
            {detail}
          </span>
        ) : null}
      </div>

      <div className="absolute inset-x-4 bottom-4 rounded-[1.25rem] border border-white/55 bg-white/68 p-4 backdrop-blur sm:inset-x-5 sm:bottom-5">
        <p className="font-display text-[1.18rem] leading-[1.02] tracking-[-0.04em] text-espresso sm:text-[1.35rem]">
          {label}
        </p>
        {caption ? <p className="mt-2 text-[0.78rem] leading-5 text-muted sm:text-sm">{caption}</p> : null}
      </div>
    </div>
  );
}
