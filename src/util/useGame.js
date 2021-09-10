import { useState, useEffect } from "react";

const useGame = () => {
  // Main array to hold player objects
  const [playerList, setPlayerList] = useState([]);

  const addPlayer = (player) => {
    setPlayerList([...playerList, player]);
  };
  useEffect(() => {
    const arrayOfPlayers = localStorage.getItem("listOfPlayers");
    if (arrayOfPlayers) {
      setPlayerList(JSON.parse(arrayOfPlayers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("listOfPlayers", JSON.stringify(playerList));
  }, [playerList]);

  const deletePlayer = (rowNumber) => {
    let updatedRows = [...playerList];
    updatedRows.splice(rowNumber, 1);
    setPlayerList(updatedRows);
  };
  const [game, setGame] = useState("");

  // Set turns and methods to cycle through players and rounds
  const [turn, setTurn] = useState(0);

  const changeTurns = () => {
    const newTurn = turn + 1;
    setTurn(newTurn % playerList.length);
  };

  const getCurrentPlayer = () => {
    return playerList[turn];
  };

  const [round, setRound] = useState(0);

  // Set X01 points to game and players
  const [x01Points, setX01Points] = useState(0);

  const x01GameSelect = (value) => {
    setX01Points(value);
  };

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
      numberOfPlayerLives[i].lives = playerLives;
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
    }
  };
  return {
    playerList,
    game,
    turn,
    round,
    x01Points,
    addPlayer,
    deletePlayer,
    changeTurns,
    getCurrentPlayer,
    x01GameSelect,
    assignX01PlayerScore,
    assignPlayerLives,
    resetScoreList,
    setGame,
    setPlayerList,
    setRound,
    setTurn,
    setX01Points,
  };
};

export default useGame;
