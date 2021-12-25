import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeContext } from "./ThemeProvider";

export const themes = {
  dark: {
    body: "#363537",
    text: "#E2E2E2",
    toggleBorder: "#6B8096",
    gradient: "linear-gradient(#091236, #1E215D)",
  },
  light: {
    body: "#E2E2E2",
    text: "#363537",
    toggleBorder: "#FFF",
    gradient: "linear-gradient(#39598A, #79D7ED)",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
}`;

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

Theme.propTypes = { children: PropTypes.element };

export default Theme;
