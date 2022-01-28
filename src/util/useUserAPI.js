import React from "react";
import axios from "axios";

import { AuthContext } from "../contexts/AuthProvider";
import { PingContext } from "../contexts/PingProvider";

import useSessionStorage from "./useSessionStorage";

const URL = process.env.REACT_APP_USER_URL;

const useUserAPI = () => {
  const { setPing } = React.useContext(PingContext);
  const { setIsAuthenticated } = React.useContext(AuthContext);
  const [isError, setIsError] = React.useState(false);
  const [isRegistered, setIsRegistered] = React.useState(false);

  const createUser = ({ username, password }) => {
    axios
      .post(URL, { username, password })
      .then((res) => {
        setIsRegistered(true);
        console.log(`Successfully created user: ${res.data.username}`);
      })
      .catch((err) => {
        alert("Username already exists");
        setIsError(true);
        console.log(err.message);
      });
  };

  const [, setUsername] = useSessionStorage("username", "");

  const loginUser = ({ username, password }) => {
    axios
      .post(`${URL}login`, { username, password })
      .then((res) => {
        setIsAuthenticated(true);
        setUsername(res.data.username);
        console.log(`Successfully logged in user: ${res.data.username}`);
      })
      .catch((err) => {
        alert(`Unsuccessful login`);
        console.log(err.message);
      });
  };

  const updateUserById = ({ username, password }) => {
    axios
      .put(`${URL}edit`, { username, password })
      .then((res) => {
        console.log(`Successfully updated user: ${res.data.username}`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const deleteUserById = () => {
    axios
      .delete(`${URL}delete`)
      .then((res) => {
        setIsAuthenticated(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const logUserOut = () => {
    axios
      .post(`http://localhost:3000/logout`)
      .then((res) => {
        console.log(res.data);
        setIsAuthenticated(false);
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
    getPingFromServer,
    logUserOut,
    isError,
    setIsError,
    isRegistered,
    setIsRegistered,
  };
};

export default useUserAPI;
