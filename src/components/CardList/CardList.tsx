import Card from '@components/Card/Card';
import { CardListWrapper, Loader } from '@components/CardList/styled';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import Pagination from '@components/Pagination/Pagination';
import { ERROR } from '@constants/errors';
import {
  DEFAULT_PAGES_LIMIT,
  INITIAL_CURRENT_PAGE,
  INITIAL_TOTAL_PAGES,
} from '@constants/values';
import { ArtInfo } from '@custom-types/artInfo';
import { getGlobalData } from '@utils/api/api';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

function CardList(): JSX.Element {
  const [data, setData] = useState<ArtInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(INITIAL_CURRENT_PAGE);
  const [totalPages, setTotalPages] = useState<number>(INITIAL_TOTAL_PAGES);

  const fetchData = async () => {
    setLoading(true);

    try {
      const result = await getGlobalData(currentPage, DEFAULT_PAGES_LIMIT);

      setData(result.data);
      setTotalPages(result.total);
    } catch (error) {
      console.error(ERROR.INVALID_FETCH, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
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
          <Loader>Loading...</Loader>
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
