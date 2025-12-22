import { Button } from "@/components/ui/button";
import {
  addProduct,
  decrementProduct,
  ICartProduct,
  incrementProduct,
  removeProductFromCart,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { IProductType } from "@/types";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

export default function CartProductCard({
  product,
}: {
  product: ICartProduct;
}) {
  const dispatch = useAppDispatch();

  const handleIncrementQuantity = (id: string) => {
    dispatch(incrementProduct(id));
  };

  const handleDecrementQuantity = (id: string) => {
    dispatch(decrementProduct(id));
  };

  const handleRemoveProduct = (id: string) => {
    dispatch(removeProductFromCart(id));
    toast.warning("The product is removed from cart.");
  };

  return (
    <div className="bg-white rounded-lg flex p-2 lg:p-5 gap-2 lg:gap-5 shadow-md shadow-b">
      <div className="h-full rounded-md overflow-hidden">
        <Link href={`/products/${product?._id}`}>
          <Image
            src={product?.imageUrls?.[0]}
            height={140}
            width={100}
            alt="product"
            className="aspect-square object-cover"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <Link href={`/products/${product?._id}`}>
          <h1 className="text-xs md:text-sm lg:text-lg font-semibold hover:text-purple-500">
            {product?.name}
          </h1>
        </Link>
        <div className="flex gap-2 md:gap-5 my-2 text-xs md:text-sm">
          <p>
            <span className="text-gray-500">Color:</span>{" "}
            <span className="font-semibold">Black</span>
          </p>
          <p className="text-xs md:text-sm">
            <span className="text-gray-500">Stock Availability:</span>{" "}
            <span className="font-semibold">{product?.stock}</span>
          </p>
        </div>
        <hr className="my-1" />
        <div className="flex items-center justify-between">
          <h2 className="text-xs md:text-sm">
            Price:
            {product.offerPrice ? product.offerPrice : product.price}
          </h2>
          <div className="flex items-center gap-2 ">
            <p className="text-gray-500 font-semibold text-xs md:text-sm ml-2">
              Quantity
            </p>
            <Button
              variant="outline"
              className="size-5 md:size-8 rounded-sm hover:bg-gray-300"
              onClick={() => handleDecrementQuantity(product?._id)}
            >
              <Minus />
            </Button>
            <p className="font-semibold text-xl p-2">
              {product?.orderedQuantity}
            </p>
            <Button
              variant="outline"
              className="size-5 md:size-8 rounded-sm hover:bg-gray-300"
              onClick={() => handleIncrementQuantity(product?._id)}
            >
              <Plus />
            </Button>
            <Button
              variant="outline"
              className="size-5 md:size-8 rounded-sm "
              onClick={() => handleRemoveProduct(product?._id)}
            >
              <Trash className="text-red-500/50" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
