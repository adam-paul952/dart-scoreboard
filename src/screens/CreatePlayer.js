import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import { Button, Container, Col, Row, Form, Table } from "react-bootstrap";

const CreatePlayerList = ({ playerList, updatePlayerList, deleteRow }) => {
  const initialState = { player: "" };
  const [playerName, setPlayerName] = useState(initialState);
  const { player } = playerName;

  const onHandleChange = ({ target: { name, value } }) => {
    setPlayerName({ ...playerName, [name]: value });
  };

  const onAddPlayer = (e) => {
    e.preventDefault();
    updatePlayerList(playerName);
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
                  deleteRow={deleteRow}
                />
              );
            })}
          </tbody>
        </Table>
      </Container>
      <Link to='/game/create'>
        <Button>
          Submit
        </Button>
      </Link>
    </>
  );
};

const PlayerList = ({ index, player, deleteRow }) => {
  let playerName = player.player;

  const removeRow = (index) => {
    deleteRow(index);
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

export default CreatePlayerList;
