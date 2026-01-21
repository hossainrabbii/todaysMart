import ManageCategory from "@/components/modules/shop/category";
import { getAllCategories } from "@/services/Category";
const ProductsCategoryPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;
  const { data, meta } = await getAllCategories(page, "10");

  return <ManageCategory categories={data} meta={meta} />;
};

export default ProductsCategoryPage;
