import { useState } from 'react';
import { Link } from 'react-router';
// import HelloWorldDiv from '../styling-components/use-css-modules';
// import StyledButton from '../styling-components/use-styled-components';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
  // return <HelloWorldDiv />;
  // return <StyledButton>Styled button</StyledButton>;
};

export default App;
