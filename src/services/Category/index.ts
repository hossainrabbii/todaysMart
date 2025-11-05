"use server";

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

    return response.json();
  } catch (error: any) {
    return new Error(error);
  }
};

export const getAllCategories = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/category`
    );

    return response.json();
  } catch (error: any) {
    return new Error(error);
  }
};
