import type { Product } from "@/lib/commerce";

export type ShadeStory = {
  family: string;
  finishLabel: string;
  id:
    | "velvet-cocoa"
    | "mocha-kiss"
    | "mulberry-muse"
    | "ruby-heat"
    | "midnight-truffle";
  mood: string;
  recommendedHandle: Product["handle"];
  selectorLabel: string;
  story: string;
  surfaceColor: string;
  swatchColor: string;
  title: string;
};

// Provisional shade stories for concepting only.
// Observed shade naming and pairings still require client and Shopify verification before production use.
export const shadeStoryData: ShadeStory[] = [
  {
    family: "Deep brown",
    finishLabel: "Soft gloss",
    id: "velvet-cocoa",
    mood: "Defined and sophisticated",
    recommendedHandle: "classic-lip-gloss",
    selectorLabel: "Velvet Cocoa",
    story: "A deeper brown family for sculpted edges and polished definition.",
    surfaceColor: "#F1DFD5",
    swatchColor: "#5A3328",
    title: "Velvet Cocoa",
  },
  {
    family: "Warm brown",
    finishLabel: "Glass shine",
    id: "mocha-kiss",
    mood: "Everyday neutral",
    recommendedHandle: "glass-lip-gloss",
    selectorLabel: "Mocha Kiss",
    story: "A soft neutral direction suited to daily pairings and easy layering.",
    surfaceColor: "#EED3C4",
    swatchColor: "#8C5B47",
    title: "Mocha Kiss",
  },
  {
    family: "Berry",
    finishLabel: "High shine",
    id: "mulberry-muse",
    mood: "Rich and expressive",
    recommendedHandle: "glass-lip-gloss",
    selectorLabel: "Mulberry Muse",
    story: "A richer berry-led mood that leans polished, expressive, and evening ready.",
    surfaceColor: "#E9C1C7",
    swatchColor: "#7C314D",
    title: "Mulberry Muse",
  },
  {
    family: "Red",
    finishLabel: "Classic gloss",
    id: "ruby-heat",
    mood: "Bold and polished",
    recommendedHandle: "classic-lip-gloss",
    selectorLabel: "Ruby Heat",
    story: "A bright red story for statement color with a clean glossy finish.",
    surfaceColor: "#F0CFD0",
    swatchColor: "#B23B49",
    title: "Ruby Heat",
  },
  {
    family: "Deep neutral",
    finishLabel: "Gloss or oil",
    id: "midnight-truffle",
    mood: "Evening statement",
    recommendedHandle: "keychain-lip-oil",
    selectorLabel: "Midnight Truffle",
    story: "A deeper neutral concept that pairs strong definition with a more luminous finish.",
    surfaceColor: "#E4D5D4",
    swatchColor: "#4A3036",
    title: "Midnight Truffle",
  },
];
