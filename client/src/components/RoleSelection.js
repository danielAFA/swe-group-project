import React, { useState } from "react";

const RoleSelection = () => {
  const roles = ["Finance", "Sales", "HR", "Technology"];

  return (
    <div>
      <RadioSelection options={roles} />
    </div>
  );
};

const RadioSelection = ({ options }) => {
  const initialState = options.reduce((acc, current) => {
    acc[current] = false;
    return acc;
  }, {});

  const [selectionState, setSelectionState] = useState(initialState);
  const [currentlySelected, setCurrentlySelected] = useState();

  const updateSelectionState = option => {
    const prevState = { ...selectionState };

    for (const prop in selectionState) {
      if (option === prop) {
        prevState[prop] = true;
        setCurrentlySelected(option);
      }
    }
    setSelectionState(prevState);
  };

  const handleSelection = event => {
    updateSelectionState(event.target.value);
  };

  return (
    <form>
      <h3>Select role:</h3>
      {options.map((option, i) => (
        <label key={i}>
          {option}
          <input
            type="radio"
            value={option}
            name="option-type"
            checked={selectionState[option]}
            onChange={handleSelection}
          ></input>
        </label>
      ))}
    </form>
  );
};

export default RoleSelection;
