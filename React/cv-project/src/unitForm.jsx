import { useState } from 'react';
import { Fragment } from 'react';

function UnitForm({ unit, isEditing }) {
  const [text, setText] = useState('');
  const handleLiveValue = (e) => {
    setText(e.target.value);
  };
  const unitDisplayText =
    unit.for.toString()[0].toUpperCase() +
    unit.for.split('').slice(1).join('');

  return (
    <div key={unit.for}>
      <label>{unitDisplayText}</label>
      {': '}
      {isEditing ? (
        <input
          type={unit.type}
          name={unit}
          id={unit}
          value={text}
          onChange={handleLiveValue}
        />
      ) : (
        <p style={{ display: 'inline' }}>{text}</p>
      )}
    </div>
  );
}

export default UnitForm;
