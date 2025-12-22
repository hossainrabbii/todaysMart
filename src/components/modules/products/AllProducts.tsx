"use client";

import ProductCard from "../card/ProductCard";
import SidebarFilter from "./Sidebar/SidebarFilter";
import { useState } from "react";

export const AllProducts = ({
  products,
  categor,
}: {
  products: any;
  categor: any;
}) => {
  // const { data: products, meta } = await getAllProducts();
  console.log(products);
  const i = 0;
  const [price, setPrice] = useState<number[]>([90000]);
  const [brands, setBrands] = useState<string[]>([]);
  const [rating, setRating] = useState<number | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  // const filteredProducts = products.filter(
  //   (p: any) =>
  //     p.price <= price[0] &&
  //     (brands.length === 0 || brands.includes(p.brand)) &&
  //     (!rating || p.rating >= rating) &&
  //     (categories.length === 0 || categories.includes(p.category))
  // );

  const filteredProducts = products.filter(
    (p: any) =>
      p.price <= price[0] &&
      (brands.length === 0 || brands.includes(p.brand)) &&
      (categories.length === 0 || categories.includes(p.category))
  );

  return (
    <div className="flex gap-4 items-start my-8">
      <div className="max-w-[300px]">
        <SidebarFilter
          price={price}
          setPrice={setPrice}
          brands={brands}
          setBrands={setBrands}
          rating={rating}
          setRating={setRating}
          categories={categories}
          setCategories={setCategories}
          prodCat={categor}
        />
      </div>
      <ProductCard products={filteredProducts} itemCount={i} />
    </div>
  );
};
