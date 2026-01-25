"use client";
import { Button } from "@/components/ui/button";
import { addProduct } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { IProductType } from "@/types";
import { ChevronRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
type SingleProductCardItemProps = {
  products: IProductType[]; // adjust type
  itemCount: any;
  classCSS: string;
};

const ProductCard = ({
  products,
  itemCount,
  classCSS,
}: SingleProductCardItemProps) => {
  const dispatch = useAppDispatch();
  const handleAddProductToCart = (product: any) => {
    console.log(product);
    dispatch(addProduct(product));
    toast.success("The product is added to cart.");
  };

  return (
    <>
      {/*  */}
      <div className={`${classCSS}`}>
        {products.slice(0, itemCount).map((prod: IProductType) => (
          <div
            className="border shadow-md p-4 rounded-md my-2 bg-white flex flex-col justify-between"
            key={prod?.slug}
          >
            <div className="py-8">
              <Link href={`/products/${prod?.slug}`}>
                <Image
                  src={prod?.imageUrls[0]}
                  alt={prod?.name}
                  width={220}
                  height={300}
                  className="mx-auto border-b"
                />
              </Link>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-orange-500 font-medium">
                {prod?.brand?.name}
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">
                {prod?.category?.name}
                {/* <Link href={`/products/${prod?.slug}`}>Slug</Link> */}
              </span>
            </div>

            <strong className="my-2 block hover:text-orange-600">
              <Link href={`/products/${prod?.slug}`}>
                <p className="text-[12px] md:text-[14px]">{prod?.name}</p>
              
              </Link>
            </strong>
            <p>
              <small>
                {prod?.offerPrice == null ? (
                  <small className="text-lg mr-2 font-semibold">
                    ৳{prod?.price}
                  </small>
                ) : (
                  <>
                    <small className="text-lg mr-2 font-semibold">
                      ৳{prod?.offerPrice}
                    </small>

                    <small className="text-gray-400 line-through text-md">
                      ৳ {prod?.price}
                    </small>
                  </>
                )}
              </small>
            </p>

            <Button
              variant="outline"
              className="rounded-md bg-orange-500 text-white hover:bg-orange-600 hover:text-white mt-2"
              onClick={() => {
                handleAddProductToCart(prod);
              }}
            >
              <ShoppingCart />
              Add to Cart
            </Button>
            {/* 
              <Button className="cursor-pointer bg-blue-400 hover:bg-blue-500">
                <Link href={`/products/${prod?._id}`}>Buy Now</Link>
              </Button> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
