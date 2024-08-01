import styled, { createGlobalStyle } from 'styled-components';

import { ThemeType } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  :root {
    --primary: ${({ theme }) => theme.colors.primary};
    --primary-lighter: ${({ theme }) => theme.colors.primaryLighter};
    --primary-background: ${({ theme }) => theme.colors.primaryBackground};
    --black: ${({ theme }) => theme.colors.black};
    --black-lighter: ${({ theme }) => theme.colors.blackLighter};
    --black-background: ${({ theme }) => theme.colors.blackBackground};
    --white: ${({ theme }) => theme.colors.white};
    --gray: ${({ theme }) => theme.colors.gray};
    --gray-background: ${({ theme }) => theme.colors.grayBackground};
    --gray-body-background: ${({ theme }) => theme.colors.grayBodyBackground};
  }

  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;

    font-family: "Lexend Deca", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;

    text-decoration: none;
    outline: none;

    background: none;
  }

  body {
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.background};
  }

  header,
  main,
  footer {
    width: 100%;
  }

  .image__link {
      width: 100%;
      height: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 1280px;
  margin: auto;

  @media (max-width: 1380px) {
    width: 980px;
  }

  @media (max-width: 1080px) {
    width: 680px;
  }

  @media (max-width: 720px) {
    width: 350px;
  }
`;
