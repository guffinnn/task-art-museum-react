import searchIcon from '@assets/search.svg';
import styled from 'styled-components';

export const InputWrapper = styled.div<{ value: string; error: string }>`
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
    left: 0;
    margin: 0 16px;

    color: var(--primary);
  }

  @media (max-width: 720px) {
    width: calc(100vw - 40px);

    &::after {
      bottom: -20px;
      font-size: 13px;
    }
  }
`;

export const Input = styled.input`
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

  &::placeholder {
    text-transform: capitalize;
    color: var(--black-lighter);
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;

export const InputIcon = styled.div`
  width: 32px;
  height: 32px;
  background: url(${searchIcon}) no-repeat center center;
  background-size: contain;

  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);

  cursor: pointer;
`;
