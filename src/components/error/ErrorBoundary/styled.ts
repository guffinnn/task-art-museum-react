import styled from 'styled-components';

export const ErrorContainer = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: 32px 24px;
  gap: 8px;
  background: var(--primary-background);
  border: 1px solid var(--black-background);

  color: var(--primary);
`;
