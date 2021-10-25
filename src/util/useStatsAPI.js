import { useState } from "react";
import axios from "axios";

const URL = "http://localhost:8080/playerStats/";

const useStatsAPI = () => {
  const createStatRowWithPlayer = (playerId) => {
    axios
      .post(`${URL}${playerId}`)
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const [allPlayerStats, setAllPlayerStats] = useState([]);

  const getStatsForAllPlayers = (userId) => {
    axios
      .get(`${URL}${userId}`)
      .then((res) => {
        console.log(res.data);
        setAllPlayerStats(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const [singlePlayerStats, setSinglePlayerStats] = useState([]);

  const getStatsForSinglePlayer = (playerId) => {
    axios
      .get(`${URL}${playerId}`)
      .then((res) => {
        let player = res.data[0];
        console.log(player);
        setSinglePlayerStats(player);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const updateAllPlayerStats = () => {
    axios
      .put(URL)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const updateWinningPlayerStats = (playerId) => {
    axios
      .put(`${URL}${playerId}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return {
    createStatRowWithPlayer,
    getStatsForAllPlayers,
    getStatsForSinglePlayer,
    updateAllPlayerStats,
    updateWinningPlayerStats,
    singlePlayerStats,
    setAllPlayerStats,
    allPlayerStats,
  };
};

export default useStatsAPI;
