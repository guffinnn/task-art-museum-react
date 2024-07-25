import { JSX, useEffect, useState, useMemo } from 'react';
import './CardList.css';
import { Loader, CardListWrapper } from './styled';
import { ArtInfo, getJSON, URL_IMAGE } from '../../constants/api';
import Pagination from '../Pagination/Pagination';
import Card from '../Card/Card';

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
    <>
      {!loading ? (
        <CardListWrapper>
          {memoizedData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              artist_title={item.artist_title}
              is_public_domain={item.is_public_domain}
              image_url={URL_IMAGE({ imageId: item.image_id })}
            />
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
  );
}

export default CardList;
