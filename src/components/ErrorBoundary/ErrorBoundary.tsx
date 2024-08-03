import { ErrorContainer } from '@components/ErrorBoundary/styled';
import { ERROR } from '@constants/errors';
import { MESSAGES } from '@constants/values';
import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error | null): void {
    console.log(ERROR.BOUNDARY, error);
    this.setState({ hasError: true });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <ErrorContainer>{MESSAGES.ERROR_OCCURRED}</ErrorContainer>;
    }

    return <>{this.props.children}</>;
  }
}
