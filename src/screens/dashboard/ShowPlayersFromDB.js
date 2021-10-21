import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Button, Form, Table } from "react-bootstrap";
import { ThemeContext } from "../../contexts/Provider";

import { BsXSquare } from "react-icons/bs";
import { EditPlayerButton, EditPlayerName } from "./EditPlayer";

const dashboardTableHeader = [
  "Player Name",
  "Select Player",
  "Edit Player",
  "Delete Player",
];

const SelectPlayersFromDB = ({
  checkedPlayerList,
  setCheckedPlayerList,
  userPlayerList,
  getPlayerByUserId,
  deletePlayerById,
  updatePlayerById,
  userId,
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
          userId={userId}
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
  userId: PropTypes.string,
};

export default SelectPlayersFromDB;

const ShowDatabasePlayerList = ({
  checkedPlayerList,
  setCheckedPlayerList,
  userPlayerList,
  getPlayerByUserId,
  deletePlayerById,
  updatePlayerById,
  userId,
}) => {
  const [isEditable, setEditable] = useState({ status: false, rowKey: null });
  const [playerName, setPlayerName] = useState(null);

  const onDelete = (id) => {
    deletePlayerById(id);
    setTimeout(() => {
      getPlayerByUserId(userId);
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
        selected: true,
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
                  userId={userId}
                  playerName={playerName}
                />
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => onDelete(player.id)}
                  >
                    <BsXSquare style={{ fontSize: 20 }} />
                  </Button>
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
  userId: PropTypes.string,
};
