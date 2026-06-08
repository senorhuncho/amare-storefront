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
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-frame)] border border-border/80 shadow-[var(--shadow-card)]",
        ratioClasses[ratio],
        toneClasses[tone],
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/20 to-transparent" />
      <div className="absolute left-[12%] top-[14%] h-[28%] w-[58%] rounded-full bg-porcelain/55 blur-2xl" />
      <div className="absolute bottom-[14%] right-[10%] h-[34%] w-[34%] rounded-[38%] border border-porcelain/70 bg-porcelain/35 backdrop-blur-sm" />
      <div className="absolute bottom-[22%] left-[18%] h-[28%] w-[18%] rounded-[40%] border border-white/45 bg-white/30" />
      <div className="absolute inset-x-5 bottom-5 rounded-[1.4rem] border border-white/60 bg-white/65 p-4 shadow-[var(--shadow-card)] backdrop-blur">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted">
          Placeholder media
        </p>
        <p className="mt-2 font-display text-[1.3rem] leading-none tracking-[-0.03em]">
          {label}
        </p>
        {caption ? <p className="mt-2 text-sm leading-6 text-muted">{caption}</p> : null}
      </div>
      {detail ? (
        <span className="absolute right-4 top-4 rounded-full border border-white/70 bg-white/65 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-muted backdrop-blur">
          {detail}
        </span>
      ) : null}
    </div>
  );
}
