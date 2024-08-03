import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  width: 387px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 70px;

  @media (max-width: 720px) {
    width: 350px;
  }
`;

export const CardImage = styled.div<{ imageUrl: string }>`
  position: relative;
  width: 100%;
  height: 444px;

  top: 0;
  left: 0;

  background: ${({ imageUrl }) => `url(${imageUrl})`} no-repeat center center;
  background-size: cover;
  z-index: 0;
  transition: all 0.45s ease-in-out;

  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 35px 14px rgba(13, 13, 13, 0.04);
  }

  @media (max-width: 720px) {
    height: 400px;
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
