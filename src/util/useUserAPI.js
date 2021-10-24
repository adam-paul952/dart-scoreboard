import axios from "axios";
import { useContext, useState } from "react";
import { PingContext } from "../contexts/PingProvider";

const URL = "http://localhost:8080/users/";

const useUserAPI = () => {
  const { setPing } = useContext(PingContext);

  const createUser = ({ username, password }) => {
    axios
      .post(URL, { username, password })
      .then((res) => {
        setIsLoggedIn(true);
        console.log(`Successfully created user: ${res.data.username}`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginUser = ({ username, password }) => {
    axios
      .post(`${URL}login`, { username, password })
      .then((res) => {
        setIsLoggedIn(true);
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

  const updateUserById = (userId, { username, password }) => {
    axios
      .put(`${URL}${userId}`, { username, password })
      .then((res) => {
        console.log(`Successfully updated user: ${res.data.username}`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const deleteUserById = (userId) => {
    axios
      .delete(`${URL}${userId}`, { params: userId })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getPingFromServer = () => {
    axios
      .get(`${URL}ping`, { timeout: 2000 })
      .then((res) => {
        console.log(res.data.message);
        setPing(true);
      })
      .catch((err) => {
        console.log(`Not connected to server`);
        console.log(`Error: ${err.message}`);
      });
  };

  return {
    createUser,
    loginUser,
    updateUserById,
    deleteUserById,
    isLoggedIn,
    setIsLoggedIn,
    getPingFromServer,
  };
};

export default useUserAPI;
