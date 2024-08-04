import {
  ErrorContainer,
  ErrorHeading,
  ErrorMessage,
} from '@components/error/ErrorDisplay/styled';
import { BAD_REQUEST, DEFAULT_TIMER_DELAY } from '@constants/values';
import { useTimeout } from '@hooks/useTimeout';
import React, { useEffect, useState } from 'react';
import { JSX } from 'react';

interface ErrorDisplayProps {
  error: string | null;
}

export function ErrorDisplay({ error }: ErrorDisplayProps): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useTimeout({
    callback: () => {
      setIsVisible(false);
    },
    delay: error ? DEFAULT_TIMER_DELAY : null,
  });

  useEffect(() => {
    if (error) {
      setIsVisible(true);
    }
  }, [error]);

  return (
    <>
      <ErrorContainer className={isVisible ? '--animated' : ''}>
        <ErrorHeading>{error}</ErrorHeading>
        <ErrorMessage>{BAD_REQUEST}</ErrorMessage>
      </ErrorContainer>
    </>
  );
}
