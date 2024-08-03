import { fetchGlobalData } from '@api/fetchGlobalData';
import { Loader } from '@components/CardList/styled';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import { CardListWrapper } from '@components/SmallCardList/styled';
import { MESSAGES } from '@constants/values';
import { ArtInfo } from '@custom-types/artInfo';
import { renderSmallCards } from '@utils/renderSmallCards';
import { JSX, useEffect, useMemo, useState } from 'react';

function SmallCardList(): JSX.Element {
  const [data, setData] = useState<ArtInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchGlobalData({ setLoading, setData });
  }, []);

  const memoizedData = useMemo(() => data, [data]);

  return (
    <ErrorBoundary>
      {!loading ? (
        <CardListWrapper>{renderSmallCards(memoizedData)}</CardListWrapper>
      ) : (
        <Loader>{MESSAGES.LOADING}</Loader>
      )}
    </ErrorBoundary>
  );
}

export default SmallCardList;
