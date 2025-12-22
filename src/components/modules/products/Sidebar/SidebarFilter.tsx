"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { IProductType } from "@/types";

const BRANDS = ["Sony", "Apple", "Nike", "Gucci", "JBL"];
const CATEGORIES = ["Electronics", "Fashion"];

export type FilterSidebarProps = {
  price: number[];
  setPrice: (v: number[]) => void;
  brands: string[];
  setBrands: React.Dispatch<React.SetStateAction<string[]>>;
  rating: number | null;
  setRating: (v: number | null) => void;
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  prodCat: IProductType[];
};

export default function SidebarFilter({
  price,
  setPrice,
  brands,
  setBrands,
  rating,
  setRating,
  categories,
  setCategories,
  prodCat,
}: FilterSidebarProps) {
  console.log(prodCat);
  // console.log(prodCat.map((c: any) => console.log(c)));
  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="sticky top-6 h-fit rounded-2xl border bg-background p-5 shadow-sm"
    >
      <h2 className="mb-4 text-lg font-semibold">Filters</h2>

      {/* Price */}
      <div className="mb-6">
        <p className="mb-2 text-sm font-medium">Max Price: {price[0]}</p>
        <Slider max={90000} step={10} value={price} onValueChange={setPrice} />
      </div>

      {/* Brands */}
      <div className="mb-6">
        <p className="mb-2 text-sm font-medium">Brands</p>
        <div className="space-y-2">
          {BRANDS.map((b) => (
            <div key={b} className="flex items-center gap-2">
              <Checkbox
                checked={brands.includes(b)}
                onCheckedChange={() =>
                  setBrands((prev) =>
                    prev.includes(b)
                      ? prev.filter((i) => i !== b)
                      : [...prev, b]
                  )
                }
              />
              <span className="text-sm">{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <p className="mb-2 text-sm font-medium">Rating</p>
        <div className="flex gap-2">
          {[3, 4, 5].map((r) => (
            <button
              key={r}
              onClick={() => setRating(r === rating ? null : r)}
              className={`flex items-center gap-1 rounded-xl border px-3 py-1 text-sm transition ${
                rating === r
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              {r} <Star className="h-4 w-4" />
            </button>
          ))}
        </div>
      </div>

      {/* Category */}
      <div>
        <p className="mb-2 text-sm font-medium">Category</p>
        <div className="flex flex-wrap gap-2">
          {/* {prodCat.map((c: any) => (
            <Badge
              key={c._id}
              variant={categories.includes(c) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() =>
                setCategories((prev) =>
                  prev.includes(c) ? prev.filter((i) => i !== c) : [...prev, c]
                )
              }
            >
              {c}
            </Badge>
          ))} */}
          {prodCat.map((c: any) => (
            <Badge
              key={c._id}
              variant={categories.includes(c._id) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() =>
                setCategories((prev) =>
                  prev.includes(c._id)
                    ? prev.filter((id) => id !== c._id)
                    : [...prev, c._id]
                )
              }
            >
              {c.name}
            </Badge>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}
