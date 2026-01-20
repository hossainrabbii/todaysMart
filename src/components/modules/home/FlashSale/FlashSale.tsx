import { Button } from "@/components/ui/button";
import { getAllFlashSale } from "@/services/FlashSale";
import Link from "next/link";
import ProductCard from "../../card/ProductCard";
import { FlashSaleCountdown } from "@/components/FlashSaleCountdown";

const FlashSale = async () => {
  const { data: products } = await getAllFlashSale();

  return (
    <div className="my-12 rounded-2xl">
      {/* <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold">Flash Sale</h2>
        <Link href="./products">
          <Button variant="outline" className="rounded-full">
            All Collection
          </Button>
        </Link>
      </div> */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="w-[320px]">
          <FlashSaleCountdown />
        </div>

        <div>
          <ProductCard
            products={products}
            itemCount={0}
            classCSS="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl-grid-cols-3 gap-4"
          />
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
