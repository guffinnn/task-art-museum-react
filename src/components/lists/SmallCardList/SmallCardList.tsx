import { fetchGlobalData } from '@api/fetchGlobalData';
import { ErrorBoundary } from '@components/error/ErrorBoundary';
import { ErrorDisplay } from '@components/error/ErrorDisplay';
import { Loader } from '@components/lists/CardList/styled';
import { CardListWrapper } from '@components/lists/SmallCardList/styled';
import { MESSAGES } from '@constants/values';
import { ArtInfo } from '@custom-types/artInfo';
import { useErrorHandler } from '@hooks/useErrorHandler';
import { renderSmallCards } from '@utils/renderSmallCards';
import { JSX, useEffect, useMemo, useState } from 'react';

export function SmallCardList(): JSX.Element {
  const [data, setData] = useState<ArtInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { error, setError } = useErrorHandler();

  useEffect(() => {
    fetchGlobalData({ setLoading, setData, setError });
  }, []);

  const memoizedData = useMemo(() => data, [data]);

  return (
    <ErrorBoundary>
      <>
        {!loading ? (
          <CardListWrapper>{renderSmallCards(memoizedData)}</CardListWrapper>
        ) : (
          <Loader>{MESSAGES.LOADING}</Loader>
        )}
        <ErrorDisplay error={error} />
      </>
    </ErrorBoundary>
  );
}
