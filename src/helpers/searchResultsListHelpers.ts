import { ArtInfo } from '@custom-types/artInfo';
import React from 'react';

interface HandleLoadingStateParams {
  loading: boolean;
  searchResults: ArtInfo[];
  setLoading: (loading: boolean) => void;
}

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
