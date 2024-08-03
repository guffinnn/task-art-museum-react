import styled from 'styled-components';

export const Loader = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 16px;

  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: -0.01em;

  color: var(--primary);

  width: 100%;
  max-width: 416px;
  height: 130px;

  background: #ffffff;
  border: 1px solid #f0f1f1;
`;
