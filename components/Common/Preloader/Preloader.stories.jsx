import React from "react";
import Preloader from "./Preloader";

export default {
  title: "Example/Preloader",
  component: Preloader,
};

const Template = function (args) {
  return (
    <div>
      <Preloader {...args} />
    </div>
  );
};

export const PreloaderExample = Template.bind({});
PreloaderExample.args = {};
