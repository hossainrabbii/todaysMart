"use client";
import { Button } from "@/components/ui/button";
import ImageUploader from "@/components/ui/core/ImageUploader";
import ImagePreviewer from "@/components/ui/core/ImageUploader/ImagePreviewer";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createFlashSale } from "@/services/FlashSale";
import { Dispatch, SetStateAction, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type TPropsProducts = {
  selectedProduct: string[];
  setSelectedProduct: Dispatch<SetStateAction<[] | string[]>>;
};
export function DiscountModal({
  selectedProduct,
  setSelectedProduct,
}: TPropsProducts) {
  // form
  const form = useForm();

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formatedData = {
        products: [...selectedProduct],
        discountPercentage: parseFloat(data?.discountPercentage),
      };

      const response = await createFlashSale(formatedData);

      if (response?.success) {
        toast.success(response.message || "Added products to Flash Sale.");
        setSelectedProduct([]);
      } else {
        toast.error(response.message || "Something went wrong");
      }
    } catch (error: any) {
      console.error(error);
    }
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="cursor-pointer success bg-green-500 text-white"
            disabled={!selectedProduct?.length}
          >
            Add Flash Sale
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Flash Sale</DialogTitle>
            <hr className="my-2"></hr>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="discountPercentage"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Discount Percentage(%)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        value={field.value || ""}
                        max={100}
                        min={0}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600"
              >
                {isSubmitting ? <span>Adding...</span> : <span>Add</span>}
              </Button>
            </form>
          </Form>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="bg-red-500 text-white">
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
