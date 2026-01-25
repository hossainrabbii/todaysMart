import { Button } from "@/components/ui/button";
import { getAllFlashSale } from "@/services/FlashSale";
import Link from "next/link";
import ProductCard from "../../card/ProductCard";
import { FlashSaleCountdown } from "@/components/FlashSaleCountdown";

const FlashSale = async () => {
  const { data: products } = await getAllFlashSale();

  return (
    <div className="my-12 rounded-2xl">
      <div className=" md:flex-col gap-4 items-center">
        <div className="w-full"></div>
        <div className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-2 md:p-6 rounded-2xl shadow-lg items-center justify-center mx-auto w-full">
          <FlashSaleCountdown />

          <ProductCard
            products={products}
            itemCount={4}
            classCSS="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl-grid-cols-4 gap-4"
          />
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
