import React from "react";
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
import DisplayAllPlayerStats from "../screens/dashboard/AllPlayerStats";

import useUserAPI from "../util/useUserAPI";

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
  setShowDeleteUser,
  setShowEditUser,
}) => {
  const history = useHistory();
  const { logUserOut } = useUserAPI();

  const handleLogout = () => {
    logUserOut();
    sessionStorage.clear();
  };

  return (
    <>
      <Container>
        <Navbar
          aria-label={title}
          variant={theme}
          className="mt-3 mb-5 justify-content-between"
        >
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
          {outShotButton && <X01OutShotButton theme={theme} />}
          {loginDropDown && (
            <HeaderDropDownMenu
              aria-label="loginDropDown"
              handleLogout={handleLogout}
              theme={theme}
              themeToggle={themeToggle}
              username={username}
              setShowDeleteUser={setShowDeleteUser}
              setShowEditUser={setShowEditUser}
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
          {switchThemeButton && <Toggle />}
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
  setShowDeleteUser: PropTypes.func,
  setShowEditUser: PropTypes.func,
};

export default Header;

const HeaderDropDownMenu = ({
  handleLogout,
  theme,
  themeToggle,
  username,
  setShowDeleteUser,
  setShowEditUser,
}) => {
  const onShowDelete = () => {
    setShowDeleteUser(true);
  };

  const onShowEdit = () => {
    setShowEditUser(true);
  };

  return (
    <>
      <DropdownButton className="px-3" title={username}>
        <Dropdown.Item>
          <DisplayAllPlayerStats />
        </Dropdown.Item>
        <Dropdown.Item as={Button} onClick={() => onShowEdit()}>
          Edit User
        </Dropdown.Item>
        <Dropdown.Item as={Button} onClick={() => onShowDelete()}>
          Delete User
        </Dropdown.Item>
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
  setShowDeleteUser: PropTypes.func,
  setShowEditUser: PropTypes.func,
};
