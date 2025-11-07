"use server";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// create brand
export const createBrand = async (data: FormData) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/brand`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });

    revalidateTag("brand", "");
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

// get brands
export const getAllBrands = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/brand`, {
      next: {
        tags: ["brand"],
      },
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

// delete brand

export const deleteBrand = async (brandId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/brand/${brandId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("brand", "");

    return response.json();
  } catch (error) {
    console.error(error);
  }
};
