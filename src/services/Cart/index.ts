"use server";

import { IOrder } from "@/types/cart";
import { cookies } from "next/headers";
export const createOrder = async (order: IOrder) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: JSON.stringify(order),
    });

    return await response.json();
  } catch (error: any) {
    return new Error(error);
  }
};
