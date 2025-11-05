import ManageCategory from "@/components/modules/shop/category";
import { getAllCategories } from "@/services/Category";

const ProductsCategoryPage = async () => {
  const { data, meta } = await getAllCategories();

  return <ManageCategory categories={data} />;
};

export default ProductsCategoryPage;
