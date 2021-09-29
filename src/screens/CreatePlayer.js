import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Button, Container, Col, Row, Form, Table } from "react-bootstrap";
import useGame from "../util/useGame";

import { ThemeContext } from "../contexts/Provider";

const CreatePlayerList = () => {
  const { playerList, addPlayer, deletePlayer } = useGame();
  const { theme } = useContext(ThemeContext);

  const initialState = {
    id: Math.floor(Math.random() * 100),
    player: "",
    score: 0,
    scoreList: [],
    lives: 0,
  };
  const [playerName, setPlayerName] = useState(initialState);
  const { player } = playerName;

  useEffect(() => {
    const onKeyUp = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onAddPlayer();
      }
    };
    document.addEventListener("keyup", onKeyUp);
    return () => {
      document.removeEventListener("keyup", onKeyUp);
    };
  });

  const onHandleChange = ({ target: { name, value } }) => {
    setPlayerName({ ...playerName, [name]: value });
  };

  const onAddPlayer = () => {
    addPlayer(playerName);
    setPlayerName(initialState);
  };

  return (
    <>
      <Header title="Create Player" goBackButton />
      <Form>
        <Container className="mt-5 mb-5" fluid>
          <Row className="justify-content-md-center">
            <Col>
              <input
                type="text"
                name="player"
                placeholder="Player Name"
                onChange={onHandleChange}
                value={player}
              />
            </Col>
            <Col>
              <Button onClick={onAddPlayer}>Add Player</Button>
            </Col>
          </Row>
        </Container>
      </Form>
      <Container className="mt-5 mb-5" fluid>
        <Table variant={theme} bordered striped>
          <thead>
            <tr>
              <th>Player #</th>
              <th>Player Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {playerList.map((player, index) => {
              return (
                <PlayerList
                  key={index}
                  index={index}
                  player={player}
                  deletePlayer={deletePlayer}
                />
              );
            })}
          </tbody>
        </Table>
      </Container>

      <Button
        as={Link}
        to="/game/create"
        disabled={playerList.length < 2 ? true : false}
      >
        Submit
      </Button>
    </>
  );
};

export const PlayerList = ({ index, player, deletePlayer }) => {
  let playerName = player.player;

  const removeRow = (index) => {
    deletePlayer(index);
  };

  return (
    <tr key={index + 1}>
      <th>{index + 1}</th>
      <td>{playerName}</td>
      <td>
        <Button variant="danger" size="sm" onClick={() => removeRow(index)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

PlayerList.propTypes = {
  index: PropTypes.number,
  player: PropTypes.object,
  deletePlayer: PropTypes.func,
};

export default CreatePlayerList;
