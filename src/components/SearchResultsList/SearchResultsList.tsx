import { Loader } from '@components/CardList/styled';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import SmallCard from '@components/SmallCard/SmallCard';
import {
  CardImageSmall,
  CardListWrapper,
} from '@components/SmallCardList/styled';
import SortDropdown from '@components/SortDropdown/SortDropdown';
import { DEFAULT_SORT_CRITERIA, MESSAGES, NO_RESULTS } from '@constants/values';
import { ArtInfo } from '@custom-types/artInfo';
import {
  handleLoadingState,
  handleSortCriteriaChange,
} from '@helpers/searchResultsListHelpers';
import { sortResults } from '@helpers/sortHelpers';
import { urlImage } from '@utils/api/api';
import { JSX, memo, useCallback, useEffect, useMemo, useState } from 'react';

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
  const [sortCriteria, setSortCriteria] = useState<string>(
    DEFAULT_SORT_CRITERIA,
  );

  const sortedResults = useMemo(
    () => sortResults(searchResults, sortCriteria),
    [searchResults, sortCriteria],
  );

  useEffect(() => {
    handleLoadingState({ loading, searchResults, setLoading });
  }, [searchResults, loading, setLoading]);

  const handleSortChange = useCallback(
    (criteria: string) => handleSortCriteriaChange(criteria, setSortCriteria),
    [],
  );

  return (
    <ErrorBoundary>
      {loading ? (
        <Loader>{MESSAGES.LOADING}</Loader>
      ) : searchResults.length > NO_RESULTS ? (
        <>
          <SortDropdown
            sortCriteria={sortCriteria}
            setSortCriteria={handleSortChange}
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
        <Loader>{MESSAGES.NO_RESULTS}</Loader>
      )}
    </ErrorBoundary>
  );
}

export default memo(SearchResultsList);
