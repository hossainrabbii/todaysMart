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
    specification,
  } = product?.data;

  // console.log(product?.data);
  return (
    <div className="my-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <ImageTabs images={imageUrls} />
        {/* <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {imageUrls?.slice(0, 3).map((img: string, index: number) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img src={img} alt="Product" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}

        <div className="">
          <h4 className="text-purple-800 font-semibold mb-2 text-2xl">{name}</h4>

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
            Price: {price}৳
          </h5>
          <h6 className="font-semibold mt-2">Key Features</h6>
          {keyFeatures.map((kf: string, i: number) => (
            <p key={i} className="text-sm">
              {kf}
            </p>
          ))}

          <p className="mt-4">Color: {selectedColor}</p>
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
          ))}
        </div>
      </div>
      <ProductTabs specification={specification} description={description} />
    </div>
  );
};
