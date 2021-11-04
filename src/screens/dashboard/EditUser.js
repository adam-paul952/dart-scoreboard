import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import useUserAPI from "../../util/useUserAPI";
import { displaySessionUserUuidToken } from "../../util/useSessionStorage";

const EditUserInfo = () => {
  const userId = displaySessionUserUuidToken();

  const { loginUser, updateUserById } = useUserAPI();

  const [userCredentials, setUserCredentials] = useState(false);
  const [username, setUsername] = useState("");
  const [currentUserPassword, setCurrentUserPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const noPasswordMatch = password !== passwordConfirm;

  const handleSubmit = (userId, { username, password }) => {
    updateUserById(userId, { username, password });
    sessionStorage.setItem("username", JSON.stringify(username));
  };

  const checkUserCredentials = (username, password) => {
    loginUser({ username, password });
    if (loginUser) {
      setUserCredentials(true);
    }
  };

  return (
    <>
      <Form>
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
            placeholder="Current Password"
            onChange={(e) => {
              setCurrentUserPassword(e.target.value);
            }}
            value={currentUserPassword}
          />
        </Form.Group>

        {userCredentials && (
          <Form.Group className="m-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="New Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </Form.Group>
        )}
        {noPasswordMatch && (
          <p style={{ color: "red", fontWeight: "bold" }}>
            Passwords must match
          </p>
        )}
        {userCredentials && (
          <Form.Group className="m-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm New Password"
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
              }}
              value={passwordConfirm}
            />
          </Form.Group>
        )}
        {userCredentials ? (
          <Button
            variant="primary"
            as={Link}
            to="/dashboard"
            onClick={() => {
              handleSubmit(userId, { username, password });
            }}
          >
            Edit User Info
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={() => {
              checkUserCredentials(username, currentUserPassword);
            }}
          >
            Confirm Credentials
          </Button>
        )}
      </Form>
    </>
  );
};

export default EditUserInfo;
