import React, { JSX, useState } from 'react';
import styled from 'styled-components';
import './SearchBar.css';

const InputWrapper = styled.div`
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

function SearchBar(): JSX.Element {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSearch = () => {
    console.log('Search:', value);
  };

  return (
    <InputWrapper>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search art, artist, work..."
      />
      <div className="input__icon" onClick={handleSearch}></div>
    </InputWrapper>
  );
}

export default SearchBar;
