import { useEffect, useState } from "react";

const useLocalstorage = (storageKey, defaultStorage) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? defaultStorage
  );
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

export default useLocalstorage;
