import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../contexts/Provider";

import backgroundDark from "../dartbg_dark.jpg";
import backgroundLight from "../dartbg_light.jpg";

const Background = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="background"
      style={{
        backgroundImage:
          theme === "dark"
            ? `url(${backgroundDark})`
            : `url(${backgroundLight})`,
      }}
    >
      {children}
    </div>
  );
};

Background.propTypes = {
  children: PropTypes.node,
};

export default Background;
