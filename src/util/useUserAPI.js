import axios from "axios";
import { useState, useEffect } from "react";

const createUserURL = "http://localhost:8080/users/";
const loginUserURL = "http://localhost:8080/users/login";

const useUserAPI = () => {
  const createUser = ({ username, password }) => {
    axios
      .post(createUserURL, { username, password })
      .then((res) => {
        console.log(`Successfully created user: ${res.data.username}`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUserId, setLoggedInUserId] = useState("");

  useEffect(() => {
    console.log(`Logged in user id: ${loggedInUserId}`);
  }, [loggedInUserId]);

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

  const findAllUsers = () => {
    axios
      .get(createUserURL)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const updateUserById = ({ userId }) => {
    axios
      .put(createUserURL, { params: userId })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const deleteUserById = ({ userId }) => {
    axios.delete(`http://localhost:8080/users/${userId}`, { params: userId });
  };

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
