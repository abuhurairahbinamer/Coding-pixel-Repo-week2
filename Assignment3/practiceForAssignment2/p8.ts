import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initial: T) {
  //  READ (only once)
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initial;
  });

  //  WRITE (whenever value changes)
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
//deeper
  useEffect(() => {
  const handler = (e: StorageEvent) => {
    if (e.key === key && e.newValue) {
      setValue(JSON.parse(e.newValue));
    }
  };

  window.addEventListener("storage", handler);
  return () => window.removeEventListener("storage", handler);
}, [key]);

  return [value, setValue] as const;
}