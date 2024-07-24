import { JSX, useState } from 'react';
import styled from 'styled-components';
import './Pagination.css';
import arrowRight from '../../assets/arrow-right.svg';

const PaginationWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  align-self: end;
`;

const PageButton = styled.button<{ active: boolean }>`
  padding: 4px 10px;
  border: none;
  border-radius: 4px;
  background-color: ${({ active }) =>
    active ? 'var(--primary)' : 'rgba(255, 255, 255, 0)'};
  color: ${({ active }) => (active ? 'var(--white)' : 'var(--black)')};
  cursor: pointer;

  font-style: normal;
  font-weight: ${({ active }) => (active ? '600' : '300')};
  font-size: 18px;
  line-height: ${({ active }) => (active ? '23px' : '24px')};

  transition: all 0.45s ease-in-out;
`;

const ArrowButton = styled.div<{ direction: 'left' | 'right' }>`
  width: 32px;
  height: 32px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 4px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    background-image: url(${arrowRight});
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    rotate: ${({ direction }) => (direction === 'left' ? '180deg' : '0deg')};

    position: absolute;
  }
`;

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
