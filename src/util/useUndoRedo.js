import { useState } from "react";

const useUndoRedo = (initialState) => {
  const [index, setIndex] = useState(0);
  const [playerListHistory, setPlayerListHistory] = useState([initialState]);
  console.log(playerListHistory);
  // console.log(index);

  const setState = (action) => {
    const newState =
      typeof action === "function" ? action(playerListHistory[index]) : action;
    const updatedState = [...playerListHistory.slice(0, index + 1)];
    setPlayerListHistory([...updatedState, newState]);
    setIndex((prevState) => prevState + 1);
  };

  const undo = () => index > 0 && setIndex((prevState) => prevState - 1);

  const redo = () =>
    index < playerListHistory.length - 1 &&
    setIndex((prevState) => prevState + 1);

  return [playerListHistory[index], setState, undo, redo, index];
};

export default useUndoRedo;
