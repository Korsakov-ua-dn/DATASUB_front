import React from "react";
import SocialLink from "./SocialLink";
import Facebook from "../../../../images/socialIcons/facebook.svg";
import Twitter from "../../../../images/socialIcons/Twitter.svg";
import Instagram from "../../../../images/socialIcons/Instagram.svg";
import Linkedin from "../../../../images/socialIcons/Linkedin.svg";
import Pinterest from "../../../../images/socialIcons/Pinterest.svg";

export default {
  title: "Example/SocialLink",
  component: SocialLink,
};

const Template = function (args) {
  const margin = {
    width: 300,
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div style={margin}>
      <SocialLink Icon={Facebook} href="#" {...args} />
      <SocialLink Icon={Twitter} href="#" {...args} />
      <SocialLink Icon={Instagram} href="#" {...args} />
      <SocialLink Icon={Linkedin} href="#" {...args} />
      <SocialLink Icon={Pinterest} href="#" {...args} />
    </div>
  );
};

/*eslint-disable */
export const SocialLinkExample = Template.bind({});
SocialLinkExample.args = {};
/* eslint-enable */
