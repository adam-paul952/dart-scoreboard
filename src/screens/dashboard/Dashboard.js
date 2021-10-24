import React, { useState, useEffect } from "react";

import {
  displaySessionUserIdToken,
  displaySessionUsername,
} from "../../util/useSessionStorage";

import Header from "../../components/Header";
import LoginUser from "./LogIn";
import CreatePlayerDashboard from "./CreatePlayerDashboard";
import CreateGameDashboard from "./CreateGameDashboard";
import SelectPlayersFromDB from "./ShowPlayersFromDB";

import useGame from "../../util/useGame";
import usePlayerAPI from "../../util/usePlayerAPI";

const Dashboard = () => {
  const username = displaySessionUsername();
  const userId = displaySessionUserIdToken();

  const {
    userPlayerList,
    createPlayer,
    getPlayerByUserId,
    deletePlayerById,
    updatePlayerById,
  } = usePlayerAPI();

  const { setPlayerList } = useGame();

  const [playerName, setPlayerName] = useState("");
  const [checkedPlayerList, setCheckedPlayerList] = useState([]);

  useEffect(() => {
    getPlayerByUserId(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!username) {
    return <LoginUser />;
  }

  return (
    <>
      <Header
        title="Dashboard"
        username={username}
        goBackButton
        loginDropDown
      />
      <CreatePlayerDashboard
        playerName={playerName}
        setPlayerName={setPlayerName}
        createPlayer={createPlayer}
        userId={userId}
        getPlayerByUserId={getPlayerByUserId}
        userPlayerList={userPlayerList}
      />
      {checkedPlayerList.length >= 2 && (
        <CreateGameDashboard
          checkedPlayerList={checkedPlayerList}
          setPlayerList={setPlayerList}
        />
      )}
      <SelectPlayersFromDB
        playerName={playerName}
        checkedPlayerList={checkedPlayerList}
        setCheckedPlayerList={setCheckedPlayerList}
        userPlayerList={userPlayerList}
        getPlayerByUserId={getPlayerByUserId}
        deletePlayerById={deletePlayerById}
        updatePlayerById={updatePlayerById}
        userId={userId}
      />
    </>
  );
};

export default Dashboard;
