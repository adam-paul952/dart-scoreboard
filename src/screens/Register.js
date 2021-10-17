import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Header from "../components/Header";

import useUserAPI from "../util/useUserAPI";

const UserRegistration = () => {
  const { createUser } = useUserAPI();

  const [playerName, setPlayerName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const noPasswordMatch = password !== passwordConfirm;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noPasswordMatch) {
      return;
    } else {
      createUser({ playerName, username, password });
    }
  };
  return (
    <>
      <Header title="User Registration" goBackButton />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-3" controlId="playername">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            onChange={(e) => {
              setPlayerName(e.target.value);
            }}
            value={playerName}
          />
        </Form.Group>
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
        {noPasswordMatch && (
          <p style={{ color: "red", fontWeight: "bold" }}>
            Passwords must match
          </p>
        )}
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
          Register
        </Button>
      </Form>
    </>
  );
};

export default UserRegistration;
