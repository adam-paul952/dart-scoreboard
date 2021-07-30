import React, {useState, useEffect} from 'react';
import '../App.css';

let tableRowIndex = 0;

const TableRow = ({row, onChange, deleteRow}) => {
  let index = row.index;
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

    const removeRow = () => {
      deleteRow(index)
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
  const handleChange = (data) => {
    tableRows[data.index] = data;
  };

  // Add new rows to table with player name and index
  const addNewRow = () => {
    tableRowIndex = parseInt(tableRowIndex) + 1;
    setTableRows([...tableRows, {index: tableRowIndex, playerName: ''}]);
  };

  const deleteRow = (index) => {
    if(tableRows.length > 1){
      let updatedRows = [...tableRows];
      let indexToRemove = updatedRows.filter(x => x.index !== index);
      setTableRows(indexToRemove);
    }
  };

  return (
    <div>
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
                    <TableRow key={index} row={row} onChange={handleChange} deleteRow={deleteRow}></TableRow>
                  );
              })
            }
        </tbody>
      </table>
      <div>
        <button onClick={addNewRow}>Add Player</button>
      </div>
    </div>
  );
};

export default CreatePlayerList;