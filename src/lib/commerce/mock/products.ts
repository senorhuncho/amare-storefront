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
      "A polished gloss placeholder meant to represent easy daily shine in the AMARÉ lineup.",
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
    finish: "set",
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
  {
    availability: "in-stock",
    badge: "Featured Gift",
    category: "Sets",
    currencyCode: "USD",
    finish: "set",
    handle: "amare-ultimate-lip-collection",
    id: "mock-product-amare-ultimate-lip-collection",
    imageDescriptor: {
      label: "AMARÉ Ultimate Lip Collection placeholder",
      note: "Large-format gifting concept with premium packaging cues.",
      tone: "champagne",
    },
    price: 48,
    shadeSummary: "Collection details pending verification",
    shortDescription:
      "A provisional premium set positioned as the most complete gifting moment in the mock catalog.",
    title: "AMARÉ Ultimate Lip Collection",
  },
  {
    availability: "in-stock",
    badge: "Routine Set",
    category: "Sets",
    currencyCode: "USD",
    finish: "set",
    handle: "lip-prep-and-polish-set",
    id: "mock-product-lip-prep-and-polish-set",
    imageDescriptor: {
      label: "Lip Prep and Polish Set placeholder",
      note: "Care-led set concept built around prep and pairing.",
      tone: "ivory",
    },
    price: 24,
    shadeSummary: "Set details pending verification",
    shortDescription:
      "A provisional care-focused set concept designed for prep-first gifting and routine building.",
    title: "Lip Prep & Polish Set",
  },
  {
    availability: "in-stock",
    badge: "Digital Gift",
    category: "Gift Card",
    currencyCode: "USD",
    finish: "gift-card",
    handle: "amare-cosmetics-gift-card",
    id: "mock-product-amare-cosmetics-gift-card",
    imageDescriptor: {
      label: "AMARÉ Cosmetics Gift Card placeholder",
      note: "Gift-card concept with a soft editorial finish.",
      tone: "blush",
    },
    price: 25,
    shadeSummary: "Value and issuance pending verification",
    shortDescription:
      "A provisional gift-card entry for easy gifting when the final connected store options are confirmed.",
    title: "AMARÉ Cosmetics Gift Card",
  },
];

export const mockCollections: Collection[] = [
  {
    description: "Placeholder best-seller collection for homepage previewing.",
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
      .filter((product) => !["Sets", "Gift Card"].includes(product.category))
      .map((product) => product.handle),
    title: "Lips",
  },
  {
    description: "Placeholder gifting collection for future merchandising work.",
    handle: "sets-gifts",
    id: "mock-collection-sets-gifts",
    productHandles: mockProducts
      .filter((product) => ["Sets", "Gift Card"].includes(product.category))
      .map((product) => product.handle),
    title: "Sets & Gifts",
  },
];
