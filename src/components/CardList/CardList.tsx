import { fetchGlobalData } from '@api/fetchGlobalData';
import Card from '@components/Card/Card';
import { CardListWrapper, Loader } from '@components/CardList/styled';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import Pagination from '@components/Pagination/Pagination';
import {
  INITIAL_CURRENT_PAGE,
  INITIAL_TOTAL_PAGES,
  MESSAGES,
} from '@constants/values';
import { ArtInfo } from '@custom-types/artInfo';
import React, {
  JSX,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

function CardList(): JSX.Element {
  const [data, setData] = useState<ArtInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(INITIAL_CURRENT_PAGE);
  const [totalPages, setTotalPages] = useState<number>(INITIAL_TOTAL_PAGES);

  useEffect(() => {
    fetchGlobalData({ setLoading, setData, setTotalPages, currentPage });
  }, [currentPage]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const renderCard = useCallback(
    (item: ArtInfo, index: number) => <Card key={index} item={item} />,
    [data],
  );

  const memoizedData = useMemo(() => data, [data]);

  return (
    <ErrorBoundary>
      <>
        {!loading ? (
          <CardListWrapper>{memoizedData.map(renderCard)}</CardListWrapper>
        ) : (
          <Loader>{MESSAGES.LOADING}</Loader>
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </>
    </ErrorBoundary>
  );
}

export default memo(CardList);
