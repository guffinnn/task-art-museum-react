import { MIN_SEARCH_TERM_LENGTH } from '@constants/values';
import { HandleSearchParams } from '@custom-types/handleSearchParams';

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
