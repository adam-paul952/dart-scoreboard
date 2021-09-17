import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useGame = () => {
  // Main array to hold player objects
  const [playerList, setPlayerList] = useLocalStorage("listOfPlayers", []);

  const addPlayer = (player) => {
    setPlayerList([...playerList, player]);
  };

  const deletePlayer = (rowNumber) => {
    let updatedRows = [...playerList];
    updatedRows.splice(rowNumber, 1);
    setPlayerList(updatedRows);
  };

  // Set turns and methods to cycle through players and rounds
  const [turn, setTurn] = useState(0);

  const changeTurns = () => {
    const newTurn = turn + 1;
    setTurn(newTurn % playerList.length);
  };

  const getCurrentPlayer = () => {
    return playerList[turn];
  };

  const getCurrentPlayerByName = () => {
    return playerList[turn].player;
  };

  const getCurrentPlayerById = () => {
    return playerList[turn].id;
  };

  // Set X01 points to game and players
  const [x01Points, setX01Points] = useLocalStorage("x01Points", 0);

  const x01GameSelect = (value) => {
    setX01Points(value);
  };

  // useEffect(() => {
  //   console.log(`X01 points are ${x01Points}`);
  // }, [x01Points]);

  const assignX01PlayerScore = (x01Points) => {
    let playerScore = [...playerList];
    for (let i = 0; i < playerScore.length; i++) {
      playerScore[i].score = x01Points;
      setPlayerList(playerScore);
    }
  };

  const assignPlayerLives = (playerLives) => {
    let numberOfPlayerLives = [...playerList];
    for (let i = 0; i < numberOfPlayerLives.length; i++) {
      numberOfPlayerLives[i].lives = Number(playerLives);
      setPlayerList(numberOfPlayerLives);
    }
  };

  const resetScoreList = () => {
    let newScoreList = [...playerList];
    for (let i = 0; i < newScoreList.length; i++) {
      newScoreList[i].scoreList = [];
      newScoreList[i].score = 0;
      newScoreList[i].lives = 0;
      setPlayerList(newScoreList);
      setTurn(0);
    }
  };
  return {
    playerList,
    turn,
    x01Points,
    setX01Points,
    addPlayer,
    deletePlayer,
    changeTurns,
    getCurrentPlayer,
    x01GameSelect,
    assignX01PlayerScore,
    assignPlayerLives,
    resetScoreList,
    setPlayerList,
    setTurn,
    getCurrentPlayerByName,
    getCurrentPlayerById,
  };
};

export default useGame;
