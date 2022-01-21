import axios from "axios";
import { useContext, useState } from "react";
import { PingContext } from "../contexts/PingProvider";

import useSessionStorage from "./useSessionStorage";

const URL = process.env.REACT_APP_USER_URL;

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
  const [, setSessionUuidToken] = useSessionStorage("userUuid", "");

  const loginUser = ({ username, password }) => {
    axios
      .post(`${URL}login`, { username, password })
      .then((res) => {
        setIsLoggedIn(true);
        setSessionUuidToken(res.data.uuid.toString());
        console.log(`Successfully logged in user: ${res.data.username}`);
      })
      .catch((err) => {
        alert(`Unsuccessful login`);
        console.log(err.message);
      });
  };

  const updateUserById = (userUuid, { username, password }) => {
    axios
      .put(`${URL}${userUuid}`, { username, password })
      .then((res) => {
        console.log(`Successfully updated user: ${res.data.username}`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const deleteUserById = (userUuid) => {
    axios
      .delete(`${URL}${userUuid}`, { params: userUuid })
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
