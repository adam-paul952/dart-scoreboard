import React from "react";
import Header from "../../components/Header";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { displaySessionUsername } from "../../util/useSessionStorage";

import LoginUser from "./LogIn";
import ShowPlayersFromDB from "./ShowPlayersFromDB";

const Dashboard = () => {
  const username = displaySessionUsername();

  if (!username) {
    return <LoginUser />;
  }

  return (
    <>
      <Header title="Dashboard" goBackButton loginDropDown />
      <Container className="m-3">
        <ButtonGroup>
          <Button as={Link} to="/game/create">
            Create Game
          </Button>
        </ButtonGroup>
      </Container>
      <ShowPlayersFromDB />
    </>
  );
};

export default Dashboard;
