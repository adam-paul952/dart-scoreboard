import React, {useState, useEffect} from 'react';
import '../App.css';

const TableRow = ({row, index, onChange, deleteRow}) => {

  const [playerName, setPlayerName] = useState(row.playerName);

  const updateValues = ({ target: {name, value} }) => {
    if (name === 'playerName') {
      setPlayerName(value);
    };

    onChange({
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
  const addNewRow = (index) => {
    setTableRows([...tableRows, {index: index, playerName: ''}]);
  };

  useEffect(() => {
    console.log(tableRows);
  })


    // Function is mapping all indexes in generated rows to -1
  const deleteRow = (index) => {
    if(tableRows.length > 1){
      // console.log(tableRows.length);
      let updatedRows = [...tableRows]
      let indexToRemove = updatedRows.findIndex(x => x.index === index);
      // console.log(indexToRemove);
      if(indexToRemove > -1){
        updatedRows.splice(indexToRemove, 1)
        setTableRows(updatedRows);
      }
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
                if(row) {
                  return(
                    <TableRow key={index} index={index} row={row} onChange={handleChange} deleteRow={deleteRow}></TableRow>
                  );
                }
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