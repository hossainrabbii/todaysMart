import { Button } from "@/components/ui/button";
import Link from "next/link";

const ManageProducts = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Manage Product</h1>
        <Button
          variant="outline"
          className="cursor-pointer success bg-green-500 text-white"
        >
          <Link href="products/add-product">Create Product</Link>
        </Button>
      </div>
    </div>
  );
};

export default ManageProducts;
