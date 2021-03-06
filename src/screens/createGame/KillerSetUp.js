import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

import { Button, Col, Table, Row } from "react-bootstrap";

import useGame from "../../util/useGame";

import { BiCaretLeft } from "react-icons/bi";
import { ThemeContext } from "../../contexts/ThemeProvider";

const KillerSetUp = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Header theme={theme} title="Killer" goBackButton />
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
    const target = parseInt(event.target.value, 10);
    if (isNaN(target)) {
      setPlayerTarget("");
    } else {
      setPlayerTarget(target);
    }
  };

  const onScoreSubmit = () => {
    if (playerTarget < 1 || playerTarget > 20) {
      alert(`Invalid score. Score must be between 1 and 20.`);
      setPlayerTarget("");
    } else {
      assignPlayerTarget(playerTarget);
      setPlayerTarget("");
    }
  };

  const sortPlayerList = () => {
    const sortedList = playerList.sort((a, b) => (a.score > b.score ? 1 : -1));
    setPlayerList(sortedList);
  };

  return (
    <>
      <Table variant="dark" bordered striped>
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
