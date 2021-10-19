import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import {
  Button,
  ButtonGroup,
  Container,
  Form,
  Table,
  Col,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/Provider";

import useUserAPI from "../util/useUserAPI";
import usePlayerAPI from "../util/usePlayerAPI";
import useSessionStorage from "../util/useSessionStorage";

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
          <Button>Create Game</Button>
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

export const EditUserInfo = () => {
  // const { displayUserIdToken } = useSessionStorage();

  // const { updateUserById } = useUserAPI();

  // const userId = displayUserIdToken();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // useEffect(() => {
  //   console.log(displayUserIdToken());
  // }, [displayUserIdToken]);
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-3" controlId="username">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
        </Form.Group>
        <Form.Group className="m-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </Form.Group>
        {/* {noPasswordMatch && (
          <p style={{ color: "red", fontWeight: "bold" }}>
            Passwords must match
          </p>
        )} */}
        <Form.Group className="m-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
            value={passwordConfirm}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update user info
        </Button>
      </Form>
    </>
  );
};

export const DeleteUser = () => {
  const { deleteUserById } = useUserAPI();
  const { displayUserToken, displayUserIdToken } = useSessionStorage();

  const username = displayUserToken();
  const userId = displayUserIdToken();

  const handleDelete = (userId) => {
    deleteUserById(userId);
  };

  return (
    <>
      <p>Are you sure you would like to delete {username}?</p>
      <Button
        onClick={() => {
          handleDelete(userId);
        }}
      >
        Delete User
      </Button>
    </>
  );
};

export const SelectPlayersFromDB = () => {
  const { theme } = useContext(ThemeContext);
  const { userPlayerList, getPlayerByUserId, deletePlayerById, createPlayer } =
    usePlayerAPI();

  const { displayUserIdToken } = useSessionStorage();
  const userId = displayUserIdToken();

  useEffect(() => {
    getPlayerByUserId(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [playerName, setPlayerName] = useState("");

  const handleDelete = (id) => {
    deletePlayerById(id);
    setTimeout(() => {
      getPlayerByUserId(userId);
    });
  };

  const handleCreate = (userId) => {
    createPlayer(playerName, userId);
    setTimeout(() => {
      getPlayerByUserId(userId);
    });
  };

  return (
    <>
      <Form>
        <Container className="mt-5 mb-5" fluid>
          <Row className="justify-content-md-center">
            <Col>
              <input
                type="text"
                name="player"
                placeholder="Player Name"
                onChange={(e) => {
                  setPlayerName(e.target.value);
                }}
                value={playerName}
              />
            </Col>
            <Col>
              <Button
                onClick={() => {
                  handleCreate(userId);
                }}
              >
                Add Player
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
      <Table variant={theme} bordered striped>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Select Player</th>
            <th>Edit Player</th>
            <th>Delete Player</th>
          </tr>
        </thead>
        <tbody>
          {userPlayerList &&
            userPlayerList.map(({ id, name }) => {
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>
                    <Form.Check type="checkbox" />
                  </td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      // onClick={}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default Dashboard;
