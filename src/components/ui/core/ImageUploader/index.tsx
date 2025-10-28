import React, { useState } from "react";
import { Input } from "../../input";
import Image from "next/image";

const ImageUploader = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

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
  console.log(imagePreview);

  return (
    <div>
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
        className="w-36 h-36 flex justify-center items-center border-dashed border-2 cursor-pointer rounded-2xl m-4 border-gray-300 hover:bg-gray-200"
      >
        Upload Logo
      </label>

      <div className="grid grid-wrap gap-2">
        {imagePreview.map((imageFiles, index) => (
          <Image src={imageFiles} width={350} height={350} alt="Image" />
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
