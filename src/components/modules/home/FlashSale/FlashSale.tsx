import { Button } from "@/components/ui/button";
import { getAllFlashSale } from "@/services/FlashSale";
import Link from "next/link";
import ProductCard from "../../card/ProductCard";

const FlashSale = async () => {
  const { data: products } = await getAllFlashSale();

  return (
    <div className="my-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold">Flash Sale</h2>

        <Link href="./products">
          <Button variant="outline" className="rounded-full">
            All Collection
          </Button>
        </Link>
      </div>
      <ProductCard products={products} itemCount={0} />
    </div>
  );
};

export default FlashSale;
