import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import useSessionStorage from "./useSessionStorage";
import useUndoRedo from "../util/useUndoRedo";

import setUserPlayerList from "./usePlayerAPI";

const useGame = () => {
  // Main array to hold player objects
  const [playerList, setPlayerList] = useSessionStorage("listOfPlayers", []);

  const addPlayer = (playerName) => {
    setPlayerList([...playerList, playerName]);
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

  const [currentPlayer, setCurrentPlayer] = useState(playerList[turn]);

  const getCurrentPlayer = () => {
    return playerList[turn];
  };

  const getCurrentPlayerByName = () => {
    return playerList[turn].player;
  };

  const getCurrentPlayerById = () => {
    return playerList[turn].id;
  };

  const [round, setRound] = useState(1);

  const changeRounds = () => {
    if (turn === playerList.length - 1) {
      const newRound = round + 1;
      setRound(newRound);
    }
  };

  // Set X01 points to game and players
  const [x01Points, setX01Points] = useLocalStorage("x01Points", 0);

  const x01GameSelect = (value) => {
    setX01Points(value);
  };

  const assignX01PlayerScore = (x01Points) => {
    let playerScore = [...playerList];
    for (let i = 0; i < playerScore.length; i++) {
      playerScore[i].score = x01Points;
      playerScore[i].scoreList.push(parseInt(x01Points, 10));
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
      newScoreList[i].hitCount = {};
      newScoreList[i].highScore = 0;
      newScoreList[i].killer = false;
      setPlayerList(newScoreList);
      setTurn(0);
      setShowOutShot(false);
    }
  };

  const [checkedPlayerList, setCheckedPlayerList] = useState([]);

  const shufflePlayerList = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  const randomizePlayerList = (array) => {
    const newArray = shufflePlayerList(array);
    setUserPlayerList(newArray);
    setCheckedPlayerList(newArray);
  };

  const [playerListHistory, { set, undo, redo, canUndo, canRedo }] =
    useUndoRedo({
      turn: 0,
      playerList: [...playerList],
      currentPlayer: currentPlayer,
      disabledButtons: [],
    });

  const [showOutShot, setShowOutShot] = useState(false);

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
    checkedPlayerList,
    setCheckedPlayerList,
    setCurrentPlayer,
    currentPlayer,
    playerListHistory,
    set,
    undo,
    redo,
    canUndo,
    canRedo,
    round,
    changeRounds,
    setRound,
    showOutShot,
    setShowOutShot,
    randomizePlayerList,
  };
};

export default useGame;
