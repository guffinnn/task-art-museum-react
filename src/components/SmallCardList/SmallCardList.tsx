import { JSX, useEffect, useState } from 'react';
import './SmallCardList.css';
import { Loader, ArtInfo, getJSON } from '../CardList/CardList';
import SmallCard from '../SmallCard/SmallCard';
import styled from 'styled-components';

const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 16px;
  position: relative;
  width: 100%;
  height: fit-content;
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

  return (
    <>
      {!loading ? (
        <CardListWrapper>
          {data.map((item, index) => (
            <SmallCard
              key={index}
              title={item.title}
              artist_title={item.artist_title}
              is_public_domain={item.is_public_domain}
            >
              <div className="card__image--small"></div>
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
