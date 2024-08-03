import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardDescription = styled.div`
  box-sizing: border-box;

  width: 415px;
  height: fit-content;

  display: grid;
  align-items: start;
  justify-content: start;
  align-content: center;
  justify-items: stretch;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: repeat(3, auto);
  gap: 8px;
  padding: 17px 24px;

  position: relative;

  background: var(--white);
  border: 1px solid var(--gray);
  z-index: 1;

  &.--separated {
    width: 334px;
    height: auto;
    grid-template-columns: 1fr auto;
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 720px) {
    width: 100%;
    &.--separated {
      width: 334px;
    }
  }
`;

export const TextHeading = styled.p`
  grid-row: 1;
  grid-column: 2;

  width: 100%;
  height: fit-content;

  font-family: 'Inter', serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 26px;
  letter-spacing: -0.03em;

  color: var(--black);

  &.--separated {
    grid-column: 1;
    font-family: 'Lexend Deca', sans-serif;
  }
`;

export const TextSubheading = styled.p`
  margin-top: -7px;
  grid-row: 2;
  grid-column: 2;

  width: auto;
  height: fit-content;

  font-family: 'Inter', serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: -0.01em;

  color: var(--primary-lighter);

  &.--separated {
    grid-column: 1;
    font-family: 'Lexend Deca', sans-serif;
  }
`;

export const TextStatus = styled.p`
  grid-row: 3;
  grid-column: 2;

  width: auto;
  height: fit-content;

  font-family: 'Inter', serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: -0.01em;

  color: var(--black);

  &.--separated {
    grid-column: 1;
    font-family: 'Lexend Deca', sans-serif;
  }
`;

export const ImageLink = styled(Link)`
  grid-row: 1 / 4;
  grid-column: 1;
  width: 100%;
  height: 100%;
`;
