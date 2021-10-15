import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Header from "../components/Header";
import useAPI from "../util/useAPI";

const UserRegistration = () => {
  const { setToken, createUser } = useAPI();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = createUser({ username, password });
    setToken(token);
  };
  return (
    <>
      <Header title="User Registration" goBackButton />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-3" controlId="">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="m-3" controlId="">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="m-3" controlId="">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="m-3" controlId="">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="confirmPassword" placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default UserRegistration;
