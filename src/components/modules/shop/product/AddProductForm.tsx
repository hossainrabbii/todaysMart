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
import { Plus } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";

const AddProductForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      price: "",
      stock: "",
      weight: "",
      description: "",
      keyFeatures: [{ value: "" }],
      availableColors: [{ value: "" }],
      specification: [{ key: "", value: "" }],
    },
  });

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

  const onSubmit = (data: any) => {
    console.log(data);
    // category
    // brand
    // specification
    // keyFeatures
    // availableColors
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
                    />
                  </FormControl>
                  <FormMessage />
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
              <Button onClick={addFeatures}>
                <Plus></Plus>
              </Button>
            </div>
            {featureFields.map((featureField, index) => (
              <div className="my-4">
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
              <Button onClick={addColors}>
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
              <Button onClick={addSpecs}>
                <Plus></Plus>
              </Button>
            </div>
            {specFields.map((specField, index) => (
              <div
                key={specField.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-4 my-4"
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

          <Button type="submit" className="w-full cursor-pointer mt-5">
            {isSubmitting ? <span>Submitting...</span> : <span>Submit</span>}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddProductForm;
