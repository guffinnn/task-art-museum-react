import { JSX, useEffect, useState, useMemo } from 'react';
import './SmallCardList.css';
import { Loader } from '../CardList/styled';
import { CardListWrapper, CardImageSmall } from './styled';
import { ArtInfo, getJSON, URL_IMAGE } from '../../constants/api';
import SmallCard from '../SmallCard/SmallCard';

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
                image_url={URL_IMAGE({ imageId: item.image_id })}
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
