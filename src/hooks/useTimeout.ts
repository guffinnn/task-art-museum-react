import { TimeoutProps } from '@custom-types/timeoutProps';
import { useEffect, useRef } from 'react';

export function useTimeout({ callback, delay }: TimeoutProps): void {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      const id = setTimeout(() => savedCallback.current(), delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
}
