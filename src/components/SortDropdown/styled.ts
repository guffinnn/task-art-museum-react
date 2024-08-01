import styled from 'styled-components';

export const SortDropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Label = styled.label`
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: var(--primary-lighter);
`;

export const Select = styled.select`
  display: flex;
  padding: 6px 4px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border: 1px solid var(--black-background);
  background: var(--white);
  font-family: 'Inter', serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  flex: 1 0 0;
`;
