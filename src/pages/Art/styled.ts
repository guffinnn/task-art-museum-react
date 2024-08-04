import styled from 'styled-components';

export const CardImage = styled.div<{ imageurl: string }>`
  grid-column: 1;
  grid-row: 1 / 3;

  position: relative;
  width: 500px;
  height: 570px;

  top: 0;
  left: 0;

  background: ${({ imageurl }) => `url(${imageurl})`} no-repeat center center;
  background-size: cover;
  z-index: 0;
  transition: all 0.45s ease-in-out;

  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 35px 14px rgba(13, 13, 13, 0.04);
  }

  @media (max-width: 1080px) {
    grid-column: 1;
    grid-row: 1;

    width: 100%;
    height: auto;
    min-height: 800px;
  }

  @media (max-width: 720px) {
    height: 400px;
    min-height: 0;
  }

  @media (hover: none), (pointer: coarse) {
    transition: none;

    &:hover,
    &:focus {
      box-shadow: none;
      transition: none;
    }

    &:active {
      box-shadow: 0 2px 35px 14px rgba(13, 13, 13, 0.04);
    }
  }
`;

export const Main = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: column;
  margin: 120px auto;
`;

export const MainSection = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  align-items: start;
  justify-content: start;
  align-content: center;
  justify-items: stretch;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  column-gap: 80px;
  row-gap: 172px;

  &.--description {
    column-gap: 80px;
    row-gap: 172px;

    @media (max-width: 1080px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, auto);
      column-gap: 0;
      row-gap: 50px;
    }
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 16px;
  column-gap: 2px;

  &.--main {
    grid-row: 1;
    grid-column: 2;

    @media (max-width: 1080px) {
      grid-row: 2;
      grid-column: 1;
    }
  }

  &.--overview {
    grid-row: 2;
    grid-column: 2;

    @media (max-width: 1080px) {
      grid-row: 3;
      grid-column: 1;
    }
  }
`;
