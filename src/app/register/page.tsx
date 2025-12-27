import RegisterForm from "@/components/modules/auth/register/RegisterForm";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Todays Mart - Register",
};
const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#F3F4F6]">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
