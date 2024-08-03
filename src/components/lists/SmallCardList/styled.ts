import styled from 'styled-components';

export const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
  gap: 16px;
  position: relative;
  width: 100%;
  height: fit-content;
`;

export const CardImageSmall = styled.div<{ imageUrl: string }>`
  grid-row: 1 / 4;
  grid-column: 1;

  position: relative;
  width: 87px;
  height: 100%;
  margin-right: 8px;

  background: ${({ imageUrl }) => `url(${imageUrl})`} no-repeat center center;
  background-size: cover;

  cursor: pointer;
`;
