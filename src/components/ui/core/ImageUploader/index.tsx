import React, { Dispatch, SetStateAction } from "react";
import { Input } from "../../input";
import { cn } from "@/lib/utils";

type TimageUploader = {
  label?: string;
  className?: string;
  setImageFiles: Dispatch<SetStateAction<[] | File[]>>;
  setImagePreview: Dispatch<SetStateAction<[] | string[]>>;
};
const ImageUploader = ({
  label,
  className,
  setImageFiles,
  setImagePreview,
}: TimageUploader) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setImageFiles((prev) => [...prev, file]);
    // console.log(new FileReader());
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
      event.target.value = "";
    }
  };

  return (
    <div className={cn("", className)}>
      <Input
        type="file"
        multiple
        accept="image/*"
        onChange={handleImageChange}
        id="image-uploader"
        className="hidden"
      />
      <label
        htmlFor="image-uploader"
        className="w-28 h-24 flex justify-center items-center border-dashed border-2 cursor-pointer rounded-2xl m-4 border-gray-300 hover:bg-gray-200"
      >
        <span className="text-[14px] font-semibold">{label}</span>
      </label>
    </div>
  );
};

export default ImageUploader;
