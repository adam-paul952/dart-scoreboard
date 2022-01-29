import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Button, Form, Table } from "react-bootstrap";
import { ThemeContext } from "../../contexts/ThemeProvider";

import { BsXSquare } from "react-icons/bs";
import { EditPlayerButton, EditPlayerName } from "./EditPlayer";

import DisplaySinglePlayerStats from "./SinglePlayerStats";

const dashboardTableHeader = [
  "Player Name",
  "Select Player",
  "Edit Player",
  "Delete Player",
  "Player Stats",
];

const SelectPlayersFromDB = ({
  checkedPlayerList,
  setCheckedPlayerList,
  userPlayerList,
  getPlayerByUserId,
  deletePlayerById,
  updatePlayerById,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Table variant={theme} bordered striped>
        <thead>
          <tr>
            {dashboardTableHeader.map((item, index) => {
              return <th key={index}>{item}</th>;
            })}
          </tr>
        </thead>
        <ShowDatabasePlayerList
          checkedPlayerList={checkedPlayerList}
          setCheckedPlayerList={setCheckedPlayerList}
          userPlayerList={userPlayerList}
          getPlayerByUserId={getPlayerByUserId}
          deletePlayerById={deletePlayerById}
          updatePlayerById={updatePlayerById}
        />
      </Table>
    </>
  );
};

SelectPlayersFromDB.propTypes = {
  checkedPlayerList: PropTypes.array,
  setCheckedPlayerList: PropTypes.func,
  userPlayerList: PropTypes.array,
  getPlayerByUserId: PropTypes.func,
  deletePlayerById: PropTypes.func,
  updatePlayerById: PropTypes.func,
};

export default SelectPlayersFromDB;

const ShowDatabasePlayerList = ({
  checkedPlayerList,
  setCheckedPlayerList,
  userPlayerList,
  getPlayerByUserId,
  deletePlayerById,
  updatePlayerById,
}) => {
  const [isEditable, setEditable] = useState({ status: false, rowKey: null });
  const [playerName, setPlayerName] = useState(null);

  const onDelete = (id) => {
    deletePlayerById(id);
    setTimeout(() => {
      getPlayerByUserId();
    });
  };

  const onPlayerCheckbox = (player) => {
    setCheckedPlayerList([
      ...checkedPlayerList,
      {
        id: player.id,
        playerName: player.playerName,
        score: player.score,
        scoreList: player.scoreList,
        lives: player.lives,
      },
    ]);
  };

  return (
    <>
      <tbody>
        {userPlayerList &&
          userPlayerList.map((player) => {
            return (
              <tr key={player.id}>
                <EditPlayerName
                  player={player}
                  setPlayerName={setPlayerName}
                  isEditable={isEditable}
                  playerName={playerName}
                />
                <td>
                  <Form.Check
                    aria-label="selectPlayer"
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        onPlayerCheckbox(player);
                      } else {
                        setCheckedPlayerList(
                          checkedPlayerList.filter(
                            (removePlayer) => removePlayer.id !== player.id
                          )
                        );
                      }
                    }}
                    value={checkedPlayerList}
                  />
                </td>
                <EditPlayerButton
                  isEditable={isEditable}
                  player={player}
                  setEditable={setEditable}
                  setPlayerName={setPlayerName}
                  updatePlayerById={updatePlayerById}
                  getPlayerByUserId={getPlayerByUserId}
                  playerName={playerName}
                />
                <td>
                  <Button
                    aria-label="deletePlayer"
                    variant="danger"
                    size="sm"
                    onClick={() => onDelete(player.id)}
                  >
                    <BsXSquare style={{ fontSize: 20 }} />
                  </Button>
                </td>
                <td>
                  <DisplaySinglePlayerStats player={player} />
                </td>
              </tr>
            );
          })}
      </tbody>
    </>
  );
};

ShowDatabasePlayerList.propTypes = {
  playerName: PropTypes.string,
  checkedPlayerList: PropTypes.array,
  setCheckedPlayerList: PropTypes.func,
  userPlayerList: PropTypes.array,
  getPlayerByUserId: PropTypes.func,
  deletePlayerById: PropTypes.func,
  updatePlayerById: PropTypes.func,
};
