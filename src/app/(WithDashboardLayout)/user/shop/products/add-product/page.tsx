import AddProductForm from "@/components/modules/shop/product/AddProductForm";
import { getAllBrands } from "@/services/Brand";
import { getAllCategories } from "@/services/Category";

const AddProductPage = async () => {
  const { data: brands } = await getAllBrands();
  const { data: categories } = await getAllCategories();

  // console.log(categories);
  return (
    <div className="border border-gray-300 p-3 rounded-md w-full lg:w-3xl mx-auto shadow-md my-3">
      <h3 className="text-2xl font-semibold"> Add new product</h3>
      <hr className="my-2" />
      <AddProductForm brands={brands} categories={categories} />
    </div>
  );
};

export default AddProductPage;
