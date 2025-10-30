"use server";

import { cookies } from "next/headers";

export const createShop = async (data: FormData) => {

  console.log('from shop index: ',data)
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/shop`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });

    return response.json();
  } catch (error: any) {
    return new Error(error);
  }
};
