export function BrandStoryVisual() {
  return (
    <div
      aria-label="Editorial AMARÉ brand direction placeholder art. Temporary concept visual pending official brand photography."
      className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,253,252,0.94),rgba(233,187,183,0.18))] p-5"
      role="img"
    >
      <div aria-hidden="true" className="aspect-[5/6] sm:aspect-[4/3] lg:aspect-[4/5]" />
      <div aria-hidden="true" className="absolute left-[10%] top-[12%] h-[48%] w-[54%] rounded-[2rem] bg-porcelain/86" />
      <div aria-hidden="true" className="absolute left-[18%] top-[22%] h-[38%] w-[26%] rounded-[1.8rem] border border-white/40 bg-white/35" />
      <div aria-hidden="true" className="absolute left-[34%] top-[18%] h-[46%] w-[12%] rounded-full bg-rose/36 blur-xl" />
      <div aria-hidden="true" className="absolute right-[12%] top-[16%] h-[22%] w-[22%] rounded-full border border-champagne/65" />
      <div aria-hidden="true" className="absolute right-[16%] top-[46%] h-[24%] w-[24%] rounded-[38%] bg-ivory/70" />
      <div className="absolute bottom-5 left-5 max-w-[15rem] rounded-[1.2rem] border border-white/55 bg-white/68 p-4 backdrop-blur">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted">
          Concept frame
        </p>
        <p className="mt-2 font-display text-[1.5rem] leading-[0.98] tracking-[-0.04em] text-espresso">
          Made to feel personal.
        </p>
      </div>
    </div>
  );
}
