import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React from "react";
import { useUID } from "react-uid";

import Checkbox from "../components/Checkbox";
import Dropdown from "../components/Dropdown";
import Radio from "../components/Radio";
import { ColorsData, FabricationData, PulseData, SpeedData } from "../data";

const Form = (): JSX.Element => {
  const [allColors, setAllColors] = React.useState(false);
  const [selected, setSelected] = React.useState<any>({});
  const [date, setDate] = React.useState<Date | null>(
    new Date("1980-01-01T00:00:01"),
  );
  const [radio, setRadioValue] = React.useState();
  const id = useUID();

  const toggleAllSelected = (e: any) => {
    const { checked } = e.target;
    setAllColors(checked);
    ColorsData &&
      setSelected(
        ColorsData.reduce(
          (selected, { id }) => ({
            ...selected,
            [id]: checked,
          }),
          {},
        ),
      );
  };

  const toggleSelected = (id: number) => (e: any) => {
    if (!e.target.checked) {
      setAllColors(false);
    }

    setSelected((selected: any) => ({
      ...selected,
      [id]: !selected[id],
    }));
  };


  const selectedCount = Object.values(selected).filter(Boolean).length;
  const isAllSelected = selectedCount === ColorsData.length;

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const asString = new URLSearchParams(formData).toString();
    alert(asString);
  };

  return (
    <form
      action="http://example.com"
      className="Form"
      id="form"
      method="put"
      onSubmit={handleSubmit}
    >
      <p>What color should the spaceship be?</p>
      <Checkbox
        id={id}
        isChecked={allColors || isAllSelected}
        label="Select all"
        name="allColors"
        onChange={toggleAllSelected}
      />
      {ColorsData.map((color, index) => (
        <Checkbox
          id={index.toString()}
          isChecked={selected[color.id] || allColors}
          label={color.name}
          name="color"
          onChange={toggleSelected(color.id)}
        />
      ))}
      <Dropdown
        id={id}
        label="Are we in a hurry? Select speed:"
        name="speed"
        options={SpeedData}
      />
      <label htmlFor="number">...and quantity (between 50 and 200mph):</label>
      <input type="number" id="quantity" name="quantity" min="50" max="200" />
      <Dropdown
        id={id}
        label="Select build date:"
        name="date"
        options={FabricationData}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Choose a date"
          minDate={new Date("1980-01-01T00:00:01")}
          maxDate={new Date("2020-12-31T00:00:01")}
          inputFormat="dd/MM/yyyy"
          value={date}
          onChange={(newValue: Date | null) => setDate(newValue)}
          renderInput={(params) => <TextField id="date-picker" {...params} />}
        />
      </LocalizationProvider>
      <p>Fancy some pulse laser?</p>
      <Radio
        onChange={(event) => setRadioValue(event.target.value)}
        checked={radio}
        name="pulse"
        options={PulseData}
      />
      <input type="submit" className="Button" />
    </form>
  );
};

export default Form;
