import { Loader } from '@components/CardList/styled';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import SmallCard from '@components/SmallCard/SmallCard';
import {
  CardImageSmall,
  CardListWrapper,
} from '@components/SmallCardList/styled';
import SortDropdown from '@components/SortDropdown/SortDropdown';
import { urlImage } from '@constants/api';
import { JSX, useEffect, useMemo, useState } from 'react';
import { ArtInfo } from '@custom-types/artInfo';
import { sortResults } from '@helpers/sortHelpers';

interface SearchResultsListProps {
  loading: boolean;
  searchResults: ArtInfo[];
  setLoading: (loading: boolean) => void;
}

function SearchResultsList({
  loading,
  searchResults,
  setLoading,
}: SearchResultsListProps): JSX.Element {
  const [sortCriteria, setSortCriteria] = useState<string>('date');

  const sortedResults = useMemo(
    () => sortResults(searchResults, sortCriteria),
    [searchResults, sortCriteria],
  );

  useEffect(() => {
    if (!loading && searchResults.length === 0) {
      setLoading(false);
    }
  }, [searchResults, loading, setLoading]);

  return (
    <ErrorBoundary>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : searchResults.length > 0 ? (
        <>
          <SortDropdown
            sortCriteria={sortCriteria}
            setSortCriteria={setSortCriteria}
          />
          <CardListWrapper>
            {sortedResults.map((item, index) => (
              <SmallCard item={item} key={index}>
                <CardImageSmall
                  imageUrl={urlImage({ imageId: item.imageId })}
                />
              </SmallCard>
            ))}
          </CardListWrapper>
        </>
      ) : (
        <Loader>No results found.</Loader>
      )}
    </ErrorBoundary>
  );
}

export default SearchResultsList;
