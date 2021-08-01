import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TableRow = ({index, row, onChange, deleteRow}) => {
  const [playerName, handleChangePlayerName] = useState(row.playerName);
  
  const updateValues = ({ target: {name, value} }) => {
    if (name === 'playerName') {
      handleChangePlayerName(value);
    };

    onChange({
      index: index,
      playerName: playerName
    });
  };

  useEffect(() => {
    console.log(playerName);
  }, [playerName]);

    const removeRow = () => {
      deleteRow(index)       // Function deletes proper row, but isn't relfected on the screen
    }

  return (
    <tr>
      <td>{index + 1}</td>
      <td><input type="text" name="playerName" placeholder="Player Name" value={playerName} onChange={updateValues}></input></td>
      <td><button onClick={removeRow}>Delete</button></td>
    </tr>
  );
};

const CreatePlayerList = () => {
  // Create Empty state for player key and name to be entered
  const [tableRows, setTableRows] = useState([{
    index: 0,
    playerName: ''
    }
  ]);

  // Recieve data from tableRow
  const onHandleChange = (data) => {
    tableRows[data.index] = data;
  };

  // Add new rows to table with player name and index
  const addNewRow = (index) => {
    setTableRows([...tableRows, {index: index, playerName: ''}]);
  };

  const deleteRow = (index) => {
    if(tableRows.length > 1){
      let updatedRows = [...tableRows];
      let indexToRemove = updatedRows.filter(x => x.index !== index);
      setTableRows(indexToRemove);
    }
  };

  useEffect(() => {
    console.log(tableRows);
  }, [tableRows]);

  return (
    <div>
      <div className="createPlayerTable">
        <table className="playerTable">
          <thead>
            <tr>
              <th />
              <th>Player Name</th>
              <th />
            </tr>
          </thead>
          <tbody>
              {
                tableRows.map((row, index) => {
                    return(
                      <TableRow key={index} index={index} row={row} onChange={onHandleChange} deleteRow={deleteRow}></TableRow>
                    );
                })
              }
          </tbody>
        </table>
        <div>
          <Button variant="secondary" size="sm" onClick={addNewRow}>Add Player</Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePlayerList;