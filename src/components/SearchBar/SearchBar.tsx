import React, { JSX, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
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

function SearchBar({ onSearch }: SearchBarProps): JSX.Element {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  // Debounce by 5 seconds (default)
  const debouncedValue = useDebounce(value, 500);

  const validateInput = (input: string) => {
    if (input.length < 3) {
      setError('Search term must be at least 3 characters long.');
    } else {
      setError('');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    validateInput(inputValue);
  };

  useEffect(() => {
    if (!error && debouncedValue.trim().length >= 3) {
      onSearch(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <InputWrapper value={value} error={error}>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search art, artist, work..."
      />
      <div className="input__icon"></div>
    </InputWrapper>
  );
}

export default SearchBar;
