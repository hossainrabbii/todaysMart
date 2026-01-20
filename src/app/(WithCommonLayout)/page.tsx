import Category from "@/components/modules/home/Category/Category";
import FeaturedProducts from "@/components/modules/home/FeaturedProducts/FeatureProducts";
import FlashSale from "@/components/modules/home/FlashSale/FlashSale";
import HomePageBanner from "@/components/modules/banner/HomePageBanner";
import { HeroBanner } from "@/components/modules/banner/HeroBanner";
import { Newsletter } from "@/components/shared/Newsletter";
import { TrustSection } from "@/components/shared/TrustSection";

const HomePage = () => {
  // const user = useUser();
  return (
    <div className="">
      {/* <HomePageBanner text="Up to" percentOff="80%" /> */}
      <HeroBanner />
      <FeaturedProducts />
      <Category />
      <FlashSale />
     
    </div>
  );
};

export default HomePage;
