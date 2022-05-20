import React from "react";

type Speed = {
  label: string;
  value: string;
};

type IProps = {
  id: string;
  label: string;
  name: string;
  options: Speed[];
};

const Dropdown = ({
  id,
  label,
  name,
  options,
}: IProps): JSX.Element => {
  return (
    <div className="Dropdown">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
