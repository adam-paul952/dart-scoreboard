import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const themeToggle = (theme) => setTheme(theme);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeToggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = { children: PropTypes.element };

export { ThemeProvider, ThemeContext };
