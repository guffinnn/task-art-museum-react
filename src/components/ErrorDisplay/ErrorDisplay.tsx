import {
  ErrorContainer,
  ErrorHeading,
  ErrorMessage,
} from '@components/ErrorDisplay/styled';
import React, { useEffect, useState } from 'react';
import { JSX } from 'react';

interface ErrorDisplayProps {
  error: string | null;
}

export function ErrorDisplay({ error }: ErrorDisplayProps): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (error) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
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
