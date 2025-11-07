"use client";

import { IBrand } from "@/types/brand";
import { CreateBrandModal } from "./CreateBrandModal";
import { TableViewer } from "@/components/ui/core/Table";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { Trash } from "lucide-react";
import { useState } from "react";
import DeleteConfirmationModal from "@/components/ui/core/Modals/DeleteConfirmationModal";
import { deleteBrand } from "@/services/Brand";
import { toast } from "sonner";
type TBrand = {
  brands: IBrand[];
};
const ManageBrand = ({ brands }: TBrand) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: IBrand) => {
    setSelectedId(data?._id);
    setSelectedItem(data?.name);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const response = await deleteBrand(selectedId);

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
  const columns: ColumnDef<IBrand>[] = [
    {
      accessorKey: "name",
      header: () => <div>Brand Name</div>,
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.logo}
            alt={row.original.name}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="truncate">{row.original.name}</span>
        </div>
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
        <h1 className="text-3xl font-semibold">Manage Brand</h1>
        <CreateBrandModal />
      </div>

      <div className="mt-4">
        <TableViewer data={brands} columns={columns} />
      </div>

      <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default ManageBrand;
