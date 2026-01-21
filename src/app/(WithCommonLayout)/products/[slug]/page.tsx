import ProductBanner from "@/components/modules/banner/ProductBanner";
import { SingleProductCard } from "@/components/modules/products/SingleProductCard";
import { getSingleProductSlug } from "@/services/Product";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = await params;
  console.log(slug.slug);
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
