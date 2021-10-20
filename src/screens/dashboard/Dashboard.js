import React from "react";
import Header from "../../components/Header";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import useSessionStorage from "../../util/useSessionStorage";

import LoginUser from "./LogIn";

const Dashboard = () => {
  const { displayUserToken } = useSessionStorage();
  const username = displayUserToken();

  const handleLogout = () => {
    sessionStorage.clear();
  };

  if (!username) {
    return <LoginUser />;
  }

  return (
    <>
      <Header title="Dashboard" goBackButton />
      <p>
        Welcome back <b>{username}</b>
      </p>
      <p>What would you like to do?</p>
      <Container className="m-3">
        <ButtonGroup>
          <Button as={Link} to="/game/create">
            Create Game
          </Button>
          <Button as={Link} to="/user/select_players">
            Select Players
          </Button>
          <Button as={Link} to="/user/edit">
            Edit user info
          </Button>
        </ButtonGroup>
      </Container>
      <Container className="m-3">
        <ButtonGroup>
          <Button as={Link} to="/user/delete">
            Delete User
          </Button>
          <Button as={Link} to="/game/login" onClick={handleLogout}>
            Logout
          </Button>
        </ButtonGroup>
      </Container>
    </>
  );
};

export default Dashboard;
