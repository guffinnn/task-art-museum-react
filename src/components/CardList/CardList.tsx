import { JSX, useEffect, useState } from 'react';
import styled from 'styled-components';
import './CardList.css';
import Pagination from '../Pagination/Pagination';
import Card from '../Card/Card';

export const Loader = styled.div`
  width: 100%;
  height: 100%;
  min-height: 514px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  column-gap: 50px;
  row-gap: 20px;

  width: 100%;
  height: fit-content;
  min-height: 514px;
`;

export interface ArtInfo {
  id: number;
  title: string;
  artist_title: string;
  is_public_domain: boolean;
  date_start: number;
  date_end: number;
  place_of_origin: string;
  dimensions: string;
  credit_line: string;
}

interface ApiResponse {
  data: ArtInfo[];
  total: number;
}

export const getJSON = async (
  currentPage: number,
  limit: number,
): Promise<ApiResponse> => {
  const response = await fetch(`
    https://api.artic.edu/api/v1/artworks?page=${currentPage}&limit=${limit}
  `);
  return await response.json();
};

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

  return (
    <>
      {!loading ? (
        <CardListWrapper>
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              artist_title={item.artist_title}
              is_public_domain={item.is_public_domain}
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
