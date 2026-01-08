import ProductBanner from "@/components/modules/banner/ProductBanner";
import { SingleProductCard } from "@/components/modules/products/SingleProductCard";
import { getSingleProduct } from "@/services/Product";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { productId } = await params;
  const product = await getSingleProduct(productId);

  return {
    title: product.data.name,
    // description: product.description,
  };
}

const SingleProductPage = async ({ params }: Props) => {
  const { productId } = await params;
  const product = await getSingleProduct(productId);
  console.log(product);
  return (
    <div className="container mx-auto">
      <ProductBanner title="Single Product" path="Home - Products" />
      <SingleProductCard product={product} />
    </div>
  );
};

export default SingleProductPage;
