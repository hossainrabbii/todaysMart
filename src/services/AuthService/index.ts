"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();
    if (result?.success) {
      (await cookies()).set("accessToken", result?.data?.accessToken);
    }
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const loginUser = async (userData: FieldValues) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    const result = await response.json();
    if (result?.success) {
      (await cookies()).set("accessToken", result?.data?.accessToken);
    }
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};

// current User
export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  const decodedData = accessToken ? await jwtDecode(accessToken) : null;
  return decodedData;
};

// logout
export const logOutUser = async () => {
  const removeToken = (await cookies()).delete("accessToken");
  return null;
};

// reCaptcha varification
export const reCaptchaVarification = async (value: string) => {
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: process.env.NEXT_PUBLIC_RECAPTCHA_SERVER_KEY!,
        response: value,
      }),
    });
    return res.json();
  } catch (error) {
    return error;
  }
};
