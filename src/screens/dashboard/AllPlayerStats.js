import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import useStatsAPI from "../../util/useStatsAPI";

const statsHeader = [
  "Player Name",
  "Games Played",
  "Games Won",
  "Win Percentage",
];

const DisplayAllPlayerStats = () => {
  const [show, setShow] = useState(false);

  const { getStatsForAllPlayers, allPlayerStats } = useStatsAPI();

  const onFindAllStats = () => {
    getStatsForAllPlayers();
    setShow(true);
  };

  return (
    <>
      <Button
        aria-label="displayPlayerStats"
        variant="primary"
        size="sm"
        onClick={() => {
          onFindAllStats();
        }}
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "black",
        }}
      >
        All Player Stats
      </Button>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        style={{ color: "black" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>All Stats</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <thead>
              <tr>
                {statsHeader.map((item) => {
                  return <th key={item}>{item}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {allPlayerStats.map((player) => {
                return (
                  <tr key={player.player_id}>
                    <td>{player.playerName}</td>
                    <td>{player.gamesPlayed}</td>
                    <td>{player.gamesWon}</td>
                    <td>{player.winPercentage}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DisplayAllPlayerStats;
