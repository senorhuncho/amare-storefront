import type { Collection, Product } from "@/lib/commerce/types";

// Placeholder mock catalog for Milestone 1 only.
// Replace titles, descriptions, pricing, shades, media, and availability with verified Shopify data before production.
export const mockProducts: Product[] = [
  {
    availability: "in-stock",
    badge: "Hero Pick",
    category: "Lip Oil",
    currencyCode: "USD",
    handle: "keychain-lip-oil",
    id: "mock-product-keychain-lip-oil",
    imageDescriptor: {
      label: "Keychain Lip Oil placeholder",
      note: "Portable gloss accessory concept.",
      tone: "champagne",
    },
    price: 16,
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
    handle: "classic-lip-gloss",
    id: "mock-product-classic-lip-gloss",
    imageDescriptor: {
      label: "Classic Lip Gloss placeholder",
      note: "Clean shine with an everyday profile.",
      tone: "ivory",
    },
    price: 14,
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
    handle: "glass-lip-gloss",
    id: "mock-product-glass-lip-gloss",
    imageDescriptor: {
      label: "Glass Lip Gloss placeholder",
      note: "High-shine finish and reflective mood.",
      tone: "blush",
    },
    price: 15,
    shadeSummary: "Shade summary pending verification",
    shortDescription:
      "A high-shine gloss placeholder created to anchor the glass-finish discovery story.",
    title: "Glass Lip Gloss",
  },
  {
    availability: "in-stock",
    badge: "Giftable Set",
    category: "Sets",
    currencyCode: "USD",
    handle: "soft-glam-lip-set",
    id: "mock-product-soft-glam-lip-set",
    imageDescriptor: {
      label: "Soft Glam Lip Set placeholder",
      note: "Curated set styling for gifting and combos.",
      tone: "rose",
    },
    price: 28,
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
