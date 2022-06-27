import React from "react";
import SocialMediaBtn from "./SocialMediaBtn";

export default {
  title: "Example/SocialMediaBtn",
  component: SocialMediaBtn,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const Template = function (args) {
  return <SocialMediaBtn {...args} />;
};

/*eslint-disable */
export const GoogleExample = Template.bind({});
GoogleExample.args = {
  disabled: false,
  width: 175,
  variant: "Google",
};

export const FacebookExample = Template.bind({});
FacebookExample.args = {
  disabled: false,
  width: 175,
  variant: "Facebook",
};
/* eslint-enable */
