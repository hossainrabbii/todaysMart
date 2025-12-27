import ProductBanner from "@/components/modules/banner/ProductBanner";
import CreateShopForm from "@/components/modules/shop/create-shop/CreateShopForm";

const createShopPage = () => {
  return (
    <div className="container mx-auto px-4 my-8">
      <ProductBanner title="Create Shop" path="Your product is your pride." />
      <CreateShopForm />
    </div>
  );
};

export default createShopPage;