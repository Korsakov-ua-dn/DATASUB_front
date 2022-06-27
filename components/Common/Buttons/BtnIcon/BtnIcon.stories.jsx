import React from "react";
import BtnIcon from "./BtnIcon";

export default {
  title: "Example/BtnIcon",
  component: BtnIcon,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const Template = function (args) {
  return <BtnIcon {...args} />;
};

/*eslint-disable */
export const BtnIconExample = Template.bind({});
BtnIconExample.args = {
  disabled: false,
  add: false,
};
/* eslint-enable */
