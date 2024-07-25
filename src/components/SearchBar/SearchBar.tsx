import { JSX, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useDebounce from '../../useDebounce';
import './SearchBar.css';
import { Input, InputWrapper } from './styled';

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
  }, [debouncedValue]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputWrapper
        value={formik.values.searchTerm}
        error={formik.errors.searchTerm || ''}
      >
        <Input
          type="text"
          name="searchTerm"
          value={formik.values.searchTerm}
          onChange={formik.handleChange}
          placeholder="Search art, artist, work..."
        />
        <div
          className="input__icon"
          onClick={(e) => formik.handleSubmit()}
        ></div>
      </InputWrapper>
    </form>
  );
}

export default SearchBar;
