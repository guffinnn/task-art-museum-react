import bookmarkPrimary from '@assets/bookmark--primary.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardDescription = styled.div<{ isChild: 'true' | 'false' }>`
  box-sizing: border-box;

  width: ${({ isChild }) => (isChild === 'true' ? '334px' : '415px')};
  height: ${({ isChild }) => (isChild === 'true' ? 'auto' : 'fit-content')};

  display: grid;
  align-items: start;
  justify-content: start;
  align-content: center;
  justify-items: stretch;
  grid-template-columns: ${({ isChild }) =>
    isChild === 'true' ? '1fr auto' : 'auto 1fr auto'};
  grid-template-rows: repeat(3, auto);
  gap: 8px;
  padding: 17px 24px;

  position: ${({ isChild }) => (isChild === 'true' ? 'absolute' : 'relative')};

  background: var(--white);
  border: 1px solid var(--gray);
  z-index: 1;
  bottom: ${({ isChild }) => isChild === 'true' && '0'};

  @media (max-width: 720px) {
    width: ${({ isChild }) => (isChild === 'true' ? '334px' : '100%')};
  }
`;

export const TextHeading = styled.p<{ isChild: 'true' | 'false' }>`
  grid-row: 1;
  grid-column: ${({ isChild }) => (isChild === 'true' ? '1' : '2')};

  width: 100%;
  height: fit-content;

  font-family: ${({ isChild }) =>
    isChild === 'true' ? `'Lexend Deca', sans-serif` : `'Inter', serif`};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 26px;
  letter-spacing: -0.03em;

  color: var(--black);
`;

export const TextSubheading = styled.p<{ isChild: 'true' | 'false' }>`
  margin-top: -7px;
  grid-row: 2;
  grid-column: ${({ isChild }) => (isChild === 'true' ? '1' : '2')};

  width: auto;
  height: fit-content;

  font-family: ${({ isChild }) =>
    isChild === 'true' ? `'Lexend Deca', sans-serif` : `'Inter', serif`};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: -0.01em;

  color: var(--primary-lighter);
`;

export const TextStatus = styled.p<{ isChild: 'true' | 'false' }>`
  grid-row: 3;
  grid-column: ${({ isChild }) => (isChild === 'true' ? '1' : '2')};

  width: auto;
  height: fit-content;

  font-family: ${({ isChild }) =>
    isChild === 'true' ? `'Lexend Deca', sans-serif` : `'Inter', serif`};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: -0.01em;

  color: var(--black);
`;

export const CardButton = styled.div<{
  isFavorite: 'true' | 'false';
  isChild: 'true' | 'false';
}>`
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

  background: ${({ isFavorite }) =>
    isFavorite === 'true'
      ? `var(--primary-background)`
      : `var(--gray-background)`};
  border-radius: 999px;
  transition: background 0.45s ease-in-out;

  cursor: pointer;

  &:hover {
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

    &:active {
      background: var(--primary-background);
    }
  }
`;

export const ImageLink = styled(Link)`
  grid-row: 1 / 4;
  grid-column: 1;
  width: 100%;
  height: 100%;
`;
