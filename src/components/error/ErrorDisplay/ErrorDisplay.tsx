import {
  ErrorContainer,
  ErrorHeading,
  ErrorMessage,
} from '@components/error/ErrorDisplay/styled';
import { DEFAULT_TIMER_DELAY } from '@constants/values';
import { useTimeout } from '@hooks/useTimeout';
import React, { useEffect, useState } from 'react';
import { JSX } from 'react';

interface ErrorDisplayProps {
  error: string | null;
}

export function ErrorDisplay({ error }: ErrorDisplayProps): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useTimeout(
    () => {
      setIsVisible(false);
    },
    error ? DEFAULT_TIMER_DELAY : null,
  );

  useEffect(() => {
    if (error) {
      setIsVisible(true);
    }
  }, [error]);

  return (
    <>
      <ErrorContainer className={isVisible ? '--animated' : ''}>
        <ErrorHeading>{error}</ErrorHeading>
        <ErrorMessage>404</ErrorMessage>
      </ErrorContainer>
    </>
  );
}
