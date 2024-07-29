import { JSX, useEffect, useState, useMemo } from 'react';
import './CardList.css';
import { Loader, CardListWrapper } from './styled';
import { ArtInfo, getJSON } from '../../constants/api';
import Pagination from '../Pagination/Pagination';
import Card from '../Card/Card';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

function CardList(): JSX.Element {
  const [data, setData] = useState<ArtInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const result = await getJSON(currentPage, 3);

        setData(result.data);
        setTotalPages(result.total);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const memoizedData = useMemo(() => data, [data]);

  return (
    <ErrorBoundary>
      <>
        {!loading ? (
          <CardListWrapper>
            {memoizedData.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </CardListWrapper>
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

export default CardList;
