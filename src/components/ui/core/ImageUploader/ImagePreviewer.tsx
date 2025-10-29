import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { Button } from "../../button";
import { cn } from "@/lib/utils";

type TImagePreviewer = {
  className?: string;
  setImageFiles: Dispatch<SetStateAction<[] | File[]>>;
  imagePreview: [] | string[];
  setImagePreview: Dispatch<SetStateAction<[] | string[]>>;
};

const ImagePreviewer = ({
  className,
  setImageFiles,
  imagePreview,
  setImagePreview,
}: TImagePreviewer) => {
  const handleRemoveImage = (index: number) => {
    setImageFiles((prev) => prev.filter((_, idx) => idx !== index));
    setImagePreview((prev) => prev.filter((_, idx) => idx !== index));
  };
  return (
    <div className={cn("", className)}>
      {imagePreview.map((image, index) => (
        <div className="relative">
          <Image
            src={image}
            width={350}
            height={350}
            alt="Image"
            key={index}
            className="m-2"
          />
          <Button
            onClick={() => handleRemoveImage(index)}
            className="absolute top-0 z-10 ml-2 bg-red-500"
          >
            X
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ImagePreviewer;
