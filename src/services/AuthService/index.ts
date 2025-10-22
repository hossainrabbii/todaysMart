"use server";
export const registerUser = async (userData: any) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();
    console.log(result);

    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};
