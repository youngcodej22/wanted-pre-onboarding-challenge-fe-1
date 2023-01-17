import { useState, useEffect } from "react";

type Props = {};

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const localValue = window.localStorage.getItem(key);

      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (err) {
      console.log(err);
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));

    // * key는 변하지 않겠지만 value가 변할 때 마다
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
