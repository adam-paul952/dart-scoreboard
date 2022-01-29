import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import Header from "../../components/Header";
import useUserAPI from "../../util/useUserAPI";
import useSessionStorage from "../../util/useSessionStorage";

import { ThemeContext } from "../../contexts/ThemeProvider";
import { AuthContext } from "../../contexts/AuthProvider";

const LoginUser = () => {
  const { theme } = React.useContext(ThemeContext);
  const { loginUser } = useUserAPI();
  const { isAuthenticated } = React.useContext(AuthContext);

  const history = useHistory();
  const [, setSessionUsername] = useSessionStorage("username", "");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ username, password });
  };

  useEffect(() => {
    const userIsLoggedIn = () => {
      if (isAuthenticated) {
        setSessionUsername(username);
        history.push("/dashboard");
      } else {
        setSessionUsername("");
      }
    };
    userIsLoggedIn();
  }, [isAuthenticated, setSessionUsername, username, history]);

  return (
    <>
      <Header title="Log In" goBackButton theme={theme} />
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
      <div className="mt-3">
        <Button as={Link} to="/game/register">
          Register
        </Button>
      </div>
    </>
  );
};

export default LoginUser;
