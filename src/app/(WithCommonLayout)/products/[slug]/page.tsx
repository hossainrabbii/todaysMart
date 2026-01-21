import ProductBanner from "@/components/modules/banner/ProductBanner";
import { SingleProductCard } from "@/components/modules/products/SingleProductCard";
import { getSingleProductSlug } from "@/services/Product";
import { Metadata, ResolvingMetadata } from "next";
type Props = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const product = await getSingleProductSlug(slug);
  console.log(product);
  return {
    title: product.data.name,
  };
}

const page = async ({ params }: Props) => {
  const slug = await params;

  const product = await getSingleProductSlug(slug?.slug);
  console.log(product);

  return (
    <div className="container mx-auto">
      <ProductBanner title="Single Product" path="Home - Products" />
      <SingleProductCard product={product} />
    </div>
  );
};

export default page;
