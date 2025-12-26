import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "../../button";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const PaginationTable = ({ totalPage }: { totalPage: number }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const router = useRouter();
  const pathName = usePathname();

  //   handle previous
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      router.push(`${pathName}?page=${currentPage - 1}`);
    }
  };
  //   handle next

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    router.push(`${pathName}?page=${currentPage + 1}`);
  };
  return (
    <div className="flex gap-2 my-4">
      <Button
        variant="outline"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        <ArrowLeft />
      </Button>

      {[...Array(totalPage)].map((_, index) => (
        <Button
          key={index}
          variant={currentPage === index + 1 ? "default" : "outline"}
          onClick={() => {
            setCurrentPage(index + 1);
            router.push(`${pathName}?page=${index + 1}`);
          }}
        >
          {index + 1}
        </Button>
      ))}

      <Button
        variant="outline"
        disabled={currentPage === totalPage}
        onClick={handleNext}
      >
        <ArrowRight />
      </Button>
    </div>
  );
};

export default PaginationTable;
