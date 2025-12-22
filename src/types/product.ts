export interface Brand {
  _id: string;
  name: string;
}

export interface Category {
  _id: string;
  name: string;
}

export interface Shop {
  _id: string;
  shopName: string;
}

export interface IProductType {
  "0"?: any; // Added as optional since its type/purpose is unclear from the value ':', but it's present in the keys.

  _id: string;
  availableColors: string[];
  averageRating: number;
  brand: Brand;
  category: Category;
  createdAt: string;
  description: string;
  imageUrls: string[];
  isActive: boolean;
  keyFeatures: string[];
  name: string;
  offerPrice: number | null;
  price: number;
  ratingCount: number;
  shop: Shop;
  slug: string;
  specification: Record<string, string>;
  stock: number;
  updatedAt: string;
  weight: number;
}
