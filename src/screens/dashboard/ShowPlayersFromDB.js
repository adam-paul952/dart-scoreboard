import React, { useState, useEffect, useContext } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { ThemeContext } from "../../contexts/Provider";

import usePlayerAPI from "../../util/usePlayerAPI";
import useSessionStorage from "../../util/useSessionStorage";

const SelectPlayersFromDB = () => {
  const { theme } = useContext(ThemeContext);
  const { userPlayerList, getPlayerByUserId, deletePlayerById, createPlayer } =
    usePlayerAPI();

  const { displayUserIdToken } = useSessionStorage();
  const userId = displayUserIdToken();

  useEffect(() => {
    getPlayerByUserId(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <>
      <Form>
        <Container className="mt-5 mb-5" fluid>
          <Row className="justify-content-md-center">
            <Col>
              <input
                type="text"
                name="player"
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
            userPlayerList.map(({ id, name }) => {
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>
                    <Form.Check type="checkbox" />
                  </td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      // onClick={}
                    >
                      Edit
                    </Button>
                  </td>
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
        </tbody>
      </Table>
    </>
  );
};

export default SelectPlayersFromDB;
