import React, { JSX } from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

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

    const element = screen.getByText(
      'Something went wrong. Please refresh the page.',
    );
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
