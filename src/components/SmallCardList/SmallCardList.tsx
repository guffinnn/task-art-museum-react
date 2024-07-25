import { JSX, useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import './SmallCardList.css';
import { Loader, ArtInfo, getJSON } from '../CardList/CardList';
import SmallCard from '../SmallCard/SmallCard';

const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
  gap: 16px;
  position: relative;
  width: 100%;
  height: fit-content;
`;

const CardImageSmall = styled.div<{ image_url: string }>`
  grid-row: 1 / 4;
  grid-column: 1;

  position: relative;
  width: 87px;
  height: 100%;
  margin-right: 8px;

  background: ${({ image_url }) => `url(${image_url})`} no-repeat center center;
  background-size: cover;

  cursor: pointer;
`;

function SmallCardList(): JSX.Element {
  const [data, setData] = useState<ArtInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const result = await getJSON(9, 9);

        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const memoizedData = useMemo(() => data, [data]);

  return (
    <>
      {!loading ? (
        <CardListWrapper>
          {memoizedData.map((item, index) => (
            <SmallCard
              key={index}
              title={item.title}
              artist_title={item.artist_title}
              is_public_domain={item.is_public_domain}
            >
              <CardImageSmall
                image_url={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
              />
            </SmallCard>
          ))}
        </CardListWrapper>
      ) : (
        <Loader>Loading...</Loader>
      )}
    </>
  );
}

export default SmallCardList;
