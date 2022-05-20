import React from "react";

type IProps = {
  id: string;
  isChecked: boolean;
  label: string;
  name: string;
  onChange: (e: any) => void;
};

const Checkbox = ({
  id,
  isChecked,
  label,
  name,
  onChange,
}: IProps): JSX.Element => {
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        name={name}
        onChange={onChange}
        value={label}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
