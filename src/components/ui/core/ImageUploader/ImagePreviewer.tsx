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
        <div className="relative flex items-center gap-4" key={index}>
          <div className="border h-full rounded flex items-center">
            <div>
              <Image
                src={image}
                width={160}
                height={160}
                alt="Image"
                key={index}
                className=""
              />
            </div>
          </div>

          <Button
            onClick={() => handleRemoveImage(index)}
            className="absolute top-0 z-10 bg-red-500"
          >
            X
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ImagePreviewer;
