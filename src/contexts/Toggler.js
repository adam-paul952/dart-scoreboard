import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import { ThemeContext } from "./ThemeProvider";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const oppositeTheme = theme === "dark" ? "light" : "dark";

  return (
    <Button
      aria-label="toggleTheme"
      style={{ width: "150px" }}
      variant={oppositeTheme}
      onClick={setTheme}
    >
      {theme === "light" ? (
        <BsFillBrightnessHighFill style={{ fontSize: "1.5rem" }} />
      ) : (
        <FaMoon style={{ fontSize: "1.25rem" }} />
      )}
    </Button>
  );
};

Toggle.propTypes = {
  theme: PropTypes.string,
};

export default Toggle;
