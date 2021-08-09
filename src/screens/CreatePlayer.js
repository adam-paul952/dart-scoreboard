import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import {Col, Row, Input, Label, Form, FormGroup, Table } from 'reactstrap';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreatePlayerList = () => {
  const initialState = { player: '' };
  const [playerName, setPlayerName] = useState(initialState);
  const { player } = playerName;

  const onHandleChange = ({ target: { name, value } }) => {
    setPlayerName({...playerName, [name]: value});
  };

  const [playerList, setPlayerList] = useState([]);

  const updatePlayerList = (player) => {
    setPlayerList([...playerList, player]);
  };

  const onSubmit = () => {
    updatePlayerList(playerName);
  };

  console.log(playerList);

  const deleteRow = (rowNumber) => {
    if (playerList.length > 1) {
      let updatedRows = [...playerList];
      let deletedRow = updatedRows.splice(rowNumber, 1);
      setPlayerList(deletedRow);
    }
  };

  return (
    <div>
      <Header title='Create Player' goBackButton />
      <div>
        <Form>
          <FormGroup>
            <Label for='player'>Player Name</Label>
            <Input
              name='player'
              placeholder='Player Name'
              onChange={onHandleChange}
              value={player}
            />
          </FormGroup>
          <Button onClick={onSubmit}>Add Player</Button>
        </Form>
      </div>
      <div>
      <div className='mt-4'>
      <Row>
        <Col sm='12' md= {{ size:6, offset:3 }}>
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Player Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            <PlayerList playerList={playerList} deleteRow={deleteRow}/>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
      </div>
    </div>
  );
};

const PlayerList = ({playerList, deleteRow}) => {
  let count = 0;

  const removeRow = () => {
    deleteRow(count);
  };

  return Object.keys(playerList).map(i => {
    const { player } = playerList[i];
    count = count + 1;
    return (
      <tr key={count.toString(10)}>
        <th scope='row'>{count.toString(10)}</th>
        <td>{player}</td>
        <td><div><Button variant="secondary" size="sm" onClick={removeRow}>Delete</Button></div></td>
      </tr>
    );
  });
};





// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';

// import '../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const PlayerRow = ({index, row, onChange, deleteRow}) => {
//   const [playerName, handleChangePlayerName] = useState(row.playerName);

//   const updateValues = ({ target: {name, value} }) => {
//     if (name === 'playerName') {
//       handleChangePlayerName(value);
//     };

//     onChange({
//       index: index,
//       playerName: playerName
//     });
//   };

//     const removeRow = () => {
//       deleteRow(index)
//     }

//   return (
//     <div className="playerInputRow">
//       <div className="card">{index + 1}</div>
//       <div className="card"><input type="text" name="playerName" placeholder="Player Name" value={playerName} onChange={updateValues}></input></div>
//       <div className="card"><Button variant="secondary" size="sm" onClick={removeRow}>Delete</Button></div>
//     </div>
//   );
// };

// const CreatePlayerList = () => {
//   // Create Empty state for player key and name to be entered
//   const [tableRows, setTableRows] = useState([{
//     playerName: ''
//     }
//   ]);

//   // Recieve data from tableRow
//   const onHandleChange = (data) => {
//     tableRows[data.index] = data;
//   };

//   // Add new rows to table with player name and index
//   const addNewRow = () => {
//     setTableRows([...tableRows, {playerName: ''}]);
//   };

//   const deleteRow = (index) => {
//     if(tableRows.length > 1){
//       let updatedRows = [...tableRows];
//       let indexToRemove = updatedRows.filter(x => x.index !== index);
//       // updatedRows.splice(index, 1);
//       setTableRows(indexToRemove);
//     }
//   };

//   return (
//       <div className="createPlayerTable">
//         <div className="playerTable">
//           <div className="playerNameHeader">Player Name</div>
//             <div className="playerRow">
//               {
//                 tableRows.map((row, index) => {
//                   return(
//                     <PlayerRow key={index} index={index} row={row} onChange={onHandleChange} deleteRow={deleteRow}></PlayerRow>
//                   );
//                 })
//               }
//             </div>
//         <div>
//           <Button variant="secondary" size="sm" onClick={addNewRow}>Add Player</Button>
//         </div>
//       </div>
//     </div>
//   );
// };

export default CreatePlayerList;
