"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SpecificationTable } from "@/components/ui/core/Table/SpecificationTable ";
import { IProductType } from "@/types";
import { useState } from "react";
import { ProductTabs } from "./tab/ProductTabs";
import { ImageTabs } from "./tab/ImageTabs";
import { addProduct } from "@/redux/features/cart/cartSlice";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
// import Autoplay from "embla-carousel-autoplay";

export const SingleProductCard = ({ product }: { product: any }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const {
    name,
    price,
    imageUrls,
    keyFeatures,
    brand,
    catagory,
    availableColors,
    description,
    shop,
    slug,
    stock,
    weight,
    offerPrice,
    specification,
  } = product?.data;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleAddProductToCart = (product: any) => {
    console.log(product);
    dispatch(addProduct(product));
    toast.success("The product is added to cart.");
  };
  const handleAddProductToCartBuyNow = (product: any) => {
    console.log(product);
    dispatch(addProduct(product));
    toast.success("The product is added to cart.");
    router.push("/cart");
  };

  return (
    <div className="my-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 bg-white rounded-lg p-4 md:p-8 mb-12">
        <ImageTabs images={imageUrls} />

        <div className="mt-6">
          <h4 className="text-purple-800 font-semibold mb-2 text-lg md:text-2xl">
            {name}
          </h4>

          {stock > 0 ? (
            <div className="flex items-center gap-1 text-sm mb-2">
              <div className="bg-green-500 w-[8px] h-[8px] rounded-full"></div>
              In Stock
            </div>
          ) : (
            <div className="flex items-center gap-2 text-sm mb-2">
              <div className="bg-red-500 w-[8px] h-[8px] rounded-full"></div>
              Out of Stock
            </div>
          )}

          <h5 className="bg-gray-100 p-1 rounded-lg my-2 inline">
            {offerPrice == null ? (
              <>Price: ৳{price}</>
            ) : (
              <>Price: ৳{offerPrice}</>
            )}
          </h5>
          <h6 className="font-semibold mt-2">Key Features</h6>
          {keyFeatures.map((kf: string, i: number) => (
            <p key={i} className="text-sm">
              {kf}
            </p>
          ))}

          {/* <p className="mt-4">Color: {selectedColor}</p>
          {availableColors.map((c: string, key: number) => (
            <Button
              key={key}
              className={`mr-2 ${
                selectedColor === c ? "bg-purple-700 text-white" : "bg-gray-200"
              }`}
              variant="outline"
              onClick={() => setSelectedColor(c)}
            >
              {c}
            </Button>
          ))} */}

          <hr className="my-3" />

          <div className="flex gap-2">
            <Button
              variant="outline"
              className="rounded-md bg-orange-500 text-white hover:bg-orange-600 hover:text-white mt-2"
              onClick={() => {
                handleAddProductToCartBuyNow(product?.data);
              }}
            >
              Buy Now
            </Button>
            <Button
              variant="outline"
              className="rounded-md bg-orange-500 text-white hover:bg-orange-600 hover:text-white mt-2"
              onClick={() => {
                handleAddProductToCart(product?.data);
              }}
            >
              <ShoppingCart />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <ProductTabs specification={specification} description={description} />
    </div>
  );
};
