import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAllProducts } from "@/services/Product";
import SingleProductCardItem from "../../card/ProductCard";

const FeaturedProducts = async () => {
  const { data: products, meta } = await getAllProducts();

  const items = 8;
  return (
    <div className="container mx-auto py-5">
      <div className="flex justify-between mb-6">
        <div className="text-3xl font-semibold">Featured Products</div>
        <Link href="/products">
          <Button variant="outline" className="rounded-full">
            All Collection
          </Button>
        </Link>
      </div>
      <SingleProductCardItem products={products} itemCount={0} />
    </div>
  );
};
export default FeaturedProducts;
