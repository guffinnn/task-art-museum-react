import { Loader } from '@components/CardList/styled';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import SmallCard from '@components/SmallCard/SmallCard';
import {
  CardImageSmall,
  CardListWrapper,
} from '@components/SmallCardList/styled';
import SortDropdown from '@components/SortDropdown/SortDropdown';
import { ArtInfo, URL_IMAGE } from '@constants/api';
import { JSX, useMemo, useState, useEffect } from 'react';

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

  const sortedResults = useMemo(() => {
    return [...searchResults].sort((a, b) => {
      switch (sortCriteria) {
        case 'date':
          return (
            new Date(a.date_end).getTime() - new Date(b.date_end).getTime()
          );
        case 'date_reverse':
          return (
            new Date(b.date_end).getTime() - new Date(a.date_end).getTime()
          );
        case 'alphabet':
          return a.title.localeCompare(b.title);
        case 'alphabet_reverse':
          return b.title.localeCompare(a.title);
      }
      return 0;
    });
  }, [searchResults, sortCriteria]);

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
                  image_url={URL_IMAGE({ imageId: item.image_id })}
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
