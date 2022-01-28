import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import Header from "../../components/Header";

import useUserAPI from "../../util/useUserAPI";

import { ThemeContext } from "../../contexts/ThemeProvider";

const UserRegistration = () => {
  const { theme } = React.useContext(ThemeContext);
  const { createUser, isRegistered, setIsRegistered } = useUserAPI();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const noPasswordMatch = password !== passwordConfirm;

  const disableRegistrationButton = () => {
    if (noPasswordMatch) {
      return true;
    } else if (password.length < 3) {
      return true;
    } else if (!username) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser({ username, password });
  };

  return (
    <>
      <Header title="User Registration" goBackButton theme={theme} />
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
        {isRegistered ? (
          <Button variant="primary" as={Link} to="/game/login">
            Continue to login
          </Button>
        ) : (
          <Button
            disabled={disableRegistrationButton()}
            variant="primary"
            type="submit"
          >
            Register
          </Button>
        )}
      </Form>
    </>
  );
};

export default UserRegistration;
