"use client";

import { z } from "zod";
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
import { registrationSchema } from "./registerValidation";
import { getCurrentUser, registerUser } from "@/services/AuthService";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { addUser } from "@/redux/features/user/userSlice";

const RegisterForm = () => {
  // form
  const form = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");
  const router = useRouter();

  // console.log(form.formState);
  const {
    formState: { isSubmitting },
  } = form;
  const password = form.watch("password");
  const confirmPassword = form.watch("confirmPassword");

  const dispatch = useAppDispatch();
  // onsubmit func
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await registerUser(data);
      console.log(response);
      if (response?.success) {
        toast.success(response?.message || "Registration Successful.");
        const user = await getCurrentUser();
        dispatch(addUser(user));
        form.reset();
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/");
        }
      }
      if (!response?.success) {
        toast.warning(response?.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Registration failed");
    }
  };
  return (
    <div className="bg-[#fff] p-4 rounded">
      <h3 className="text-xl font-semibold mb-12">Register Account</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-md">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Name"
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="w-md">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                {confirmPassword && confirmPassword !== password ? (
                  <FormMessage>Password does not match!</FormMessage>
                ) : (
                  <FormMessage />
                )}
              </FormItem>
            )}
          />
          <Button
            className="w-full"
            type="submit"
            disabled={confirmPassword !== password && !!confirmPassword}
          >
            {isSubmitting ? <span>Register...</span> : <span>Register</span>}
          </Button>
        </form>
      </Form>
      <p className="text-center mt-8">Already have an account?</p>
      <Link href="/login">
        <Button
          variant="outline"
          className="w-full cursor-pointer border-purple-300"
        >
          Login
        </Button>
      </Link>
    </div>
  );
};

export default RegisterForm;
