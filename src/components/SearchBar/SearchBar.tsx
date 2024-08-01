import {
  Form,
  Input,
  InputIcon,
  InputWrapper,
} from '@components/SearchBar/styled';
import useDebounce from '@hooks/useDebounce';
import { useFormik } from 'formik';
import { JSX, useEffect } from 'react';
import * as yup from 'yup';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const validationSchema = yup.object({
  searchTerm: yup
    .string()
    .min(3, 'Search term must be at least 3 characters long.')
    .required('Search term is required.'),
});

function SearchBar({ onSearch }: SearchBarProps): JSX.Element {
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

  useEffect(() => {
    if (!formik.errors.searchTerm && debouncedValue.trim().length >= 3) {
      onSearch(debouncedValue);
    }
  }, [debouncedValue, formik.errors.searchTerm]);

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
