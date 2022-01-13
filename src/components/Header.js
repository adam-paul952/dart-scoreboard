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
import X01OutShotButton from "./X01OutChart";
import DisplayAllPlayerStatsButton from "../screens/dashboard/AllPlayerStats";

const Header = ({
  title,
  goBackButton,
  resetButton,
  resetScoreList,
  switchThemeButton,
  outShotButton,
  loginDropDown,
  username,
  theme,
  themeToggle,
}) => {
  const history = useHistory();

  const handleLogout = () => {
    sessionStorage.clear();
  };

  return (
    <>
      <Container>
        <Navbar variant={theme} className="mt-3 mb-5 justify-content-between">
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
            <HeaderDropDownMenu
              handleLogout={handleLogout}
              theme={theme}
              themeToggle={themeToggle}
              username={username}
            />
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
  username: PropTypes.string,
  theme: PropTypes.string,
  themeToggle: PropTypes.func,
};

export default Header;

const HeaderDropDownMenu = ({ handleLogout, theme, themeToggle, username }) => {
  return (
    <>
      <DropdownButton className="px-3" title={username} menuVariant={theme}>
        <Dropdown.Item>
          <DisplayAllPlayerStatsButton />
        </Dropdown.Item>
        <Dropdown.Item href="/user/edit">Edit User</Dropdown.Item>
        <Dropdown.Item href="/user/delete">Delete User</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="/game/login" onClick={handleLogout}>
          LogOut
        </Dropdown.Item>
        <Dropdown.Item>
          <Toggle theme={theme} onclick={themeToggle} />
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
};

HeaderDropDownMenu.propTypes = {
  handleLogout: PropTypes.func,
  theme: PropTypes.string,
  themeToggle: PropTypes.func,
  username: PropTypes.string,
};
