import { useState } from "react";
import axios from "axios";

const createUserURL = "http://localhost:8080/users";
const loginUserURL = "http://localhost:8080/users/login";

const useAPI = () => {
  const [token, setToken] = useState();

  const createUser = ({ username, password }) => {
    axios
      .post(createUserURL, { username, password })
      .then((res) => {
        console.log(`Successfully created user: ${res.data.username}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginUser = ({ username, password }) => {
    axios
      .post(loginUserURL, { username, password })
      .then((res) => {
        console.log(`Successfully logged in user: ${res.data.username}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { setToken, createUser, loginUser };
};

export default useAPI;
