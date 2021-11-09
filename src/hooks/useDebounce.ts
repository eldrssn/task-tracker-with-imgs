import { useEffect, useRef } from 'react';

export default function useDebounce(func: any, delay: number, cleanUp: boolean = false) {
  const timeoutRef: any = useRef();

  function clearTimer() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }

  useEffect(() => {
    cleanUp && clearTimer();
  }, [cleanUp]);

  return (...args: any[]) => {
    clearTimer();
    timeoutRef.current = setTimeout(() => func(...args), delay);
  };
}