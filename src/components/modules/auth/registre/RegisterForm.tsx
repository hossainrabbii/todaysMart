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
import { registerUser } from "@/services/AuthService";
import { toast } from "sonner";

const RegisterForm = () => {
  // form
  const form = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const password = form.watch("password");
  const confirmPassword = form.watch("confirmPassword");
  // onsubmit func
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    try {
      const response = await registerUser(data);
      if (response?.success) {
        toast.success(response?.message || "Registration Successful.");
        form.reset();
      }
      if (!response?.success) {
        toast.warning(response?.message || "Something went wrong");
      }
    } catch (error) {
      console.log("page reg", error);
      toast.error("Registration failed");
    }
  };
  return (
    <div className="bg-white p-4 rounded">
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
            type="submit"
            disabled={confirmPassword !== password && !!confirmPassword}
          >
            Register
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
