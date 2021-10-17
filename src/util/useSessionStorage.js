import { useState } from "react";

const useSessionStorage = (key, defaultValue) => {
  const [token, setToken] = useState(() => {
    try {
      const userToken = sessionStorage.getItem(key);
      return userToken ? JSON.parse(userToken) : defaultValue;
    } catch (err) {
      console.log(err);
      return defaultValue;
    }
  });

  const saveToken = (userToken) => {
    sessionStorage.setItem(key, JSON.stringify(userToken));
    setToken(userToken);
  };

  return { saveToken, token };
};

export default useSessionStorage;
