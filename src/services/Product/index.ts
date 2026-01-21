"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createProduct = async (data: FormData) => {
  // console.log("from shop index: ", data);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product`,
      {
        method: "POST",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        body: data,
      }
    );

    return response.json();
  } catch (error: any) {
    return new Error(error);
  }
};

// get products
export const getAllProducts = async (page?: string, limit?: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product?limit=${limit}&page=${page}`,
      {
        next: {
          tags: ["product"],
        },
      }
    );

    return response.json();
  } catch (error) {
    console.error(error);
  }
};

// get single product
export const getSingleProduct = async (productId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product/${productId}`
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

// get single product
export const getSingleProductSlug = async (slug: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product/${slug}`
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

// delete single product
export const deleteSingleProduct = async (productId: string) => {
  // console.log(productId);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product/${productId}`,
      {
        method: "DELETE",
        headers: { Authorization: (await cookies()).get("accessToken")!.value },
      }
    );
    revalidateTag("product", "");
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
