import React, { useState } from "react";

const RoleSelection = ({ roles, logIn }) => {
  return (
    <label>
      Select role: <RadioInput options={roles} action={logIn} />
    </label>
  );
};

const RadioInput = ({ options, action }) => {
  const getCheckedOptions = (checked = null) =>
    options.reduce(
      (accumulator, current) => ({
        ...accumulator,
        current: current === checked,
      }),
      {}
    );

  const [checkedList, setCheckedList] = useState(getCheckedOptions());
  const [current, setCurrent] = useState();

  const handleSelect = ({ target: { value } }) => {
    setCurrent(value);
    setCheckedList(getCheckedOptions(value));
  };

  return (
    <div>
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
      <button onClick={() => action(current)}>select</button>
    </div>
  );
};

export default RoleSelection;
