import { SingleProductCard } from "@/components/modules/products/SingleProductCard";
import { getSingleProduct } from "@/services/Product";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  // console.log(props);
  const { productId } = await params;
  const product = await getSingleProduct(productId);
  // console.log(product);
  return (
    <div className="container mx-auto">
      <SingleProductCard product={product} />
    </div>
  );
};

export default SingleProductPage;
