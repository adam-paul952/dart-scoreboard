import { useEffect } from "react";

import useLocalStorage from "./useLocalStorage";

export const useDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const setMode = (mode) => {
    localStorage.setItem("theme", JSON.stringify(mode));
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = JSON.parse(localStorage.getItem("theme"));
    localTheme && setTheme(localTheme);
  }, [theme]);

  return [theme, themeToggler];
};
