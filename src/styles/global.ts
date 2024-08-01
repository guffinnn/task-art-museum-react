import bookmarkPrimary from '@assets/bookmark--primary.svg';
import bigBookmark from '@assets/bookmark--primary--big.svg';
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
    background: ${({ theme }) => theme.colors.grayBodyBackground};
  }

  header,
  main,
  footer {
    width: 100%;
  }
`;

export const Wrapper = styled.div<{ modificator?: string }>`
  width: 1280px;
  margin: auto;

  ${({ modificator }) =>
    modificator &&
    `
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 50px;
    row-gap: 20px;
    padding: 32px 0;
  `};

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

export const MainSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: column;
  margin: 120px auto;

  &.--search {
    row-gap: 72px;
  }

  &.--gallery {
    row-gap: 40px;
  }
`;

export const Title = styled.h1`
  width: 100%;
  max-width: 684px;
  height: fit-content;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;
  text-align: center;
  text-transform: capitalize;
  color: var(--black);

  @media (max-width: 720px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

export const PrimaryText = styled.span`
  color: var(--primary);

  &.--bookmark {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    &::before {
      content: url(${bigBookmark});
      width: 74px;
      height: 74px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    @media (max-width: 720px) {
      &::before {
        width: 40px;
        height: 40px;
        transform: scale(0.6);
        margin-bottom: -8px;
      }
    }
  }
`;

export const CardButton = styled.div<{ isChild?: 'true' | 'false' }>`
  position: relative;
  grid-row: 1 / 4;
  grid-column: ${({ isChild }) => (isChild === 'true' ? '2' : '3')};
  align-self: center;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 17px;
  gap: 11px;

  width: 59px;
  height: 59px;

  background: ${`var(--gray-background)`};
  border-radius: 999px;
  transition: background 0.45s ease-in-out;

  cursor: pointer;

  &:hover,
  &.--favorite {
    background: var(--primary-background);
  }

  &::before {
    content: url(${bookmarkPrimary});
    position: absolute;

    width: 24px;
    height: 24px;
    margin-bottom: -5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (hover: none), (pointer: coarse) {
    transition: none;

    &:hover,
    &:focus {
      background: var(--gray-background);
      transition: none;
    }

    &:active,
    &.--favorite {
      background: var(--primary-background);
    }
  }

  &.--white {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-16px, 16px);
    background: var(--white);
  }

  &.--white:hover,
  &.--white.--favorite {
    background: var(--primary-background);
  }

  @media (hover: none), (pointer: coarse) {
    transition: none;

    &.--white:hover,
    &.--white:focus {
      background: var(--gray-background);
      transition: none;
    }

    &.--white:active,
    &.--white.--favorite {
      background: var(--primary-background);
      transition: none;
    }
  }
`;
