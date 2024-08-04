import styled from 'styled-components';

export const ErrorContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 16px;

  position: fixed;
  width: 350px;
  height: 150px;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  opacity: 0;
  transition: all 0.45s ease-in-out;

  background: var(--white);
  border: 1px solid var(--primary-lighter);
  box-shadow: 0 6px 12px var(--black-background);
  border-radius: 12px;
  z-index: 999;

  &.--animated {
    transform: translate(-50%, 20px);
    opacity: 1;
  }
`;

export const ErrorHeading = styled.div`
  width: auto;
  height: fit-content;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  letter-spacing: -0.03em;

  color: var(--black);
`;

export const ErrorMessage = styled.div`
  width: auto;
  height: fit-content;

  font-family: 'Inter', serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  letter-spacing: -0.01em;

  color: var(--primary-lighter);
`;
