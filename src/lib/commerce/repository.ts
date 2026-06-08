import type { Cart, CartLineInput, Collection, Product } from "@/lib/commerce/types";

export interface CommerceRepository {
  addCartLines(cartId: string, lines: CartLineInput[]): Promise<Cart>;
  createCart(): Promise<Cart>;
  getCart(cartId: string): Promise<Cart | null>;
  getCollectionByHandle(handle: string): Promise<Collection | null>;
  getCollections(): Promise<Collection[]>;
  getProductByHandle(handle: string): Promise<Product | null>;
  getProducts(): Promise<Product[]>;
  removeCartLines(cartId: string, lineIds: string[]): Promise<Cart>;
  searchProducts(query: string): Promise<Product[]>;
  updateCartLines(cartId: string, lines: CartLineInput[]): Promise<Cart>;
}
