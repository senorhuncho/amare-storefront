import { BestSellersSection } from "@/features/home/best-sellers/BestSellersSection";
import { CategoryNavigationSection } from "@/features/home/category-navigation/CategoryNavigationSection";
import { HomeHero } from "@/features/home/hero/HomeHero";
import { KeychainCampaignSection } from "@/features/home/keychain-campaign/KeychainCampaignSection";
import { LipComboSection } from "@/features/home/lip-combo/LipComboSection";
import { LipRoutineSection } from "@/features/home/lip-routine/LipRoutineSection";
import { ShadeStorySection } from "@/features/home/shade-story/ShadeStorySection";
import { commerceRepository } from "@/lib/commerce";

export default async function HomePage() {
  const products = await commerceRepository.getProducts();
  const productMap = new Map(products.map((product) => [product.handle, product]));
  const getProduct = (handle: string) => {
    const product = productMap.get(handle);

    if (!product) {
      throw new Error(`Expected mock product for handle: ${handle}`);
    }

    return product;
  };

  const featuredProduct = getProduct("keychain-lip-oil");
  const prepProducts = [
    getProduct("lip-scrub-and-mask-combo"),
    getProduct("lip-balm"),
  ];
  const defineProduct = getProduct("cream-semi-smudge-proof-retractable-lip-liner");
  const glossProducts = [
    getProduct("classic-lip-gloss"),
    getProduct("glass-lip-gloss"),
    featuredProduct,
  ];
  const bestSellerProducts = [
    featuredProduct,
    getProduct("classic-lip-gloss"),
    getProduct("glass-lip-gloss"),
    getProduct("soft-glam-lip-set"),
  ];
  const lipComboProducts = [defineProduct, ...glossProducts];
  const shadeStoryProducts = [defineProduct, ...glossProducts];

  return (
    <>
      <HomeHero featuredProduct={featuredProduct} />
      <CategoryNavigationSection />
      <BestSellersSection products={bestSellerProducts} />
      <KeychainCampaignSection product={featuredProduct} />
      <LipRoutineSection
        defineProduct={defineProduct}
        glossProducts={glossProducts}
        prepProducts={prepProducts}
      />
      <LipComboSection products={lipComboProducts} />
      <ShadeStorySection products={shadeStoryProducts} />
    </>
  );
}
