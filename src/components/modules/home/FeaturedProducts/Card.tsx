// import { ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { ProductCard } from "./ProductCard";

// // Sample products data matching your structure
// const products = [
//   {
//     _id: "692ee33cf84042a699bb40ae",
//     name: "Black Shark S3",
//     description: "Premium smartwatch with AMOLED display",
//     price: 4790,
//     offerPrice: 3353,
//     stock: 23,
//     category: { _id: "692bd1b705ca488fb5c4305e", name: "Accessories" },
//     imageUrls: [
//       "https://res.cloudinary.com/dvc8ipxdj/image/upload/v1764680538/yp8au72gpkl-1764680506246-images-s3-silver-001-500x500.webp",
//     ],
//     brand: { _id: "692ed4eff84042a699bb3f6a", name: "Black Shark" },
//     averageRating: 4.5,
//     ratingCount: 128,
//     keyFeatures: [
//       '1.43" AMOLED Display',
//       "150+ Sports Modes",
//       "50m Water Resistance",
//     ],
//   },
//   {
//     _id: "2",
//     name: "QCY H3 ANC Wireless Headphones",
//     description: "High-quality noise cancelling headphones",
//     price: 3500,
//     offerPrice: 2699,
//     stock: 45,
//     category: { _id: "2", name: "Headphones" },
//     imageUrls: [
//       "https://res.cloudinary.com/dvc8ipxdj/image/upload/v1765803442/1wmcqipjwdg-1765803381887-images-celebrat-g35-01-500x500.webp",
//     ],
//     brand: { _id: "2", name: "QCY" },
//     averageRating: 4.2,
//     ratingCount: 89,
//     keyFeatures: ["40dB ANC", "60H Playtime", "Bluetooth 5.3"],
//   },
//   {
//     _id: "3",
//     name: "Flyx Max 2 Toy Drone",
//     description: "Perfect beginner drone with HD camera",
//     price: 4900,
//     stock: 12,
//     category: { _id: "3", name: "Drones" },
//     imageUrls: [
//       "https://res.cloudinary.com/dvc8ipxdj/image/upload/v1765803043/5p2msr3k32o-1765802982281-images-flyx-max-2-500x500.webp",
//     ],
//     brand: { _id: "3", name: "Flyx" },
//     averageRating: 4.0,
//     ratingCount: 34,
//     keyFeatures: ["HD Camera", "20min Flight", "360° Flip"],
//   },
//   {
//     _id: "4",
//     name: "Xiaomi Mi Band 8 Pro",
//     description: "Advanced fitness tracker with GPS",
//     price: 5990,
//     offerPrice: 4990,
//     stock: 8,
//     category: { _id: "4", name: "Smartwatch" },
//     imageUrls: [
//       "https://res.cloudinary.com/dvc8ipxdj/image/upload/v1764680538/voa353igxm-1764680506254-images-s3-08-500x500.webp",
//     ],
//     brand: { _id: "4", name: "Xiaomi" },
//     averageRating: 4.7,
//     ratingCount: 256,
//     keyFeatures: ["Built-in GPS", '1.74" AMOLED', "SpO2 Monitor"],
//   },
//   {
//     _id: "5",
//     name: "Anker Soundcore Life Q30",
//     description: "Premium ANC headphones with 40H battery",
//     price: 7500,
//     offerPrice: 5999,
//     stock: 32,
//     category: { _id: "5", name: "Headphones" },
//     imageUrls: [
//       "https://res.cloudinary.com/dvc8ipxdj/image/upload/v1764680538/uj0livrq1wn-1764680506246-images-s3-05-500x500.webp",
//     ],
//     brand: { _id: "5", name: "Anker" },
//     averageRating: 4.6,
//     ratingCount: 178,
//     keyFeatures: ["Hybrid ANC", "40H Battery", "Hi-Res Audio"],
//   },
//   {
//     _id: "6",
//     name: "Samsung Galaxy Buds FE",
//     description: "Wireless earbuds with active noise cancellation",
//     price: 8990,
//     offerPrice: 6990,
//     stock: 50,
//     category: { _id: "6", name: "Earbuds" },
//     imageUrls: [
//       "https://res.cloudinary.com/dvc8ipxdj/image/upload/v1764680538/yp8au72gpkl-1764680506246-images-s3-silver-001-500x500.webp",
//     ],
//     brand: { _id: "6", name: "Samsung" },
//     averageRating: 4.4,
//     ratingCount: 312,
//     keyFeatures: ["Active ANC", "30H Total", "IPX2 Rating"],
//   },
// ];

// export const FeaturedProducts = () => {
//   return (
//     <section className="py-12 md:py-16">
//       <div className="container">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
//               Featured Products
//             </h2>
//             <p className="text-muted-foreground">
//               Handpicked deals just for you
//             </p>
//           </div>
//           <Button variant="ghost" className="gap-2 group hidden sm:flex">
//             View All
//             <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
//           </Button>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
//           {products.map((product, index) => (
//             <div
//               key={product._id}
//               className="animate-fade-up opacity-0"
//               style={{
//                 animationDelay: `${index * 0.1}s`,
//                 animationFillMode: "forwards",
//               }}
//             >
//               <ProductCard product={product} />
//             </div>
//           ))}
//         </div>

//         {/* Mobile CTA */}
//         <div className="flex justify-center mt-8 sm:hidden">
//           <Button variant="outline" className="gap-2">
//             View All Products
//             <ChevronRight className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };
