import ManageProducts from "@/components/modules/shop/product/ManageProducts";
import { getAllProducts } from "@/services/Product";

const AllProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;
  const { data: products, meta } = await getAllProducts(page, '10');

  return (
    <div>
      <ManageProducts products={products} meta={meta} />
    </div>
  );
};

export default AllProductsPage;
