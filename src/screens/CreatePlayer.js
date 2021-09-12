import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { Button, Container, Col, Row, Form, Table } from "react-bootstrap";
import useGame from "../util/useGame";

const CreatePlayerList = () => {
  const { playerList, addPlayer, deletePlayer } = useGame();
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
    const onKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onAddPlayer();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
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
        <Container>
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
      <Container>
        <Table striped>
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
      <Link to="/game/create">
        <Button>Submit</Button>
      </Link>
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
        <Button variant="secondary" size="sm" onClick={() => removeRow(index)}>
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
