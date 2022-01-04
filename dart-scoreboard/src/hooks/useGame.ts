import { useState } from "react";

export type Player = {
  id: number;
  playerName: string;
  score: number;
  scoreList: number[];
  lives: number;
  highScore: number;
  killer: boolean;
};

export const createPlayer = () => {
  return {
    id: 0,
    playerName: "",
    score: 0,
    scoreList: [],
    lives: 0,
    highScore: 0,
    killer: false,
  };
};

const useGame = () => {
  const [playerList, setPlayerList] = useState<(string | Player)[]>([]);

  const addPlayer = (playerName: string): void => {
    const newPlayer = [...playerList, playerName];
    setPlayerList(newPlayer);
  };

  const deletePlayer = (rowNumber: number): void => {
    let updatedRows = [...playerList];
    updatedRows.splice(rowNumber, 1);
    setPlayerList(updatedRows);
  };

  return { playerList, setPlayerList, addPlayer, deletePlayer };
};

export default useGame;
