import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
              <div className="w-full overflow-x-auto">
                <SpecificationTable specs={specification} />
              </div>
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
  );
}
