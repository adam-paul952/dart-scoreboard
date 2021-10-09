import React from "react";
import { Button, Form } from "react-bootstrap";
import Header from "../components/Header";

const UserRegistration = () => {
  return (
    <>
      <Header title="User Registration" goBackButton />
      <Form>
        <Form.Group className="m-3" controlId="">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="m-3" controlId="">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="m-3" controlId="">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="m-3" controlId="">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="confirmPassword" placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="primary">Submit</Button>
      </Form>
    </>
  );
};

export default UserRegistration;
