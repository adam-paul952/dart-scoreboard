import React from "react";
import { Button } from "react-bootstrap";

import useUserAPI from "../../util/useUserAPI";
import useSessionStorage from "../../util/useSessionStorage";

const DeleteUser = () => {
  const { deleteUserById } = useUserAPI();
  const { displayUserToken, displayUserIdToken } = useSessionStorage();

  const username = displayUserToken();
  const userId = displayUserIdToken();

  const handleDelete = (userId) => {
    deleteUserById(userId);
  };

  return (
    <>
      <p>Are you sure you would like to delete {username}?</p>
      <Button
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
