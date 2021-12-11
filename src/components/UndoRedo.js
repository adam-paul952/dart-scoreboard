import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import { ImUndo, ImRedo } from "react-icons/im";

const UndoRedo = ({
  canUndo,
  canRedo,
  undo,
  redo,
  playerListHistory,
  setPlayerList,
  currentPlayer,
  setCurrentPlayer,
  setTurn,
  setDisable,
  variant,
}) => {
  const handleUndo = () => {
    undo();
    setPlayerList(
      playerListHistory.past[playerListHistory.past.length - 1].playerList
    );
    const newPlayer = { ...currentPlayer };
    setCurrentPlayer(newPlayer, playerListHistory.present.currentPlayer);
    const newTurn = playerListHistory.present.turn;
    setTurn(newTurn);
    if (variant) {
      setDisable(
        playerListHistory.past[playerListHistory.past.length - 1]
          .disabledButtons
      );
    }
  };

  const handleRedo = () => {
    redo();
    setPlayerList(
      playerListHistory.future[playerListHistory.future.length - 1].playerList
    );
    const newPlayer = { ...currentPlayer };
    setCurrentPlayer(newPlayer, playerListHistory.present.currentPlayer);
    const newTurn = playerListHistory.present.turn;
    setTurn(newTurn);
    if (variant) {
      setDisable(
        playerListHistory.future[playerListHistory.future.length - 1]
          .disabledButtons
      );
    }
  };

  return (
    <>
      <div>
        <Button
          disabled={!canUndo}
          onClick={() => {
            handleUndo();
          }}
        >
          <ImUndo />
        </Button>
      </div>
      <div>
        <Button
          disabled={!canRedo}
          onClick={() => {
            handleRedo();
          }}
        >
          <ImRedo />
        </Button>
      </div>
    </>
  );
};

UndoRedo.propTypes = {
  canUndo: PropTypes.bool.isRequired,
  canRedo: PropTypes.bool.isRequired,
  undo: PropTypes.func.isRequired,
  redo: PropTypes.func.isRequired,
  playerListHistory: PropTypes.object.isRequired,
  setPlayerList: PropTypes.func.isRequired,
  currentPlayer: PropTypes.object.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired,
  setTurn: PropTypes.func.isRequired,
  setDisable: PropTypes.func,
  variant: PropTypes.bool,
};

export default UndoRedo;
