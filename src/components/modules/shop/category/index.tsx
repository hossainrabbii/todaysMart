"use client";
import { ICategory } from "@/types";
import { CreateCategoryModal } from "./CreateCategoryModal";
import { TableViewer } from "@/components/ui/core/Table";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Trash } from "lucide-react";

type TCategoriesProps = {
  categories: ICategory[];
};

const ManageCategory = ({ categories }: TCategoriesProps) => {
  const handleDelete = (data: ICategory) => {
    console.log(data);
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
            className="w-8 h-8 rounded-full"
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
          className="text-red-500"
          title="Delete"
          onClick={() => handleDelete(row.original)}
        >
          <Trash className="w-5 h-5" />
        </button>
      ),
    },
  ];
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Manage Category</h1>
        <CreateCategoryModal />
      </div>
      <div className="my-4">
        <TableViewer columns={columns} data={categories} />
      </div>
    </>
  );
};

export default ManageCategory;
