import styled from 'styled-components';

export const StyledText = styled.p`
  width: auto;
  height: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: var(--black);

  &.--heading {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 16px;
  }

  &.--subheading {
    font-size: 24px;
    line-height: 30px;
    color: var(--primary-lighter);
  }

  &.--bold {
    font-weight: 700;
  }

  span {
    display: contents;
    color: var(--primary-lighter);
  }
`;
