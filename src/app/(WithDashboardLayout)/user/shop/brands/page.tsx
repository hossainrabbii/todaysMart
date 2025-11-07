import ManageBrand from "@/components/modules/shop/brand/ManageBrand";
import { getAllBrands } from "@/services/Brand";

const ProductsBrandPage = async () => {
  const { data, meta } = await getAllBrands();

  return (
    <div>
      <ManageBrand brands={data} />
    </div>
  );
};

export default ProductsBrandPage;
