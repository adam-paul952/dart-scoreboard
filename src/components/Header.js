import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Button, Container, Navbar } from "react-bootstrap";
// import { useDarkMode } from "../util/useDarkMode";
import { BsSkipBackward } from "react-icons/bs";
// import { ThemeProvider } from "styled-components";
import Toggle from "../util/Toggler";
import { ThemeContext } from "../contexts/Provider";

const Header = ({ title, goBackButton, resetButton, resetScoreList }) => {
  const history = useHistory();
  const { theme, themeToggle } = useContext(ThemeContext);

  return (
    // <ThemeProvider theme={themeMode}>
    // <GlobalStyles />
    <>
      <Container>
        <Navbar variant={theme} className="mb-5 justify-content-between">
          {goBackButton && (
            <Button
              onClick={() => history.goBack()}
              variant="primary"
              size="sm"
            >
              <BsSkipBackward />
              Go back
            </Button>
          )}
          <Navbar.Brand>{title}</Navbar.Brand>
          {resetButton && (
            <Button
              onClick={() => resetScoreList()}
              variant="primary"
              size="sm"
            >
              Reset Game
            </Button>
          )}
          <>
            <Toggle theme={theme} onclick={themeToggle} />
          </>
        </Navbar>
      </Container>
    </>
    // </ThemeProvider>
  );
};

Header.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  goBackButton: PropTypes.bool,
  resetButton: PropTypes.bool,
  resetScoreList: PropTypes.func,
};

export default Header;
