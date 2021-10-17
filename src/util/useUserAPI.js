import axios from "axios";
import { useState } from "react";

const createUserURL = "http://localhost:8080/users/";
const loginUserURL = "http://localhost:8080/users/login";

const useUserAPI = () => {
  const createUser = ({ name, username, password }) => {
    axios
      .post(createUserURL, { name, username, password })
      .then((res) => {
        console.log(`Successfully created user: ${res.data.username}`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUserId, setLoggedInUserId] = useState("");

  const loginUser = ({ username, password }) => {
    axios
      .post(loginUserURL, { username, password })
      .then((res) => {
        setIsLoggedIn(true);
        setLoggedInUserId(res.data.id);
        console.log(`Successfully logged in user: ${res.data.username}`);
      })
      .catch((err) => {
        alert(`Unsuccessful login`);
        console.log(err);
      });
  };

  const findAllUsers = () => {};

  const updateUserById = () => {};

  const deleteUserById = () => {};

  return {
    createUser,
    loginUser,
    findAllUsers,
    updateUserById,
    deleteUserById,
    isLoggedIn,
    loggedInUserId,
  };
};

export default useUserAPI;
