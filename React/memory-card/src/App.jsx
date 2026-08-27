import { useState } from 'react';
import GameBoard from './gameboard';
import Score from './scoreboard';
import './App.css';

function App() {
  const [selectedList, setSelectedList] = useState([]);
  const score = selectedList.length;

  return (
    <>
      <Score score={score}></Score>
      <GameBoard
        selectedList={selectedList}
        setSelectedList={setSelectedList}
      ></GameBoard>
    </>
  );
}

export default App;
