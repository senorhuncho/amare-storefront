export type CurrencyCode = "USD";

export type ProductAvailability = "in-stock" | "sold-out";

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
  handle: string;
  id: string;
  imageDescriptor: ProductImageDescriptor;
  price: number;
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
