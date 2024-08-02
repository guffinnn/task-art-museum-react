import bookmarkIcon from '@assets/bookmark.svg';
import homeIcon from '@assets/home.svg';
import museumLogo from '@assets/museum-logo.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: linear-gradient(
    90deg,
    rgba(52, 51, 51, 1) 38.05%,
    rgba(72, 72, 72, 1) 69.22%,
    rgba(40, 40, 40, 1) 98.98%
  );
`;

export const HeaderLogo = styled.div`
  width: 206px;
  height: 63px;
  background: url(${museumLogo}) no-repeat center center;
  background-size: contain;

  @media (max-width: 720px) {
    width: 150px;
    height: 40px;
  }
`;

export const MenuToggle = styled.input`
  display: none;
`;

export const MenuIcon = styled.label`
  display: none;
  margin: 0 8px;
  font-size: 24px;
  color: var(--primary-lighter);
  cursor: pointer;

  @media (max-width: 720px) {
    display: block;
  }
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 720px) {
    display: none;
    flex-direction: column;
    gap: 0;
  }

  ${MenuToggle}:checked + ${MenuIcon} + & {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: flex-start;
    align-content: flex-end;
    row-gap: 20px;
  }
`;

export const HeaderText = styled(Link)`
  width: auto;
  height: auto;
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--white);

  &.--home::before {
    content: url(${homeIcon});
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 50%;
    left: 0;
    transform: translateY(0%);
  }

  &.--bookmark::before {
    content: url(${bookmarkIcon});
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 50%;
    left: 0;
    transform: translateY(0%);
  }

  @media (max-width: 720px) {
    font-size: 14px;
    line-height: 18px;

    &.--bookmark::before,
    &.--home::before {
      width: 18px;
      height: 18px;
      transform: scale(0.7);
      margin-bottom: -2px;
    }
  }
`;
