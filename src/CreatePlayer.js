import React, {useState} from 'react';
import './App.css'

let tableRowIndex = 0;

const TableRow = (row, handleDataChange, deleteRow) => {
  let index = row.index;
  const [playerName, handleChangePlayerName] = useState(row.playerName);
  const updateValues = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    if (inputName === 'playerName') {
      handleChangePlayerName(inputValue);
    };

    // handleDataChange({
    //   index: index,
    //   playerName: playerName
    // });
  };

  const removeRow = () => {
    deleteRow(index);
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td><input type="text" name="playerName" placeholder="Player Name" value={playerName} onChange={updateValues}></input></td>
      <td><button type="button"  onClick={removeRow}>&times;</button></td>
    </tr>
  );
};

const CreatePlayerList = () => {
  const [tableRows, setTableRows] = useState([{
    index: 0,
    playerName: ''
    }
  ]);

  // Recieve data from tableRow
  const handleChange = (data) => {
    tableRows[data.index] = data;
  };

  // Add new rows to table with player name
  const addNewRow = () => {
    tableRowIndex = parseFloat(tableRowIndex) + 1;
    let updatedRows = [...tableRows];
    updatedRows[tableRowIndex] = {index: tableRowIndex, playerName: ''};
    setTableRows(updatedRows);
  };

  const deleteRow = (index) => {
    if (tableRows.length > 1) {
      let updatedRows = [...tableRows];
      let indexToRemove = updatedRows.findIndex(x => x.index === index);
      if (indexToRemove > -1) {
        updatedRows.splice(indexToRemove, 1);
        setTableRows(updatedRows);
      }
    }
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {
              tableRows.map((row, index) => {
                if(row) {
                  return(
                    <TableRow key={index} row={row} handleDataChange={handleChange}></TableRow>
                  );
                }
              })
            }
          </tr>
        </tbody>
      </table>
      <div>
        <button className="btn-add" onClick={addNewRow}>Add Player</button>
      </div>
    </div>
  );
};

export default CreatePlayerList;