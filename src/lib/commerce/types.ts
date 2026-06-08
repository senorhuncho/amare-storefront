export type CurrencyCode = "USD";

export type ProductAvailability = "in-stock" | "sold-out";

export type ProductFinish =
  | "glass-shine"
  | "soft-gloss"
  | "cream"
  | "balm"
  | "care"
  | "liner"
  | "set"
  | "gift-card";

export type RoutineStep = "prep" | "define" | "gloss";

export type ProductImageDescriptor = {
  label: string;
  note: string;
  tone: "ivory" | "blush" | "rose" | "wine" | "champagne";
};

export type Product = {
  availability: ProductAvailability;
  badge?: string;
  category: string;
  currencyCode: CurrencyCode;
  finish: ProductFinish;
  handle: string;
  id: string;
  imageDescriptor: ProductImageDescriptor;
  price: number;
  routineStep?: RoutineStep;
  shadeSummary?: string;
  shortDescription: string;
  title: string;
};

export type Collection = {
  description: string;
  handle: string;
  id: string;
  productHandles: string[];
  title: string;
};

export type CartLineInput = {
  merchandiseId: string;
  quantity: number;
};

export type CartLine = CartLineInput & {
  id: string;
};

export type Cart = {
  checkoutUrl: string | null;
  id: string;
  lines: CartLine[];
};
