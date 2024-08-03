import React from 'react';

export interface HandleSearchParams {
  debouncedValue: string;
  formikErrors: string;
  setLoading: (loading: boolean) => void;
  isLoading: React.MutableRefObject<boolean>;
  onSearch: (searchTerm: string) => void;
}
