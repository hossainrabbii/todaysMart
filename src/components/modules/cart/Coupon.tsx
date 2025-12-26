"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Trash } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { toast } from "sonner";
import { useAppSelector } from "@/redux/hooks";
import {
  shopSelector,
  subTotalSelector,
} from "@/redux/features/cart/cartSlice";
import { addCoupon } from "@/services/Cart";
import { useState } from "react";

export default function Coupon() {
  const [couponCode, setCouponCode] = useState("");
  const form = useForm();

  const subTotal = useAppSelector(subTotalSelector);
  const shopId = useAppSelector(shopSelector);

  // const couponInput = form.watch("coupon");

  const handleRemoveCoupon = () => {
    form.reset();
  };
  // const couponCode = form.watch("coupon");
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const couponData = {
        subTotal,
        shopId,
        couponCode: couponCode,
      };

      const response = await addCoupon(couponData);
      console.log(response);
      console.log(couponData);
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4  p-5 w-full lg:w-auto">
      <div className="flex flex-col justify-between h-full">
        <h1 className="text-2xl font-bold">Use Coupon code</h1>
        <p className="text-gray-500">Enter your coupon code if you have one.</p>

        <Form {...form}>
          <form className="mt-3" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex gap-2 justify-between">
              <div className="w-[90%]">
                <FormField
                  control={form.control}
                  name="coupon"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          className="rounded-full w-full"
                          placeholder="Promo / Coupon code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <Button
                disabled={!couponCode}
                onClick={handleRemoveCoupon}
                variant="outline"
                className="bg-red-100 rounded-full size-10 w-"
              >
                <Trash size={24} className="text-red-500" />
              </Button>
            </div>
            <div className="flex gap-3 mt-3">
              <Button
                disabled={!couponCode}
                type="submit"
                className="w-full text-xl font-semibold py-5 "
              >
                Apply
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
