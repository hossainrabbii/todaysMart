"use client";
import Image from "next/image";
import emptyCart from "@/assets/empty-cart.png";
import { getAllProducts } from "@/services/Product";
import CartProductCard from "./CartProductCard";
import { IProductType } from "@/types";
import { useAppSelector } from "@/redux/hooks";
import { cartedProduct, ICartProduct } from "@/redux/features/cart/cartSlice";
export default function CartProducts() {
  const products = useAppSelector(cartedProduct);
  return (
    <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4 h-full row-span-1 p-2 lg:p-5 space-y-2 w-full">
      {products.length === 0 && (
        <div className="text-center text-gray-500">
          <p className="text-lg font-semibold">Your cart is empty</p>
          <p className="mt-2">
            Looks like your cart is on vacation—bring it back to work by adding
            some items!
          </p>
          <div className="flex justify-center items-center ">
            <Image src={emptyCart} alt="empty cart" />
          </div>
        </div>
      )}
      {products.map((product: ICartProduct) => (
        <CartProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
