import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../contexts/ThemeProvider";
import { Container } from "react-bootstrap";

// TODO: Use hook to replace CSS media queries
// import useWindowWidth from "../util/useWindowWidth";
import backgroundDark from "../image/dartbg_dark.jpg";
import backgroundLight from "../image/dartbg_light.jpg";

const Background = ({ children }) => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <>
      <Container
        fluid
        aria-label="background"
        className="background"
        style={{
          backgroundImage:
            theme === "dark"
              ? `url(${backgroundDark})`
              : `url(${backgroundLight})`,
        }}
      >
        {children}
      </Container>
    </>
  );
};

Background.propTypes = {
  children: PropTypes.node,
};

export default Background;
