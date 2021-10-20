import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import Header from "../../components/Header";
import useUserAPI from "../../util/useUserAPI";
import useSessionStorage from "../../util/useSessionStorage";

const LoginUser = () => {
  const { loginUser, isLoggedIn } = useUserAPI();
  // eslint-disable-next-line
  const [sessionUsername, setSessionUsername] = useSessionStorage(
    "username",
    ""
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ username, password });
    setAlert(true);
  };

  useEffect(() => {
    if (isLoggedIn) {
      setSessionUsername(username);
    } else {
      setSessionUsername("");
    }
  }, [isLoggedIn, setSessionUsername, username]);

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    }
  }, [alert]);

  return (
    <>
      <Header title="Log In" goBackButton></Header>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-3" controlId="username">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </Form.Group>
        <Form.Group className="m-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Button type="submit">Log In</Button>
      </Form>
      <p className="mt-5">No account, no problem click here to register</p>
      {alert && <h2>Login Successful</h2>}
      <div className="mt-3">
        {isLoggedIn ? (
          <Button as={Link} to="/dashboard">
            Continue
          </Button>
        ) : (
          <Button as={Link} to="/game/register">
            Register
          </Button>
        )}
      </div>
    </>
  );
};

export default LoginUser;
