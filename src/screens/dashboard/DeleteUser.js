import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import useUserAPI from "../../util/useUserAPI";
import {
  displaySessionUsername,
  displaySessionUserUuidToken,
} from "../../util/useSessionStorage";

const DeleteUser = () => {
  const { deleteUserById } = useUserAPI();
  const username = displaySessionUsername();
  const userId = displaySessionUserUuidToken();

  const handleDelete = (userId) => {
    deleteUserById(userId);
    sessionStorage.clear();
  };

  return (
    <>
      <p>Are you sure you would like to delete {username}?</p>
      <Button
        as={Link}
        to="/game/login"
        onClick={() => {
          handleDelete(userId);
        }}
      >
        Delete User
      </Button>
    </>
  );
};

export default DeleteUser;
