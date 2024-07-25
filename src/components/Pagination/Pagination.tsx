import { JSX, useState } from 'react';
import './Pagination.css';
import { ArrowButton, PageButton, PaginationWrapper } from './styled';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPages = 12,
  onPageChange,
}: PaginationProps): JSX.Element {
  const [pageOffset, setPageOffset] = useState(0);
  const pagesPerSet = 4;
  const pages = Array.from(
    { length: Math.min(pagesPerSet, totalPages - pageOffset) },
    (_, i) => i + 1 + pageOffset,
  );

  const handleNextSet = () => {
    setPageOffset((prevOffset) => prevOffset + pagesPerSet);
  };

  const handlePreviousSet = () => {
    setPageOffset((prevOffset) => Math.max(prevOffset - pagesPerSet, 0));
  };

  return (
    <PaginationWrapper>
      {pageOffset > 0 && (
        <ArrowButton direction="left" onClick={handlePreviousSet} />
      )}
      {pages.map((page) => (
        <PageButton
          key={page}
          active={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      ))}
      {pageOffset + pagesPerSet < totalPages && (
        <ArrowButton direction="right" onClick={handleNextSet} />
      )}
    </PaginationWrapper>
  );
}

export default Pagination;
