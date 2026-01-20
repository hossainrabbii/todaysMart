import { getAllCategories } from "@/services/Category";
import Image from "next/image";

const Category = async () => {
  const { data } = await getAllCategories();

  return (
    <div className="my-8">
      <h2 className="text-3xl font-semibold py-2">Categories</h2>
      <p className="mb-6 font-semibold">
        Browse our wide selection of products
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {data.map((cat: any) => (
          <div
            className="py-8 shadow-md rounded-md bg-white flex flex-col items-center"
            key={cat?._id}
          >
            <Image src={cat.icon} alt={cat.name} width={40} height={40} />
            <div className="text-center text-sm">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
