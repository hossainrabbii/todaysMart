import { AllProducts } from "@/components/modules/products/AllProducts";
import ProductBanner from "@/components/modules/banner/ProductBanner";
import { getAllProducts } from "@/services/Product";
import { getAllCategories } from "@/services/Category";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Todays Mart - All products",
};
// const { data: products, meta } = await getAllProducts();
const AllProductsPage = async () => {
  const { data: products, meta } = await getAllProducts();
  const { data: categories } = await getAllCategories();
  return (
    <div className="container mx-auto">
      <ProductBanner title="All Products" path="Home - Products" />
      <AllProducts products={products} categor={categories} />
    </div>
  );
};

export default AllProductsPage;
