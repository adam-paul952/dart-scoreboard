import React from "react";
// Theme
import { ThemeContext } from "../../contexts/ThemeProvider";
// Components
import Header from "../../components/Header";
import CreatePlayerDashboard from "./CreatePlayerDashboard";
import CreateGameDashboard from "./CreateGameDashboard";
import SelectPlayersFromDB from "./ShowPlayersFromDB";
import DeleteUser from "./DeleteUser";
import EditUserInfo from "./EditUser";
// Hooks
import useGame from "../../util/useGame";
import usePlayerAPI from "../../util/usePlayerAPI";
import { displaySessionUsername } from "../../util/useSessionStorage";

const Dashboard = () => {
  const username = displaySessionUsername();

  const { theme } = React.useContext(ThemeContext);

  const {
    userPlayerList,
    createPlayer,
    getPlayerByUserId,
    deletePlayerById,
    updatePlayerById,
    setUserPlayerList,
  } = usePlayerAPI();

  const {
    setPlayerList,
    checkedPlayerList,
    setCheckedPlayerList,
    shufflePlayerList,
  } = useGame();

  const [showDeleteUser, setShowDeleteUser] = React.useState(false);
  const [showEditUser, setShowEditUser] = React.useState(false);

  React.useEffect(() => {
    getPlayerByUserId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shufflePlayerArray = (array) => {
    const newArray = shufflePlayerList(array);
    setUserPlayerList(newArray);
    setCheckedPlayerList(newArray);
  };

  return (
    <>
      <Header
        title="Dashboard"
        username={username}
        goBackButton
        loginDropDown
        theme={theme}
        setShowDeleteUser={setShowDeleteUser}
        setShowEditUser={setShowEditUser}
      />
      <CreatePlayerDashboard
        createPlayer={createPlayer}
        getPlayerByUserId={getPlayerByUserId}
      />
      {checkedPlayerList.length >= 2 && (
        <CreateGameDashboard
          checkedPlayerList={checkedPlayerList}
          setPlayerList={setPlayerList}
          shufflePlayerArray={shufflePlayerArray}
        />
      )}
      <SelectPlayersFromDB
        checkedPlayerList={checkedPlayerList}
        setCheckedPlayerList={setCheckedPlayerList}
        userPlayerList={userPlayerList}
        getPlayerByUserId={getPlayerByUserId}
        deletePlayerById={deletePlayerById}
        updatePlayerById={updatePlayerById}
      />
      {showDeleteUser && (
        <DeleteUser
          showDeleteUser={showDeleteUser}
          setShowDeleteUser={setShowDeleteUser}
        />
      )}
      {showEditUser && (
        <EditUserInfo
          showEditUser={showEditUser}
          setShowEditUser={setShowEditUser}
        />
      )}
    </>
  );
};

export default Dashboard;
