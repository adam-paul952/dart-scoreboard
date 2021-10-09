import React, { useEffect, createContext } from "react";
import useLocalStorage from "../util/useLocalStorage";
import PropTypes from "prop-types";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    const localTheme = JSON.parse(localStorage.getItem("theme"));
    localTheme && setTheme(localTheme);
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = { children: PropTypes.element };

export { ThemeProvider, ThemeContext };
