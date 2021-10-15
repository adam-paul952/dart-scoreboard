import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Header from "../components/Header";
import useAPI from "../util/useAPI";

const LoginUser = () => {
  const { setToken, loginUser } = useAPI();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = loginUser({ username, password });
    setToken(token);
  };

  return (
    <>
      <Header title="Log In" goBackButton></Header>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-3" controlId="">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="m-3" controlId="">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Log In</Button>
      </Form>
      <p className="mt-3">No account, no problem click here to register</p>
      <Button as={Link} to="/game/register">
        Register
      </Button>
    </>
  );
};

export default LoginUser;
