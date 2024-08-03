import styled from 'styled-components';

export const Loader = styled.div`
  width: 100%;
  height: 100%;
  min-height: 514px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  column-gap: 50px;
  row-gap: 20px;

  width: 100%;
  height: fit-content;
  min-height: 514px;
`;
