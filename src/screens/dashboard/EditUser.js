import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const EditUserInfo = () => {
  // const { displayUserIdToken } = useSessionStorage();

  // const { updateUserById } = useUserAPI();

  // const userId = displayUserIdToken();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // useEffect(() => {
  //   console.log(displayUserIdToken());
  // }, [displayUserIdToken]);
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

export default EditUserInfo;
