import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function ImageTabs({ images }: { images: string[] }) {
  const [selectedImage, setSeletedImage] = useState<string>(images[0]);

  // console.log(selectedImage);
  return (
    <div className="flex w-full flex-col gap-6 w-full">
      <Tabs value={selectedImage} onValueChange={setSeletedImage}>
        <TabsContent value={selectedImage}>
          <Card>
            <CardHeader>
              <CardDescription>
                <Link href={selectedImage} target="_blank">
                  <Image
                    src={selectedImage}
                    alt="Image"
                    width={500}
                    height={350}
                    className="mx-auto"
                  />
                </Link>
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>

        <TabsList className="bg-gray-200 mt-2 w-full h-[150px] gap-2">
          {images.map((i) => (
            <TabsTrigger
              value={i}
              key={i}
              className="hover:border-blue-300 border-gray-200 hover:bg-blue-100"
            >
              <Image
                src={i}
                alt="Image"
                width={130}
                height={30}
                className="rounded-sm"
              />
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
