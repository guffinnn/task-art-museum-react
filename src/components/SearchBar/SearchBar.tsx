import { JSX, useEffect } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './SearchBar.css';
import useDebounce from '../../useDebounce';

const InputWrapper = styled.div<{ value: string; error: string }>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 762px;
  height: 64px;

  background: var(--black-background);
  border-radius: 16px;

  &::after {
    content: '${({ error, value }) =>
      error.length > 0 && value.length > 0 ? error : ''}';
    position: absolute;
    bottom: -25px;
    left: 16px;

    color: var(--primary);
  }

  @media (max-width: 720px) {
    width: calc(100vw - 40px);
  }
`;

const Input = styled.input`
  width: calc(100% - 48px);
  height: auto;

  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: left;

  color: var(--black);

  border: none;
  outline: none;
  padding: 23px 16px;
`;

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
