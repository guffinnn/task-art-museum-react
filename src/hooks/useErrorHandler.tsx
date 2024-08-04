import { useState } from 'react';

interface UseErrorHandlerReturn {
  error: string | null;
  setError: (error: string | null) => void;
}

export function useErrorHandler(): UseErrorHandlerReturn {
  const [error, setError] = useState<string | null>(null);

  return { error, setError };
}
