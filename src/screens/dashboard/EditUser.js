import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form, Modal } from "react-bootstrap";

import useUserAPI from "../../util/useUserAPI";

import { displaySessionUsername } from "../../util/useSessionStorage";

const EditUserInfo = ({ showEditUser, setShowEditUser }) => {
  const { updateUserById } = useUserAPI();

  const username = displaySessionUsername();

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const noPasswordMatch = password !== passwordConfirm;

  const handleSubmit = ({ username, password }) => {
    updateUserById({ username, password });
    setShowEditUser(false);
    alert(`Password successfully changed`);
  };

  const onHandleClose = () => {
    setShowEditUser(false);
  };

  const disableButton = () => {
    if (password.length < 5) {
      return true;
    } else if (noPasswordMatch) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <Modal show={showEditUser} onHide={onHandleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "black" }}>
          <Form>
            <Form.Group className="m-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                disabled
              />
            </Form.Group>
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
            {noPasswordMatch && (
              <p style={{ color: "red", fontWeight: "bold" }}>
                Passwords must match
              </p>
            )}
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
          </Form>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit({ username, password });
            }}
            disabled={disableButton()}
          >
            Change Password
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditUserInfo;

EditUserInfo.propTypes = {
  showEditUser: PropTypes.bool,
  setShowEditUser: PropTypes.func,
};
