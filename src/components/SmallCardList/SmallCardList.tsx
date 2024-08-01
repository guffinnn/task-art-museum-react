import './SmallCardList.css';

import { JSX, useEffect, useMemo, useState } from 'react';

import { ArtInfo, getJSON, URL_IMAGE } from '../../constants/api';
import { Loader } from '../CardList/styled';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import SmallCard from '../SmallCard/SmallCard';
import { CardImageSmall, CardListWrapper } from './styled';

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
    <ErrorBoundary>
      {!loading ? (
        <CardListWrapper>
          {memoizedData.map((item, index) => (
            <SmallCard key={index} item={item}>
              <CardImageSmall
                image_url={URL_IMAGE({ imageId: item.image_id })}
              />
            </SmallCard>
          ))}
        </CardListWrapper>
      ) : (
        <Loader>Loading...</Loader>
      )}
    </ErrorBoundary>
  );
}

export default SmallCardList;
