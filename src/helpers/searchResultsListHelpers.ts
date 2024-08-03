import { HandleLoadingStateParams } from '@custom-types/handleLoadingStateParams';
import React from 'react';

export const handleLoadingState = ({
  loading,
  searchResults,
  setLoading,
}: HandleLoadingStateParams) => {
  if (!loading && searchResults.length === 0) {
    setLoading(false);
  }
};

export const handleSortCriteriaChange = (
  criteria: string,
  setSortCriteria: React.Dispatch<React.SetStateAction<string>>,
) => {
  setSortCriteria(criteria);
};
