import type { Collection, Product } from "@/lib/commerce/types";

// Provisional mock catalog for homepage concepting only.
// Replace titles, descriptions, pricing, finishes, shade notes, media, and availability with verified Shopify data before production.
export const mockProducts: Product[] = [
  {
    availability: "in-stock",
    badge: "Hero Pick",
    category: "Lip Oil",
    currencyCode: "USD",
    finish: "glass-shine",
    handle: "keychain-lip-oil",
    id: "mock-product-keychain-lip-oil",
    imageDescriptor: {
      label: "Keychain Lip Oil placeholder",
      note: "Portable gloss accessory concept.",
      tone: "champagne",
    },
    price: 16,
    routineStep: "gloss",
    shadeSummary: "Shade summary pending verification",
    shortDescription:
      "A glossy lip oil concept designed around shine, portability, and gifting appeal.",
    title: "Keychain Lip Oil",
  },
  {
    availability: "in-stock",
    badge: "Everyday Edit",
    category: "Lip Gloss",
    currencyCode: "USD",
    finish: "soft-gloss",
    handle: "classic-lip-gloss",
    id: "mock-product-classic-lip-gloss",
    imageDescriptor: {
      label: "Classic Lip Gloss placeholder",
      note: "Clean shine with an everyday profile.",
      tone: "ivory",
    },
    price: 14,
    routineStep: "gloss",
    shadeSummary: "Shade summary pending verification",
    shortDescription:
      "A polished gloss placeholder meant to represent easy daily shine in the AMARE lineup.",
    title: "Classic Lip Gloss",
  },
  {
    availability: "in-stock",
    badge: "Best Seller",
    category: "Lip Gloss",
    currencyCode: "USD",
    finish: "glass-shine",
    handle: "glass-lip-gloss",
    id: "mock-product-glass-lip-gloss",
    imageDescriptor: {
      label: "Glass Lip Gloss placeholder",
      note: "High-shine finish and reflective mood.",
      tone: "blush",
    },
    price: 15,
    routineStep: "gloss",
    shadeSummary: "Shade summary pending verification",
    shortDescription:
      "A high-shine gloss placeholder created to anchor the glass-finish discovery story.",
    title: "Glass Lip Gloss",
  },
  {
    availability: "in-stock",
    badge: "Prep Step",
    category: "Lip Care",
    currencyCode: "USD",
    finish: "care",
    handle: "lip-scrub-and-mask-combo",
    id: "mock-product-lip-scrub-and-mask-combo",
    imageDescriptor: {
      label: "Lip Scrub and Mask Combo placeholder",
      note: "Prep-focused care pairing concept.",
      tone: "rose",
    },
    price: 18,
    routineStep: "prep",
    shadeSummary: "Care pairing pending verification",
    shortDescription:
      "A mock prep duo concept for softer-feeling lips before liner or gloss.",
    title: "Lip Scrub and Mask Combo",
  },
  {
    availability: "in-stock",
    badge: "Daily Prep",
    category: "Lip Care",
    currencyCode: "USD",
    finish: "balm",
    handle: "lip-balm",
    id: "mock-product-lip-balm",
    imageDescriptor: {
      label: "Lip Balm placeholder",
      note: "Simple prep companion for everyday wear.",
      tone: "ivory",
    },
    price: 10,
    routineStep: "prep",
    shadeSummary: "Finish note pending verification",
    shortDescription:
      "A mock balm entry for conditioning prep and easy on-the-go layering.",
    title: "Lip Balm",
  },
  {
    availability: "in-stock",
    badge: "Define",
    category: "Lip Liner",
    currencyCode: "USD",
    finish: "liner",
    handle: "cream-semi-smudge-proof-retractable-lip-liner",
    id: "mock-product-cream-semi-smudge-proof-retractable-lip-liner",
    imageDescriptor: {
      label: "Retractable Lip Liner placeholder",
      note: "Outline-first concept for pairing and definition.",
      tone: "wine",
    },
    price: 12,
    routineStep: "define",
    shadeSummary: "Liner family pending verification",
    shortDescription:
      "A retractable liner placeholder used to shape lip combos and support finish selection.",
    title: "Cream Semi-Smudge-Proof Retractable Lip Liner",
  },
  {
    availability: "in-stock",
    badge: "Giftable Set",
    category: "Sets",
    currencyCode: "USD",
    finish: "soft-gloss",
    handle: "soft-glam-lip-set",
    id: "mock-product-soft-glam-lip-set",
    imageDescriptor: {
      label: "Soft Glam Lip Set placeholder",
      note: "Curated set styling for gifting and combos.",
      tone: "rose",
    },
    price: 28,
    shadeSummary: "Set pairing pending verification",
    shortDescription:
      "A mock bundle entry representing soft-glam lip pairings and easy giftable merchandising.",
    title: "Soft Glam Lip Set",
  },
];

export const mockCollections: Collection[] = [
  {
    description: "Placeholder best-seller collection for Milestone 1 previewing.",
    handle: "best-sellers",
    id: "mock-collection-best-sellers",
    productHandles: mockProducts.map((product) => product.handle),
    title: "Best Sellers",
  },
  {
    description: "Placeholder lip collection for future browse and filter work.",
    handle: "lips",
    id: "mock-collection-lips",
    productHandles: mockProducts
      .filter((product) => product.category !== "Sets")
      .map((product) => product.handle),
    title: "Lips",
  },
  {
    description: "Placeholder gifting collection for future merchandising work.",
    handle: "sets-gifts",
    id: "mock-collection-sets-gifts",
    productHandles: mockProducts
      .filter((product) => product.category === "Sets")
      .map((product) => product.handle),
    title: "Sets & Gifts",
  },
];
