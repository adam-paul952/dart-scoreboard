// import { useState } from "react";
import axios from "axios";
import useUserAPI from "./useUserAPI";

const { loggedInUserId } = useUserAPI();
// const createPlayerURL = "http://localhost:8080/players/";
const getPlayerByUserIdURL = `http://localhost:8080/players/${loggedInUserId}`;

const usePlayerAPI = () => {
  const createPlayer = () => {};

  const getPlayerByUserId = () => {
    axios
      .get(getPlayerByUserIdURL)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updatePlayerById = () => {};

  const deletePlayerById = () => {};

  return {
    createPlayer,
    getPlayerByUserId,
    updatePlayerById,
    deletePlayerById,
  };
};

export default usePlayerAPI;
