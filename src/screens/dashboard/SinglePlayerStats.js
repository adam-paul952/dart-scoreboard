import React from "react";
import PropTypes from "prop-types";
import { Button, Modal, Table } from "react-bootstrap";

import { BsClipboardData } from "react-icons/bs";

import useStatsAPI from "../../util/useStatsAPI";

const tableHeader = ["Games Played", "Games Won", "Win Percentage"];

const DisplaySinglePlayerStats = ({ player }) => {
  const [show, setShow] = React.useState(false);

  const { getStatsForSinglePlayer, singlePlayerStats } = useStatsAPI();

  const onFindStats = (playerid) => {
    getStatsForSinglePlayer(playerid);
    setShow(true);
  };

  return (
    <>
      <Button
        aria-label="FindSingleStats"
        variant="success"
        size="sm"
        onClick={() => {
          onFindStats(player.id);
        }}
      >
        <BsClipboardData style={{ fontSize: 20 }} />
      </Button>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        style={{ color: "black" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{player.playerName}&apos;s Stats</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <thead>
              <tr>
                {tableHeader.map((header) => {
                  return <th key={header}>{header}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{singlePlayerStats.gamesPlayed}</td>
                <td>{singlePlayerStats.gamesWon}</td>
                <td>{singlePlayerStats.winPercentage}</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DisplaySinglePlayerStats;

DisplaySinglePlayerStats.propTypes = {
  player: PropTypes.object.isRequired,
};
