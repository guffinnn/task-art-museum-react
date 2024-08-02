import {
  ArrowButton,
  PageButton,
  PaginationWrapper,
} from '@components/Pagination/styled';
import {
  DEFAULT_TOTAL_PAGES,
  INITIAL_PAGE_OFFSET,
  PAGES_PER_SET,
} from '@constants/values';
import {
  getPages,
  handleNextSet,
  handlePreviousSet,
} from '@helpers/paginationHelpers';
import { JSX, memo, useCallback, useMemo, useState } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPages = DEFAULT_TOTAL_PAGES,
  onPageChange,
}: PaginationProps): JSX.Element {
  const [pageOffset, setPageOffset] = useState(INITIAL_PAGE_OFFSET);
  const pagesPerSet = PAGES_PER_SET;

  const pages = useMemo(
    () => getPages(pageOffset, pagesPerSet, totalPages),
    [pageOffset, totalPages],
  );

  const handlePreviousClick = useCallback(() => {
    handlePreviousSet(pageOffset, pagesPerSet, setPageOffset);
  }, [pageOffset, pagesPerSet]);

  const handleNextClick = useCallback(() => {
    handleNextSet(pageOffset, pagesPerSet, setPageOffset);
  }, [pageOffset, pagesPerSet]);

  const handlePageChange = useCallback(
    (page: number) => {
      onPageChange(page);
    },
    [onPageChange],
  );

  return (
    <PaginationWrapper>
      {pageOffset > INITIAL_PAGE_OFFSET && (
        <ArrowButton
          data-testid="arrow-left"
          direction="left"
          onClick={handlePreviousClick}
        />
      )}
      {pages.map((page) => (
        <PageButton
          key={page}
          active={page === currentPage ? 'true' : 'false'}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </PageButton>
      ))}
      {pageOffset + pagesPerSet < totalPages && (
        <ArrowButton
          data-testid="arrow-right"
          direction="right"
          onClick={handleNextClick}
        />
      )}
    </PaginationWrapper>
  );
}

export default memo(Pagination);
