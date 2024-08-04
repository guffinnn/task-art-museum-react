import {
  Form,
  Input,
  InputIcon,
  InputWrapper,
} from '@components/SearchBar/styled';
import { ERROR } from '@constants/errors';
import {
  DEBOUNCE_DELAY,
  INITIAL_SEARCH_TERM,
  MIN_SEARCH_TERM_LENGTH,
} from '@constants/values';
import { handleSearch } from '@helpers/searchBarHelpers';
import { useDebounce } from '@hooks/useDebounce';
import { useFormik } from 'formik';
import { JSX, useEffect, useRef } from 'react';
import * as yup from 'yup';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  setLoading: (loading: boolean) => void;
}

const validationSchema = yup.object({
  searchTerm: yup
    .string()
    .min(MIN_SEARCH_TERM_LENGTH, ERROR.MIN_LENGTH)
    .required(ERROR.REQUIRED),
});

export function SearchBar({
  onSearch,
  setLoading,
}: SearchBarProps): JSX.Element {
  const formik = useFormik({
    initialValues: {
      searchTerm: INITIAL_SEARCH_TERM,
    },
    validationSchema,
    onSubmit: (values) => {
      onSearch(values.searchTerm);
    },
  });

  const debouncedValue = useDebounce(formik.values.searchTerm, DEBOUNCE_DELAY);
  const isLoading = useRef(false);

  useEffect(() => {
    handleSearch({
      debouncedValue,
      formikErrors: formik.errors.searchTerm || INITIAL_SEARCH_TERM,
      setLoading,
      isLoading,
      onSearch,
    });
  }, [debouncedValue, formik.errors.searchTerm, onSearch, setLoading]);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputWrapper
        value={formik.values.searchTerm}
        error={formik.errors.searchTerm || INITIAL_SEARCH_TERM}
      >
        <Input
          type="text"
          name="searchTerm"
          value={formik.values.searchTerm}
          onChange={(e) => {
            formik.handleChange(e);
            if (e.target.value.trim().length < MIN_SEARCH_TERM_LENGTH) {
              formik.setFieldError('searchTerm', ERROR.MIN_LENGTH);
            } else {
              formik.setFieldError('searchTerm', '');
            }
          }}
          placeholder="Search art, artist, work..."
        />
        <InputIcon
          data-testid="search-icon"
          onClick={() => formik.handleSubmit()}
        />
      </InputWrapper>
    </Form>
  );
}
