import { ErrorBoundary } from '@components/error/ErrorBoundary';
import { Loader } from '@components/lists/CardList/styled';
import { CardListWrapper } from '@components/lists/SmallCardList/styled';
import { SortDropdown } from '@components/SortDropdown';
import { DEFAULT_SORT_CRITERIA, MESSAGES, NO_RESULTS } from '@constants/values';
import { ArtInfo } from '@custom-types/artInfo';
import {
  handleLoadingState,
  handleSortCriteriaChange,
} from '@helpers/searchResultsListHelpers';
import { sortResults } from '@helpers/sortHelpers';
import { renderSmallCards } from '@utils/renderSmallCards';
import { JSX, memo, useCallback, useEffect, useMemo, useState } from 'react';

interface SearchResultsListProps {
  loading: boolean;
  searchResults: ArtInfo[];
  setLoading: (loading: boolean) => void;
}

function SearchResultsListComponent({
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
          <CardListWrapper>{renderSmallCards(sortedResults)}</CardListWrapper>
        </>
      ) : (
        <Loader>{MESSAGES.NO_RESULTS}</Loader>
      )}
    </ErrorBoundary>
  );
}

export const SearchResultsList = memo(SearchResultsListComponent);
