import { useState } from "react";
import axios from "axios";

const URL = "http://localhost:8080/players/";

const usePlayerAPI = () => {
  const createPlayer = (playerName, users_id) => {
    axios
      .post(`${URL}`, { playerName, users_id })
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
      .get(`${URL}${userId}`)
      .then((res) => {
        console.log(res.data);
        const players = res.data;
        const useDatabasePlayers = players.map((player) => {
          (player.score = 0), (player.lives = 0), (player.scoreList = []);
          return player;
        });
        setUserPlayerList(useDatabasePlayers);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPlayerByName = (playerName) => {
    axios
      .get(`${URL}byName/${playerName}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const updatePlayerById = (playerId, { name, users_id }) => {
    axios
      .put(`${URL}${playerId}`, { name, users_id })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const deletePlayerById = (playerId) => {
    axios
      .delete(`${URL}${playerId}`)
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
    getPlayerByName,
  };
};

export default usePlayerAPI;
