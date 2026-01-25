import LoginForm from "@/components/modules/auth/login/LoginForm";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Todays Mart - Login",
};
const RegisterPage = () => {
 
  return (
    <div className="flex justify-center items-center h-screen bg-[#F3F4F6] ">
      <LoginForm />
    </div>
  );
};

export default RegisterPage;
