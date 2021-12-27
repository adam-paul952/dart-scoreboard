import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

import { Button, Col, Table, Row } from "react-bootstrap";

import useGame from "../../util/useGame";

import { BiCaretLeft } from "react-icons/bi";

const KillerSetUp = () => {
  return (
    <>
      <Header title="Killer" goBackButton resetButton />
      <AssignPlayerTargets />
    </>
  );
};

export default KillerSetUp;

const AssignPlayerTargets = () => {
  const {
    playerList,
    setPlayerList,
    getCurrentPlayer,
    getCurrentPlayerById,
    changeTurns,
    turn,
    round,
    changeRounds,
  } = useGame();
  const [playerTarget, setPlayerTarget] = useState("");

  const currentPlayer = getCurrentPlayer();
  const currentPlayerById = getCurrentPlayerById();

  const assignPlayerTarget = (score) => {
    currentPlayer.score = score;
    setPlayerList([...playerList]);
    changeTurns();
    if (turn === playerList.length - 1) {
      changeRounds();
    }
  };

  const onHandleChange = (event) => {
    setPlayerTarget(parseInt(event.target.value, 10));
  };

  const onScoreSubmit = () => {
    assignPlayerTarget(playerTarget);
    setPlayerTarget("");
  };

  const sortPlayerList = () => {
    const sortedList = playerList.sort((a, b) => (a.score > b.score ? 1 : -1));
    setPlayerList(sortedList);
  };

  return (
    <>
      <Table variant="dark">
        <thead>
          <tr>
            <td>Player name</td>
            <td>Target</td>
          </tr>
        </thead>
        <tbody>
          {playerList.map((player, index) => {
            return (
              <tr key={index}>
                {currentPlayerById === player.id ? (
                  <th>
                    {player.playerName}
                    <BiCaretLeft size={20} />
                  </th>
                ) : (
                  <th>{player.playerName}</th>
                )}
                <td>{player.score}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Row>
        <Col>
          <input
            name="playerTarget"
            value={playerTarget}
            onChange={onHandleChange}
            placeholder="Score"
          ></input>
          <Button onClick={onScoreSubmit}>OK</Button>
        </Col>
      </Row>
      {round === 2 && (
        <Button as={Link} to="/game/killer" onClick={sortPlayerList}>
          Continue to game
        </Button>
      )}
    </>
  );
};
