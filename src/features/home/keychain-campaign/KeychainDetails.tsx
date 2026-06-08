import { KeyRound, ShoppingBag, Sparkles } from "lucide-react";

const campaignDetails = [
  {
    description: "Attach it to the accessories you already carry.",
    icon: KeyRound,
    title: "Clip it",
  },
  {
    description: "Keep your lip essential easy to reach.",
    icon: ShoppingBag,
    title: "Carry it",
  },
  {
    description: "A finishing touch made for life beyond the vanity.",
    icon: Sparkles,
    title: "Gloss anywhere",
  },
] as const;

export function KeychainDetails() {
  return (
    <div
      className="grid gap-4 border-t border-white/12 pt-6 md:grid-cols-3"
      id="keychain-campaign-details"
    >
      {campaignDetails.map((detail) => (
        <div
          className="rounded-[1.35rem] border border-white/10 bg-white/6 px-4 py-4"
          key={detail.title}
        >
          <detail.icon aria-hidden="true" className="h-4 w-4 text-champagne" />
          <h3 className="mt-4 font-display text-[1.5rem] leading-none tracking-[-0.03em] text-porcelain">
            {detail.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-white/74">{detail.description}</p>
        </div>
      ))}
    </div>
  );
}
