import styled from 'styled-components';

export const CardImage = styled.div<{ image_url: string }>`
  grid-column: 1;
  grid-row: 1 / 3;

  position: relative;
  width: 500px;
  height: 570px;

  top: 0;
  left: 0;

  background: ${({ image_url }) => `url(${image_url})`} no-repeat center center;
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
