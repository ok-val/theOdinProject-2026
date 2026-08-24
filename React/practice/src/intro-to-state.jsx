import { useState } from 'react';
import './App.css';

const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

function ButtonFrenzy() {
  /**
   * The useState() hook is built-in hook in React that allows me to
   * define a state of a component. It takes an initial value to return:
   *
   * `const [stateValue, setStateValue] = useState(initialValue);`
   *
   * 1. The current state value
   * 2. A function to update the state value
   */
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const [timesBgChanged, setTimesBgChanged] = useState(0);

  const onButtonClick = (color) => (e) => {
    setBackgroundColor(color);
    if (backgroundColor !== e.target.textContent) {
      setTimesBgChanged(timesBgChanged + 1);
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? 'selected' : ''}
        >
          {color}
        </button>
      ))}
      <div>{timesBgChanged}</div>
    </div>
  );
}

export default ButtonFrenzy;
