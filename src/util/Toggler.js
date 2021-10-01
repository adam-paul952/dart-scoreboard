import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import { ThemeContext } from "../contexts/Provider";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const oppositeTheme = theme === "dark" ? "light" : "dark";

  return (
    <Button variant={oppositeTheme} onClick={setTheme}>
      Switch Theme
    </Button>
  );
};

Toggle.propTypes = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.func,
};

export default Toggle;
