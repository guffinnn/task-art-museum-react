import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';
import { MESSAGES } from '@constants/values';
import { render, screen } from '@testing-library/react';
import React, { JSX } from 'react';

describe('ErrorBoundary', () => {
  it('should render error message when an error occurs', () => {
    function ThrowError(): JSX.Element {
      return <>{Error()}</>;
    }

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>,
    );

    const element = screen.getByText(MESSAGES.ERROR_OCCURRED);
    expect(element).toBeDefined();
  });

  it('should render children when no error occurs', () => {
    render(
      <ErrorBoundary>
        <div>No error here!</div>
      </ErrorBoundary>,
    );

    const element = screen.getByText('No error here!');
    expect(element).toBeDefined();
  });
});
