import { JSX, useMemo, useState } from 'react';

import { ArtInfo, URL_IMAGE } from '../../constants/api';
import { Loader } from '../CardList/styled';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import SmallCard from '../SmallCard/SmallCard';
import { CardImageSmall, CardListWrapper } from '../SmallCardList/styled';
import SortDropdown from '../SortDropdown/SortDropdown';

interface SearchResultsListProps {
  loading: boolean;
  searchResults: ArtInfo[];
}

function SearchResultsList({
  loading,
  searchResults,
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

  return (
    <ErrorBoundary>
      {!loading ? (
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
        <Loader>Loading...</Loader>
      )}
    </ErrorBoundary>
  );
}

export default SearchResultsList;
