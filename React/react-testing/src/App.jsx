import { useState } from 'react';
import './App.css';

function App() {
  const [heading, setHeading] = useState('Magnificent Monkeys');

  const clickHandler = () => {
    setHeading('Radical Rhinos');
  };

  return (
    <>
      {/* <h1>Testing render function</h1> */}
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      <h1>{heading}</h1>
    </>
  );
}

export default App;
