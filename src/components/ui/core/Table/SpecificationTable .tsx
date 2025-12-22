import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const SpecificationTable = ({ specs }: { specs: any }) => {
  console.log(Object.entries(specs));
  return (
    <Table>
      <TableHeader className="bg-gray-100">
        <TableRow>
          <TableHead className="w-[200px]">Feature</TableHead>
          <TableHead>Details</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {Object.entries(specs).map(([key, value]) => (
          <TableRow key={key}>
            <TableCell className="font-medium">{key}</TableCell>
            <TableCell>{String(value)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
