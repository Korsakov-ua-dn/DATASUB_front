import React, { useState } from "react";
import InputWithMask from "./InputWithMask";

export default {
  title: "Example/Input",
  component: InputWithMask,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const Template = function (args) {
  const [value, setValue] = useState("");
  const [o, setO] = useState(0);
  return (
    <InputWithMask
      value={value}
      o={o}
      n={8}
      onChange={(e) => {
        setValue(e.target.value);
        if (e.target.value.length < 5) {
          setO(e.target.value.length);
        } else {
          setO(e.target.value.length - 1);
        }
      }}
      {...args}
    />
  );
};

export const InputWithMaskExample = Template.bind({});
/*eslint-disable */
InputWithMaskExample.args = {
  disable: false,
  errorMessage: "",
  touched: false,
  placeholder: "Name",
  label: "Name",
  helperText: "Name",
  handleBlur: () => {},
  setFieldValue: () => {},
  validateField: () => {},
  mask: "9999-9999",
};
/* eslint-enable */
