import { JSX, useState } from 'react';
import './ErrorBoundary.css';

interface ErrorBoundaryProps {
  children: JSX.Element;
}

function ErrorBoundary({ children }: ErrorBoundaryProps): JSX.Element {
  const [hasError, setHasError] = useState<boolean>(false);

  const errorHandler = (error: Error | undefined): void => {
    console.log('ErrorBoundary', error);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className="error">
        Something went wrong. Please refresh the page.
      </div>
    );
  }

  return <>{children}</>;
}

export default ErrorBoundary;
