import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-1 md:gap-2 mt-8 flex-wrap">
      {/* ← Arrow Left */}
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-[#f1bfd3] text-[#c80064] hover:bg-[#fefaf1] transition shadow-sm"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
        </button>
      )}

      {/* Page numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 flex items-center justify-center rounded-full border transition ${
            page === currentPage
              ? "bg-[#c80064] text-white font-semibold shadow-md border-[#c80064]"
              : "border-[#f1bfd3] text-[#c80064] hover:bg-[#fefaf1]"
          }`}
        >
          {page}
        </button>
      ))}

      {/* → Arrow Right */}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-[#f1bfd3] text-[#c80064] hover:bg-[#fefaf1] transition shadow-sm"
        >
          <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Pagination;
