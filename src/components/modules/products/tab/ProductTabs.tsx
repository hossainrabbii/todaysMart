import { AppWindowIcon, CodeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SpecificationTable } from "@/components/ui/core/Table/SpecificationTable ";

export function ProductTabs({
  specification,
  description,
}: {
  specification: string;
  description: string;
}) {
  return (
    <div className="flex w-full flex-col gap-6 w-full">
      <Tabs defaultValue="specification">
        <TabsList className="bg-gray-200">
          <TabsTrigger value="specification">Specification</TabsTrigger>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="review">Review</TabsTrigger>
        </TabsList>
        <TabsContent value="specification">
          <Card>
            <CardHeader>
              <CardTitle>Specification</CardTitle>
              <CardDescription>
                <SpecificationTable specs={specification} />
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="description">
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="review">
          <Card>
            <CardHeader>
              <CardTitle>Review</CardTitle>
              <CardDescription>No review yet!</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
