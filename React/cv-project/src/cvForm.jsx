import { useState } from 'react';
import { fieldData } from './fieldData';
import UnitForm from './unitForm';

function CvForm({ isEditing }) {
  const fieldSets = fieldData.map((set) => {
    const setKey = Object.keys(set).toString();
    const setKeyCapitalized =
      setKey[0].toUpperCase() + setKey.split('').slice(1).join('');
    // one array of arrays => needs flatten
    const setValues = Object.values(set).flat(1);

    const fieldForms = setValues.map((unit) => {
      return (
        <UnitForm key={unit.for} unit={unit} isEditing={isEditing} />
      );
    });

    return (
      <fieldset key={setKey}>
        <legend>{setKeyCapitalized}</legend>
        {fieldForms}
      </fieldset>
    );
  });
  return <>{fieldSets}</>;
}

export default CvForm;
