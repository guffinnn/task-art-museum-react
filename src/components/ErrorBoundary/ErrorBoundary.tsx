import './ErrorBoundary.css';

import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error | null, errorInfo: React.ErrorInfo): void {
    console.log('ErrorBoundary', error, errorInfo);
    this.setState({ hasError: true });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="error">
          Something went wrong. Please refresh the page.
        </div>
      );
    }

    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
