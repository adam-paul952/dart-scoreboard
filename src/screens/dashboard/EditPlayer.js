import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import { BsXSquare } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";

export const EditPlayerName = ({
  player,
  setPlayerName,
  isEditable,
  playerName,
}) => {
  if (isEditable.status && isEditable.rowKey === player.id) {
    return (
      <td>
        <input
          placeholder="Edit Player Name"
          autoFocus
          type="text"
          name="playerName"
          value={playerName || ""}
          onChange={(e) => setPlayerName(e.target.value)}
        />
      </td>
    );
  } else {
    return <td>{player.playerName}</td>;
  }
};

EditPlayerName.propTypes = {
  player: PropTypes.object,
  setPlayerName: PropTypes.func,
  isEditable: PropTypes.object,
  playerName: PropTypes.string,
};

export const EditPlayerButton = ({
  isEditable,
  player,
  setEditable,
  setPlayerName,
  updatePlayerById,
  getPlayerByUserId,
  playerName,
}) => {
  const onEdit = ({ id, playerName }) => {
    setEditable({ status: true, rowKey: id });
    setPlayerName(playerName);
  };

  const onSave = (id, { playerName }) => {
    updatePlayerById(id, { playerName });
    setEditable({ status: false, rowKey: null });
    setTimeout(() => {
      getPlayerByUserId();
    });
  };

  const onCancel = () => {
    setEditable({ status: false, rowKey: null });
    setPlayerName(null);
  };
  if (isEditable.status && isEditable.rowKey === player.id) {
    return (
      <td>
        <Button
          aria-label={`ConfirmEditPlayer${player.id}`}
          className="mx-2"
          onClick={() =>
            onSave(player.id, {
              playerName: playerName,
              users_id: player.users_id,
            })
          }
        >
          <BiEditAlt style={{ fontSize: 20 }} />
        </Button>
        <Button
          aria-label={`CancelEditPlayer${player.id}`}
          className="mx-1"
          variant="danger"
          onClick={() => onCancel()}
        >
          <BsXSquare style={{ fontSize: 20 }} />
        </Button>
      </td>
    );
  } else {
    return (
      <td>
        <Button
          aria-label={`EditPlayer${player.id}`}
          variant="primary"
          size="sm"
          onClick={() =>
            onEdit({
              id: player.id,
              currentPlayerName: player.playerName,
            })
          }
        >
          <BiEditAlt style={{ fontSize: 20 }} />
        </Button>
      </td>
    );
  }
};

EditPlayerButton.propTypes = {
  player: PropTypes.object,
  isEditable: PropTypes.object,
  setEditable: PropTypes.func,
  setPlayerName: PropTypes.func,
  updatePlayerById: PropTypes.func,
  getPlayerByUserId: PropTypes.func,
  playerName: PropTypes.string,
};
