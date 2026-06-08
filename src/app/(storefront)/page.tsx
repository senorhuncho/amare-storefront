import { BestSellersSection } from "@/features/home/best-sellers/BestSellersSection";
import { CategoryNavigationSection } from "@/features/home/category-navigation/CategoryNavigationSection";
import { HomeHero } from "@/features/home/hero/HomeHero";
import { KeychainCampaignSection } from "@/features/home/keychain-campaign/KeychainCampaignSection";
import { commerceRepository } from "@/lib/commerce";

export default async function HomePage() {
  const products = await commerceRepository.getProducts();
  const featuredProduct =
    products.find((product) => product.handle === "keychain-lip-oil") ?? products[0];

  return (
    <>
      <HomeHero featuredProduct={featuredProduct} />
      <CategoryNavigationSection />
      <BestSellersSection products={products.slice(0, 4)} />
      <KeychainCampaignSection product={featuredProduct} />
    </>
  );
}
