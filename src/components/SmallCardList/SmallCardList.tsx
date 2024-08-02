import { Loader } from '@components/CardList/styled';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import SmallCard from '@components/SmallCard/SmallCard';
import {
  CardImageSmall,
  CardListWrapper,
} from '@components/SmallCardList/styled';
import { getJSON, urlImage } from '@constants/api';
import { JSX, useEffect, useMemo, useState } from 'react';
import { ArtInfo } from '@custom-types/artInfo';

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
              <CardImageSmall imageUrl={urlImage({ imageId: item.imageId })} />
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
