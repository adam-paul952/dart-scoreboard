import React from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Header from "../components/Header";

const LoginUser = () => {
  return (
    <>
      <Header title="Log In" goBackButton></Header>
      <Form>
        <Form.Group className="m-3" controlId="">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="m-3" controlId="">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button>Log In</Button>
      </Form>
      <p className="mt-3">No account, no problem click here to register</p>
      <Button as={Link} to="/game/register">
        Register
      </Button>
    </>
  );
};

export default LoginUser;
