import type { Cart, CartLineInput } from "@/lib/commerce/types";
import type { CommerceRepository } from "@/lib/commerce/repository";
import { mockCollections, mockProducts } from "@/lib/commerce/mock/products";

const unsupportedCartMessage =
  "Cart operations are intentionally unavailable in Milestone 1 until Shopify is connected.";

function createUnsupportedCartResponse(): never {
  throw new Error(unsupportedCartMessage);
}

function createMockCart(cartId: string, lines: CartLineInput[]): Promise<Cart> {
  void cartId;
  void lines;
  createUnsupportedCartResponse();
}

export const mockCommerceRepository: CommerceRepository = {
  async addCartLines(cartId, lines) {
    return createMockCart(cartId, lines);
  },
  async createCart() {
    return createUnsupportedCartResponse();
  },
  async getCart() {
    return null;
  },
  async getCollectionByHandle(handle) {
    return mockCollections.find((collection) => collection.handle === handle) ?? null;
  },
  async getCollections() {
    return mockCollections;
  },
  async getProductByHandle(handle) {
    return mockProducts.find((product) => product.handle === handle) ?? null;
  },
  async getProducts() {
    return mockProducts;
  },
  async removeCartLines(cartId, lineIds) {
    return createMockCart(
      cartId,
      lineIds.map((lineId) => ({ merchandiseId: lineId, quantity: 0 })),
    );
  },
  async searchProducts(query) {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return mockProducts;
    }

    return mockProducts.filter((product) =>
      [product.title, product.category, product.shortDescription]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  },
  async updateCartLines(cartId, lines) {
    return createMockCart(cartId, lines);
  },
};
