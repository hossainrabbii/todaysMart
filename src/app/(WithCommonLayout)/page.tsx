import Category from "@/components/modules/home/Category/Category";
import FeaturedProducts from "@/components/modules/home/FeaturedProducts/FeatureProducts";
import FlashSale from "@/components/modules/home/FlashSale/FlashSale";
import HomePageBanner from "@/components/modules/banner/HomePageBanner";
import { useUser } from "@/context/UserContext";

const HomePage = () => {
  // const user = useUser();
  return (
    <div className="container mx-auto">
      <HomePageBanner text="Up to" percentOff="80%" />
      <FeaturedProducts />
      <Category />
      <FlashSale />
    </div>
  );
};

export default HomePage;
