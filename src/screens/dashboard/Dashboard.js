import React, { useState, useEffect } from "react";

import {
  displaySessionUserUuidToken,
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
  const userId = displaySessionUserUuidToken();

  const {
    userPlayerList,
    createPlayer,
    getPlayerByUserId,
    deletePlayerById,
    updatePlayerById,
    setUserPlayerList,
  } = usePlayerAPI();

  const { setPlayerList, checkedPlayerList, setCheckedPlayerList } = useGame();

  const [playerName, setPlayerName] = useState("");

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
          setCheckedPlayerList={setCheckedPlayerList}
          setUserPlayerList={setUserPlayerList}
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
