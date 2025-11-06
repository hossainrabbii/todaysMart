"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
export const createCategory = async (data: FormData) => {
  //   console.log("from category index: ", data);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/category`,
      {
        method: "POST",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        body: data,
      }
    );

    revalidateTag("category");
    return response.json();
  } catch (error: any) {
    return new Error(error);
  }
};

// get all categories
export const getAllCategories = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/category`,
      {
        next: {
          tags: ["category"],
        },
      }
    );

    return response.json();
  } catch (error: any) {
    return new Error(error);
  }
};

// delete category

export const deleteCategory = async (categoryId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/category/${categoryId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );

    revalidateTag("category");
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
