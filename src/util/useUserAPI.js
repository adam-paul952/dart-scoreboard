import axios from "axios";
import { useState } from "react";

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
  // const [user, setUser] = useState();

  const loginUser = ({ username, password }) => {
    axios
      .post(loginUserURL, { username, password })
      .then((res) => {
        setIsLoggedIn(true);
        // setUser(res.data);
        sessionStorage.setItem(
          "userId",
          JSON.stringify(res.data.id.toString())
        );
        console.log(`Successfully logged in user: ${res.data.username}`);
      })
      .catch((err) => {
        alert(`Unsuccessful login`);
        console.log(err);
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

  const deleteUserById = (userId) => {
    axios
      .delete(`http://localhost:8080/users/${userId}`, { params: userId })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return {
    createUser,
    loginUser,
    updateUserById,
    deleteUserById,
    isLoggedIn,
    setIsLoggedIn,
  };
};

export default useUserAPI;
