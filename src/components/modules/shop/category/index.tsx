"use client";
import { ICategory, IMeta } from "@/types";
import { CreateCategoryModal } from "./CreateCategoryModal";
import { TableViewer } from "@/components/ui/core/Table";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Edit, Trash } from "lucide-react";
import DeleteConfirmationModal from "@/components/ui/core/Modals/DeleteConfirmationModal";
import { useState } from "react";
import { deleteCategory } from "@/services/Category";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import PaginationTable from "@/components/ui/core/Table/PaginationTable";

type TCategoryMeta = {
  categories: ICategory[];
  meta: IMeta;
};

const ManageCategory = ({ categories, meta }: TCategoryMeta) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: ICategory) => {
    setSelectedId(data?._id);
    setSelectedItem(data?.name);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteCategory(selectedId);

        if (res?.success) {
          toast.success(res.message);
          setModalOpen(false);
        } else {
          toast.error(res.message);
        }
      }
    } catch (err: any) {
      console.error(err?.message);
    }
  };

  const columns: ColumnDef<ICategory>[] = [
    {
      accessorKey: "name",
      header: () => <div>Category Name</div>,
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.icon}
            alt={row.original.name}
            width={40}
            height={40}
            className="w-8 h-8 object-cover"
          />
          <span className="truncate">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "name",
      header: () => <div>Description</div>,
      cell: ({ row }) => (
        <span className="truncate" title={row.original.description}>
          {row.original.description.slice(0, 100)}
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
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="text-green-600 cursor-pointer"
            title="Update"
            onClick={() => setOpenEditModal(true)}
          >
            <Edit className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            className="text-red-500 cursor-pointer"
            title="Delete"
            onClick={() => handleDelete(row.original)}
          >
            <Trash className="w-5 h-5" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Manage Category</h1>
        <div className="flex">
          <CreateCategoryModal
            openEditModal={openEditModal}
            setOpenEditModal={setOpenEditModal}
          />
        </div>
      </div>

      <div className="my-4">
        <TableViewer columns={columns} data={categories} />
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

export default ManageCategory;
