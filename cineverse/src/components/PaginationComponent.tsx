// @ts-nocheck
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useNavigate } from "react-router-dom";

interface Props {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (e: number) => null;
}

const PaginationComponent = ({
  totalPages,
  currentPage,
  setCurrentPage,
}: Props) => {
  const navigate = useNavigate();
  const handlePrevPage = () => {
    if (currentPage == 1) return;
    setCurrentPage(currentPage - 1);
    // navigate(`/movies/${currentPage - 1}`);
  };

  const handleNextPage = () => {
    if (currentPage == totalPages) return;
    setCurrentPage(currentPage + 1);
    // navigate(`/movies/${currentPage + 1}`);
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="cursor-pointer"
            onClick={handlePrevPage}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext className="cursor-pointer" onClick={handleNextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
