"use client";
import { Button } from "@/components/ui/button";
import { addProduct } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { IProductType } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
type SingleProductCardItemProps = {
  products: IProductType[]; // adjust type
  itemCount: any;
};

const ProductCard = ({ products, itemCount }: SingleProductCardItemProps) =>
  // { products }: { products: any },
  // { itemCount }: { itemCount: any }
  // console.log(products);
  {
    // console.log(products, itemCount);

    const dispatch = useAppDispatch();
    const handleAddProductToCart = (product: any) => {
      dispatch(addProduct(product));
      toast.success("The product is added to cart.");
    };
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.slice(0, itemCount.itemCount).map((prod: IProductType) => (
          <div
            className="border shadow-md p-4 rounded-md my-2 bg-white flex flex-col justify-between"
            key={prod?._id}
          >
            <Link href={`/products/${prod?._id}`}>
              <Image
                src={prod?.imageUrls[0]}
                alt={prod?.name}
                width={220}
                height={300}
                className="mx-auto border-b"
              />
            </Link>
            <strong className="my-2 block hover:text-orange-600">
              <Link href={`/products/${prod?._id}`}>
                <p className="text-[12px] md:text-[14px]">{prod?.name}</p>
                {/* <p>{prod?.category?.name}</p> */}
              </Link>
            </strong>
            <p>
              <small>
                {prod?.offerPrice == null ? (
                  <small className=" text-sm">{prod?.price}</small>
                ) : (
                  <>
                    <small className="text-sm mr-2">{prod?.offerPrice}</small>

                    <small className="line-through text-sm">
                      {prod?.price}
                    </small>
                  </>
                )}
              </small>
            </p>

            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => {
                console.log(prod);
                handleAddProductToCart(prod);
              }}
            >
              <ShoppingCart />
            </Button>
            {/* 
              <Button className="cursor-pointer bg-blue-400 hover:bg-blue-500">
                <Link href={`/products/${prod?._id}`}>Buy Now</Link>
              </Button> */}
          </div>
        ))}
      </div>
    );
  };

export default ProductCard;
