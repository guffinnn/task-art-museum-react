import { MIN_SEARCH_TERM_LENGTH } from '@constants/values';
import React from 'react';

interface HandleSearchParams {
  debouncedValue: string;
  formikErrors: string;
  setLoading: (loading: boolean) => void;
  isLoading: React.MutableRefObject<boolean>;
  onSearch: (searchTerm: string) => void;
}

export const handleSearch = ({
  debouncedValue,
  formikErrors,
  setLoading,
  isLoading,
  onSearch,
}: HandleSearchParams) => {
  if (!formikErrors && debouncedValue.trim().length >= MIN_SEARCH_TERM_LENGTH) {
    if (!isLoading.current) {
      setLoading(true);
      isLoading.current = true;
      onSearch(debouncedValue);
    }
  }
};
