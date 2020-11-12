import React, { useState } from "react";

const RoleSelection = ({ setRole, setLoggedIn }) => {
  const roles = ["Finance", "Sales", "HR", "Technology"];

  return (
    <div>
      <RadioSelect
        options={roles}
        setSelected={setRole}
        setLoggedIn={setLoggedIn}
      />
    </div>
  );
};

const RadioSelect = ({ options, setSelected, setLoggedIn }) => {
  const initialState = options.reduce((acc, current) => {
    acc[current] = false;
    return acc;
  }, {});

  const [selectionState, setSelectionState] = useState(initialState);

  const updateSelectionState = option => {
    const prevState = { ...selectionState };

    for (const prop in selectionState) {
      prevState[prop] = option === prop;
    }

    setSelectionState(prevState);
  };

  const handleSelection = event => {
    setLoggedIn(true);
    updateSelectionState(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <form>
      <label>
        Select role:{" "}
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
      </label>
    </form>
  );
};

export default RoleSelection;
