import { ErrorContainer } from '@components/error/ErrorBoundary/styled';
import { ErrorBoundaryWrapper } from '@components/error/ErrorBoundaryWrapper';
import { ErrorDisplay } from '@components/error/ErrorDisplay';
import { ERROR } from '@constants/errors';
import { MESSAGES } from '@constants/values';
import { useErrorHandler } from '@hooks/useErrorHandler';
import React, { JSX, ReactNode, useEffect, useState } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

export function ErrorBoundary({ children }: ErrorBoundaryProps): JSX.Element {
  const { error, setError } = useErrorHandler();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (hasError) {
      setError(ERROR.BOUNDARY);
    }
  }, [hasError, setError]);

  const handleError = (error: Error | null) => {
    console.log(ERROR.BOUNDARY, error);
    setHasError(true);
  };

  if (hasError) {
    return (
      <>
        <ErrorDisplay error={error} />
        <ErrorContainer>{MESSAGES.ERROR_OCCURRED}</ErrorContainer>
      </>
    );
  }

  return (
    <ErrorBoundaryWrapper onError={handleError}>
      {children}
    </ErrorBoundaryWrapper>
  );
}
