import React, { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

import useGame from "../hooks/useGame";

const CreatePlayer: React.FC = () => {
  const { playerList, addPlayer, deletePlayer } = useGame();
  const [playerName, setPlayerName] = useState<string | undefined>();

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPlayerName(e.target.value);
  };

  const onAddPlayer = (): void => {
    if (playerName === undefined) {
      alert("Please enter a name");
      return;
    }
    addPlayer(playerName);
    setPlayerName(undefined);
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <input
              type="text"
              name="playerName"
              placeholder="Player Name"
              onChange={onHandleChange}
              value={playerName}
            />
          </Col>
          <Col>
            <Button onClick={onAddPlayer}>Add Player</Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Table>
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
                <tr key={index + 1}>
                  <th>{index + 1}</th>
                  <td>{playerName}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => {
                        deletePlayer(index);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default CreatePlayer;
