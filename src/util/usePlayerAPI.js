import { useState } from "react";
import axios from "axios";

import useStatsAPI from "./useStatsAPI";

const URL = process.env.REACT_APP_PLAYER_URL;

const usePlayerAPI = () => {
  const { createStatRowWithPlayer } = useStatsAPI();

  const [userPlayerList, setUserPlayerList] = useState([]);

  const createPlayer = (playerName, users_id) => {
    axios
      .post(`${URL}`, { playerName, users_id })
      .then((res) => {
        console.log(`Successfully created player: ${res.data.playerName}`);
        createStatRowWithPlayer(res.data.id);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getPlayerByUserId = (userId) => {
    axios
      .get(`${URL}${userId}`)
      .then((res) => {
        console.log(res.data);
        const players = res.data;
        const applyDatabasePlayers = players.map((player) => {
          (player.score = 0),
            (player.lives = 0),
            (player.scoreList = []),
            (player.highScore = 0);
          return player;
        });
        setUserPlayerList(applyDatabasePlayers);
      })
      .catch((err) => {
        console.log(err.message);
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

  const updatePlayerById = (playerId, { playerName, users_id }) => {
    axios
      .put(`${URL}${playerId}`, { playerName, users_id })
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
