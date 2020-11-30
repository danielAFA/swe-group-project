import React, { useState } from "react";
import styled from "@emotion/styled";

const OptionContainer = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
`;
const Option = styled.span``;

const SelectButton = styled.button`
  text-align: center;
`;

const RoleSelection = ({ roles, logIn }) => (
  <div>
    <label>User role: </label>
    <RadioInput options={roles} action={logIn} />
  </div>
);

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
    <>
      <OptionContainer>
        {options.map((option, i) => (
          <Option key={i}>
            <input
              type="radio"
              value={option}
              name="option-type"
              checked={checkedList[option]}
              onChange={handleSelect}
            ></input>
            <label>{option}</label>
          </Option>
        ))}
      </OptionContainer>
      <SelectButton
        onClick={() => {
          if (current) action(current);
        }}
      >
        log in
      </SelectButton>
    </>
  );
};

export default RoleSelection;
