import { useState } from "react";
import axios from "axios";
// import useUserAPI from "./useUserAPI";

const usePlayerAPI = () => {
  const createPlayer = (name, users_id) => {
    axios
      .post(`http://localhost:8080/players`, { name, users_id })
      .then((res) => {
        console.log(`Successfully created player: ${res.data.name}`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const [userPlayerList, setUserPlayerList] = useState([]);

  const getPlayerByUserId = (userId) => {
    axios
      .get(`http://localhost:8080/players/${userId}`)
      .then((res) => {
        console.log(res.data);
        setUserPlayerList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updatePlayerById = (playerId) => {
    axios
      .put(`http://localhost:8080/players/${playerId}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const deletePlayerById = (playerId) => {
    axios
      .delete(`http://localhost:8080/players/${playerId}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return {
    createPlayer,
    getPlayerByUserId,
    updatePlayerById,
    deletePlayerById,
    userPlayerList,
    setUserPlayerList,
  };
};

export default usePlayerAPI;
