"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import DeleteConfirmationModal from "@/components/ui/core/Modals/DeleteConfirmationModal";
import { TableViewer } from "@/components/ui/core/Table";
import { deleteSingleProduct } from "@/services/Product";
import { IMeta, IProductType } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { DiscountModal } from "./DiscountModal";
import PaginationTable from "@/components/ui/core/Table/PaginationTable";

const ManageProducts = ({
  products,
  meta,
}: {
  products: IProductType[];
  meta: IMeta;
}) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // console.log(prodIds);
  const [selectedProduct, setSelectedProduct] = useState<string[] | []>([]);
  // const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: any) => {
    setSelectedId(data?._id);
    setSelectedItem(data?.name);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        // const response = await deleteProduct(selectedId);
        const response = await deleteSingleProduct(selectedId);
        if (response?.success) {
          toast.success(
            response?.message || "Brand item deleted successfully."
          );
        }
        if (!response?.success) {
          toast.error(response?.message || "Something went wrong.");
        }
      }
    } catch (error: any) {
      console.error(error?.message);
    }
  };
  const columns: ColumnDef<IProductType>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => {
            if (value) {
              setSelectedProduct([...products.map((item) => item?._id)]);
            } else {
              setSelectedProduct([]);
            }
            table.toggleAllPageRowsSelected(!!value);
          }}
          aria-label="Select all"
          className="bg-white"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            if (value) {
              setSelectedProduct((prev) => [...prev, row.original?._id]);
            } else {
              setSelectedProduct(
                selectedProduct.filter((id) => id !== row?.original?._id)
              );
            }
            row.toggleSelected(!!value);
          }}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: () => <div>Product Name</div>,
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original?.imageUrls[0]}
            alt={row.original.name}
            width={40}
            height={40}
            className="w-8 h-8 rounded-sm object-cover"
          />
          <Link href={`../../products/${row?.original?._id}`}>
            {" "}
            <span
              className="truncate hover:font-bold"
              title={row.original.name}
            >
              {row.original.name.slice(0, 17)}
              {row.original.name.length > 17 && <>...</>}
            </span>
          </Link>
        </div>
      ),
    },
    {
      accessorKey: "brand",
      header: () => <div>Brand</div>,
      cell: ({ row }) => (
        <span className="truncate">{row.original.brand?.name}</span>
      ),
    },
    {
      accessorKey: "category",
      header: () => <div>Category</div>,
      cell: ({ row }) => (
        <span className="truncate">{row.original.category?.name}</span>
      ),
    },
    {
      accessorKey: "description",
      header: () => <div>Description</div>,
      cell: ({ row }) => (
        <span className="truncate">
          {row.original.description.slice(0, 10)}...
        </span>
      ),
    },
    {
      accessorKey: "price",
      header: () => <div>Price</div>,
      cell: ({ row }) => (
        <span className="truncate">{row.original.price}৳</span>
      ),
    },
    {
      accessorKey: "offerprice",
      header: () => <div>Offer Price</div>,
      cell: ({ row }) => (
        <span className="truncate">
          {row.original.offerPrice ? (
            <>{row.original.offerPrice}</>
          ) : (
            <>{row.original.price}</>
          )}
          ৳
        </span>
      ),
    },
    {
      accessorKey: "isActive",
      header: () => <div>Active</div>,
      cell: ({ row }) => (
        <div>
          {row?.original?.isActive ? (
            <span className="bg-green-400 py-1 px-2 rounded-md border-2 border-green-500 text-white">
              True
            </span>
          ) : (
            <span className="bg-red-400 py-1 px-2 rounded-md border-2 border-red-500 text-white">
              False
            </span>
          )}
        </div>
      ),
    },
    {
      accessorKey: "action",
      header: () => <div>Action</div>,
      cell: ({ row }) => (
        <button
          className="text-red-500 cursor-pointer"
          title="Delete"
          onClick={() => handleDelete(row.original)}
        >
          <Trash className="w-5 h-5" />
        </button>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Manage Product</h1>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="cursor-pointer success bg-green-500 text-white"
          >
            <Link href="products/add-product">Create Product</Link>
          </Button>
          <DiscountModal
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
        </div>
      </div>
      <div className="my-4">
        <TableViewer data={products} columns={columns} />
      </div>

      <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />

      <PaginationTable totalPage={meta?.totalPage} />
    </div>
  );
};

export default ManageProducts;
