import React from "react";
import Btn from "./Btn";

export default {
  title: "Example/Buttons",
  component: Btn,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const Template = function (args) {
  const { small, outlined, disabled, header } = args;
  const background =
    small && outlined && !disabled && !header
      ? {
          width: "100%",
          height: "80px",
          backgroundColor: "#EA5924",
          padding: "20px",
        }
      : {};
  return (
    <div style={background}>
      <Btn width={header && 130} {...args} />
    </div>
  );
};

/*eslint-disable */
export const CustomizedButtonExample = Template.bind({});
CustomizedButtonExample.args = {
  disabled: false,
  outlined: false,
  children: "Normal",
  secondary: false,
  small: false,
  header: false,
};
/* eslint-enable */
