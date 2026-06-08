import type { Product } from "@/lib/commerce";

export type LipMoodOption = {
  description: string;
  finishHandle: Product["handle"];
  finishLabel: string;
  id: "soft-nude" | "berry-night" | "glass-lip";
  linerFamily: string;
  linerHandle: Product["handle"];
  previewSummary: string;
  surfaceClass: string;
  swatchClass: string;
  title: string;
};

// Provisional merchandising moods for the homepage teaser only.
// These labels and pairings are concept directions and must be verified against the connected catalog later.
export const lipComboData: LipMoodOption[] = [
  {
    description: "Warm, easy and made for everyday wear.",
    finishHandle: "classic-lip-gloss",
    finishLabel: "Soft gloss",
    id: "soft-nude",
    linerFamily: "Neutral liner",
    linerHandle: "cream-semi-smudge-proof-retractable-lip-liner",
    previewSummary: "A gentle nude-led pairing for polished daily shine.",
    surfaceClass: "from-porcelain via-blush/30 to-rose/18",
    swatchClass: "bg-[linear-gradient(135deg,#D8B2A2,#F3D7C8)]",
    title: "Soft Nude",
  },
  {
    description: "Deeper color with a polished, expressive finish.",
    finishHandle: "glass-lip-gloss",
    finishLabel: "Glass gloss",
    id: "berry-night",
    linerFamily: "Berry liner",
    linerHandle: "cream-semi-smudge-proof-retractable-lip-liner",
    previewSummary: "A richer evening combination with a reflective finish.",
    surfaceClass: "from-rose/18 via-blush/40 to-wine/12",
    swatchClass: "bg-[linear-gradient(135deg,#6B273C,#B85D75)]",
    title: "Berry Night",
  },
  {
    description: "Defined edges with a high-shine finish.",
    finishHandle: "keychain-lip-oil",
    finishLabel: "Lip oil gloss",
    id: "glass-lip",
    linerFamily: "Brown liner",
    linerHandle: "cream-semi-smudge-proof-retractable-lip-liner",
    previewSummary: "A crisp outline paired with bright, portable shine.",
    surfaceClass: "from-champagne/18 via-porcelain to-blush/22",
    swatchClass: "bg-[linear-gradient(135deg,#8E5F4E,#E7C5B2)]",
    title: "Glass Lip",
  },
];
