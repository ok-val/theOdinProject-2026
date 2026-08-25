import { useState } from 'react';
import CvForm from './cvForm';
import './App.css';

function App() {
  const [isEditing, setEdit] = useState(true);
  const handleEditToggle = (e) => {
    setEdit(e.target.value === 'true');
  };
  return (
    <>
      <CvForm isEditing={isEditing} />
      <fieldset onChange={handleEditToggle}>
        <legend>Toggle Edit</legend>
        <label>
          {/* BUG: HTML form radio can only pass strings into JS */}
          <input type="radio" name="radio" value="true" /> On
        </label>
        <label>
          <input type="radio" name="radio" value="false" /> Off
        </label>
      </fieldset>
    </>
  );
}

export default App;
