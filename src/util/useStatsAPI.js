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

  return { createStatRowWithPlayer };
};

export default useStatsAPI;
