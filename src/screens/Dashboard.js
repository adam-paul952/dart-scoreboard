import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import useUserAPI from "../util/useUserAPI";
import useSessionStorage from "../util/useSessionStorage";

const Dashboard = () => {
  const { token, displayUserToken } = useSessionStorage();
  const username = displayUserToken();

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <>
      <Header title="Dashboard" goBackButton />
      <p>
        Welcome back <b>{username}</b>
      </p>
      <>What would you like to do?</>
      <Container className="m-3">
        <Button>Create Game</Button>
        <Button>Select Players</Button>
        <Button as={Link} to="/user/edit">
          Edit user info
        </Button>
      </Container>
      <Container className="m-3">
        <Button as={Link} to="/user/delete">
          Delete User
        </Button>
        <Button as={Link} to="/game/login" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    </>
  );
};

export const EditUserInfo = () => {
  const { updateUserById, loggedInUserId } = useUserAPI();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    console.log(`logged in user id : ${loggedInUserId}`);
  });
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
  const { token, displayUserToken } = useSessionStorage();
  const username = displayUserToken();
  return (
    <>
      <p>Are you sure you would like to delete {username}?</p>
      <Button onClick={deleteUserById}>Delete User</Button>
    </>
  );
};

export default Dashboard;
