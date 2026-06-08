import type { Product } from "@/lib/commerce";

export type ShopTheLookOption = {
  description: string;
  finishLabel: string;
  id:
    | "everyday-nude"
    | "soft-glam"
    | "berry-night"
    | "glass-lip"
    | "red-statement";
  mediaNote: string;
  routeSlug: string;
  swatchColor: string;
  title: string;
  productHandles: Product["handle"][];
  pairing: string[];
};

// Provisional merchandising look concepts for homepage storytelling only.
// Pairings and naming still require verification against the connected store catalog.
export const shopTheLookData: ShopTheLookOption[] = [
  {
    description: "Warm definition with a soft, wearable finish.",
    finishLabel: "Soft gloss",
    id: "everyday-nude",
    mediaNote: "Neutral tone composition for an easy daily look.",
    routeSlug: "everyday-nude",
    swatchColor: "#BE8D77",
    title: "Everyday Nude",
    productHandles: [
      "cream-semi-smudge-proof-retractable-lip-liner",
      "classic-lip-gloss",
    ],
    pairing: ["Neutral liner", "Soft gloss"],
  },
  {
    description: "A polished combination made for everyday elegance.",
    finishLabel: "Classic gloss",
    id: "soft-glam",
    mediaNote: "Refined pairing concept with gentle contrast and shine.",
    routeSlug: "soft-glam",
    swatchColor: "#9D6B63",
    title: "Soft Glam",
    productHandles: [
      "cream-semi-smudge-proof-retractable-lip-liner",
      "classic-lip-gloss",
    ],
    pairing: ["Brown liner", "Classic gloss"],
  },
  {
    description: "Deeper color with a richer, expressive finish.",
    finishLabel: "Glass gloss",
    id: "berry-night",
    mediaNote: "Berry-led concept with a darker, polished mood.",
    routeSlug: "berry-night",
    swatchColor: "#7E324D",
    title: "Berry Night",
    productHandles: [
      "cream-semi-smudge-proof-retractable-lip-liner",
      "glass-lip-gloss",
    ],
    pairing: ["Berry liner", "Glass gloss"],
  },
  {
    description: "Defined edges finished with a clear, reflective shine.",
    finishLabel: "Gloss or lip oil",
    id: "glass-lip",
    mediaNote: "High-shine concept with crisp edges and reflective finish cues.",
    routeSlug: "glass-lip",
    swatchColor: "#C9A28C",
    title: "Glass Lip",
    productHandles: [
      "cream-semi-smudge-proof-retractable-lip-liner",
      "keychain-lip-oil",
    ],
    pairing: ["Brown liner", "Glass gloss or lip oil"],
  },
  {
    description: "A confident red-centered finish with clean definition.",
    finishLabel: "Classic gloss",
    id: "red-statement",
    mediaNote: "Statement color concept with a glossy final touch.",
    routeSlug: "red-statement",
    swatchColor: "#B23B49",
    title: "Red Statement",
    productHandles: [
      "cream-semi-smudge-proof-retractable-lip-liner",
      "classic-lip-gloss",
    ],
    pairing: ["Red liner", "Classic gloss"],
  },
];
