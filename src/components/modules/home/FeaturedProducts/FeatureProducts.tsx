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
        <div className=" font-semibold">
          <h3 className="text-3xl">Featured Products</h3>

          <p> Handpicked deals just for you</p>
        </div>
        {/* <p>Handpicked deals just for you</p> */}
        <Link href="/products">
          <Button variant="outline" className="rounded-full">
            All Collection
          </Button>
        </Link>
      </div>
      <SingleProductCardItem
        products={products}
        itemCount={0}
        classCSS="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl-grid-cols-5 gap-4"
      />
    </div>
  );
};
export default FeaturedProducts;
