import React from "react";
import ScrollDownBtn from "./ScrollDownBtn";

export default {
  title: "Example/ScrollDownBtn",
  component: ScrollDownBtn,
};

const Template = function (args) {
  return (
    <div>
      <ScrollDownBtn {...args} />
    </div>
  );
};

/*eslint-disable */
export const ScrollDownBtnExample = Template.bind({});
ScrollDownBtnExample.args = {};
/* eslint-enable */
