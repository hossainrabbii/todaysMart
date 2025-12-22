"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

type TFlashSale = {
  products: string[];
  discountPercentage: number;
};
export const createFlashSale = async (data: TFlashSale) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/flash-sale`,
      {
        method: "POST",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    revalidateTag("product", "");
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

// get flash sale

export const getAllFlashSale = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/flash-sale`,
      {
        next: {
          tags: ["product"],
        },
      }
    );
    return response.json();
  } catch (error: any) {
    return Error(error.message);
  }
};
