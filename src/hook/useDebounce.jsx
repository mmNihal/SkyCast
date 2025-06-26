import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
  const timeOutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeOutRef.current) {
        clearTimeout(timeOutRef.current);
      }
    };
  }, []);

  const debouncedCallBack = (...argu) => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }

    timeOutRef.current = setTimeout(() => {
      callback(...argu);
    }, delay);
  };

  return debouncedCallBack;
};

export default useDebounce;
