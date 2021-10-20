import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import {
  Button,
  Container,
  Navbar,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

import { BsSkipBackward } from "react-icons/bs";

import Toggle from "../contexts/Toggler";
import { ThemeContext } from "../contexts/Provider";
import X01OutShotButton from "./X01OutChart";

import { displaySessionUsername } from "../util/useSessionStorage";

const Header = ({
  title,
  goBackButton,
  resetButton,
  resetScoreList,
  switchThemeButton,
  outShotButton,
  loginDropDown,
}) => {
  const history = useHistory();
  const { theme, themeToggle } = useContext(ThemeContext);
  const username = displaySessionUsername();

  const handleLogout = () => {
    sessionStorage.clear();
  };

  return (
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
          {outShotButton && <X01OutShotButton />}
          {loginDropDown && (
            <DropdownButton
              className="px-3"
              title={username}
              id="navbarScrollingDropdown"
              menuVariant="dark"
            >
              <Dropdown.Item href="/user/edit">Edit User</Dropdown.Item>
              <Dropdown.Item href="/user/delete">Delete User</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/game/login" onClick={handleLogout}>
                LogOut
              </Dropdown.Item>
            </DropdownButton>
          )}
          {resetButton && (
            <Button
              onClick={() => resetScoreList()}
              variant="primary"
              size="sm"
            >
              Reset Game
            </Button>
          )}
          {switchThemeButton && <Toggle theme={theme} onclick={themeToggle} />}
        </Navbar>
      </Container>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  goBackButton: PropTypes.bool,
  resetButton: PropTypes.bool,
  resetScoreList: PropTypes.func,
  switchThemeButton: PropTypes.bool,
  outShotButton: PropTypes.bool,
  loginDropDown: PropTypes.bool,
};

export default Header;
