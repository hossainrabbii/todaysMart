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
import { Textarea } from "@/components/ui/textarea";
import { IBrand } from "@/types/brand";
import { Plus } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICategory } from "@/types";
import ImageUploader from "@/components/ui/core/ImageUploader";
import ImagePreviewer from "@/components/ui/core/ImageUploader/ImagePreviewer";
import { useState } from "react";
import { createProduct } from "@/services/Product";
import { toast } from "sonner";

type TBrandCategory = {
  brands: IBrand[];
  categories: ICategory[];
};

const AddProductForm = ({ brands, categories }: TBrandCategory) => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  const form = useForm({
    defaultValues: {
      name: "",
      price: "",
      stock: "",
      weight: "",
      brand: "",
      category: "",
      description: "",
      keyFeatures: [{ value: "" }],
      availableColors: [{ value: "" }],
      specification: [{ key: "", value: "" }],
    },
  });

  // const { data, meta } = await getAllBrands();
  const {
    formState: { isSubmitting },
  } = form;

  const { append: appendFeatures, fields: featureFields } = useFieldArray({
    control: form.control,
    name: "keyFeatures",
  });

  const { append: appendColors, fields: colorsFields } = useFieldArray({
    control: form.control,
    name: "availableColors",
  });

  const { append: appendSpec, fields: specFields } = useFieldArray({
    control: form.control,
    name: "specification",
  });

  const addFeatures = () => {
    appendFeatures({ value: "" });
  };

  const addColors = () => {
    appendColors({ value: "" });
  };

  const addSpecs = () => {
    appendSpec({ key: "", value: "" });
  };

  // const { data, meta } = await getAllBrands();
  const onSubmit = async (data: any) => {
    console.log("data444");

    const availableColors = data?.availableColors.map(
      (color: { value: string }) => color?.value
    );

    const specification: Record<string, any> = Object.fromEntries(
      (data?.specification ?? []).map((item: any) => [item.key, item.value])
    );

    const keyFeatures = data?.keyFeatures.map(
      (feature: { value: string }) => feature?.value
    );
    // console.log(specification);
    const modifiedData = {
      ...data,
      availableColors,
      specification,
      keyFeatures,
      price: parseFloat(data?.price),
      stock: parseFloat(data?.stock),
      weight: parseFloat(data?.weight),
    };

    try {
      const formData = new FormData();
      console.log(formData);
      formData.append("data", JSON.stringify(modifiedData));

      for (const file of imageFiles) {
        formData.append("images", file);
      }

      // console.log(modifiedData);
      // console.log(formData);
      const response = await createProduct(formData);
      console.log(response);

      if (response?.success) {
        toast.success(response?.message);
      } else {
        toast.error(response?.message);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className="my-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      value={field.value || ""}
                      className="border-amber-200"
                      placeholder="Product Name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      min={0}
                      value={field.value || ""}
                      className="border-amber-200"
                      placeholder="Price"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      min={0}
                      value={field.value || ""}
                      className="border-amber-200"
                      placeholder="Stock"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      min={0}
                      value={field.value || ""}
                      className="border-amber-200"
                      placeholder="Weight"
                      step="any"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>

                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem value={category?._id} key={category?._id}>
                          {category?.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Brand" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      {brands.map((brand) => (
                        <SelectItem value={brand?._id} key={brand?._id}>
                          {brand?.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>

          <div className="my-4">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-20 border-amber-200"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Add Feature</h3>
              <Button onClick={addFeatures} type="button">
                <Plus></Plus>
              </Button>
            </div>
            {featureFields.map((featureField, index) => (
              <div className="my-4" key={index}>
                <FormField
                  key={featureField.id}
                  control={form.control}
                  name={`keyFeatures.${index}.value`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Key Feature {index + 1}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          className="border-amber-200"
                          placeholder="Add feature"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Add Colors</h3>
              <Button onClick={addColors} type="button">
                <Plus></Plus>
              </Button>
            </div>

            {colorsFields.map((colorsField, index) => (
              <div className="my-4" key={colorsField.id}>
                <FormField
                  control={form.control}
                  name={`availableColors.${index}.value`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Color {index + 1}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || ""}
                          className="border-amber-200"
                          placeholder="Add Color"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Add Specification</h3>
              <Button onClick={addSpecs} type="button">
                <Plus></Plus>
              </Button>
            </div>
            {specFields.map((specField, index) => (
              <div
                key={specField.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4 my-4"
              >
                <FormField
                  control={form.control}
                  name={`specification.${index}.key`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Spec Name {index + 1}</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage></FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`specification.${index}.value`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Spec Description {index + 1}</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage></FormMessage>
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </div>

          <div className="flex bg-gray-100 p-2 rounded-md">
            <ImagePreviewer
              className="flex gap-4"
              setImageFiles={setImageFiles}
              imagePreview={imagePreview}
              setImagePreview={setImagePreview}
            />
            {imagePreview.length < 3 && (
              <ImageUploader
                label="Upload image"
                className=""
                setImagePreview={setImagePreview}
                setImageFiles={setImageFiles}
              />
            )}
          </div>

          <Button type="submit" className="w-full cursor-pointer mt-5">
            {isSubmitting ? <span>Submitting...</span> : <span>Submit</span>}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddProductForm;
