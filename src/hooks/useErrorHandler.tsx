import { DEFAULT_TIMER_DELAY } from '@constants/values';
import { UseErrorHandlerReturn } from '@custom-types/useErrorHandlerReturn';
import { useTimeout } from '@hooks/useTimeout';
import { useState } from 'react';

export function useErrorHandler(): UseErrorHandlerReturn {
  const [error, setError] = useState<string | null>(null);

  useTimeout({
    callback: () => {
      setError(null);
    },
    delay: error ? DEFAULT_TIMER_DELAY : null,
  });

  return { error, setError };
}
