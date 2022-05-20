import React from "react";

type IRadio = {
  label: string;
  value: string;
};

type IProps = {
  checked: string | undefined;
  options: IRadio[];
  name: string;
  onChange?: (e: any) => void;
};

const Radio = ({ checked, name, options, onChange }: IProps): JSX.Element => {
  return (
    <>
      {options.map((option, index) => (
        <div id={index.toString()}>
          <input
            id={option.value}
            checked={checked === option.value}
            name={name}
            onChange={onChange}
            type="radio"
            value={option.value}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </>
  );
};

export default Radio;
