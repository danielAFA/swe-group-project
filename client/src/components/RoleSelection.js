import React, { useState } from "react";

const RoleSelection = ({ roles, logIn }) => {
  return (
    <label>
      Select role: <RadioInput options={roles} action={logIn} />
    </label>
  );
};

const RadioInput = ({ options, action }) => {
  const getCheckedOptions = (selectedOption = null) =>
    options.reduce((acc, cur) => ({ ...acc, cur: cur === selectedOption }), {});

  const [checkedList, setCheckedList] = useState(getCheckedOptions());

  const handleSelect = ({ target: { value } }) => {
    action(value);
    setCheckedList(getCheckedOptions(value));
  };

  return (
    <form>
      {options.map((option, i) => (
        <label key={i}>
          {option}
          <input
            type="radio"
            value={option}
            name="option-type"
            checked={checkedList[option]}
            onChange={handleSelect}
          ></input>
        </label>
      ))}
    </form>
  );
};

export default RoleSelection;
