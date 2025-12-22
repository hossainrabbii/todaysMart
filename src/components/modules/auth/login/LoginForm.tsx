"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginUser,
  logOutUser,
  reCaptchaVarification,
} from "@/services/AuthService";
import { toast } from "sonner";
import { loginSchema } from "./loginValidation";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const LoginForm = () => {
  const [reCaptchaStatus, setRecaptchaStatus] = useState(false);

  // form
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");
  const router = useRouter();

  // handle recaptcha
  const handleReCaptcha = async (value: string | null) => {
    const res = await reCaptchaVarification(value!);
    if (res?.success) {
      setRecaptchaStatus(true);
    }
  };
  // onsubmit func
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await loginUser(data);
      if (response?.success) {
        toast.success(response?.message || "Login Successful.");
        form.reset();
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/user/dashboard");
        }
      }
      if (!response?.success) {
        toast.warning(response?.message || "Something went wrong");
      }
    } catch (error) {
      // console.log(error);
      toast.error("Login failed");
    }
  };
  return (
    <div className="bg-white p-4 rounded">
      <h3 className="text-xl font-semibold mb-8">Login now</h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-md">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-md">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY as string}
            onChange={handleReCaptcha}
          />
          <Button type="submit" disabled={!reCaptchaStatus}>
            {isSubmitting ? <span>Login...</span> : <span>Login</span>}
          </Button>
        </form>
      </Form>
      <Link href="/register">Register</Link>
    </div>
  );
};

export default LoginForm;
