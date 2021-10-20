import React, { useState, useEffect, useContext } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { ThemeContext } from "../../contexts/Provider";

import useGame from "../../util/useGame";
import usePlayerAPI from "../../util/usePlayerAPI";
import { displaySessionUserIdToken } from "../../util/useSessionStorage";

const SelectPlayersFromDB = () => {
  const { theme } = useContext(ThemeContext);
  const {
    userPlayerList,
    getPlayerByUserId,
    deletePlayerById,
    createPlayer,
    // updatePlayerById,
    getPlayerByName,
  } = usePlayerAPI();

  const { addPlayer } = useGame();

  const userId = displaySessionUserIdToken();

  useEffect(() => {
    getPlayerByUserId(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const [rowIsSelected, setRowIsSelected] = useState(false);
  const [playerName, setPlayerName] = useState("");

  const handleDelete = (id) => {
    deletePlayerById(id);
    setTimeout(() => {
      getPlayerByUserId(userId);
    });
  };

  const handleCreate = (userId) => {
    createPlayer(playerName, userId);
    setTimeout(() => {
      getPlayerByUserId(userId);
    });
  };

  const handleEdit = (name, playerId) => {
    getPlayerByName(name);
    if (getPlayerByName) {
      console.log(playerId, name);
    }
  };

  return (
    <>
      <Form>
        <Container className="mt-5 mb-5" fluid>
          <Row className="justify-content-md-center">
            <Col>
              <input
                type="text"
                name="playerName"
                placeholder="Player Name"
                onChange={(e) => {
                  setPlayerName(e.target.value);
                }}
                value={playerName}
              />
            </Col>
            <Col>
              <Button
                onClick={() => {
                  handleCreate(userId);
                }}
              >
                Add Player
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
      <Table variant={theme} bordered striped>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Select Player</th>
            <th>Edit Player</th>
            <th>Delete Player</th>
          </tr>
        </thead>
        <tbody>
          {userPlayerList &&
            userPlayerList.map((player) => {
              return (
                <tr key={player.id}>
                  <td>{player.playerName}</td>
                  <td>
                    <Form.Check
                      type="checkbox"
                      onClick={() => {
                        addPlayer(player);
                      }}
                    />
                  </td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => {
                        handleEdit(playerName, player.id);
                      }}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(player.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
        {/* <tbody>
          {userPlayerList &&
            userPlayerList.map(({ id, name }) => {
              return (
                <tr key={id}>
                  {rowIsSelected ? (
                    <td>
                      <input
                        type="text"
                        name="player"
                        placeholder="Player Name"
                        onChange={(e) => {
                          setPlayerName(e.target.value);
                        }}
                        value={playerName}
                      />{" "}
                    </td>
                  ) : (
                    <td>{name}</td>
                  )}
                  <td>
                    <Form.Check type="checkbox" />
                  </td>
                  {rowIsSelected ? (
                    <td>
                      <Button
                        size="sm"
                        onClick={() => {
                          updatePlayerById(id, { playerName });
                        }}
                      >
                        Ok
                      </Button>
                    </td>
                  ) : (
                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => {
                          handleEdit(name, id);
                        }}
                      >
                        Edit
                      </Button>
                    </td>
                  )}
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody> */}
      </Table>
    </>
  );
};

export default SelectPlayersFromDB;
