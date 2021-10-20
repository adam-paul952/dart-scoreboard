import { useState } from "react";

const useSessionStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (err) {
      console.log(err);
      return defaultValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      sessionStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.log(err);
    }
  };

  return [storedValue, setValue];
};

export const displaySessionUsername = () => {
  const usernameToken = JSON.parse(sessionStorage.getItem("username"));
  return usernameToken;
};

export const displaySessionUserIdToken = () => {
  const userIdToken = JSON.parse(sessionStorage.getItem("userId"));
  return userIdToken;
};

export default useSessionStorage;
