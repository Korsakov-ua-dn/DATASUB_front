import React, { useState } from "react";
import Input from "./Input";

export default {
  title: "Example/Input",
  component: Input,
  argTypes: {
    // onClick: { action: 'clicked' },
  },
};

const Template = function (args) {
  const [value, setValue] = useState("");
  return (
    <>
      <Input
        maxLength={30}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        {...args}
      />
      {/*<Input*/}
      {/*  maxLength={30}*/}
      {/*  value={value}*/}
      {/*  onChange={(e) => {*/}
      {/*    setValue(e.target.value);*/}
      {/*  }}*/}
      {/*  {...args}*/}
      {/*/>*/}
    </>
  );
};

/*eslint-disable */
export const InputBase = Template.bind({});
InputBase.args = {
  disable: false,
  errorMessage: "",
  touched: false,
  placeholder: "Placeholder",
  label: "Label",
  helperText: "Helper text",
  n: 30,
  handleBlur: () => {},
  setFieldValue: () => {},
  validateField: () => {},
};
/* eslint-enable */
