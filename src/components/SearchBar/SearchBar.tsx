import {
  Form,
  Input,
  InputIcon,
  InputWrapper,
} from '@components/SearchBar/styled';
import useDebounce from '@hooks/useDebounce';
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
    .min(3, 'Search term must be at least 3 characters long.')
    .required('Search term is required.'),
});

function SearchBar({ onSearch, setLoading }: SearchBarProps): JSX.Element {
  const formik = useFormik({
    initialValues: {
      searchTerm: '',
    },
    validationSchema,
    onSubmit: (values) => {
      onSearch(values.searchTerm);
    },
  });

  const debouncedValue = useDebounce(formik.values.searchTerm, 500);
  const isLoading = useRef(false);

  useEffect(() => {
    if (!formik.errors.searchTerm && debouncedValue.trim().length >= 3) {
      if (!isLoading.current) {
        setLoading(true);
        isLoading.current = true;
        onSearch(debouncedValue);
      }
    }
  }, [debouncedValue, formik.errors.searchTerm, onSearch, setLoading]);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputWrapper
        value={formik.values.searchTerm}
        error={formik.errors.searchTerm || ''}
      >
        <Input
          type="text"
          name="searchTerm"
          value={formik.values.searchTerm}
          onChange={(e) => {
            formik.handleChange(e);
            if (e.target.value.trim().length < 3) {
              formik.setFieldError(
                'searchTerm',
                'Search term must be at least 3 characters long.',
              );
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

export default SearchBar;
