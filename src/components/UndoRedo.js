import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Row } from "react-bootstrap";

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
}) => {
  return (
    <>
      <Row className="my-5">
        <Col>
          <Button
            disabled={!canUndo}
            onClick={() => {
              undo();
              setPlayerList(
                playerListHistory.past[playerListHistory.past.length - 1]
                  .playerList
              );
            }}
          >
            Undo
          </Button>
        </Col>
        <Col>
          <Button
            disabled={!canUndo && !canRedo ? true : false}
            onClick={() => {
              const newPlayer = { ...currentPlayer };
              setCurrentPlayer(
                newPlayer,
                playerListHistory.present.currentPlayer
              );
              setTurn(
                playerListHistory.past[playerListHistory.past.length - 1].turn
              );
            }}
          >
            Set
          </Button>
        </Col>
        <Col>
          <Button disabled={!canRedo} onClick={redo}>
            Redo
          </Button>
        </Col>
      </Row>
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
};

export default UndoRedo;
