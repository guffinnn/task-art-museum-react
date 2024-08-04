import { DEFAULT_TIMER_DELAY } from '@constants/values';
import { useTimeout } from '@hooks/useTimeout';
import { useState } from 'react';

interface UseErrorHandlerReturn {
  error: string | null;
  setError: (error: string | null) => void;
}

export function useErrorHandler(): UseErrorHandlerReturn {
  const [error, setError] = useState<string | null>(null);

  useTimeout(
    () => {
      setError(null);
    },
    error ? DEFAULT_TIMER_DELAY : null,
  );

  return { error, setError };
}
