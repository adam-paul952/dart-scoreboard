import React from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import useUserAPI from "../../util/useUserAPI";

const DeleteUser = ({ showDeleteUser, setShowDeleteUser }) => {
  const { deleteUserById } = useUserAPI();

  const onHandleClose = () => {
    setShowDeleteUser(false);
  };

  const handleDelete = () => {
    deleteUserById();
    sessionStorage.clear();
  };

  return (
    <>
      <Modal show={showDeleteUser} onHide={onHandleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "black" }}>
          <p>Are you sure you would like to delete your account?</p>
          <p>
            <strong>Note: This can not be undone!</strong>
          </p>
          <Button
            variant="danger"
            as={Link}
            to="/game/login"
            onClick={() => {
              handleDelete();
            }}
          >
            Delete Account
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeleteUser;

DeleteUser.propTypes = {
  showDeleteUser: PropTypes.bool,
  setShowDeleteUser: PropTypes.func,
};
