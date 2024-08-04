import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryWrapperProps {
  onError: (error: Error | null) => void;
  children: ReactNode;
}

export class ErrorBoundaryWrapper extends Component<ErrorBoundaryWrapperProps> {
  componentDidCatch(error: Error | null): void {
    this.props.onError(error);
  }

  render(): ReactNode {
    return <>{this.props.children}</>;
  }
}
